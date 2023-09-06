import useArticles from "../hooks/useArticles";
import { Text } from "@chakra-ui/react";

const ArticleGrid = () => {
  const { articles, error } = useArticles();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.code} {article.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArticleGrid;
