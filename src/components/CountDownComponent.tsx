"use client"

import React from 'react'
import Countdown from 'react-countdown'

const endDate = new Date("2023-12-31")


const CountDownComponent = () => {
  return (
    <Countdown className="font-bold text-5xl text-yellow-300" date={endDate}/>
  )
}

export default CountDownComponent