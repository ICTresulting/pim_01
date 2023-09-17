import useArticles from "../hooks/useArticles";
import { SimpleGrid, Alert, AlertIcon, Skeleton } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ArticleBox from "./ArticleBox";
import ArticleCardContainer from "./ArticleCardContainer";

const ArticleGrid = () => {
  const { articles, error_art, isLoading, counter } = useArticles();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error_art && (
        <Alert>
          <AlertIcon />
          {error_art}
        </Alert>
      )}
      <ArticleBox counter={counter} />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ArticleCardContainer>
              <ArticleCardSkeleton key={skeleton} />{" "}
            </ArticleCardContainer>
          ))}
        {articles.map((article) => (
          <ArticleCardContainer>
            <ArticleCard key={article.id} article={article} />
          </ArticleCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ArticleGrid;
