import {
    Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Formulario = () => {
  // logica para nombre, validar
  const [nombreValidado, setNombreValidado] = useState(false);
  const [nombre, setNombre] = useState("");
  function ingreseNombre(e) {
    setNombre(e.target.value);
  }
  //metodo del blur
  function validarNombre() {
    const estado = nombre.length < 3 ? true : false;
    setNombreValidado(estado);
  }
  const [emailValidado, setEmailValidado] = useState(false);
  const [email, setEmail] = useState("");

  function ingreseEmail(e) {
    setEmail(e.target.value);
    // setEmail(e.target.email)
  }

  function validarEmail() {
    const estado = email.length < 3 ? true:false;
    setEmailValidado(estado);
  }

  const [mostrar,setMostrar]=useState(false)
  function enviarDatos(event) {
     event.preventDefault();
     if(!nombreValidado && !emailValidado&&nombre!=''&&email!=''){
         setMostrar(true)
     }else{
        setMostrar(false)
     }
  }
  const [ver,setVer]=useState('password')
  function verClave(event){
    event.preventDefault();
    (ver=='password')? setVer('text'):setVer('password')
    
  }

  return (
    <Flex>
      <Container bg="#aaa">
        <form>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
          </FormControl>

          <FormControl>
            <InputGroup>
              <Text as="label">Nombre</Text>
              <Stack>
                <Input
                  type="text"
                  placeholder="Ingrese nombre"
                  value={nombre}
                  onChange={ingreseNombre}
                  onBlur={validarNombre}
                ></Input>
                {nombreValidado && (
                  <Text as="span" color="red">
                    Error en la longitud del Nombre
                  </Text>
                )}
              </Stack>
            </InputGroup>
            <InputGroup>
              <Text as="label">Apellido</Text>
              <Input type="text"></Input>
            </InputGroup>

            <InputGroup>
              <Text as="label">Email</Text>
              <Stack>
                <Input
                  type="email"
                  value={email}
                  onChange={ingreseEmail}
                  onBlur={validarEmail}
                  placeholder="Ingrese email"
                ></Input>
                {emailValidado && (
                  <Text as="span" color="red">
                    Correo no valido
                  </Text>
                )}
              </Stack>
            </InputGroup>

            <InputGroup>
              <Text as="label">Teléfono</Text>
              <Input type="number"></Input>
            </InputGroup>
            <InputGroup>
              <Text as="label">Password</Text>
              <Input type={ver}/>
              <Button onClick={verClave}>{!mostrar?'Mostar':'Ocultar'}</Button>
            </InputGroup>
            <InputGroup>
              <Text as="label">Confirmar Password</Text>
              <Input type={ver}></Input>
            </InputGroup>
            <Button type="submit" onClick={enviarDatos}>
              Enviar
            </Button>
          </FormControl>
        </form>
        {mostrar &&
        <Box>
            <Text>{nombre}</Text>
            <Text>{email}</Text>
            <Text>Otro datos</Text>
        </Box>
        }
      </Container>
    </Flex>
  );
};

export default Formulario;
