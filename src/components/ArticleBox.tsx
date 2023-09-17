import { Box, Container, Wrap, WrapItem, Badge } from "@chakra-ui/react";

interface props {
  counter: number;
}

const ArticleBox = ({ counter }: props) => {
  return (
    <>
      <Container maxW="100%">
        <Box
          justifyContent={"space-between"}
          bg="#afbde0"
          height="80px"
          padding={6}
          borderRadius={6}
        >
          <Badge bgColor="#0059a2" borderRadius={6} fontSize="24px">
            {counter}
          </Badge>
        </Box>
      </Container>
    </>
  );
};

export default ArticleBox;
