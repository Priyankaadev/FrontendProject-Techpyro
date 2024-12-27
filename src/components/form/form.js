import React from 'react'
 
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

function form() {
  return (
    <div className=' form-container bg-white p-[5%] '>
      <div className='form-items grid grid-cols-2 grid-flow-row gap-5 mb-5'>
        <Input type="text" placeholder="Name"
        
        />
        <Input type="email" placeholder="E-mail"
        
        />
        <Input type="text" placeholder="City"
        
        />
        <Input type="number" placeholder="Phone Number"
        
        />
        <Input type="text" placeholder="Apply role"
        
        />
        <Input  type="file" name="file" accept="file/*" placeholder="Upload Resume"
        
        />
      </div>

     <div className='mb-5'>
      <Textarea placeholder="Type your message here." rows="6" />
      </div>

      <div className='w-full flex justify-center  '>
        <button className='bg-[#272761] text-white w-full p-2'>Submit</button>
     </div>
    </div>
  )
}

export default form