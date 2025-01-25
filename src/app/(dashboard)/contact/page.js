'use client'
import React, { useEffect, useRef } from 'react'
import Form from '@/components/form/form'
import { Loader } from '@googlemaps/js-api-loader'


const containerStyle = {
  width: '100%',
  height: '100vh'
}


function page() {

  const mapRef = useRef(null)

  useEffect(() => {
    const initMap = async ()=>{
      console.log("map initialized");
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ,
        version: "weekly",

      })
      const {Map} = await loader.importLibrary("maps")

      const {Marker} = await loader.importLibrary("marker")
      const position = {
        lat: 30.7333,
        lng: 76.7794

      }
      const mapOptions = {
        center: position,
        zoom: 17,
        mapId : 'MY-NEXTJS_MAPID'
        
      }
      const map = new Map(mapRef.current, mapOptions)
      const marker = new Marker({
        map: map,
        position: position,
      })

    }
    initMap()
  }, [])

  return (
    <div className=' bg-[#FFF1D2]'>

      <div className='flex flex-col md:flex-row px-[2%] '>

        <div className='contact-block flex flex-col p-[5%]  justify-center items-center basis-[50%]'>
            <div className='heading'>
              <p className='font-semibold lg:text-[58.98px] md:text-[40px] text-[27px] md:leading-tight'>Get in Touch</p>
            
              <hr className='mt-3'  />

              <p className='text-[24px] mt-5'>
                Sed ut perspiciatis unde omnis 
                iste natus error sit
                voluptatem accusantium doloremque laudantium, 
                totam rem aperian
              </p>
              <img src='/contact/girl.png' className='w-[60%]'/> 
              
              <div className='contact-details flex flex-col md:flex-row items-center justify-around mt-5 gap-3 md:gap-0'>
              <div className='message'>
                <img src='contact/message.png'/>
                <p>Email</p>
                <p>contact@igauge.in</p>
              </div>
              <div className='phone'>
                <img src='contact/phone.png' className='h-[40%]'/>
                <p>Phone Number</p>
                <p>+91 80 46469200</p>
              </div>
            </div>
            </div>
           
        </div>
       
        <div className='py-[5%] flex items-center'>
        <Form />
        </div>

      </div>
      <div className='map h-[600px]'  ref={mapRef} />

     
    </div>
  )
}

export default page
