import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "../src/App.css";
import ArticleGrid from "./components/ArticleGrid";
import BrickList from "./components/BrickList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav main"',
          lg: '"nav nav" "aside main"',
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <BrickList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <ArticleGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
