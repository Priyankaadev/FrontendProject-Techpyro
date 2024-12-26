import React from 'react'

//components
import Heading2 from '@/components/heading/heading2'
import Heading from '@/components/heading/heading'

function section1() {
  return (
    <div className='container'>
      <Heading head={"Careers"}
       body={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"}
       />
       <div className='flex flex-col md:flex-row-reverse items-center'>
        <img src='/career/career.png' className='md:h-[40%] md:w-[40%] bg-cover' />
        <Heading2 body={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam'}
        head={"Work With I-GAUGE"}  
        />
       </div>
    </div>
  )
}

export default section1
