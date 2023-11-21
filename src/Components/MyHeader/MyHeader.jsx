import { Button, Flex, Link } from '@chakra-ui/react'

import React from 'react'

const MyHeader = () => {
  return (
    <Flex justifyContent='center' p='15px'background='light.blueGrey'>
   
        <Button variant='cta'>
          <Link
                 
          >Inicio</Link>
        </Button>
       
        <Button variant='cta'>
          <Link>Contador</Link>
        </Button>
       
        <Button variant='cta'>
          <Link>Contacto</Link>
        </Button>
       
       
       
    </Flex>
  )
}

export default MyHeader