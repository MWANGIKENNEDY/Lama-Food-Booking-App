import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 text-red-500 lg:p-20 xl:p-40 flex justify-between items-center'>
      <Link  href="/"className='font-bold text-xl' >MASSIMIO</Link>
      <p>All rights reserved</p>
      
    </div>
  )
}

export default Footer