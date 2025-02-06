import React from 'react'

function EventVideo({vid, head, body}) {
  // const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className='outer h-auto w-full mb-[5%] md:mb-0 bg-white  flex flex-col '>
      <div className='flex basis-[30%] card-img  md:items-center md:justify-center'>
      <video  width="400" controls autoplay loop>
      <source src={vid} type="video/mp4" />
        </video>
         {/* <iframe
          width= {window.innerWidth> 750?"250":"400"}
          height='200'
          src={videoUrl}
          frameBorder="0"
          title="YouTube video"
          allow="accelerometer controls encrypted-media gyroscope picture-in-picture"
          
        ></iframe> */}
      </div>
      <div className='flex basis-[60%] flex-col justify-center'>
      <p className='font-semibold text-[20px]'>{head}</p>
      <p className='card-body text-[12px] max-w-[400px]'>{body}</p>
      </div>
    </div>
  )
}

export default EventVideo