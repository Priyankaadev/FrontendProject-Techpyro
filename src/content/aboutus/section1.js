import React from "react";

function section1() {
  return (
    <div className="container flex flex-col justify-center">
      <div className="row-1 flex flex-col items-center ">
        <img src="./aboutus/img1.png" className="h-[40px] w-[50px] mt-[5%] " />
        <h1 className="font-bold text-md text-center mt-4 mb-4">
          A robust rating system ensures that this journey is <br />
           marked by integrity, transparency, and meaningful <br />
            outcomes.
        </h1>
        <img src="./aboutus/star.png" className="h-[30em] w-[50em]]" />
      </div>
      <div className="row-2 flex ">
        <div className="flex basis-1/2">hello</div>
        <div className="flex basis-1/2 ">
          <img src="./aboutus/img2.png" className="h-[50%] w-[50%]" />
        </div>
      </div>
    </div>
  );
}

export default section1;
