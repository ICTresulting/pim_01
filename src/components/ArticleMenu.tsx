import {
  MenuItem,
  MenuList,
  Box,
  Button,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePorps from "../hooks/useProps";

export interface prop {
  field: string;
}

const ArticleMenu = ({ field }: prop) => {
  const { data } = usePorps(field);
  data.map((kenmerk) => console.log(kenmerk.kenmerk));

  return (
    <Box padding={3}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {field}
        </MenuButton>
        <MenuList>
          {data.map((kenmerk) => (
            <MenuItem key={kenmerk.kenmerk}>{kenmerk.kenmerk}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ArticleMenu;
