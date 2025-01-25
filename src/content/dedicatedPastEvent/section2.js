"use client"
import React from 'react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import Heading2 from '@/components/heading/heading2'
import EventVideo from '@/components/card/eventVideo'
import Profile2 from '@/components/profileCard/Profile2';

function section2({eventDetails, committeeData, delegateData}) {
  return (
    <div className='w-full md:px-[5%]' >
      <div className='hidden md:block'>
      <Heading2 head={'Event Overview'} 
      body={eventDetails?.description} 
      />
      </div>
      <div className='flex flex-col justify-between items-center md:justify-normal md:items-stretch px-[5%] '>
        <p className='font-semibold md:text-[40px] text-[27px] mb-[3%]'>Event Video Highlights </p>
        <div className='video-cards flex md:flex-row flex-col gap-5 md:justify-between  '>
            <EventVideo 
            head={"Lorem ipsum dolor sit amet"}
            img={'/events/eventvideo1.png'}
            body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
            />
            <EventVideo 
            head={"Lorem ipsum dolor sit amet"}
            img={'/events/eventvideo2.png'}
            body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
            />
            <EventVideo
            head={"Lorem ipsum dolor sit amet"}
            img={'/events/eventvideo3.png'}
            body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
            />
            
        </div>
      </div>

            {/* Committee */}

            <p className="md:text-[36px] text-[27px] font-semibold p-[5%] hidden md:flex ">
        Committee
      </p>
      <div className="px-[5%]">
      <Swiper
            slidesPerView={4}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper  "
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            >
        {committeeData &&  (
          committeeData.map((committee) => (
              <SwiperSlide >
              <Profile2
                id={committee?.id}
                img={committee?.image}
                designation={committee?.designation}
                name={committee?.name}
                type={committee?.committee_type}
                city={committee?.city}
              />
          </SwiperSlide>
            ))
          )  
        } 
          </Swiper> 
          </div>
    

      {/* Delegates */}

      <p className="md:text-[36px] text-[27px] font-semibold p-[5%] hidden md:flex ">
        Delegates
      </p>

      <div className="delegate-cards hidden md:grid md:grid-cols-4 md:grid-flow-row gap-6 px-[5%] ">
      {delegateData.length > 0 ? (
        delegateData.slice(0, 2).map((delegate) => <Profile2
        key={delegate?.id}
        id={delegate?.id}
        name={delegate?.name}
        designation={delegate?.designation}
        city={delegate?.city}
        img={delegate?.image}
        
        />)
      ) : (
        <p>Data not found</p>
      )}
      
      </div>
      
    </div>
  )
}

export default section2
