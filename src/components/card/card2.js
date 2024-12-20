import React from "react";

function card2({ img, head, body }) {
  return (
    
    <div className="outer-container h-[20em] w-[15em]  ">
       
      <div className="flex flex-col basis-[25%] card-img mb-2 ">
        <img src={img} className="h-[25%] w-[25%]" />
      </div>
      <div className="flex basis-[70%] flex-col  justify-center">
        <p className="font-semibold text-[20px] mb-4">{head}</p>
        <p className="card-body text-[15px]">{body}</p>
        
      </div>
     

    </div>
  );
}

export default card2;
