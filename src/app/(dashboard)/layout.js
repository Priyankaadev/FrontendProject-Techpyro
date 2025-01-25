"use client";
import React, { useContext, useEffect } from "react";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/loader";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PagesLayout({ children }) {
  const router = useRouter();
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
        {children}
        <Footer />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default PagesLayout;
