import { Flex, Heading } from "@chakra-ui/react";
import Header from "./../components/Header/index";
import Slider from "./../components/Slider/index";
import Menu from "./../components/Menu/index";
import Banner from "./../components/Banner/index";
import Separador from "./../components/Separador";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Menu />
      <Separador />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}
