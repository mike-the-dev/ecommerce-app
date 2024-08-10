"use client";

const Size: React.FC = (): React.ReactElement => {
  return (
    <div id="Variant">
      <div className="text-[16px] text-[#B9BBBF] mb-[16px]">Choose a Size</div>
      <div className="flex flex-row">
        <button className="flex flex-row items-center h-[31px] text-[14px] text-[#3A4980] font-medium bg-[#EDF0F8] rounded-[8px] px-[10px]">
          <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#EDF0F8] border-[1px] border-[#3A4980] rounded-[16px]">
            <div className="w-[10px] h-[10px] bg-[#3A4980] rounded-[10px]"></div>
          </div>
          <span className="ml-[8px]">Small</span>
        </button>
        <button className="flex flex-row items-center h-[31px] text-[14px] text-[#726C6C] font-medium bg-[#F3F3F3] rounded-[8px] px-[10px] ml-[10px]">
          <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#EDF0F8] border-[1px] border-[#726C6C] rounded-[16px]"></div>
          <span className="ml-[8px]">Medium</span>
        </button>
        <button className="flex flex-row items-center h-[31px] text-[14px] text-[#726C6C] font-medium bg-[#F3F3F3] rounded-[8px] px-[10px] ml-[10px]">
          <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#EDF0F8] border-[1px] border-[#726C6C] rounded-[16px]"></div>
          <span className="ml-[8px]">Large</span>
        </button>
        <button className="flex flex-row items-center h-[31px] text-[14px] text-[#726C6C] font-medium bg-[#F3F3F3] rounded-[8px] px-[10px] ml-[10px]">
          <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#EDF0F8] border-[1px] border-[#726C6C] rounded-[16px]"></div>
          <span className="ml-[8px]">Extra Large</span>
        </button>
        <button className="flex flex-row items-center h-[31px] text-[14px] text-[#726C6C] font-medium bg-[#F3F3F3] rounded-[8px] px-[10px] ml-[10px]">
          <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#EDF0F8] border-[1px] border-[#726C6C] rounded-[16px]"></div>
          <span className="ml-[8px]">XXL</span>
        </button>
      </div>
    </div>
  );
};

export default Size;