import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, createContext, useEffect } from "react";
import Cookies from "js-cookie";


export const AuthContext = createContext({});


export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if(Cookies.get('authCookie')){
      localStorage.setItem("authToken", Cookies.get('authCookie'))
    }
    if(localStorage.getItem("authToken")){
    let token = localStorage.getItem("authToken") || Cookies.get('authCookie');
    
  //   if(!token)
  //     window.location.href = `${window.location.host}/signin`
    fetchUserInfo(token);
       console.log("token", token);
   
    }

   
  }, []);
  

  const fetchUserInfo = (token) => {
   setIsLoading(true)
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserInfo(response.data.data);
        setIsLoading(false);
        // console.log("data user", userInfo);
        
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          setUserInfo(null);
          setIsLoading(false);
          localStorage.removeItem("authToken")
          router.push('/auth/signin')
        } else {
          console.error("Error fetching user info:", error);
          setIsLoading(false);
        }
      });
  };

  //FIREBASE GOOGLE LOGIN
  const googleLoginFirebase = async (payload)=>{
    try {
      const response = await axios
      .post(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/auth/firebase/google`, payload)

      if(response.data?.status === "SUCCESS"){
        setUserInfo(response.data.data);
        localStorage.setItem("authToken", response.data.data.token);
      }else if(response.data?.status === 401){
        localStorage.removeItem("authToken");
        router.push('/auth/signin')
      }

    } catch (error) {
      console.error("Error during :", error);
    }
  }

  // Handle Logout
  const handleLogout = async () => {
    try {
      localStorage.removeItem("authToken");
      Cookies.remove("authCookie");
      setUserInfo(null);
      router.push("/auth/signin");
    } catch (error) {
      setUserInfo(null);
      console.error("Error during logout:", error);
    }
  };

  // Handle API Login
  const handleLogin = async ({ payload }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST_URL}/userapp/auth/login`,
        payload
      );
      if (response.data?.status === "SUCCESS") {
        setUserInfo(response.data.data);
        localStorage.setItem("authToken", response.data.data.token);
      } else if(response.data?.status === 401){
        localStorage.removeItem("authToken");
        router.push('/auth/signin')
      }
      else  {
        setUserInfo(null);
      }
    } catch (error) {
      setUserInfo(null);
      console.error("Login error:", error);
    }
  };

  // // Handle google signup
  // const googleSignUp = async({})=>{
  //   try {
     
  //    const token = payload.accessToken
  //    localStorage.setItem("authToken", token)

  //   // const googleLoginToken=   Cookies.get("authCookie")
  //   // localStorage.setItem("authToken", googleLoginToken)
      
  //   } catch (error) {
  //     console.log("error in googleSignUp", error);
      
  //   }
  // }

  // Handle API Signup
  const handleSignup = async ({ payload }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST_URL}/userapp/auth/register`,
        payload
      );
      if (response.data?.status === "SUCCESS") {
        router.push("/auth/signin");
      } else if (response.data?.status === 401){
        localStorage.removeItem("authToken");
        router.push('/auth/signin')
      }
      else {
        console.error("Signup error:", response.data);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        isLoading,
  googleLoginFirebase,
  
        handleLogout,
        handleLogin,
        handleSignup,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;
