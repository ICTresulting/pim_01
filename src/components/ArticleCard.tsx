import { Card, CardBody, HStack, Heading, Image, Box } from "@chakra-ui/react";
import { Article } from "../hooks/useArticles";
import ArticleStock from "./ArticleStock";
import { getImage } from "../services/get-image";

interface props {
  article: Article;
}

const ArticleCard = ({ article }: props) => {
  const img = getImage("articles", article.code);

  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Image src={img} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize="xl">{article.code}</Heading>
          <ArticleStock vrd={article.vrd} />
        </HStack>
        <Box padding={1}>
          <Heading fontSize="xs">{article.description} </Heading>
          <HStack>
            <Heading fontSize="sm">{article.gpc}</Heading>
          </HStack>
        </Box>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
