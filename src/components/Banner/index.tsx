import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner(){
    return (
      <Flex
        as="div"
        w="100%"
        h={["163px", "250px", "250px", "368px"]}
        bgImage="/assets/Background.svg"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          as="div"
          w="100vw"
          maxWidth={1440}
          mx="auto"
          h="100%"
          px={["4", "10", "15", "20", "36"]}
          justify={["center", "space-between"]}
          align="center"
        >
          <div>
            <Heading
              color="gray.100"
              fontWeight="500"
              fontSize={["xl", "2l", "2xl", "4xl"]}
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text
              color="gray.300"
              mt="5"
              fontSize={["0.8rem", "xl"]}
              maxWidth={["100%", "100%", "100%", "550px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </div>
          <Image
            w={["300px", "300px", "300px", "430px"]}
            display={["none", "none", "block"]}
            src="/assets/Airplane.svg"
            alt="Avião amarelo voando"
            transform="translateY(62px)"
            ml="8"
          />
        </Flex>
      </Flex>
    );
}