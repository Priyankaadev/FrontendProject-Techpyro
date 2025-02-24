"use client";
import React, {  useContext, useEffect } from "react";
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
  
  
  const pages = ['contact', 'aboutus', 'profile']
  const pathLayout = path.includes('/auth')
  const isPageIncluded = pages.some((page) => path.split('/')[1] === page);
  console.log('isincluded',isPageIncluded)
  const { userInfo, isLoading  } = useContext(AuthContext);

  console.log("userInfo", userInfo, isLoading);
 

//   useEffect(() => {
//     if (!userInfo && !isLoading) {
//       router.push("/auth/signin")

//     } 
   
   
//   },[]);
  if(userInfo ){
    router.push("/")
    console.log(userInfo, "userInfo");
    
}else{
    console.log('redirect failed');
}
  
//   if (isLoading || !userInfo) {
//     return <Loader />;
//   }
  
  return (
    <>

      <Provider store={store}>
        <LoaderProvider >
      {!pathLayout && <Header />}
         { isPageIncluded && <BreadcrumbHeader /> }
         
        {children}
    { !pathLayout &&   <Footer />}
        </LoaderProvider>
        <ToastContainer />
      </Provider>

    </>
  );
}

export default PagesLayout;
