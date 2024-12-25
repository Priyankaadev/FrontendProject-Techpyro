import React from 'react'

//components
import DedicatedEventCard from '@/components/card/dedicatedEventCard'

function section1() {
  return (
  
   <DedicatedEventCard img={'/events/eventimg2.png'}
    time={'9:30 AM to 11:00 AM'}
    date={'02/04/2024'}
    mode={'In Person'}
    name={'Event Name'}
    place={'Delhi, India'}
    desc={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugi.'}
   
   
   />
  )
}

export default section1
