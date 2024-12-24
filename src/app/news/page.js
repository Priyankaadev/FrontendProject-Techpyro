import Heading from '@/components/heading/heading'
import React from 'react'
//constant js file
import { news } from '@/constant/news';
//component
import NewsCard from '@/components/card/newsCard';
import Register from '@/components/register/register';

function page() {
  return (
    <div className='container mb-[2%]'>
      <Heading head={"News"} 
      body={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"}/>

      <div className='row1 flex flex-col px-[4%] justify-center md:grid md:grid-cols-2  lg:grid lg:grid-cols-3 lg:px-[5%]  md:gap-[5%] md:px-[2%]  '>
        {news.map(( item)=>(
             <NewsCard img={item.img} date={item.date} desc={item.desc}  name={item.name}/>
           ))}
     
        </div>

        <Register />
   
    </div>
  )
}

export default page
