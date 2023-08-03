import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/company-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Box>
        <Image src={logo} maxH="60px" />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
