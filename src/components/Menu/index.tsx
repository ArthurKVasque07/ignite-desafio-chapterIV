import { Grid, GridItem } from "@chakra-ui/layout";
import IconMenu from "./IconMenu";

export default function Menu() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <IconMenu icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <IconMenu icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <IconMenu icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <IconMenu icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <IconMenu icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
