import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import DestinyBanner from "../../components/DestinyBanner";
import Content from "../../components/Content";
import Cities from "../../components/Cities";

export default function Destiny() {
  return (
    <Flex direction="column">
      <Header />
      <DestinyBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}
