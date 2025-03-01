"use client";
import PopupForm from "@/components/popupForm/popupForm";
import { AuthContext } from "@/context/authContext";
import React, { useContext, useState } from "react";

function Page() {
  const { userInfo, updateUserInfo } = useContext(AuthContext);
  const [openPopup, setOpenPopup] = useState(false);

  const handleEdit = () => {
    setOpenPopup(!openPopup);
  };

  const handleUpdatedData = (updatedData) => {
    updateUserInfo(updatedData);
  };

  return (
    <div className="w-[100%] h-[100%] flex  flex-col justify-center items-center">
      {!openPopup && (
        <div className="w-[80%] h-[100%] bg-orange-100 flex gap-3  py-6  flex-col justify-center items-center">
          <div className="-img rounded-full h-[15%] w-[15%] bg-orange-300 ">
            <img src="/profile/user.png" />
          </div>

          <div className="profile-items flex flex-col justify-center font-semibold items-center  gap-2 py-2 ">
            <p className=" md:text-[25px] text-[20px] text-orange-600 ">
              {" "}
              {userInfo.full_name}
            </p>
            <div className="md:text-[20px] text-[15px] ">
              <p className="">E-mail : {userInfo.email}</p>
              <p className="">Country : {userInfo.country} </p>
              <p className="">
                Language Preference : {userInfo.languagePreference}
              </p>
              <p className="">
                Active : {userInfo.isActive ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
          <button
            className="md:py-2 md:px-4 px-3 py-1 bg-blue-300"
            onClick={() => handleEdit()}
          >
            Edit
          </button>
        </div>
      )}
      {openPopup ? (
        <PopupForm
          handleClick={handleEdit}
          updated={handleUpdatedData}
          userData={userInfo}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Page;
