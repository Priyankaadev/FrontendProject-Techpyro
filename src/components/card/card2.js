import React from "react";

function card2({ img, head, body }) {
  return (
    
    <div className="outer-container lg:h-[20em] lg:w-[15em] md:h-[8em] md:w-[9em] w-full max-w-[500px] ">
       
      <div className="flex flex-col basis-[25%] card-img md:mb-2  ">
        <img src={img} className="md:h-[25%] md:w-[25%] h-[5rem] w-[5rem]" />
      </div>
      <div className="flex basis-[60%] flex-col  justify-center ">
        <p className="font-semibold md:text-[15px] lg:text-[20px] text-[20px] mb-4">{head}</p>
        <p className="card-body md:text-[15px] text-[15px] md:mb-[5em]">{body}</p>
        
      </div>
     

    </div>
  );
}

export default card2;
