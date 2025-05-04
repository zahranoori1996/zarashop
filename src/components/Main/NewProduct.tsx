
import { Link } from "react-router-dom";
interface INewProduct{
    path: string;
    urlImage : string;
    typeProduct : string;
    nameProduct: string;
    price :number;
    offPrice: number;

}
function NewProduct({urlImage,typeProduct,nameProduct,price,offPrice,path}:INewProduct) {
  return (
    <div  className="w-[230px] max-md:w-[50vw] max-sm:w-[100vw]  p-4 shadow rounded-lg flex flex-col gap-1 ">
      <Link to={path}>
      <img src={urlImage} alt="" />
      </Link>
      <h2 className="uppercase text-sm text-[#FF8F9C] font-semibold">{typeProduct}</h2>
      <p className="text-gray-500">{nameProduct}</p>
      <div className="flex">
        <img src="./src/assets/icons/star.svg"/>
        <img src="./src/assets/icons/star.svg"/>
        <img src="./src/assets/icons/star.svg"/>
        <img src="./src/assets/icons/star.svg"/>
        <img src="./src/assets/icons/star.svg"/>
      </div>
      <div>
        <span className="font-bold pr-2">${offPrice}.00</span>
        <span className="line-through text-gray-600 text-sm">${price}.00</span>
      </div>
    </div>
  );
}

export default NewProduct;
