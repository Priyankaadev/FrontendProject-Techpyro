"use client";

import { eventListData } from "@/redux/slices/event";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";



function EventSearch({menu}) {
    const router = useRouter()
  const [showInput, setShowInput] = useState(false);
  const [searchInput, setSearchInput]= useState("");
  const [searchedEventList, setSearchedEventList] = useState([])

  const dispatch = useDispatch()

   useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await dispatch(eventListData({
            query:{
                "$or": [
                  { "title": { "$regex": `${searchInput}`, "$options": "i" } },
                  { "city": { "$regex": `${searchInput}`, "$options": "i" } },
                  { "date": { "$regex": `${searchInput}` } }
                ]
              },
             sort:{name:1},populate:'eventId',page:1,limit:50}))
  
          console.log("api Response:", response);
   
        

          if(response?.data){
            setSearchedEventList(response?.data?.data)
            console.log(response?.data?.data);

            
          }else{
            console.log("error fetching searched eventList");
            
          }
        } catch (err) {
          console.error("Error fetching events:", err);
        }
      };
  
      fetchEvents();
    }, [searchInput]);  


  const handleSearch = () => {
    console.log("clicked");
    setShowInput(!showInput); //input field opens
  };
  const handleChange = (e) =>{
    setSearchInput(e.target.value)
  }
  const currentDate = new Date();
  return (
    <div className="relative ">
      <IoSearch
        fontSize={25}
        onClick={handleSearch}
        className={
        menu ? "hidden" : "flex" &&  showInput ? "hidden" : "flex  cursor-pointer"
        }

      />
  
         {showInput && (
        <div className="relative">
          <input
            type="text"
            placeholder="Search ..."
            value={searchInput}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
          />

          {/* Search Results List */}
          {searchInput && searchedEventList?.length > 0 && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md">
          
              {searchedEventList.map((result, idx) => (
                <div
              
                onClick={()=>{
                    console.log("clicked");
                    
                   router.push(`/events/${ currentDate > result.date ? "pastEvents" : "upcomingEvents"}/${result.id}`)
                //    setSearchedEventList([])
                   setSearchInput("")
                }}
                  key={idx}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {result.title}
                </div>
              ))}
            </div>
          )}
        </div>
      )}


    </div>
  );
}

export default EventSearch;
