import React from 'react'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'

function PagesLayout({children}) {
  return (
    <div>
      <Header />{children}
<Footer />
    </div>
  )
}

export default PagesLayout
