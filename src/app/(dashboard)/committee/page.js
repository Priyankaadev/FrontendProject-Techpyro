'use client'
import React, { useEffect, useState } from 'react'
import CommitteeProfile from '@/components/profileCard/committeeProfile'
import { event } from '@/mocks/event'
import Heading from '@/components/heading/heading'

function page() {

    const [committeeList, setCommitteeList] = useState([])

    useEffect(()=>{

        const fetchCommittee = async () =>{
        try {
            
            const response = await event.CommitteeList({limit:50, sort:{name:1}, populate:"eventId", query:{}, page:1  })
            const list = response?.data?.data || []

            console.log(list);
            
            if(response){
              setCommitteeList(response?.data?.data) 
            
            }else{
              console.log("error in fetching committee");
              
            }
         
       } 
        catch (error) {
            console.log("error", error);
            
        }
 
      }
      fetchCommittee()     
        
     },[])


     console.log('committeeList', committeeList.length);

  return (
    <div className=" w-full  h-full flex flex-col items-center mt-5 ">
    <Heading
      head={"Committee"}
      body={
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
      }
    />
    <div className="row1 flex flex-col px-[4%]  md:grid md:grid-cols-2 md:grid-flow-row md:px-[5%]  md:gap-5 py-5  ">

     { committeeList && committeeList.length > 0 ?  committeeList.slice(0,10).map((committee)=>(
      <CommitteeProfile 
      id={committee?.id}
      img={committee?.image} 
      designation={committee?.designation}
      name={committee?.name}
      type={committee?.committee_type}
      city={committee?.city}
       />
    )) : <p>Data not found</p>}
    
    </div>

    </div>
  )
}

export default page
