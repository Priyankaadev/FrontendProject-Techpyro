"use client";

import * as Yup from "yup";
import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {app} from '../../config'
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup } from "firebase/auth";


const schema = Yup.object().shape({
  full_name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required").min(7),
});


function Page() {

  const [isSigningUp, setIsSigningUp] =  useState(false)
  const { handleSignup, googleLoginFirebase} = useContext(AuthContext);
  const router = useRouter();

  const handleGoogleSignUp =async ()=>{
    if(isSigningUp) return;
    setIsSigningUp(true)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)
      const credential  = GoogleAuthProvider.credentialFromResult(result)
      const res = await signInWithCredential(auth, credential)
      const payload = {credentials : {idToken: res._tokenResponse.idToken}}
      const data = await googleLoginFirebase(payload)


    
      console.log("result google", data)
     
    
  }catch (error) {
      console.log("error in google signup", error);
      
    }finally{
      setIsSigningUp(false)
    }

  }

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log("Form Submitted", values);
      await handleSignup({ payload: values }); // Ensure signup completes
    },
  });
  // useEffect(()=>{
  //   if(user){
  //     console.log('userInfo google', user);
      
  //   }else{
  //     console.log("can't fetch user info through google");
      
  //   }
  // }, [])


  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col w-[70%] h-[90%] justify-center bg-gray-100 py-[2%]">
        <div className="heading md:mb-4 mb-2 flex flex-col items-center">
          <p className="lg:text-[40px] md:text-[35px] text-[25px]">Welcome!</p>
          <p className="md:text-[15px] text-[12px]">Sign up to continue</p>
        </div>

        {/* Google Sign-Up Button */}
        <button
              onClick={handleGoogleSignUp}
          className="flex items-center justify-center  self-center max-w-52 bg-white border rounded-lg px-4 py-2 mb-5 cursor-pointer shadow-md hover:shadow-lg"
        >
          <Image
            src="/contact/googleLogo.png"
            height={30}
            width={30}
            alt="Google Logo"
            className="mr-2 "
            
          />
          <span className="text-gray-700 ">Sign up with Google</span>
        </button>

        <div className="text-center mb-4 font-semibold">OR</div>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit}>
          <div className="signup-details flex w-full items-center flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              name="full_name"
              className="border-2 w-[60%] p-1 rounded"
              value={values.full_name}
              onChange={handleChange}
            />
            {errors.full_name && touched.full_name && (
              <p className="text-red-500 text-sm">{errors.full_name}</p>
            )}

            <input
              type="email"
              placeholder="E-mail"
              name="email"
              className="border-2 w-[60%] p-1 rounded"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border-2 w-[60%] p-1 rounded"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            <button
              type="submit"
              className="bg-orange-400 mt-3 p-2 w-[60%] text-white rounded-md hover:bg-orange-500"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-5">
          <p className="md:text-[15px] text-[12px]">
            Already have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => router.push("/auth/signin")}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
