"use client"
import React, { useContext, useEffect } from 'react'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import { AuthContext } from '@/context/authContext'
import { useRouter } from 'next/navigation'
import Loader from '@/components/loader/loader' 

function PagesLayout({children}) {

  const router = useRouter()
  const {userInfo, isLoading} = useContext(AuthContext)

  useEffect(()=>{
    if(!userInfo)
      router.push("/signin")

      
  })

  if(isLoading || !userInfo){
    return (
<Loader />

    )
  }
  return (
    <div>
      <Header />{children}
      <Footer />
    </div>
  )
}

export default PagesLayout
