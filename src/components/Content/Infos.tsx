import {
  Flex,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  Icon,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Infos() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          50
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            países
          </Text>
        </Heading>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          50
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            países
          </Text>
        </Heading>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          60
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            línguas
          </Text>
        </Heading>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          27
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            cidades + 100
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    cursor="pointer"
                    as={RiInformationLine}
                    ml="1"
                    color="gray.400"
                    w={["10px", "16px"]}
                    h={["10px", "16px"]}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400" p="2">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton p="4" />
                <PopoverBody>Indonésia, Chile, Costa Rica, Hawai</PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Heading>
      </Flex>
    </Flex>
  );
}
