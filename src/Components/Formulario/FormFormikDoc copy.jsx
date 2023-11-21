import { Button } from '@chakra-ui/react';
import { FieldArray, Formik } from 'formik'
import React from 'react'


const initialValues={
    nombre:'',
    edad:'',
    telefono:[],
}

const FormFormikDoc = () => {

    const handleSubmit=(values)=>{
        console.log(values);
    };
    const telefonosItems=(arrayHelper,values,handleChange)=>{
       const {push, remove} = arrayHelper;
        return (
        <div>
            <h3>Telefonos</h3>
            {
            values.telefono.map((_,index)=>(
                <input
                    placeholder={`telefono${index+1}`}
                    value={values.telefono[index]}
                    name={`telefonos.${index}`}
                    onChange={handleChange}
                />
            ))
        }
        <div >
            <button type='button' onClick={()=>push('')}>Agregar</button>
        </div>
        </div>
    )}
  return (
    <Formik 
        initialValues={initialValues} onSubmit={handleSubmit}>
        {({values,handleChange,handleSubmit})=>(
        <form onSubmit={handleSubmit}>
            <input
                name='nombre'
                type='text'
                value={values.nombre}
                onChange={handleChange}
            />
             <input
                name='edad'
                type='number'
                value={values.edad}
                onChange={handleChange}
            />
            <FieldArray
                name='telefono'
                render={(arrayHelper)=>telefonosItems(arrayHelper,values,handleChange)}
            />
            <Button type='submit'>Guardar</Button>
        </form>)}
    </Formik>
  )
}

export default FormFormikDoc