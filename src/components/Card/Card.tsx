import React from 'react'
interface ICard {
    heading: string;
    children: React.ReactNode;
    className?: string;
}
function Card({heading,children,className}:ICard) {
  return (
    <div className={className}>
      <h2 className='border-b-2 border-b-gray-100 mb-3 pb-4'>{heading}</h2>
      <div className='shadow px-6 py-9 rounded-md w-[100%] max-lg:px-2 max-lg:py-3'>
        {children}
      </div>
    </div>
  )
}

export default Card
