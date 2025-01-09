"use client"

import * as Yup from "yup";
import React from 'react'
import { useFormik } from "formik";
import Link from "next/link";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required").matches(/^[A-Za-z\s]+$/, "name can only contain letters and spaces"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is incorrect").min(7),
});


function page() {

  const formik = useFormik(
  {
    initialValues : {
      name:"",
      email:"",
      password:"",
    },
    //passing yup schema for validation   
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  })

  const {errors, touched, values, handleChange, handleSubmit} = formik

  return (
    <div className=' w-full h-full flex justify-center items-center  border-t'>
     <div className='flex flex-col justify-center  h-[90%] w-[70%]  bg-gray-100 py-[2%]'>
        <div className='heading mb-2 md:mb-4 flex flex-col items-center '>
           <p className='lg:text-[40px] md:text-[35px] text-[25px]'>Welcome! </p>
           <p className='md:text-[15px] text-[12px] '>Sign in to continue</p>
        </div>
       <form onSubmit={handleSubmit}>

        <div className='signin-details flex w-full items-center flex-col  gap-2'>
       
   
        <input type="email" placeholder="E-mail" className="border-2 w-[60%] p-1" name="email" value={values.email} onChange={handleChange}/>
        <div className="text-[10px] md:text-[15px] text-red-500">  {errors.email && touched.email && <span>{errors.email}</span>}</div>
          
        <input type="password" placeholder="Password" className="border-2 w-[60%] p-1" name="password" value={values.password} onChange={handleChange}/>
        <div className="text-[10px] md:text-[15px] text-red-500">  {errors.password && touched.password && <span>{errors.password}</span>}</div>
        
        <button type="submit" className=" bg-orange-400 md:mt-3 mt-1  p-1 w-[60%] text-white">Submit</button>
        </div>
       
    </form>
    <div className="flex justify-center mt-5">
      <p className="md:text-[15px] text-[12px]">
        Don't have an account? <Link href="/auth/signup"><span className="text-blue-400">Sign Up</span></Link>
      </p>
      </div>

    </div>
     </div>
   
  )
}

export default page
