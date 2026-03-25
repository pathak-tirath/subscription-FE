"use-client"
import React from 'react'

const Cards = ({children, color}:{children:React.ReactNode, color:string}) => {
  console.log(color)
  return (
    <div className={`rounded-2xl ${color} p-4 border border-gray-200 shadow-md w-full`}>
      {children}
    </div>
  )
}

export default Cards