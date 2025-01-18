import React from 'react'

function committeeProfile({img, name, designation,type, city,id}) {
  
  return (
    <div className='w-full flex flex-col shadow-lg ' key={id}>
      <div className='h-[70%]'>
        <img src={img}  alt='committee member' className='w-full h-[100%]'/>
      </div>
      <div className='flex h-[30%] flex-col px-5 justify-center gap-2 mb-5 mt-4'>
        <p>Name: {name}</p>
        <p>Designation: {designation}</p>
        <p>Committee : {type}</p>
        <p>Place: {city}</p>
        

      </div>
    </div>
  )
}

export default committeeProfile
