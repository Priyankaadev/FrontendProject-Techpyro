import React from "react";

// const Imagedata = [
//   {
//     image:'/upcomingEvent/img1.png',
//     name:
//   }
// ]

function ticketBook() {
  return (
    <div className="event-card shadow-lg">
      <div className="event-heading bg-[#272761] text-white font-semibold py-3 md:text-[35px] text-[20px] px-[5%]">
        <p>Event Name</p>
      </div>

      <div className="ticket-data p-[5%] ">
       {/* event-details */}
        <div className="event-details flex md:flex-row flex-col gap-[5%]  mt-[5%] mb-[5%]">
          <div className="event-item mb-2 md:mb-0 ">
            <div className="flex items-center gap-2">
              <img src="/upcomingEvent/calender.png" className="h-4 w-4" />
              <p className="text-[13px]">Event Date</p>
            </div>
            <p className="text-[17px]">13 April 2024</p>
          </div>
          <div className="event-item mb-2 md:mb-0  ">
            <div className="flex items-center gap-2">
              <img src="/upcomingEvent/clock.png" className="h-4 w-4" />
              <p className="text-[13px]" >Event Time</p>
            </div>
            <p className="text-[17px]">9:30 AM to 11:00 AM</p>
          </div>
          <div className="event-item">
            <div className="flex items-center gap-2">
              <img src="/upcomingEvent/location.png" className="h-5 w-4" />
              <p className="text-[13px]">Location</p>
            </div>
            <p className="text-[17px]">Delhi, India</p>
          </div>
        </div>
        {/* dash */}
        <hr className=" border-dashed border-2 mb-[5%] " />
        {/* form */}
        <div className=" flex gap-5 md:gap-3  md:flex-row flex-col md:justify-between">
          <input type="text" placeholder="Name" className="border-2 md:w-32 md:h-10 lg:w-40  mb-2 md:mb-0 " />
          <input type="email" placeholder="E-mail" className="border-2 md:w-32 md:h-10 lg:w-40 mb-2 md:mb-0" />
          <input
            type="number"
            placeholder="Phone Number"
            className="border-2  md:w-32 md:h-10 lg-px-6 mb-2 md:mb-0"
          />
          <button className=" bg-[#F7A600]  py-2 px-4 font-semibold flex flex-shrink">Register Now</button>
        </div>

      </div>
    </div>
  );
}

export default ticketBook;
