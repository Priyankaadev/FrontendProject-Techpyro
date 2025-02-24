"use client";
import React, { useEffect, useState } from "react";

import Section1 from "@/content/dedicatedPastEvent/section1";
import Section2 from "@/content/dedicatedPastEvent/section2";
import Section3 from "@/content/dedicatedPastEvent/section3";

//next imports
import { useParams } from "next/navigation";
//mock import
import { event } from "@/mocks/event";
import { useDispatch, useSelector } from "react-redux";
import { useLoader } from "@/context/loader";
// import { upcomingEv } from '@/constant/upcomingEvents'

function Page() {
  const params = useParams();
  const {setLoading} = useLoader()

  const [pastEvDetails, setPastEvDetails] = useState();
  const [committeeList, setCommitteeList] = useState([]);
  const [delegateList, setDelegateList] = useState([]);
  // const [item, setItem] = useState(upcomingEv.find((maping)=>maping.idx === params.id))

  const dispatch = useDispatch();
  const eventData = useSelector((state) => state.event);


  useEffect(() => {

    const fetchEvents = async () => {
      setLoading(true);
      try {
        const details = eventData?.data?.find((event) => event.id === params.id);
        // const details = eventData?.data?.data || null;
        console.log("details", details );

        

        if (details) {
          setPastEvDetails(details);
        } else {
          console.log("details not found");
        }
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }
     const fetchCommittee = async () =>{
      setLoading(true);
          try {
              
              const response = await event.CommitteeList({limit:50, sort:{name:1}, populate:"eventId", query:{}, page:1  })
              const list = response?.data?.data || []
              
              if(response){
                setCommitteeList(response?.data?.data) 
              
              }else{
                console.log("error in fetching committee");
                
              }
           
         } 
          catch (error) {
              console.log("error", error);
              
          }finally {
            setLoading(false);
          }
         
        }
    
         const fetchDelegates = async () => {
          setLoading(true);
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
                  // console.log(list);
                  
        
                } else {
                  console.log("err");
                }
              } catch (error) {
                console.log("error while fetching delegates", error);
              }finally{
                setLoading(false)
              }
            }
           
        
    fetchEvents()
    fetchCommittee()
    fetchDelegates()
  }, []);

  return (
    <>
      <Section1 eventDetails={pastEvDetails} />
      <Section2 eventDetails={pastEvDetails} committeeData={committeeList} delegateData={delegateList}/>
      <Section3 />
    </>
  );
}

export default Page;
