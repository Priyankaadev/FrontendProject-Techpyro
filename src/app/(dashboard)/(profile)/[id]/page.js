"use client"
import { AuthContext } from "@/context/authContext";
import React, { useContext, useState} from "react";

function page() {

  const {userInfo} = useContext(AuthContext)
  const {openPopup, setOpenPopup} = useState(false)

  const handleEdit =() =>{
    setOpenPopup(!openPopup)
    

  }


  return (
    <div className="w-[100%] h-[100%] flex  flex-col justify-center items-center">
      <div className="w-[80%] h-[100%] bg-orange-100 flex gap-3  py-6  flex-col justify-center items-center">
      <div className="profile-img rounded-full h-[15%] w-[15%] bg-blue-400 ">
        <img src="/profile/user.png" />
      </div>
      <div className="profile-top-details flex  py-2">
      <p className="name">Username : { userInfo.full_name }</p>
     
       </div> 
      <div className="profile-items flex flex-col gap-2 py-2 ">
        <p>E-mail : {userInfo.email}</p>
        <p>Country : {userInfo.country} </p>
        <p>Language Preference : {userInfo.languagePreference}</p>
        <p>Active : {userInfo.isActive? "Active": "Inactive"}</p>
      </div>
      <button className="py-2 px-4 bg-blue-300" onClick={()=>handleEdit()} >Edit</button>
      {openPopup?'' :''}
      </div>
    </div>
  );
}

export default page;
