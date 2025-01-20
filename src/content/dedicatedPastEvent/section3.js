import { event } from '@/mocks/event'
import Exhibitor from '@/components/exhibitor/exhibitor'
import React, { useEffect, useState } from 'react'

function section3() {
  const [exhibitorList, setExhibitorList] = useState([])

  useEffect(()=>{
    const fetchExhibitor = async () =>{
      try {
        const response = await event.Exhibitor({query:{}, sort:{name:1}, populate:"eventId", page:1, limit:50})
        const list = response?.data?.data || []
        if(response){
          setExhibitorList(list)
        }else{
          console.log("error in storing");
          
        }
      } catch (error) {
        console.log("err in fetching in exhibitor", error);
      }
    }

    fetchExhibitor()

  })
  return (
    <div className='w-full mt-[5%] md:px-[5%]'>
      <p className='md:text-[40px] font-semibold mb-[3%] text-[27px] px-[5%]'>Event Gallery</p>
    
    <div className='grid md:grid-cols-6 md:grid-flow-row gap-3 px-[5%] '>
      <div className='md:col-span-2  '>  <img src='/events/eventimg1.png' className='object-cover h-full  '/></div>
       <div className='md:col-span-2   '> <img src='/events/eventimg2.png' className='object-cover h-full '/></div>
       <div className='md:col-span-2  '> <img src='/events/eventimg3.png' className='object-cover w-full'/></div>

       <div className='md:col-span-3 '><img src='/events/eventimg3.png'  className='object-cover w-full' /></div> 
       <div className='md:col-span-3'> <img src='/events/eventimg2.png' className='object-cover h-full ' /></div> 

       <div className='md:col-span-2 '> <img src='/events/eventimg2.png' className='object-cover h-full ' /></div>
       <div className='md:col-span-2 '> <img src='/events/eventimg4.png' className='object-cover h-full w-full ' /></div>
       <div className='md:col-span-2 '> <img src='/events/eventimg1.png' className='object-cover h-full '/></div>
    </div>

    <p className='md:text-[40px] font-semibold mb-[3%] text-[27px] px-[5%] mt-5'>Exhibitors</p>
<div className='exhibitors md:grid md:grid-cols-4 md:grid-flow-row flex flex-col gap-6 px-[5%] mb-[5%]'>
    {
      exhibitorList.length > 0 ? exhibitorList.map((exhibitor)=>(
        <Exhibitor
        id={exhibitor?.id}
        img={exhibitor?.image}
        hall={exhibitor?.hall}
        stall={exhibitor?.stall}
        name={exhibitor?.name}
        />
      ))
   : <p>Data not found</p> }
   </div>


    </div>
  )
}

export default section3
