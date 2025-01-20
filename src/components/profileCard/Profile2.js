import React from 'react'

function Profile2({img, name, designation,type, city,id}) {
  
  return (
    <div className='w-full flex flex-col shadow-lg ' key={id}>
      <div className='h-[70%]'>
        <img src={img}  alt='committee member' className='w-full h-[100%]'/>
      </div>
      <div className='flex h-[30%] flex-col  justify-center p-5'>
        <p> {name}</p>
        <p> {designation}</p>
        <p> {type}</p>
        <p> {city}</p>
      
      </div>
    </div>
  )
}

export default Profile2
