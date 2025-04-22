import { Link } from "react-router-dom";
interface IACategory {
  imageSrc: string;
  nameCategory: string;
  path: string;
  count: number;
}
function ACategory({ imageSrc, nameCategory, path, count }: IACategory) {
  return (
    <div className="border-[#EDEDED] border-2 p-4 flex rounded-xl w-[300px] min-w-[200px] justify-between">
      <div className="flex gap-3">
        <div className="p-3 border-[#e3e3e3] border-2 rounded-md">
          <img className="w-[30px]" src={imageSrc} />
        </div>
        <div className="text-left flex flex-col gap-4">
          <h3 className="font-semibold ">{nameCategory}</h3>
          <Link to={path} className="text-[12px] text-[#FF8F9C]">
            Show All
          </Link>
        </div>
      </div>
      <div className="text-[11px] text-[#707070]">({count})</div>
    </div>
  );
}

export default ACategory;
