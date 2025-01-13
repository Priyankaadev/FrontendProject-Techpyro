import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, createContext, useEffect } from 'react';


export const AuthContext = createContext({});



export function AuthProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
 
    const router = useRouter()
    
  
    useEffect(() => {
      let token = localStorage.getItem("authToken")
    //   if(!token)
    //     window.location.href = `${window.location.host}/signin`
      fetchUserInfo(token);
    }, []);
  
    const fetchUserInfo = (token) => {
      axios.get(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/user/me`, { headers:{
        Authorization: `Bearer ${token}`
      } })
        .then(response => {
          setUserInfo(response.data.data);
          setIsLoading(false);
         
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            // Handle unauthorized error
            setUserInfo(null);
            setIsLoading(false);
            // window.location.href = `${window.location.host}/login`
          } else {
            console.error('Error fetching user info:', error);
            setIsLoading(false);
          }
        });
    };

      const handleLogout = async () => {

        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_HOST_URL}/userapp/user/me`, 
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Send token if required
              },
            }
          );
      
          if (response.data?.status === "SUCCESS") {
            setUserInfo(null);
            console.log("remove auth");
            
            localStorage.removeItem("authToken"); // Clear auth token
            router('/signin'); 
          } else {
            console.error("Logout failed:", response.data?.message || "Unknown error");
          }
        } catch (error) {
          console.error("Error during logout:", error);
          setUserInfo(null); 
        }
      };

      //   try {
      //     const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/auth/login`) 
      //     if (response.status === "SUCCESS") {
      //       setUserInfo(null);
      //       localStorage.removeItem("authToken");
      //       router('/signin')
      //     }else{
      //       setUserInfo(null)
      //   }
          
      //   } catch (error) {
      //      console.error('Error logging out:', error);
      //   }
      // }

      //   axios.get('https://api.stru.ai/logout', { withCredentials: true })
      //     .then(() => {
      //       setUserInfo(null);
      //       window.location.href = process.env.NEXT_PUBLIC_LANDING_PAGE_URL;
      //     })
      //     .catch(error => {
      //       console.error('Error logging out:', error);
      //     });
      // };


      const handleLogin = async ({payload}) => {
       try {
      //  console.log("pay",payload);
       
        const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/auth/login`, payload)
        if(response.data?.status=== "SUCCESS"){
            setUserInfo(response.data.data)
            localStorage.setItem("authToken", response.data.data.token)
        }else{
            setUserInfo(null)
        }
        
       } catch (error) {
        setUserInfo(null)
        console.log("err", error);
        
       }
      };

      const handleSignup = async ({payload}) =>{
        try {
          console.log("payload", payload);
          
          const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/auth/register`, payload)
          if(response.data?.status === "SUCCESS"){
           
            router.push('/signin')

          }else{

            console.log("err", response.data);
            
               }
          
        } catch (error) {
         
        console.log("err", error);
        }
      }

  return (
    <AuthContext.Provider
      value={{ userInfo, handleLogout,isLoading,handleLogin,handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;