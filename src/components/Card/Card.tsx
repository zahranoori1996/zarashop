import React from 'react'
interface ICard {
    heading: string;
    children: React.ReactNode;
}
function Card({heading,children}:ICard) {
  return (
    <div className='flex flex-col'>
      <h2 className='border-b-2 border-b-gray-100 mb-3 pb-4'>{heading}</h2>
      <div className='shadow px-6 py-9 rounded-md w-[300px]'>
        {children}
      </div>
    </div>
  )
}

export default Card
