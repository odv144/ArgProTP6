import {
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
import { FieldArray, Formik } from "formik";
import React from "react";

const initialValues = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  password: "",
  confirPassword: "",
};

const FormFormik = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Flex >
      <Container bg="#aaa">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange,handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input
                placeholder="Ingrese el nombre"
                type='text'
                value={values.nombre}
                onChange={handleChange}
              
                />
              </FormControl>
              <FormControl >
                <FormLabel>Apellido</FormLabel>
                <Input
                placeholder="Ingrese el apellido"
                type='text'
                value={values.apellido}
                onChange={handleChange}
              
                />
              </FormControl>  
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                placeholder="Ingrese el Email"
                type='text'
                value={values.email}
                onChange={handleChange}
              
                />
              </FormControl>

              <FormControl>
                <FormLabel>Telefono</FormLabel>
                <Input
                placeholder="Ingrese el telefono"
                type='text'
                value={values.telefono}
                onChange={handleChange}
              
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                placeholder="Ingrese password"
                type='text'
                value={values.password}
                onChange={handleChange}
              
                />
              </FormControl>

              <FormControl>
                <FormLabel>Confirmación</FormLabel>
                <Input
                placeholder="Confirmar password"
                type='text'
                value={values.confirPassword}
                onChange={handleChange}
              
                />
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <Text as="label">Nombre</Text>
                  <Stack>
                    <Input
                      type="text"
                      placeholder="Ingrese nombre"
                      value={values.nombre}
                      onChange={handleChange}
                    ></Input>
               
                  </Stack>
                </InputGroup>
                <InputGroup>
                  <Text as="label">Apellido</Text>
                  <Input 
                  type="text"
                  onChange={handleChange}
                  value={values.apellido}
                  ></Input>
                </InputGroup>

                <InputGroup>
                  <Text as="label">Email</Text>
                  <Stack>
                    <Input
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Ingrese email"
                    ></Input>
                  
                  </Stack>
                </InputGroup>

                <InputGroup>
                  <Text as="label">Teléfono</Text>
                  <Input type="number"></Input>
                </InputGroup>
                <Button type="submit">Enviar</Button>
              </FormControl>
            </form>
          )}
        </Formik>
       
      </Container>
    </Flex>
  );
};

export default FormFormik;
