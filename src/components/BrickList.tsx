import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useBricks, { Brick } from "../hooks/useBricks";

interface Props {
  onSelectBrick: (brick: Brick) => void;
  selectedBrick: Brick | null;
}

const BrickList = ({ selectedBrick, onSelectBrick }: Props) => {
  const { data, isLoading, error } = useBricks();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((brick) => (
        <ListItem key={brick.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src="/src/assets/bricks/knop_trans_kebo.png"
            />
            <Button
              onClick={() => onSelectBrick(brick)}
              fontSize="large"
              variant="link"
              fontWeight={brick.id === selectedBrick?.id ? "bold" : "normal"}
              textColor={brick.id === selectedBrick?.id ? "#7091c8" : "white"}
            >
              {brick.description}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default BrickList;
