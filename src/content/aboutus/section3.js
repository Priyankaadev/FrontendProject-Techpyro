"use client";
import React from "react";
//components
import Heading2 from "@/components/heading/heading2";
import Point from "@/components/point/point";
import Heading from "@/components/heading/heading";
import Journey from "@/components/journey/journey";
import Profile from "@/components/profileCard/profile";
//constant js file
import { constant } from "@/constant/constant";
import { profile, profileConstant } from "@/constant/profile";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Section3() {
  return (
    <div className="w-full overflow-hidden  ">
      <div className="row-1 flex lg:flex-row flex-col  ">
        <div className=" flex md:basis-1/2">
          <img src="/aboutus/approach.png" />
        </div>
        <div className="flex md:basis-1/2 flex-col px-[5%] justify-center py-5">
          <Heading2
            head={"Our Approach"}
            body={
              "At QS I-GAUGE, our approach is rigorous, evidence based, transparent , and straightforward. We aim to provide students with precise information regarding universities, schools, and colleges, empowering them to make  well-informed decisions about their future. Guided by the transparent principle of What you see is what you get, our team ensures that there are no concealed details or expenses in the process of rating an educational institution."
            }
          />

          <div className=" grid md:grid-cols-2 px-[5%] gap-4">
            <Point
              img={"/aboutus/Tick.png"}
              point={"Comprehensive evaluation"}
            />
            <Point img={"/aboutus/Tick.png"} point={"Continuous improvement"} />
            <Point img={"/aboutus/Tick.png"} point={"Data-driven insights"} />
            <Point img={"/aboutus/Tick.png"} point={"Collaborative feedback"} />
          </div>
        </div>
      </div>

      <div className="row-2  py-[5%]">
        <div className="heading mb-[4%] ">
          <Heading
            head={"QS I-GAUGE Journey"}
            body={
              "Our values guide every aspect of our work, ensuring trustworthy evaluations and positive contributions to the education sector."
            }
          />
        </div>
        <div className="journey  ">
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
            {constant.map((item, idx) => (
              <SwiperSlide >
                <Journey idx={idx} year={item.number} head={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="row-3 px-[5%] mt-[10%]">
        <Heading2
          head={"Advisory Board"}
          body={
            "Meet the dedicated individuals driving our mission forward with expertise and passion."
          }
        />
        <div className="profile-cards flex gap-5 ">
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
                  desc={item.desc}
                  img={item.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="row-4  items-center flex flex-col md:flex-row  mt-[8%] mb-[9%] ">
        <div className="flex md:basis-1/2 md:px-5 bg-cover mb-5 ">
          <img src="./aboutus/indianedu.jpg" className=" education-img " />
        </div>

        <div className="flex md:basis-1/2 flex-col px-[6%] py-[5%]">
          <p className="font-semibold text-[40px] mb-5 leading-10  ">
            Charting India's Education Odyssey
          </p>
          <p className="text-[15px]   ">
            The Indian education system is vast and multifaceted, catering to an
            extensive population, which necessitates the presence of credible
            and reliable ratings. Institutional ratings play a crucial role in
            assisting students, parents, researchers, stakeholders, educators,
            and employers in selecting the most suitable institution based on
            globally recognised benchmarks. QS I-GAUGE specialises in ratings
            Indian educational institutions. Our aim is to elevate the quality
            of Indian education, enabling institutions to compete on an
            international level and fostering a culture of excellence in
            teaching, research, and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
