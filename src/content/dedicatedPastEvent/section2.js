
import React from 'react'

import Heading2 from '@/components/heading/heading2'
import EventVideo from '@/components/card/eventVideo'

function section2() {
  return (
    <div className='container md:px-[5%]' >
      <div className='hidden md:block'>
      <Heading2 head={'Event Overview'} 
      body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu massa dui. Praesent vehicula facilisis lorem, nec molestie nibh fringilla condimentum. Aenean pulvinar massa at elit blandit finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque venenatis neque et ullamcorper sollicitudin. Quisque ligula massa, tempor nec nisl a, vulputate tempor lacus. Ut a enim vitae augue bibendum blandit in eu urna. Quisque metus magna, gravida sed augue nec, tristique fermentum erat'} 
      />
      </div>
      <div className='flex flex-col justify-between items-center md:justify-normal md:items-stretch md:px-[5%] '>
        <p className='font-semibold md:text-[40px] text-[27px] mb-[3%]'>Event Video Highlights </p>
        <div className='video-cards flex md:flex-row flex-col md:justify-between  '>
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
    </div>
  )
}

export default section2
