import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Tema} from './assets/Tema.jsx'

import { Box, Button, ChakraProvider, Container } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ChakraProvider theme={Tema} >
    <Container maxW='100vw'm='0' p='0' >
      <App/>
    </Container>
    
    </ChakraProvider>
  </React.StrictMode>,
)
