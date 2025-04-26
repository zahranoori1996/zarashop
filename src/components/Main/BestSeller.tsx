import React from 'react'
import ProductOff from './ProductOff';

function BestSeller() {
  const dataProductsOff = [
    {
      id: 1,
      title: "Baby Fabric Shoes",
      image: "./src/assets/images/baby-fabric.png",
      path: "/clothes",
      rating: 5,
      price: 6.00,
      off: 2.00,
    },
    {
      id: 2,
      title: "Men’s Hoodie",
      image: "./src/assets/images/mens-hoodie.png",
      path: "/glasses",
      rating: 4.5,
      price: 15.00,
      off: 7.00,
    },
    {
      id: 3,
      title: "Girl T-Shirt",
      image: "./src/assets/images/girl-tshirt.png",
      path: "/footwear",
      rating: 4.5,
      price: 6.00,
      off: 3.00,
    },
    {
      id: 4,
      title: "Woolen Hat For Men",
      image: "./src/assets/images/woolen-hat.png",
      path: "/cosmetics",
      rating: 5,
      price: 10.00,
      off: 2.00,
    },
  ];
  let h2Title = 'Best Seller';
  return (
    <>
    
        
    <div className='flex flex-col gap-5 w-[250px] h-fit pt-6'>
    <h2 className='font-bold text-lg'>{h2Title.toLocaleUpperCase()}</h2>
    {
         dataProductsOff.map((product,index) => (
             <ProductOff key={index} {...product}/>
         ))
     }
    </div>
  
 </>
  )
}

export default BestSeller
