import React from "react";

function Journey({ head, year, idx }) {
  return (
    <>
      {idx % 2 === 0 ? (
        <div className="container ">
          <div className="flex flex-col items-center text-center w-full h-full">
            <div className="flex justify-end items-end h-[90px] ">
              <h1 className="font-bold text-[#FFE0A1] text-[48px] h-[59.2px]">
                {year}
              </h1>
            </div>

            <div className="relative w-full h-[200px]  flex justify-center items-center">
              <div className=" custom-dash absolute w-full top-1/2 h-0.5 "></div>

              {/* vert */}
              <div className="absolute h-full w-0.5 bg-[#F7A600]"></div>

              {/* circle */}
              <div className="absolute w-[46px] h-[46px] bg-[#F7A600] rounded-full z-10"></div>
            </div>

            <div className=" text-[#343434]  max-w-[280px] text-[16px] font-red-hat-text h-[90px]">
              {head}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="flex flex-col items-center text-center  w-full h-full ">
            <div className="  text-[#343434]  max-w-[280px] text-[16px] font-red-hat-text h-[90px] ">
              {head}
            </div>

            <div className="relative w-full h-[200px]  flex justify-center items-center">
              <div className=" custom-dash absolute w-full top-1/2 h-0.5 ">
               
              </div>

              {/* vert */}
              <div className="absolute h-full w-0.5 bg-[#F7A600]"></div>

              {/* circle */}
              <div className="absolute w-[46px] h-[46px] bg-[#F7A600] rounded-full z-10"></div>
            </div>

            <div className="flex justify-end items-end h-[90px] ">
              <h1 className="font-bold text-[#FFE0A1] text-[48px] h-[59.2px]">
                {year}
              </h1>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Journey;
