"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineRateReview } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbWorldSearch } from "react-icons/tb";
import { useParams } from "next/navigation";
import { event } from "@/mocks/event";
import { Textarea } from "@/components/ui/textarea";

//mui
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Bounce, toast } from "react-toastify";
import Link from "next/link";

function page() {
  const params = useParams();

  const [exhibitorDetails, setExhibitorDetails] = useState([]);
  const [exhibitorDocs, setExhibitorDocs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [divOpen, setDivOpen] = useState("");
  const [exhibitorReview, setExhibitorReview] = useState([]);
  const [reviewComment, setReviewComment] = useState("");
  const [value, setValue] = useState("2.5");
  const [reviewData, setReviewData] = useState({
    rating: value,
    review: "",
  });
  // const [hover, setHover] = useState(-1)

  const handleChange = (event) => {
    setReviewComment(event.target.value);
  };

  const handleDocumentClick = (openDiv) => {
    if (isOpen) {
      console.log("already open");
      setIsOpen(!isOpen)
    } else {
      setIsOpen(!isOpen);
    }

    setDivOpen(openDiv);
    console.log("clicked", openDiv);
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if(reviewComment === "" && value === "0") {
      toast.error('Please fill the review and rating!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      return;
    }else{
      setReviewData({ rating: value, review: reviewComment });
     Review({
      review: reviewComment,
      rating: value,
      review_type: {
        id: `${params.idx}`, // Assuming exhibitor ID comes from params
        type: 1, // Replace with actual type
      },
    });
    toast.success('Thanks for the review!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    setIsOpen(false);
    setDivOpen("");
    setValue("0");
    setReviewComment("");
    }
 
  };

  const handleReviewClick = (openDiv) => {
    if (isOpen) {
      console.log("already open");
    } else {
      setValue("0");
      setReviewComment("");
      setIsOpen(!isOpen);
    }

    setDivOpen(openDiv);
    console.log("clicked ", openDiv);
  };

  const Review = async (payload) => {
    console.log("payload cdta", payload);
    try {
      const response = await event.Review(payload);

      if (response) {
        console.log("Review submitted successfully");
        setExhibitorReview(response.data);
      } else {
        console.error("Error submitting review");
      }
    } catch (error) {
      console.error("Error in review submission", error);
    }
  };

  useEffect(() => {
    const fetchExhibitorDetails = async () => {
      try {
        const response = await event.Exhibitor({
          query: { _id: `${params.idx}` },
          sort: { name: 1 },
          populate: "eventId",
          page: 1,
          limit: 50,
        });
        const list = response?.data?.data[0] || [];
        if (response) {
          setExhibitorDetails(list);
        } else {
          console.log("error in storing");
        }
      } catch (error) {
        console.log("err in fetching in exhibitor", error);
      }
    };

    const fetchExhibitorDocs = async () => {
      try {
        const response = await event.Documents({
          query: { exhibitorId: `${params.idx}` },
          sort: { name: 1 },
          populate: "eventId",
          page: 1,
          limit: 50,
        });
        const list = response?.data?.data[0] || [];
        if (response) {
          setExhibitorDocs(list);
        } else {
          console.log("err in storing docs");
        }
      } catch (error) {
        console.log("err in fetching documents", error);
      }
    };

    fetchExhibitorDetails();
    fetchExhibitorDocs();
    // Review()
  }, []);

  // console.log("ex review", exhibitorReview);

  return (
    <div className="w-full ">
      <div className="flex flex-col md:flex-row mb-5 py-[1%] ">
        <div className=" flex flex-col md:flex-row basis-[40%] items-center ">
          <img src={exhibitorDetails?.image} className="h-[90%] w-full " />
        </div>

        <div className="flex flex-col basis-[60%] gap-1 px-[5%] md:py-0  py-[2%] justify-center ">
          <p className="md:text-[20px] font-semibold">
            Name : {exhibitorDetails?.name}
          </p>
          <p>Stall : {exhibitorDetails?.stall}</p>
          <p>Hall : {exhibitorDetails?.hall}</p>
          <div className="flex justify-between  md:flex-shrink mt-5 cursor-pointer">
            <div
              className="flex items-center gap-1 "
              id="review"
              onClick={() => handleReviewClick("review")}
            >
              <p
                className={` ${
                  divOpen === "review"
                    ? "bg-[#F7A600] py-2 px-4 flex items-center gap-1"
                    : "bg-white py-2 flex items-center gap-1"
                } `}
              >
                {" "}
                <MdOutlineRateReview /> Review
              </p>
            </div>
            <div className="flex items-center gap-1 ">
              <p className="bg-white py-2 flex items-center gap-1 cursor-pointer" >
              <Link href={`https://${exhibitorDetails?.website ? exhibitorDetails?.website : "" }`} target="_blank" >
              <TbWorldSearch /> Website </Link>
              </p>
            </div>
            <div
              className="flex items-center gap-1 "
              id="document"
              onClick={() => handleDocumentClick("document")}
            >
              <p
                className={`${
                  divOpen === "document"
                    ? "bg-[#F7A600] py-2 px-4 flex items-center gap-1"
                    : "bg-white py-2 flex items-center gap-1"
                }`}
              >
                <IoDocumentTextOutline /> Documents
              </p>
            </div>
          </div>
          {isOpen &&
            (divOpen === "review" ? (
              <div className="review-div flex flex-col justify-center ">
                <div className="py-2 px-5 ">
                  <div className="rating py-3">
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        size="large"
                        // defaultValue={2.5}
                        precision={0.5}

                        value={Number(value)} // Ensure it renders as a number
                        onChange={(event, newValue) => {
                          setValue(newValue.toString()); // Convert number to string before storing
                        }}
                      />
                    </Stack>
                  </div>
                  <Textarea
                    placeholder="write your review here...."
                    rows="3"
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                  />

                  <div className="buttons flex justify-end mt-2">
                    <button
                      className="py-1 px-4 bg-blue-400"
                      onClick={(e) => 
                        handleSubmit(e)
                      }
                    >
                      Submit
                    </button>
                    <button
                      className="py-1 px-4 bg-blue-400 ml-5"
                      onClick={() => {
                        
                        setIsOpen(false);
                        setDivOpen("");
                        setValue(0);
                        setReviewComment("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" w-full border-1 border-solid-red">
                {exhibitorDocs.length > 0 ? (
                  exhibitorDocs.map((docs) => (
                    <li className="border-1 border-solid-red">{docs.title}</li>
                  ))
                ) : (
                  <p className="flex justify-end">No document</p>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="px-[5%] flex flex-col gap-3 mb-5">
        <p className="font-bold text-[25px] md:text-[30px]">Description</p>
        <p className=" text-[15px] md:text-[20px]">
          {exhibitorDetails?.description}
        </p>
      </div>
    </div>
  );
}

export default page;
