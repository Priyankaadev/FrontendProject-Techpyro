'use client';

import React, { useEffect, useRef, useState } from 'react';
import ContactForm from '@/components/form/form';
import { Loader } from '@googlemaps/js-api-loader';
import { Marker } from '@react-google-maps/api';
import Image from 'next/image';

const ContactPage = () => {
  const mapRef = useRef(null);
  const [coords, setCoords] = useState(null);
 

  const getApi = async (data) => {
    const response = await fetch(data);
    const result = await response.json();
    // console.log("result", result);
  }
  useEffect(() => {
    const initMap = async (coords) => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_MAP_API_KEY,
          version: 'weekly',
        });
        
        const { Map } = await loader.importLibrary('maps');

        const position = { lat: coords.latitude, lng: coords.longitude };
        const mapOptions = {
          center: position,
          zoom: 17,
        };

        const map = new Map(mapRef.current, mapOptions);
        new Marker({ position, map });
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    const gotLocation = (position) => {
      const newCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      const data = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      getApi(data)
      setCoords(newCoords);
      initMap(newCoords);
    };



    const failedToGet = () => {
      console.error('Failed to get location');
    };

    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);

  }, []);

  return (
    <div className='bg-[#FFF1D2]'>
      <div className='flex flex-col md:flex-row px-[2%]'>
        <div className='contact-block flex flex-col p-[5%] justify-center items-center basis-[50%]'>
          <div className='heading'>
            <p className='font-semibold lg:text-[58.98px] md:text-[40px] text-[27px] md:leading-tight'>Get in Touch</p>
            <hr className='mt-3' />
            <p className='text-[24px] mt-5'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <Image src='/contact/girl.png'  alt='Contact' width={60} height={30} />
            <div className='contact-details flex flex-col md:flex-row items-center justify-around mt-5 gap-3 md:gap-0'>
              <div className='message'>
                <Image src='/contact/message.png' alt='Email' width={60} height={30} />
                <p>Email</p>
                <p>contact@igauge.in</p>
              </div>
              <div className='phone'>
                <Image src='/contact/phone.png'  alt='Phone' height={40} width={30} />
                <p>Phone Number</p>
                <p>+91 80 46469200</p>
              </div>
            </div>
          </div>
        </div>
        <div className='py-[5%] md:flex md:items-center'>
          <ContactForm />
        </div>
      </div>
      <div className='map h-[600px]' ref={mapRef} />
    </div>
  );
};

export default ContactPage;