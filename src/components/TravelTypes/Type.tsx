import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypeTravelProps {
    image: string;
    text: string;
}

export function Type({image, text}:TypeTravelProps){

    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    });

    return (
      <Flex
        direction={["row", "column"]}
        w="158px"
        h="145px"
        align="center"
        justify="center"
      >
          {isMobile ? <Image src={image} w="85px" h="85px" mb="6" /> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
          <Text color="gray.700" fontSize={["md", "xl", "2xl" ]} fontWeight="600">
            {text}
          </Text>
        
      </Flex>
    );
}