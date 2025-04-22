import React from 'react'
interface ICategory {
  iconCategory : string;
  nameCategory : string;

}
function Category({iconCategory,nameCategory} : ICategory) {
  return (
    <div className='w-[200px] flex justify-between '>
     <div className='flex gap-2'>
     <img className='w-6' src={iconCategory} />
      <h3 className='text-gray-500 font-semibold'>{nameCategory[0].toLocaleUpperCase() + nameCategory.substring(1)}</h3>
      
     </div>
     <img className='cursor-pointer' src='./src/assets/icons/add.svg'/>
    </div>
  )
}

export default Category
