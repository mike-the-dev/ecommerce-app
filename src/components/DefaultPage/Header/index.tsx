import Bookmark from "@/components/Icons/Bookmark";
import Heart from "@/components/Icons/Heart";
import Share from "@/components/Icons/Share";

const Header: React.FC = (): React.ReactElement => {
  return (
    <div id="Header">
      <div className="flex flex-row mt-[30px]">
        {/* Title & sub title */}
        <div className="w-full">
          <h1 className="text-[28px] font-semibold mb-[11px]">Embrace Sideboard</h1>
          <span className="text-[16px] font-normal text-[#B9BBBF]">Michael Studio Design</span>
        </div>
        {/* Helpers */}
        <div className="flex flex-row justify-end">
          <div className="flex justify-between h-[34px] items-center text-[#D46F77] bg-[#FFF0F0] px-[10px] mr-[20px] rounded-[10px]">
            <Heart /><span className="text-[16px] font-semibold">109</span>
          </div>
          <div className="flex justify-between h-[34px] items-center bg-[#EDF0F8] px-[7px] rounded-[10px] mr-[20px]">
            <Bookmark />
          </div>
          <div className="flex justify-between h-[34px] items-center bg-[#EDF0F8] px-[7px] rounded-[10px]">
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;