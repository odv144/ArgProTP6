import { Formik, useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'

const schema= Yup.object().shape({
    email:Yup.string().email('Email no valido').required(),
    // password:Yup.string().min(3)
})

const FormFormik = () => {
   const {handleSubmit,handleChange,handleReset,errors,values}=useFormik({
    initialValues:{
       email:''
    },
    onSubmit:(values)=>{
        console.log(values);
    },
    validationSchema:schema,
})
    return(
    <form 
        onSubmit={handleSubmit}
        onReset={handleReset}
    >
        <input 
        type="email"
        name='email'
        onChange={handleChange}
        value={values.email}
        />
        {errors.email && <span>Email invalido</span>}
        <button type='submit'>Enviar</button>
        <button type='reset'>Limpiar</button>
    </form>
   );
};
export default FormFormik;


