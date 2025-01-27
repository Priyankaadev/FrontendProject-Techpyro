'use client'
import React, { useEffect, useRef, useState } from 'react'
import Form from '@/components/form/form'
import { Loader } from '@googlemaps/js-api-loader'





function page() {

  const mapRef = useRef(null)
  const [coords, setCoords] = useState(null)
 

  useEffect(() => {
    const gotLocation = (position) => {
      const newCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      console.log("coords", newCoords)
      setCoords(newCoords)

      // Initialize the map once coordinates are available
      initMap(newCoords)
    }
      const failedToGet = ()=>{
        console.log('failed to get location');
        
      }
    
    const location = async () => {
         navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
        
      }

    const initMap = async (coords)=>{
      console.log("map initialized", coords);
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ,
        version: "weekly",

      })
      const {Map} = await loader.importLibrary("maps")
      const position = {
        lat: coords.latitude,
        lng: coords.longitude

      }
      const mapOptions = {
        center: position,
        zoom: 17,
        mapId : loader.apiKey
        
      }
     new Map(mapRef.current, mapOptions)
   

    }  
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
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
