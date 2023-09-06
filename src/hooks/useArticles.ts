import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Article {
  id: number;
  code: string;
  description: string;
}

interface FetchArticlesResponce {
  count: number;
  articles: Article[];
}
const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchArticlesResponce>("/articles", { signal: controller.signal })
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { articles, error };
};

export default useArticles;
