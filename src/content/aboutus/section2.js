import React from 'react'
import Card from '@/components/card/card'
import Heading from '@/components/heading/heading'
import Card2 from '@/components/card/card2'


function section2() {
  return (
    <div className='w-full block-1 bg-[#FFF1D2] py-[5%] '>

     <Heading head={"Our Purpose"} body={"Our mission and vision drive us towards a future where honest information is accessible to all students and institutions work towards their growth."} />

      <div className='row-2 md:flex  hidden md:items-center '>

        <div className='cards flex flex-col gap-10 basis-[50%] justify-center items-center md:px-[2%] '>

        <Card img={"/aboutus/mission.png"} head={"Mission"} body={"Our mission is aligned with the mission of QS, which is to enable people anywhere in the world to fulfil their dream through high quality education and career development."} />
        <Card img={"/aboutus/vision.png"} head={"Vision"} body={"Our vision is to be the leader in building world-class institutions in India through quality and excellence and a trusted partner to ambitious learners."}/>
       
        </div>

        <div className='purpose-img h-[100%] w-[100%] flex basis-[50%] '>
          <img src='./aboutus/purpose.png' className='h-[90%] w-[90%]'/>
        </div>

      </div>

      <div className='row-2 flex md:hidden items-center justify-center  '>

        <div className='cards flex flex-col gap-10 basis-[60%] justify-center items-center '>

        <Card img={"/aboutus/mission.png"} head={"Mission"} body={"Our mission is aligned with the mission of QS, which is to enable people anywhere in the world to fulfil their dream through high quality education and career development."} />
        <div className='purpose-img h-[100%] w-[100%] flex basis-[40%]'>
          <img src='./aboutus/purpose.png' className='h-[100%] w-[100%]'/>
        </div> 
        <Card img={"/aboutus/vision.png"} head={"Vision"} body={"Our vision is to be the leader in building world-class institutions in India through quality and excellence and a trusted partner to ambitious learners."}/>
       
        </div>

       

      </div>

      <div className='block-2 lg:py-5 py-[15%] '>

        <Heading head={"Our Values"} body={"Our values guide every aspect of our work, ensuring trustworthy evaluations and positive contributions to the education sector."}/>
      
        <div className='row-2 flex  justify-center   '>
      <div className='cards flex flex-col lg:flex-row lg:gap-3 basis-[60%] items-center gap-[5em] lg:ml-5 '> 
        
        <Card2 img={"/aboutus/Honesty.png"} head={"Honesty"} body={"Honesty implies our commitment to truthfulness and sincerity in all aspects of operations and reporting. "}/>
        <div className="bg-[#FFD683] md:h-35 lg:h-[15rem] w-0.5  md:rotate-180 hidden md:block" />

      <Card2 img={"/aboutus/Transp.png"} head={"Transparency"} body={"We promote openness and accessibility of information related to educational quality and performance. "}/>
      <div className="bg-[#FFD683] md:h-35 lg:h-[15rem] w-0.5  md:rotate-180 hidden md:block" />

      <Card2 img={"/aboutus/Integ.png"} head={"Integrity"} body={"Integrity is a fundamental value within QS I-GAUGE, emphasizing ethical behaviour, reliability, and consistency in educational practices."}/>
      <div className="bg-[#FFD683] md:h-35 lg:h-[15rem] w-0.5  md:rotate-180 hidden md:block" />

      <Card2 img={"/aboutus/Excellence.png"} head={"Excellence"} body={"Excellence is a central goal of the QS I-GAUGE framework, driving continuous improvement and innovation in higher education."}/>
      
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default section2
