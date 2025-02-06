"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { user } from "@/mocks/user";

const schema = Yup.object().shape({
  full_name: Yup.string().required("Name is required").matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  country: Yup.string().required("Country is required"),
  languagePreference: Yup.string().required("Language is required"),
});

function PopupForm({ handleClick, updated , userData}) {
  const formik = useFormik({
    initialValues: {
      full_name: userData.full_name,
      email: userData.email,
      country: userData.country,
      languagePreference: userData.languagePreference,
    },
    //passing yup schema for validation
    validationSchema: schema,

    onSubmit: async (values) => {
    
      try {  
        console.log("Form Submitted", values);
        
        const updatedData = await user.userUpdate({newData: values, id:userData.id})
        if(updatedData){
            updated(updatedData?.data)
            handleClick();
        }
      } catch (error) {
        console.log("failed to update user", error);
        
      }
      
      
      //   handleSignup({payload: values})
    },
  });

  const handleCancel=()=>{
    handleClick()
  }

  const { errors, touched,values, handleSubmit, handleChange } = formik;

  return (
    <div className="update-details w-[80%] h-[100%] flex flex-col justify-center items-center bg-orange-100 p-[5%] ">
        <p className="font-bold md:text-[30px] text-[25px] mb-5 text-blue-500">Update Details</p>
      <div className="form-items  ">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="username.."
            value={values.full_name}
            className=" border-gray-400 md:p-2 p-1 mb-2 border-2"
            onChange={handleChange}
          />
          <div className="text-[10px] md:text-[15px] text-red-500">
            {errors.full_name && touched.full_name && (
              <span>{errors.full_name}</span>
            )}
          </div>

          <input
            type="email"
            name="email"
            placeholder="email.."
            value={values.email}
            onChange={handleChange}
            className="  border-gray-400 md:p-2 p-1 mb-2 border-2"
          />
          <div className="text-[10px] md:text-[15px] text-red-500">
            {errors.email && touched.email && (
              <span>{errors.email}</span>
            )}
          </div>

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={values.country}
            onChange={handleChange}
            className="border-gray-400 md:p-2 p-1  mb-2 border-2"
          />
           <div className="text-[10px] md:text-[15px] text-red-500">
            {errors.country && touched.country && (
              <span>{errors.country}</span>
            )}
          </div>
          <input
            type="text"
            name="languagePreference"
            placeholder="language Preference"
            onChange={handleChange}
            value={values.languagePreference}
            className=" border-gray-400 md:p-2 p-1 mb-2 border-2"
          />
          <div className="text-[10px] md:text-[15px] text-red-500">
            {errors.languagePreference && touched.languagePreference && (
              <span>{errors.languagePreference}</span>
            )}
          </div>

          <button type="submit" className="bg-[#272761] text-white mt-3 md:py-2 md:px-6 py-1 px-3 flex justify-self-center">
            Submit
          </button>
          
        </form>
        
      </div>
      <button 
      onClick={()=>handleCancel()}
      className="bg-red-400 md:py-2 md:px-6 py-1 px-4 mt-2 flex "
      >
        Cancel
      </button>
    </div>
  );
}

export default PopupForm;
