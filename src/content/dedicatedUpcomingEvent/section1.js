"use client";
import React, { useEffect } from "react";

// import images from "@/constant/images";
import { Images } from "@/constant/images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//components
import TicketBook from "@/components/register/ticketBook";
import Heading2 from "@/components/heading/heading2";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

function section1({eventData}) {

  // console.log('EVENT DATA',eventData?.title);

  return (
    <div className="section1 w-full py-[2%]">
      
    <div className="bg-gradient-to-b from-[#FFF0D1]">
      {/* event details */}
     <div className="head-data flex px-[5%] lg:py-0 md:py-[5%]">
      
        <Heading2
          head={"Book Your Ticket Now"}
          body={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
          }
        />
        <img
          src="/contact/girl.png"
          className="h-[20%] w-[20%] md:block hidden"
        />
      </div>
      {/* Register */}
      <div className="ticket-card px-[8%] py-5 ">
        <TicketBook eventDate={eventData?.eventId?.date} eventLocation={eventData?.eventId?.city} eventName={eventData?.title}  />
      </div>
    </div> 
      {/* image slider */}
      <div className=" flex gap-1 mt-[5%]">
        <Swiper
          slidesPerView={3}
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
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {Images?.map((item, idx) => (
            <SwiperSlide
              key={idx}
            > 
                <img 
                src={item?.img}
                alt="Event Images" />
            
            </SwiperSlide>
            
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default section1;
