import React from 'react'
import DialNumber from './DialNumber'

const Notifications = () => {
  return (
    <div className='h-12 text-center text-sm md:text-base cursor-pointer bg-red-400 text-white px-4 flex items-center justify-center'>
      Free delivery for all orders over $50. Order your food now.

      <DialNumber></DialNumber>
    </div>
  )
}

export default Notifications