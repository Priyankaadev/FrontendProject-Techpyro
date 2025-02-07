"use client";
import React, { useContext, useEffect } from "react";

import Loader from "@/components/loader/loader";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";


function AuthLayout({ children }) {
  const router = useRouter();
  const { userInfo, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (userInfo ) router.push("/");
  },[]);

  if (isLoading || userInfo ) {
    return <Loader />;
  }

  return (

    <div className="w-full h-full   ">
    {children}
    </div>

    
)
}

export default AuthLayout;
