
const Variant: React.FC = (): React.ReactElement => {
  return (
    <div id="Variant">
      <div className="text-[16px] text-[#B9BBBF] mb-[16px]">Choose a Color</div>
      <div className="flex flex-row">
        <div className="w-[50px] h-[50px] bg-[#ECDECC] rounded-[50px] mr-[8px]">
          <div></div>
        </div>
        <div className="w-[50px] h-[50px] bg-[#BBD278] rounded-[50px] mx-[8px]"></div>
        <div className="w-[50px] h-[50px] bg-[#BBC1F8] rounded-[50px] mx-[8px]"></div>
        <div className="w-[50px] h-[50px] bg-[#FFD3F8] rounded-[50px] mx-[8px]"></div>
        <div className="w-[50px] h-[50px] bg-[#FFB6B6] rounded-[50px] ml-[8px]"></div>
      </div>
    </div>
  );
};

export default Variant;