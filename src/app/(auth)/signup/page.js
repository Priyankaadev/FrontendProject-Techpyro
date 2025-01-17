"use client"

import * as Yup from "yup";
import React, { useContext } from 'react'
import { useFormik } from "formik";

import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";


const schema = Yup.object().shape({
  full_name: Yup.string().required("Name is required").matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required").min(7),
});


function page() {

  const router = useRouter()


  const {handleSignup} = useContext(AuthContext)

  
  const formik = useFormik(
  {
    initialValues : {
      full_name:"",
      email:"",
      password:"",
    },
    //passing yup schema for validation   
    validationSchema: schema,

    onSubmit: (values) => {
      console.log("Form Submitted", values);
      handleSignup({payload: values})
    },
  })
  const {errors, touched, values, handleChange, handleSubmit} = formik

  console.log(errors, touched)

  return (
    <div className=' w-full h-full flex justify-center items-center'>
     <div className='flex flex-col w-[70%] h-[90%] justify-center bg-gray-100 py-[2%]'>
        <div className='heading md:mb-4 mb-2 flex flex-col items-center '>
           <p className='lg:text-[40px] md:text-[35px] text-[25px]'>Welcome! </p>
           <p className='md:text-[15px] text-[12px]'>Sign up to continue</p>
        </div>
       <form onSubmit={handleSubmit}>

        <div className='signup-details flex w-full items-center flex-col   gap-2'>
        <input type="text" placeholder="Name" name="full_name" className="border-2 w-[60%]  p-1 " value={values.full_name} onChange={handleChange} />
       <div className="text-[10px] md:text-[15px] text-red-500"> {errors.full_name && touched.full_name && <span>{errors.full_name}</span>}</div>
   
        <input type="email" placeholder="E-mail" className="border-2 w-[60%]  p-1" name="email" value={values.email} onChange={handleChange}/>
        <div className="text-[10px] text-red-500 md:text-[15px]">  {errors.email  && <span>{errors.email}</span>}</div>
          
        <input type="password" placeholder="Password" className="border-2 w-[60%]  p-1" name="password" value={values.password} onChange={handleChange}/>
        <div className="text-[10px] text-red-500 md:text-[15px]"> {errors.password && touched.password && <span>{errors.password}</span>}</div>
        
        <button type="submit" className=" bg-orange-400 md:mt-3 mt-1  p-1 w-[60%] text-white">Submit</button>
        </div>
       
    </form>
    <div className="flex justify-center mt-5">
      <p className="md:text-[15px] text-[12px]">
        Already have an account?  <span className="text-blue-400" onClick={()=> router.push('/signin')}>Sign In</span>
      </p>
      </div>
    </div>
     </div>
   
  )
}

export default page
