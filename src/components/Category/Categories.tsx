
import Category from './Category';

function Categories() {
    const dataCategory = [
        {
          id: 1,
          nameCategory: "Clothes",
          iconCategory: "./src/assets/icons/dress.png",
          path: "/clothes",
        },
        {
          id: 2,
          nameCategory: "glasses",
          iconCategory: "./src/assets/icons/glasses.png",
          path: "/glasses",
        },
        {
          id: 3,
          nameCategory: "Footwear",
          iconCategory: "./src/assets/icons/footwear.png",
          path: "/footwear",
        },
        {
          id: 4,
          nameCategory: "cosmetics",
          count: 30,
          iconCategory: "./src/assets/icons/cosmetics.png",
          path: "/cosmetics",
        },
        {
          id: 5,
          nameCategory: "bags",
          count: 30,
          iconCategory: "./src/assets/icons/bags.png",
          path: "/bags",
        },
        {
          id: 6,
          nameCategory: "perfume",
          count: 30,
          iconCategory: "./src/assets/icons/perfume.png",
          path: "/perfume",
        },
        {
          id: 7,
          nameCategory: "Jewellery",
          iconCategory: "./src/assets/icons/jewellery.png",
          path: "/jewellery",
        },
      ];
      let h2Title = 'category';
  return (
    <>
    
        
       <div className='flex flex-col gap-5 shadow w-[250px] h-fit p-6 rounded-lg border-2 border-gray-100'>
       <h2 className='font-bold text-lg'>{h2Title.toLocaleUpperCase()}</h2>
       {
            dataCategory.map((category,index) => (
                <Category key={index} {...category}/>
            ))
        }
       </div>
     
    </>
  )
}

export default Categories
