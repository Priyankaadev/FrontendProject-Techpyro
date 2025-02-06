"use client";

import * as Yup from "yup";
import React, { useContext } from "react";
import { useFormik } from "formik";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup } from "firebase/auth";
import { app } from "@/app/config";

const schema = Yup.object().shape({
  username: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is incorrect").min(7),
});

function Page() {
  const router = useRouter();
  const { handleLogin, googleLoginFirebase } = useContext(AuthContext);
  
  const handleGoogleSignIn =async ()=>{
   
      const auth = getAuth(app)
      const provider = new GoogleAuthProvider()
  
      try {
        const result = await signInWithPopup(auth, provider)
        const credential  = GoogleAuthProvider.credentialFromResult(result)
        const res = await signInWithCredential(auth, credential)
        const payload = {credentials : {idToken: res._tokenResponse.idToken}}
        const data = await googleLoginFirebase(payload)
      
        // console.log("result google", data)
       
    }catch (error) {
        console.log("error in google signin", error);
        
      }
    }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log("Form Submitted", values);
      await handleLogin({ payload: values }); // Await API response
    },
  });



  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col w-[70%] h-[90%] justify-center bg-gray-100 py-[2%]">
        <div className="heading mb-2 md:mb-4 flex flex-col items-center">
          <p className="lg:text-[40px] md:text-[35px] text-[25px]">Welcome!</p>
          <p className="md:text-[18px] text-[15px]">Sign in to continue</p>
        </div>

        {/* Google Sign-In Button */}
        <button
        onClick={handleGoogleSignIn}
          className="flex justify-center items-center self-center max-w-52 bg-white border rounded-lg px-4 py-2 mb-5 cursor-pointer shadow-md hover:shadow-lg"
        >
          <Image
            src="/contact/googleLogo.png"
            height={30}
            width={30}
            alt="Google Logo"
            className="mr-2"
          />
          <span className="text-gray-700">Sign in with Google</span>
        </button>

        <div className="text-center mb-4 font-semibold">Or</div>

        {/* Sign-In Form */}
        <form onSubmit={handleSubmit}>
          <div className="signin-details flex w-full items-center flex-col gap-2">
            <input
              type="email"
              placeholder="Username"
              className="border-2 w-[60%] p-1 rounded"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && touched.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              className="border-2 w-[60%] p-1 rounded"
              name="password"
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
            Don&apos;t have an account?
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
