import Bag from "@/components/Icons/Bag";
import DeliveryTruck from "@/components/Icons/DeliveryTruck";

const DeliveryDetails: React.FC = (): React.ReactElement => {
  return (
    <div id="DeliveryDetails" className="mt-[30px]">
      <div className="border-[1px] border-[#E4E4E4] rounded-[14px] py-[17px] px-[17px]">
        <div>
          <div className="flex flex-row"><DeliveryTruck /><div className="text-[17px] text-[#1D364D] font-bold ml-[14px]">Free Delivery</div></div>
          <div className="text-[14px] text-[#726C6C] font-regular ml-[38px]">All delivery are free with orders over $100 or more.</div>
        </div> 
        <div className="w-full h-[1px] bg-[#E4E4E4] my-[21px]"></div>
        <div>
          <div className="flex flex-row"><Bag /><div className="text-[17px] text-[#1D364D] font-bold ml-[14px]">Free Delivery</div></div>
          <div className="text-[14px] text-[#726C6C] font-regular ml-[38px]">Free 30 days Delivery Return.</div>
        </div> 
      </div>
    </div>
  );
};

export default DeliveryDetails;