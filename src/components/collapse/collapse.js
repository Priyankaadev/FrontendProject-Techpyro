import React from 'react'

import Point from '../point/point'

function Collapse() {
  return (
    <div className=' flex flex-col gap-2'>
     
        <p className='font-semibold text-[24px]'>
            Responsibilities
        </p>
        <div className='flex flex-col gap-2'>
        <Point point={"Your Point goes here"} img={'/career/point.png'} />
        <Point point={"Your Point goes here"} img={'/career/point.png'} />
        <Point point={"Your Point goes here"} img={'/career/point.png'} />
        <Point point={"Your Point goes here"} img={'/career/point.png'} />
        <Point point={"Your Point goes here"}  img={'/career/point.png'}/>
         </div> 
      
        <p className='font-semibold text-[24px]'>
         Qualifications
        </p>
        <div className='flex flex-col gap-2'>
        <Point point={"Your Point goes here"} img={'/career/point.png'}/>
        <Point point={"Your Point goes here"} img={'/career/point.png'}/>
        <Point point={"Your Point goes here"} img={'/career/point.png'}/>
        <Point point={"Your Point goes here"} img={'/career/point.png'}/>
        <Point point={"Your Point goes here"} img={'/career/point.png'}/>
         </div>

      </div>
   
  )
}

export default Collapse
