import { Box, Container, Wrap, WrapItem, Avatar } from "@chakra-ui/react";

const ArticleBox = () => {
  const getImage = () => {
    let img = "/src/assets/articles/4000810313822.jpg";
    return img;
  };

  return (
    <>
      <Container maxW="100%">
        <Box bg="#afbde0" height="80px" padding={10}>
          <Wrap>
            <WrapItem>
              <Avatar name="Maurice Conen" src={getImage()} />
            </WrapItem>
          </Wrap>
        </Box>
      </Container>
    </>
  );
};

export default ArticleBox;
