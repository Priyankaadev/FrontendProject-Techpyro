import React from "react";

function section1() {
  return (
    <div className="w-full flex flex-col justify-center border-t ">
      <div className="row-1 flex flex-col  items-center ">
        <img src="./aboutus/img1.png" className="h-[39px] w-[52px] mt-10  md:h-[4rem]  md:w-[5rem] " />
        <h1 className="font-bold md:text-[48px] px-[3%] text-[25px] text-center mt-4 mb-4">
          A robust rating system ensures that this journey is 
           marked by integrity, transparency, and meaningful 
            outcomes.
        </h1>
        <img src="./aboutus/star.png" className="md:h-[25em] md:w-[50em]] px-5 mt-[5%]" />
      </div>
      <div className="row-2 md:flex  items-center mt-[10%] ">
        <div className="flex md:basis-[50%] cover ">
          <img src="./aboutus/img2.png" className=" aboutus-img" />
        </div>
        <div className="flex md:basis-[50%] flex-col px-[4%] ">
        <p className="font-semibold lg:text-[58.98px] mb-2 md:mb-0 mt-5 md:text-[40px] text-[27px] ">About QS I-GAUGE</p>
        <p className="lg:text-[20px] md:text-[18px] text-[16px] py-6  ">QS I-GAUGE, an esteemed brand established in India, 
        specialises in rating universities, schools, and colleges, 
         drawing upon global expertise and the esteemed legacy of  
         QS (Quacquarelli Symonds) based in U.K. Our transparent 
          methodology tailored for Indian educational institutions, 
           adheres to international standards and best practices. Each 
            rating undergoes rigorous scrutiny, ensuring accuracy and reliability. </p>
        </div>
        
      </div>
    </div>
  );
}

export default section1;
