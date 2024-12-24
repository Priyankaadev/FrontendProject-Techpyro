import React from "react";

//components
import Heading from "@/components/heading/heading";
import Card2 from "@/components/card/card2";

function section2() {
  return (
    <div className="container   ">
      <Heading
        head={"What to Expect"}
        body={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        }
      />

      <div className="row-2 flex  justify-center">
        <div className="cards flex flex-col md:flex-row md:gap-5 px-[5%] ">
          <Card2
            img={"/events/stack.png"}
            head={"Lorem Ipsum"}
            body={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            }
          />
          <div className="bg-[#FFF1D2] mx-auto md:h-48 md:w-0.5 h-72 w-0.5 md:rotate-180 rotate-90" />
          <Card2
            img={"/events/stack.png"}
            head={"Lorem Ipsum"}
            body={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            }
          />
          <div className="bg-[#FFF1D2] mx-auto md:h-48 md:w-0.5 h-72 w-0.5 md:rotate-180 rotate-90" />
          <Card2
            img={"/events/stack.png"}
            head={"Lorem Ipsum"}
            body={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
            }
          />
          <div className="bg-[#FFF1D2] mx-auto md:h-48 md:w-0.5 h-72 w-0.5 md:rotate-180 rotate-90" />
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

export default section2;
