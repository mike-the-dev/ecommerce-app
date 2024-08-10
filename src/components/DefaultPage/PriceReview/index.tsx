import Star from "@/components/Icons/Star"
import Comment from "@/components/Icons/Comment";

const PriceReview: React.FC = (): React.ReactElement => {
  return (
    <div id="PriceReview">
      <div className="flex flex-row">
        {/* Prices Column */}
        <div className="flex flex-col">
          <span className="text-[34px] font-bold text-[#3A4980]">71.56</span>
          <span className="text-[21px] text-[rgba(0,0,0,0.5)] line-through">$71.56</span>
        </div>
        {/* Review Column */}
        <div className="pl-[74px]">
          <div className="flex flex-row">
            <div className="flex flex-row items-center h-[31px] bg-[#FBF3EA] px-[10px] rounded-[27px] text-[14px] text-[#D48D3B] font-semibold"><Star /><span className="ml-[7px]">4.8</span></div>
            <div className="flex flex-row items-center h-[31px] bg-[#EDF0F8] px-[10px] rounded-[27px] text-[14px] text-[#3A4980] font-semibold ml-[12px]"><Comment /><span className="ml-[7px]">67 Reviews</span></div>
          </div>
          <div className="text-[14px] text-[#B9BBBF] font-regular mt-[26px]"><span className="text-[#3E9242] font-bold">93%</span> of buyers have recommended this.</div>
        </div>
      </div>
    </div>
  );
};

export default PriceReview;