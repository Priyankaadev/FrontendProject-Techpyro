import React from 'react'

import Heading from '@/components/heading/heading'
import { role } from '@/constant/career'
import  JobRole from '@/components/jobRole/page'

function section2() {
  return (  

  <div className='flex flex-col mt-[5%]  '>

    <Heading head={"Current Openings"}
     body={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"}
     />


  
    <div className='container grid grid-cols-2 gap-5 px-[5%] '>
     
       {role.map((item)=>(
        <JobRole title={item.title} place={item.place} desc={item.desc} />
       ))}

        </div>  
    </div>
  )
}

export default section2