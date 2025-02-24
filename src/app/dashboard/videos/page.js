import React from 'react'

import EventVideo from '@/components/card/eventVideo'
import Register from '@/components/register/register'
import Heading from '@/components/heading/heading'

function Page() {
  return (
    <div className=' md:py-6  '>
        <div className='md:flex justify-between mb-[5%] font-semibold text-[27px] px-[9%]  hidden ' >
            <p>Videos</p>
        
        </div>
        <div className='flex flex-col justify-between mb-[5%] font-semibold text-[27px] px-[5%] md:hidden   ' >
           <Heading head={"Videos"}
            body={"Our mission and vision drive us towards a future where honest information is accessible to all students and institutions work towards their growth."}
            />
            <div className='flex flex-col items-center '>
                <button className='bg-[#F7A600] py-2 px-8'>Category 1</button>
                <button>Category 2</button>
                <button>Category 3</button>
                <button>Category 4</button>
            </div>
        </div>
        <div className='flex justify-center'>
        <div className='videos grid lg:grid-cols-3 lg:grid-flow-row lg:gap-10  md:grid-cols-2 md:grid-flow-row md:gap-7 gap-5 px-[5%] '>
            <EventVideo
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
            <EventVideo 
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
            <EventVideo 
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
            <EventVideo 
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
            <EventVideo 
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
            <EventVideo 
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
            <EventVideo 
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
            <EventVideo 
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
            <EventVideo 
             head={"Lorem ipsum dolor sit amet"}
             img={'/events/eventvideo1.png'}
             body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        />
        </div>
        </div>
        <div className='px-[10%] md:px-0'>
              <Register />
        </div>
      

      
    </div>
  )
}

export default Page
