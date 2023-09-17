import useArticles from "../hooks/useArticles";
import { SimpleGrid, Alert, AlertIcon } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ArticleCardContainer from "./ArticleCardContainer";
import { Brick } from "../hooks/useBricks";

interface Props {
  selectedBrick: Brick | null;
}

const ArticleGrid = ({ selectedBrick }: Props) => {
  console.log("selected brick : ", selectedBrick);
  const { data, error, isLoading } = useArticles(selectedBrick);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error && (
        <Alert>
          <AlertIcon />
          {error}
        </Alert>
      )}
      {/* <ArticleBox counter={counter} /> */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={3}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ArticleCardContainer key={skeleton}>
              <ArticleCardSkeleton />{" "}
            </ArticleCardContainer>
          ))}
        {data.map((article) => (
          <ArticleCardContainer key={article.id}>
            <ArticleCard article={article} />
          </ArticleCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ArticleGrid;
