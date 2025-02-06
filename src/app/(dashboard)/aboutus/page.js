
import React from 'react'
import Section1 from '@/content/aboutus/section1'
import Section2 from '@/content/aboutus/section2'
import Section3 from '@/content/aboutus/section3'


function aboutpage() {
 
  // const queryString = QueryString.stringify({
  //   where: {
  //     slug : {
  //       equals : "about-us"
  //     }
  //   },
  //   limit: 1,
  //   depth: 2
  // })
  // const fetchData = async ()=>{
  //   try {
  //     const api = await fetch(`https://igauge.intellicent.in/api/pages?${queryString}`, {method:"GET", cache: "no-store"})
  //     const response = await api.json()
  //     console.log("response",response);
  //   } catch (error) {
  //     console.log(error)
  //   }
    
  // }

  // useEffect(()=>{
  //    fetchData()
  // },[])


  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />

    </>
  )
}

export default aboutpage
