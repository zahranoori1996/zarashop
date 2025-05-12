import { Link } from "react-router-dom";
import type { IACategory } from "../../types/Type";

function ACategory({ imageSrc, nameCategory, path, count }: IACategory) {
  return (
    <div className="border-[#EDEDED] border-2 p-4 flex rounded-xl w-[300px] min-w-[200px] justify-between max-sm:h-[70px] max-sm:w-[100vw]">
      <div className="flex gap-3">
        <div className="p-3 border-[#e3e3e3] border-2 rounded-md max-sm:p-1">
          <img className="w-[30px] max-sm:w-[20px]" src={imageSrc} />
        </div>
        <div className="text-left flex flex-col gap-4 max-sm:gap-1">
          <h3 className="font-semibold max-sm:text-[12px]">{nameCategory.toLocaleUpperCase()}</h3>
          <Link to={path} className="text-[12px] text-[#FF8F9C] max-sm:text-[9px]">
            Show All
          </Link>
        </div>
      </div>
      <div className="text-[11px] text-[#707070]">({count})</div>
    </div>
  );
}

export default ACategory;
