import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box as="footer" textAlign="center" p="20px 0" bg="light.blueGrey">
      <Text color='#0101FE' fontWeight='bold'>Codificado por Virili Omar Dario</Text>
      <Text color="#fff" size="1.2em" p="10px">
        Argentina Programa Trabajo Practico Unidad 6
      </Text>
    </Box>
  );
};

export default Footer;
