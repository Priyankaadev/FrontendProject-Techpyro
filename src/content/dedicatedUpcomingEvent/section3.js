'use client'
import React, { useEffect, useState } from "react";
// import { data } from "@/constant/tableData";

//components
import Table from "@/components/table/table";
import RegisterEvent from "@/components/register/registerEvent";
import { event } from "@/mocks/event";
import { useRouter } from "next/navigation";

function section3() {


  const [agendaList, setAgendaList] = useState([])
  const router = useRouter()

  useEffect(()=>{
    const fetchAgenda = async ()=>{
      try {
        const response = await event.Agenda({query:{}, sort:{name:1}, populate:"eventId", page:1, limit:50})
        // console.log(response.data.data);
        const list = response?.data?.data 
        if(response){
          setAgendaList(list)
          // console.log('length' , list.length);
          
        }else if(response.data.data.status ===401){
          localStorage.removeItem("authToken")
          router.push('/signin')
           }
        else{
          console.log('error in storing' );
          
        }
      
      } catch (error) {
        console.log('err', error);
        
      }
    }
    fetchAgenda()
  },[])
  
  return (
    <div className=" section3 p-[5%]">
      <p className="md:text-[36px] text-[27px] mb-5 font-semibold">
        Event Agenda
      </p>

      <div className="event-table   ">
        <div className="event-header flex bg-[#272761] text-white p-2 ">
          <div className=" flex basis-1/2 ">
            <p >Time</p>
          </div>
          <div className=" flex basis-1/2">
            <p className=" px-2 border-l">Event</p>
          </div>
        </div>

        {/* {data?.map((item, index) => ( */}
          <Table agendaData={agendaList} />
        {/* //    time={item.time} event={item.event} key={index}  */}
          
        {/* ))} */}
      </div>

      <RegisterEvent />
    </div>
  );
}

export default section3;
