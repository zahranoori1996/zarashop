import React from 'react'
import NewProduct from './NewProduct'

function NewProducts() {
    const newProducts = [
        {
          id: 1,
          nameProduct: "Men’s Winter Leathers Jackets",
          urlImage: "./src/assets/images/men-winter-2.png",
          path: "/clothes",
          typeProduct: 'jacket',
          rating: 5,
          price: 75.00,
          offPrice: 45.00,
        },
        {
          id: 2,
          nameProduct: "Pure Garment Dyed Cotton Shirt",
          urlImage: "./src/assets/images/pure-garment.png",
          path: "/glasses",
          typeProduct: 'shirt',
          rating: 4.5,
          price: 56.00,
          offPrice: 45.00,
        },
        {
          id: 3,
          nameProduct: "MEN Yarn Fleece Full Zip Jacket",
          urlImage: "./src/assets/images/men-yarn.png",
          path: "/footwear",
          typeProduct: 'jacket',
          rating: 4.5,
          price: 65.00,
          offPrice: 58.00,
        },
        {
          id: 4,
          nameProduct: "Black Floral Skirt",
          urlImage: "./src/assets/images/black-floral.png",
          path: "/cosmetics",
          typeProduct: 'skirt',
          rating: 5,
          price: 35.00,
          offPrice: 25.00,
        },
        {
          id: 5,
          nameProduct: "Casual Men’s BrownShoes",
          urlImage: "./src/assets/images/casual.png",
          path: "/cosmetics",
          typeProduct: 'casual',
          rating: 5,
          price: 65.00,
          offPrice: 58.00,
        },
        {
          id: 6,
          nameProduct: "Pocket Watch Leather Pouch",
          urlImage: "./src/assets/images/watches-gold.png",
          path: "/cosmetics",
          typeProduct: 'watches',
          rating: 5,
          price: 85.00,
          offPrice: 70.00,
        },
        {
          id: 7,
          nameProduct: "Smart Watch VitalPlus",
          urlImage: "./src/assets/images/smart-watch.png",
          path: "/cosmetics",
          typeProduct: 'watches',
          rating: 5,
          price: 65.00,
          offPrice: 58.00,
        },
        {
          id: 8,
          nameProduct: "Women’s Party Wear Shoes",
          urlImage: "./src/assets/images/shoe-women.png",
          path: "/cosmetics",
          typeProduct: 'party wear',
          rating: 5,
          price: 64.00,
          offPrice: 58.00,
        },
        {
          id: 9,
          nameProduct: "Men’s Winter Leathers Jackets",
          urlImage: "./src/assets/images/men-winter.png",
          path: "/cosmetics",
          typeProduct: 'jacket',
          rating: 5,
          price: 65.00,
          offPrice: 58.00,
        },
        {
          id: 10,
          nameProduct: "Trekking & Running Shoes - Black",
          urlImage: "./src/assets/images/trekking-black.png",
          path: "/cosmetics",
          typeProduct: 'sport',
          rating: 5,
          price: 64.00,
          offPrice: 58.00,
        },
        {
          id: 11,
          nameProduct: "Men’s Leather Formal Wear Shoes",
          urlImage: "./src/assets/images/mens-leather.png",
          path: "/cosmetics",
          typeProduct: 'formal',
          rating: 5,
          price: 65.00,
          offPrice: 58.00,
        },
        {
          id: 12,
          nameProduct: "Better Basics French Terry Sweatshorts",
          urlImage: "./src/assets/images/better-basics.png",
          path: "/cosmetics",
          typeProduct: 'shorts',
          rating: 5,
          price: 86.00,
          offPrice: 70.00,
        },
      ];
  return (
<div className=''>
    <h2 className='border-b-2 border-b-gray-100 py-2 font-bold text-lg'>New Products</h2>
<div className='flex flex-wrap gap-5 justify-between py-5'>
   {
    newProducts.map((product,index)=>(
        <NewProduct key={index} {...product} />
    ))
   }
    
    </div>
</div>
  )
}

export default NewProducts
