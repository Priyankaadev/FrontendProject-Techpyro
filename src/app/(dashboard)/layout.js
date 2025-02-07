"use client";
import React, {  Suspense, useContext, useEffect } from "react";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import { AuthContext } from "@/context/authContext";
import {   usePathname, useRouter } from "next/navigation";
import Loader from "@/components/loader/loader";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadcrumbHeader from "@/components/breadcrumb/breadcrumb";
import { LoaderProvider } from "@/context/loader";



function PagesLayout({ children }) {

  const router = useRouter();
  const path = usePathname();
  
  
  const pages = ['contact', 'aboutus', '', 'profile']
  const isPageIncluded = pages.some((page) => path.split('/')[1] === page);
  console.log(path)
  const { userInfo, isLoading  } = useContext(AuthContext);

  console.log("userInfo", userInfo, isLoading);
 

  useEffect(() => {
    if (!userInfo && !isLoading) {
 
      router.push("/signin")

    }    //isLoading -  and no userInfo
   
  },[]);
  
  if (isLoading || !userInfo) {
    return <Loader />;
  }

  return (
    <Suspense>

      <Provider store={store}>
        <LoaderProvider >
        <Header />
         {isPageIncluded  ? null : <BreadcrumbHeader /> }
         
        {children}
        <Footer />
        </LoaderProvider>
        <ToastContainer />
      </Provider>

    </Suspense>
  );
}

export default PagesLayout;
