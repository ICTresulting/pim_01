import useArticles from "../hooks/useArticles";
import { SimpleGrid, Alert, AlertIcon, Skeleton } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import ArticleCardSkeleton from "./ArticleCardSkeleton";

const ArticleGrid = () => {
  const { articles, error_art, isLoading } = useArticles();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error_art && (
        <Alert>
          <AlertIcon />
          {error_art}
        </Alert>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <ArticleCardSkeleton key={skeleton} />)}
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ArticleGrid;
