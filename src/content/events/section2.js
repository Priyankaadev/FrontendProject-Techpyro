import React from "react";

//components
import Heading from "@/components/heading/heading";
import Card2 from "@/components/card/card2";

function Section2() {
  return (
    <div className="section2 py-[5%] justify-center ">
      <Heading
        head={"What to Expect"}
        body={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        }
      />

      <div className="row-2 flex justify-center items-center">
        <div className="cards flex flex-col md:flex-row md:flex-wrap px-[5%] lg:gap-5 md:justify-center  ">
          <Card2
            img={"/events/stack.png"}
            head={"Lorem Ipsum"}
            body={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            }
          />
          
          <div className="bg-[#FFF1D2] mx-auto md:h-48 md:w-0.5 w-full h-[2px] my-10 " />
     
          <Card2
            img={"/events/stack.png"}
            head={"Lorem Ipsum"}
            body={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            }
          />

         <div className="bg-[#FFF1D2] mx-auto md:h-48 md:w-0.5 w-full h-[2px] my-10 lg:block md:hidden" />
         
          <Card2
            img={"/events/stack.png"}
            head={"Lorem Ipsum"}
            body={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            }
          />

        <div className="bg-[#FFF1D2] mx-auto md:h-48 md:w-0.5 w-full h-[2px] my-10 " />        
        
         <Card2
            img={"/events/stack.png"}
            head={"Lorem Ipsum"}
            body={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
