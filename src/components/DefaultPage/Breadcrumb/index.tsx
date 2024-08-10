"use client";

import ArrowRight from "@/components/Icons/ArrowRight";

const BreadCrumb: React.FC = (): React.ReactElement => {
  return (
    <div id="bread-crumb">
      <div className="flex flex-row max-w-[495px] h-[33px] items-center justify-between  bg-[#EDF0F8] px-[12px] rounded-[8px]">
        <div className="text-[#A3A9C2]">Home</div>
        <div className="flex">
          <ArrowRight color={"#A3A9C2"} />
        </div>
        <div className="text-[#A3A9C2]">Decoration</div>
        <div className="flex">
          <ArrowRight color={"#A3A9C2"} />
        </div>
        <div className="text-[#A3A9C2]">Furniture</div>
        <div className="flex">
          <ArrowRight color={"#A3A9C2"} />
        </div>
        <div className="text-[#A3A9C2]">Storage</div>
        <div className="flex">
          <ArrowRight color={"#A3A9C2"} />
        </div>
        <div className="text-[#3A4980] font-bold">Item</div>
      </div> 
    </div>
  );
};

export default BreadCrumb;
