import React from "react";
import Count from "./Components/Contador/Count";

import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import MyHeader from "./Components/MyHeader/MyHeader";
import Footer from "./Components/Footer/Footer";
import Formulario from "./Components/Formulario/Formulario";
import  FormFormik  from "./Components/Formulario/FormFormik";
import FormFormikDoc from "./Components/Formulario/FormFormikDoc";
import FormFormikDocModal from "./Components/Formulario/FormFormikModal";


function App() {
  return (
   
      <Flex direction="column" >
        
        <MyHeader></MyHeader>
        {/* <Count></Count> */}
        {/* <Formulario/> */}
      {/* <FormFormik/> */}
       {/* <FormFormikDoc/> */}
       <FormFormikDocModal></FormFormikDocModal>
       <Footer></Footer>
        
      </Flex>
   
  );
}

export default App;
