"use client";
import React from "react";
// import { data } from "@/constant/tableData";

function Table({agendaData}) {
  // console.log("agendadata", agendaData);
  return (
    <div>
      {agendaData ? agendaData?.map((agenda,index) => (
        <div
        key={agenda?.id}
          className={`w-full border-b flex ${
            index % 2 !== 0 ? "bg-[#EAEAEA]" : "bg-white"
          }  `}
        >
          <div className="flex basis-1/2 p-3 border-r">{agenda?.time}</div>
          <div className="flex basis-1/2 p-3">{agenda?.title}</div>
        </div>
      )) :  <p>Data not found</p>}
    </div>
  );
}

export default Table;
