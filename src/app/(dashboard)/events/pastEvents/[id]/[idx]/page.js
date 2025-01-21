'use client'
import React, { useState, useEffect } from 'react'
import { MdOutlineRateReview } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbWorldSearch } from "react-icons/tb";
import { useParams } from 'next/navigation';
import { event } from '@/mocks/event';
import Link from 'next/link';



function page() {
  const params = useParams()

  const [exhibitorDetails, setExhibitorDetails] = useState([])
  const [exhibitorDocs, setExhibitorDocs] = useState([])
  const [docsOpen, setDocsOpen] = useState(false)

  const handleDocumentClick=()=>{
    setDocsOpen(!docsOpen)
  }
   
  useEffect(()=>{
      const fetchExhibitorDetails = async () =>{
        try {
          const response = await event.Exhibitor({query:{"_id" : `${params.idx}`}, sort:{name:1}, populate:"eventId", page:1, limit:50})
          const list = response?.data?.data[0] || []
          if(response){
            setExhibitorDetails(list)
       
            
          }else{
            console.log("error in storing");
            
          }
        } catch (error) {
          console.log("err in fetching in exhibitor", error);
        }
      }

      const fetchExhibitorDocs = async ()=>{
        try {
          const response = await event.Documents({query:{"exhibitorId":`${params.idx}`}, sort:{name:1}, populate:"eventId", page:1, limit:50 })
          const list = response?.data?.data
          if(response){
            setExhibitorDocs(list)
          }else{
            console.log('err in storing docs' );
            
          }
        } catch (error) {
          console.log("err in fetching documents", error);
          
        }
      }
  
      fetchExhibitorDetails()
      fetchExhibitorDocs()
  
    })
  
    console.log( "docs", exhibitorDocs);
    

  return (
<div>
      <div className="w-full flex flex-col md:flex-row mb-5 py-[1%] "> 
        <div className=' flex flex-col md:flex-row basis-[40%] items-center '>
            <img src={exhibitorDetails?.image} className="h-[90%] w-full "/>
        </div>
      
        <div className='flex flex-col basis-[60%] gap-1 px-[5%] md:py-0  py-[2%] justify-center '>
            <div className='flex justify-between md:flex-shrink mb-5'>
                <div className='gap-1'><MdOutlineRateReview />Review</div>
                <div className='gap-1'><TbWorldSearch />Website</div>
                <div className='gap-1' onClick={()=>handleDocumentClick()}><IoDocumentTextOutline />Documents</div>
            </div>
            <p className='md:text-[20px] font-semibold'>Name : {exhibitorDetails?.name}</p>
            <p>Stall : {exhibitorDetails?.stall}</p>
            <p>Hall : {exhibitorDetails?.hall}</p>
        </div>
        
        </div>
         <div className='px-[5%] flex flex-col gap-3 mb-5'>
          <p className='font-bold text-[25px] md:text-[30px]'>Description</p>
          <p className=' text-[15px] md:text-[20px]'>{exhibitorDetails?.description}</p>
          </div>
        </div>
        

   )
}

export default page
