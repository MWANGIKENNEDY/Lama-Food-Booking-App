import Image from 'next/image'
import React from 'react'
import CountDownComponent from './CountDownComponent'

function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:h-[70vh] md:justify-between md:bg-[url('/offerBg.png')]">
        {/* Text container */}

        <div className='flex-1 flex flex-col gap-8 justify-center items-center text-center text-white p-6'>

            <h1 className='font-bold text-5xl xl:text-6xl'>Delicious Burger & French Fry</h1>
            <p className='xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
            <CountDownComponent/>
            <button className='bg-red-500 text-white py-3 px-6 rounded-md'>Order Now</button>
        </div>



        {/* image container */}

        <div className='relative w-full flex-1 md:h-full'>
            <Image alt='my image' fill className='object-contain' src="/offerProduct.png"/>
        </div>
    </div>
  )
}

export default Offer