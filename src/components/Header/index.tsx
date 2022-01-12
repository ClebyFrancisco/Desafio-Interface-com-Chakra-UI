import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo.svg"


export function Header(){
    return (
      <Flex
        as="header"
        w="100%"
        maxWidth={1440}
        mx="auto"
        h={["50px", "100px"]}
        justify="center"
        align="center"
      >
        <Box>
          <Image w={["81px","184px"]} src="/assets/Logo.svg" alt="Logo" />
        </Box>
      </Flex>
    );
}