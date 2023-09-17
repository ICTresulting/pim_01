import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Article {
  id: number;
  code: string;
  description: string;
  gpc: string;
  vrd: number;
}

interface FetchArticlesResponce {
  count: number;
  articles: Article[];
}
const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error_art, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchArticlesResponce>("/articles", { signal: controller.signal })
      .then((res) => {
        setArticles(res.data.articles);
        setCounter(res.data.count);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { articles, error_art, isLoading, counter };
};

export default useArticles;
