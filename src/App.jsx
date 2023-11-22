import React from "react";
import Count from "./Components/Contador/Count";

import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import MyHeader from "./Components/MyHeader/MyHeader";
import Footer from "./Components/Footer/Footer";

import FormFormikDocModal from "./Components/Formulario/FormFormikModal";


function App() {
  return (
   
      <Flex direction="column" minW={{base:'340px'}}  >
        
        <MyHeader></MyHeader>
       
       <FormFormikDocModal></FormFormikDocModal>
       <Footer></Footer>
        
      </Flex>
   
  );
}

export default App;
