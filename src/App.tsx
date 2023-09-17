import { HStack, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "../src/App.css";
import ArticleGrid from "./components/ArticleGrid";
import BrickList from "./components/BrickList";
import { useState } from "react";
import { Brick } from "./hooks/useBricks";
import ArticleMenu from "./components/ArticleMenu";

function App() {
  const [selectedBrick, setSelectedBrick] = useState<Brick | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"',
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        {" "}
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={3}>
            <BrickList
              selectedBrick={selectedBrick}
              onSelectBrick={(brick) => setSelectedBrick(brick)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack>
            ""
            <ArticleMenu field="Kleur" />
            <ArticleMenu field="Merk" />
            <ArticleMenu field="Leverancier" />
          </HStack>
          <ArticleGrid selectedBrick={selectedBrick} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
