import React from "react";

function section1() {
  return (
    <div className="container flex flex-col justify-center">
      <div className="row-1 flex flex-col items-center ">
        <img src="./aboutus/img1.png" className="h-[69px] w-[92px] mt-[5%] " />
        <h1 className="font-bold text-[48px] text-center mt-6 mb-4">
          A robust rating system ensures that this journey is <br />
           marked by integrity, transparency, and meaningful <br />
            outcomes.
        </h1>
        <img src="./aboutus/star.png" className="h-[30em] w-[50em]]" />
      </div>
      <div className="row-2 flex  items-center mt-[5%] ">
        <div className="flex basis-[50%] flex-col px-[4%] ">
        <p className="font-semibold text-[58.98px] mb-5  ">About QS I-GAUGE</p>
        <p className="text-[20px]   ">QS I-GAUGE, an esteemed brand established in India, <br /> 
        specialises in rating universities, schools, and colleges, 
         drawing upon global expertise and the esteemed legacy of  
         QS (Quacquarelli Symonds) based in U.K. Our transparent 
          methodology tailored for Indian educational institutions, 
           adheres to international standards and best practices. Each 
            rating undergoes rigorous scrutiny, ensuring accuracy and reliability. </p>
        </div>
        <div className="flex basis-[50%] cover ">
          <img src="./aboutus/img2.png" className=" aboutus-img" />
        </div>
      </div>
    </div>
  );
}

export default section1;
