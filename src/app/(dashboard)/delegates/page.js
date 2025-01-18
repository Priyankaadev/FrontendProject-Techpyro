"use client";

import { event } from "@/mocks/event";
import Heading from "@/components/heading/heading";
import React, { useEffect, useState } from "react";
import CommitteeProfile from "@/components/profileCard/committeeProfile";

function page() {
  const [delegateList, setDelegateList] = useState([]);

  useEffect(() => {
    const fetchDelegates = async () => {
      try { 
        const response = await event.DelegatesList({
          query: {},
          sort: { name: 1 },
          populate: "eventId",
          page: 1,
          limit: 50,
        });
        const list = response?.data?.data || []
        if (response) {
          setDelegateList(list);
          console.log(list);
          

        } else {
          console.log("err");
        }
      } catch (error) {
        console.log("error while fetching delegates", error);
      }
    }
    fetchDelegates();
  });


  
  return (

    <div className=" w-full  h-full flex flex-col items-center mt-5 ">
    <Heading
      head={"Delegates"}
      body={
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
      }
    />
    <div className="row1 flex flex-col px-[4%]  md:grid md:grid-cols-2 md:grid-flow-row md:px-[5%]  md:gap-5 py-5 ">
      {delegateList.length > 0 ? (
        delegateList.slice(0, 10).map((delegate) => <CommitteeProfile
        key={delegate?.id}
        id={delegate?.id}
        name={delegate?.name}
        designation={delegate?.designation}
        city={delegate?.city}
        
        img={delegate?.image}
        
        />)
      ) : (
        <p>Data not found</p>
      )}
    </div>
    </div>
  );
}

export default page;
