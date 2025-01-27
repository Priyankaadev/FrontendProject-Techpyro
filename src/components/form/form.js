'use client'
import React, { useState } from 'react'
 
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

function form() {
  const handleSubmit = () => {
    console.log('submitted', values)
   

  }
  const [values, setValues] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    role: '',
    file: '',
    message: ''
  })
  return (
    <div className=' form-container bg-white p-[5%] '>
      <div className='form-items grid grid-cols-2 grid-flow-row gap-5 mb-5'>
        <Input type="text" placeholder="Name" values={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })}
        
        />
        <Input type="email" placeholder="E-mail" values={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
        
        />
        <Input type="text" placeholder="City" values={values.city} onChange={(e) => setValues({ ...values, city: e.target.value })}
        
        />
        <Input type="number" placeholder="Phone Number" values={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })}
        
        />
        <Input type="text" placeholder="Apply role" values={values.role} onChange={(e) => setValues({ ...values, role: e.target.value })}
        
        />
        <Input  type="file" name="file" accept="file/*" placeholder="Upload Resume" values={values.file} onChange={(e) => setValues({ ...values, file: e.target.value })}
        
        />
      </div>

     <div className='mb-5'>
      <Textarea placeholder="Type your message here." rows="6" values={values.message} onChange={(e)=>setValues({...values, message: e.target.value})} />
      </div>

      <div className='w-full flex justify-center  '>
        <button className='bg-[#272761] text-white w-full p-2' onClick={()=>{handleSubmit(values)}}>Submit</button>
     </div>
    </div>
  )
}

export default form