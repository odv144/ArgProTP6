import { Box, Button, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";

const Count = () => {
  const [animar, setAnimar] = useState(false);
  const [animarMenos, setAnimarMenos] = useState(false);
  const [ancho, setAncho] = useState(80);
  const [count, setCount] = useState(0);
  const [colorCon, setColorCon] = useState("#afafaf");
  const [colorTexto, setColorTexto] = useState("#fafafa");

  function colorAleatorio() {
    const letrasHex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function sumar() {
    setCount(count + 1);
    setAncho(ancho + 5);
    setColorCon(colorAleatorio());
    setColorTexto(colorAleatorio());
    setAnimar(true);
    setTimeout(()=>{
      setAnimar(false)
    },1100)
    
    
  }
  function restar() {
    setCount(count - 1);
    setAncho(ancho - 5);
    colorAleatorio();
    setAnimarMenos(true);
    setTimeout(()=>{
      setAnimarMenos(false)
    },1100)
  }
  function reiniciar() {
    setCount(0);
    setAncho(80);
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      overflow="hidden"
      bg="celestito"
      p="100px 0"
      minH="80vh"
    >
      <Box
        m="15px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={ancho / 2}
        h={count == 0 ? "80px" : ancho}
        w={count == 0 ? "80px" : ancho}
        // bgGradient='linear(to-r, green.200, pink.500)'
        //  bg='light.blueGrey'
        bg={colorCon}
        borderRadius={ancho - 80}
      >
        <Text color={colorTexto}> {count} </Text>
      </Box>

      <Flex directio="row" justifyContent="space-between">
        <Button
          onClick={restar}
          isDisabled={count < 1 ? "disable" : ""}
          variant="rojo"
          leftIcon={<ArrowDownIcon />}
        >
          Restar
        </Button>
        {animarMenos &&
        <motion.h1
        initial={{ y: -100, x: 0, color: "#55fefe" }}
        transition={{ duration: 1 }}
        animate={{ y: -150, x: -100, color: colorAleatorio(), scale: 5, textShadow:'1px 1px #000' }}
        >
          -1
        </motion.h1>
        }
        <Button onClick={reiniciar} isDisabled={count == 0 ? "disabled" : ""}>
          Reiniciar
        </Button>
        <Button
          onClick={sumar}
          isDisabled={count > 99 ? "disable" : ""}
          variant="outline"
          rightIcon={<ArrowUpIcon />}
        >
          Sumar
        </Button>
        {animar &&
        <motion.h1
        initial={{ y: -100, x: -100, color: "#55fefe" }}
        transition={{ duration: 1 }}
        animate={{ y: -150, x: 0, color: colorAleatorio(), scale: 5,textShadow:'1px 1px #000' }}
        >
          +1
        </motion.h1>
        }
      </Flex>
    </Flex>
  );
};

export default Count;
