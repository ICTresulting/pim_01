import { Badge } from "@chakra-ui/react";

interface props {
  vrd: number;
}

const ArticleStock = ({ vrd }: props) => {
  let color =
    vrd > 500 ? "green" : vrd > 100 ? "orange" : vrd < 25 ? "red" : "";
  return (
    <Badge colorScheme={color} fontSize="20px" padding={2} borderRadius={4}>
      {vrd}
    </Badge>
  );
};

export default ArticleStock;
