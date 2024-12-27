import React from "react";

function card2({ img, head, body }) {
  return (
    
    <div className="outer-container lg:h-[20em] lg:w-[15em] md:h-[8em] md:w-[20em] w-full max-w-[500px] ">
       
      <div className="flex flex-col basis-[25%] card-img md:mb-2  ">
        <img src={img} className="md:h-[30%] md:w-[30%] h-[5rem] w-[5rem]" />
      </div>
      <div className="flex basis-[60%] flex-col  justify-center ">
        <p className="font-semibold md:text-[28px] lg:text-[20px] text-[28px] mb-4">{head}</p>
        <p className="card-body md:text-[16px] text-[16px] ">{body}</p>
        
      </div>
     

    </div>
  );
}

export default card2;
