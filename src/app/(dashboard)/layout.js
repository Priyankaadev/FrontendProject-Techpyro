"use client";
import React, { useContext, useEffect } from "react";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import { AuthContext } from "@/context/authContext";
import {  usePathname, useRouter } from "next/navigation";
import Loader from "@/components/loader/loader";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadcrumbHeader from "@/components/breadcrumb/breadcrumb";

function PagesLayout({ children }) {
  const router = useRouter();
  const path = usePathname();
  const pages = ['contact', 'aboutus']
  const isPageIncluded = pages.some((page) => path.includes(page));

  const { userInfo, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!userInfo && !isLoading) router.push("/signin");
  });
  
  if (isLoading || !userInfo) {
    return <Loader />;
  }
  return (
    <div>
      <Provider store={store}>
        <Header />
     {isPageIncluded ? null : <BreadcrumbHeader /> }
        {children}
        <Footer />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default PagesLayout;
