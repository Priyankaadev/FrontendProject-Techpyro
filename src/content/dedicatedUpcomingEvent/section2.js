"use client";
import React from 'react'
import { profileConstant } from '@/constant/profile'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//components
import Profile from '@/components/profileCard/profile'
import Heading2 from '@/components/heading/heading2'


function section2() {
  return (
    <div className='section2 py-[5%]'>
        <Heading2 
        head={"Event Overview"} 
        body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu massa dui. Praesent vehicula facilisis lorem, nec molestie nibh fringilla condimentum. Aenean pulvinar massa at elit blandit finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque venenatis neque et ullamcorper sollicitudin. Quisque ligula massa, tempor nec nisl a, vulputate tempor lacus. Ut a enim vitae augue bibendum blandit in eu urna. Quisque metus magna, gravida sed augue nec, tristique fermentum erat"}
         />

         <p className='md:text-[36px] text-[27px] font-semibold p-[5%]'>Distinguished Speakers</p>

         <div className="profile-cards hidden md:grid md:grid-cols-4 md:grid-flow-row gap-6 px-[5%] ">
         {profileConstant.map((item, idx) => (
                <Profile
                  idx={idx}
                  name={item.name}
                  img={item.img}
                />
            ))}
         </div>


         <div className="profile-cards flex gap-5 md:hidden px-[5%] ">
          <Swiper
            slidesPerView={4}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
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
            {profileConstant.map((item, idx) => (
              <SwiperSlide>
                <Profile
                  idx={idx}
                  name={item.name}
                  img={item.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default section2
