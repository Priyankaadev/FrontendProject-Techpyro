"use client";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

//components
import Profile from "@/components/profileCard/profile";
import Heading2 from "@/components/heading/heading2";
import Profile2 from "@/components/profileCard/Profile2";


function Section2({ speakerData, committeeData, eventData,delegateData }) {

  return (
    <div className="section2 py-[5%]">
      <Heading2 head={"Event Overview"} body={eventData?.description} />

     {/* Speakers */}

      <p className="md:text-[36px] text-[27px] font-semibold p-[5%] hidden md:flex ">
        Distinguished Speakers
      </p>

      <div className="profile-cards hidden md:grid md:grid-cols-4 md:grid-flow-row gap-6 px-[5%] ">
        {speakerData.length > 0 ? (
          speakerData?.map((speaker) => (
            <Profile
              key={speaker.id}
              idx={speaker.id}
              name={speaker.name}
              img={speaker.image}
              designation={speaker.designation}
            />
          ))
        ) : (
          <p>No Speakers at the moment</p>
        )}
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
          committeeData.map((committee,idx) => (
              <SwiperSlide key={idx}>
              <Profile2
              key={idx}
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
  );
}

export default Section2;
