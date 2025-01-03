import React from "react";
// import { data } from "@/constant/tableData";

//components
import Table from "@/components/table/table";
import RegisterEvent from "@/components/register/registerEvent";

function section3() {
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
          <Table />
        {/* //    time={item.time} event={item.event} key={index}  */}
          
        {/* ))} */}
      </div>

      <RegisterEvent />
    </div>
  );
}

export default section3;
