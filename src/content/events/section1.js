import React from "react";

function section1() {
  return (
    <div className="container flex flex-col justify-center ">
      <div className="row-1 flex flex-col mt-3 items-center ">
        <img
          src="./aboutus/img1.png"
          className="h-[39px] w-[52px] mt-[5%] md:h-[4rem] md:mt-[2%] md:w-[5rem] "
        />
        <h1 className="font-bold md:text-[42px] px-10 text-[20px] text-center mt-6 mb-4">
          “Universities exist to transmit knowledge and understanding of ideas
          and values to students not to provide entertainment for spectators or
          employment for athletes.”
        </h1>
        <div className="flex md:flex-row flex-col px-5 mt-[5%] h-[100%] w-[100%] justify-center gap-5 ">
        <img
          src="./events/star1.jpg"
          className=" md:h-[50%] md:w-[30%]"
        />
        <img
          src="./events/star2.jpg"
          className=" md:h-[50%] md:w-[30%] "
        />
        <img
          src="./events/star3.jpg"
          className=" md:h-[50%] md:w-[30%] "
        />
        </div>
      </div>
    </div>
  );
}

export default section1;
