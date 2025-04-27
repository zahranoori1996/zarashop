
import { Link } from 'react-router-dom';
interface IProdcut {
  imageSrc : string;
  nameProduct : string;
  typeProduct : string;
  price : number;
  discount: number;
  path: string;
}
function MiniProductCard({imageSrc,nameProduct,typeProduct,price,discount,path}:IProdcut) {
  return (
    <Link to={path} className='flex border-2 border-gray-100 rounded-lg p-2 w-[300px] my-3'>
      <img className='w-[100px]' src={imageSrc}/>
      <div className='pl-2'>
      <h3 className='font-semibold line-clamp-1'>{nameProduct}</h3>
      <p className='text-gray-400'>{typeProduct}</p>
      <div className='flex gap-2'>
        <span className='text-red-400 font-semibold'>${price}.00</span> 
        <span className='line-through text-gray-400'>${price - discount}.00</span>
      </div>
      </div>
    </Link>
  )
}

export default MiniProductCard
