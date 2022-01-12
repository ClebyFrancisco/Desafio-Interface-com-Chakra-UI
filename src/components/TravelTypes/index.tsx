import { Flex, Grid, GridItem} from "@chakra-ui/react";
import { Type } from "./Type";


export function TravelTypes(){
    return (
      <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxWidth="1440"
      gap={[1,5]}
      >
        <GridItem>
          <Type image="/assets/cocktail.svg" text="vida noturna" />
        </GridItem>
        <GridItem>
          <Type image="/assets/surf.svg" text="praia" />
        </GridItem>
        <GridItem>
          <Type image="/assets/building.svg" text="moderno" />
        </GridItem>
        <GridItem>
          <Type image="/assets/museum.svg" text="clássico" />
        </GridItem>
        <GridItem colSpan={[2,2,2,1]}>
          <Type image="/assets/earth.svg" text="e mais..." />
        </GridItem>

      </Grid>
    );
}