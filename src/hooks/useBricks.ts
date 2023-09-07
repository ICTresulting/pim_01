import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Brick {
  id: number;
  code: string;
  description: string;
}

interface FetchBricksResponce {
  count: number;
  bricks: Brick[];
}
const useBricks = () => {
  const [bricks, setBricks] = useState<Brick[]>([]);
  const [error_brick, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchBricksResponce>("/bricks", { signal: controller.signal })
      .then((res) => {
        setBricks(res.data.bricks);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { bricks, error_brick };
};

export default useBricks;
