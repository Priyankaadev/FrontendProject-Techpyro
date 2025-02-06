import React from 'react'

import Heading from '@/components/heading/heading'
import { role } from '@/constant/career'
import  JobRole from '@/components/jobRole/page'

function Section2() {
  return (  

  <div className='flex flex-col mt-[5%] items-center justify-center '>

    <Heading head={"Current Openings"}
     body={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"}
     />
  
    <div className=' lg:grid lg:grid-cols-2 flex flex-col justify-center  items-start gap-5 px-[5%]  '>
     
       {role.map((item, idx)=>(
        <JobRole key={idx} idx={idx} title={item.title} place={item.place} desc={item.desc} />
       ))}

     </div>  
    </div>
  )
}

export default Section2
