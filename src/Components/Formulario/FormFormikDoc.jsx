import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Image,
  Input,
  InputRightElement,
  
} from "@chakra-ui/react";
import imgFormulario from "/img/formulario3.jpg?url";
import { ViewIcon } from "@chakra-ui/icons";

const schemaVal = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Demasiado largo")
    .required("Requirido"),
  apellido: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Demasiado largo")
    .required("Requirido"),
  telefono: Yup.number()
    .integer()
    .required()
    .positive("Solo números positivos"),
  email: Yup.string().required().email("Correo invalido"),
  password: Yup.string().min(3).required("La contraseña es requerida"),
  confirmarPassword: Yup.string()
    .min(3)
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Confirme la contraseña"),
});

const FormFormikDoc = () => {
  const [ver,setVer]=useState('password')
  function verClave(event){
    event.preventDefault();
    (ver=='password')? setVer('text'):setVer('password')
    
  }
  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        password: "",
        confirmarPassword: "",
      }}
      validationSchema={schemaVal}
      
      onSubmit={(values,{resetForm}) => {
        // same shape as initial values
        console.log(values);
        resetForm();
        
      
        
    
      }}
    >
      {({ errors, touched, values}) => (
        
        <Flex justify="space-around">
          <Box w="40vw" m="5px 10px" textAlign="center">
            <Form>
              <Field name="nombre">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.nombre && form.touched.nombre}
                  >
                    <FormLabel htmlFor="nombre">Nombre</FormLabel>
                    <Input
                      {...field}
                      id="nombre"
                      placeholder="Ingrese Nombre"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="apellido">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.apellido && form.touched.apellido}
                  >
                    <FormLabel htmlFor="apellido">Apellido</FormLabel>
                    <Input
                      {...field}
                      id="apellido"
                      placeholder="Ingrese Apellido"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.apellido}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="telefono">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.telefono && form.touched.telefono}
                  >
                    <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                    <Input
                      {...field}
                      id="telefono"
                      placeholder="telefono"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="email"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">password</FormLabel>
                    <Input
                      {...field}
                      id="password"
                      type={ver}
                      placeholder="password"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <InputRightElement>
                      <ViewIcon w='60px'
                    boxSize='20px' mr='2px' color='grey'
                    />
                    </InputRightElement>
                     {/* <Button onClick={verClave}>{ver=='password'?'Mostar':'Ocultar'}</Button> */}
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="confirmarPassword">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.confirmarPassword &&
                      form.touched.confirmarPassword
                    }
                  >
                    <FormLabel htmlFor="confirmarPassword">
                      Confirmar Password
                    </FormLabel>
                    <Input
                      {...field}
                      id="confirmarPassword"
                      type='password'
                      placeholder="confirmar el Password"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>
                      {form.errors.confirmarPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                type="submit"
                p="2px 30px"
                m="10px 10px"
              >
                Enviar
              </Button>
              <Button type="reset" p="2px 30px" m="10px 10px">
                Limpiar
              </Button>
            </Form>
          </Box>
          <Box w="40vw" pt="10px" opacity="0.4">
            <Image src={imgFormulario} borderRadius="25%" />
          </Box>
        </Flex>
      )}
      
    </Formik>
  );
};

export default FormFormikDoc;
