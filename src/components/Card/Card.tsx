import React from 'react'
interface ICard {
    heading: string;
    children: React.ReactNode;
}
function Card({heading,children}:ICard) {
  return (
    <div>
      <h2 className='border-b-2 border-b-gray-100'>{heading}</h2>
      <div className='shadow px-4 py-6'>
        {children}
      </div>
    </div>
  )
}

export default Card
