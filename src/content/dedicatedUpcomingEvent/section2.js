"use client";
import React from 'react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


//components
import Profile from '@/components/profileCard/profile'
import Heading2 from '@/components/heading/heading2'


 function section2({speakerData} ) {
  
  console.log("fetched speakerDATA", speakerData)
  return (   
    
    <div className='section2 py-[5%]'>
        <Heading2 
        head={"Event Overview"} 
        body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu massa dui. Praesent vehicula facilisis lorem, nec molestie nibh fringilla condimentum. Aenean pulvinar massa at elit blandit finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque venenatis neque et ullamcorper sollicitudin. Quisque ligula massa, tempor nec nisl a, vulputate tempor lacus. Ut a enim vitae augue bibendum blandit in eu urna. Quisque metus magna, gravida sed augue nec, tristique fermentum erat"}
         />

         <p className='md:text-[36px] text-[27px] font-semibold p-[5%] hidden md:flex '>Distinguished Speakers</p>

         <div className="profile-cards hidden md:grid md:grid-cols-4 md:grid-flow-row gap-6 px-[5%] ">
         {speakerData.length >0 ? speakerData?.map((speaker) => (

                <Profile
                key={speaker.id}
                idx={speaker.id}
                name={speaker.name}
                img={speaker.image}
                designation={speaker.designation}
              />
            ))
          :
          <p>No Speakers at the moment</p>
          }
         </div>


    </div>
  )
}

export default section2
