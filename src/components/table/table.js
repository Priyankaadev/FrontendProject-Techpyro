"use client";
import React from "react";
import { data } from "@/constant/tableData";

function table() {
//   console.log("index comp", key);
  return (
    <div>
      {data?.map((item, index) => (
        <div
        key={index}
          className={`w-full border-b flex ${
            index % 2 !== 0 ? "bg-[#EAEAEA]" : "bg-white"
          }  `}
        >
          <div className="flex basis-1/2 p-3 border-r">{item?.time}</div>
          <div className="flex basis-1/2 p-3">{item?.event}</div>
        </div>
      ))}
    </div>
  );
}

export default table;
