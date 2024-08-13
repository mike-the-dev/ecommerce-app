import Check from "@/components/Icons/Check";
import React from "react";

interface ProductDescriptionProps {

};

const ProductDescription: React.FC<ProductDescriptionProps> = (props): React.ReactElement => {
  return (
    <div id="ProductDescription">
      <div className="w-[1054px">
        <div className="product-description mb-[40px]">
          <h3 className="text-[#344054] text-[24px] font-bold mb-[21px]">Product Description</h3>
          <p className="text-[#667085] text-[16px]" style={{ lineHeight: "27.2px" }}>When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge.</p>
        </div>
        <div className="benifits mb-[40px]">
          <h3 className="text-[#344054] text-[24px] font-bold mb-[21px]">Benefits</h3>
          <ul>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Durable leather is easily cleanable so you can keep your look fresh.</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Water-repellent finish and internal membrane help keep your feet dry.</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Toe piece with star pattern adds durability.</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Synthetic insulation helps keep you warm.</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Originally designed for performance hoops, the Air unit delivers lightweight cushioning.</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Plush tongue wraps over the ankle to help keep out the moisture and cold.</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Rubber outsole with aggressive traction pattern adds durable grip.</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Durable leather is easily cleanable so you can keep your look fresh.</li>
          </ul>
        </div>
        <div className="product-details mb-[40px]">
          <h3 className="text-[#344054] text-[24px] font-bold mb-[21px]">Product Details</h3>
          <ul>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Not intended for use as Personal Protective Equipment (PPE)</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Water-repellent finish and internal membrane help keep your feet dry.</li>
          </ul>
        </div>
        <div className="more-details mb-[40px]">
          <h3 className="text-[#344054] text-[24px] font-bold mb-[21px]">More Details</h3>
          <ul>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Lunarlon midsole delivers ultra-plush responsiveness</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Encapsulated Air-Sole heel unit for lightweight cushioning</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Colour Shown: Ale Brown/Black/Goldtone/Ale Brown</li>
            <li className="flex flex-row items-center text-[#667085] text-[16px] mb-[14px]" style={{ lineHeight: "27.2px" }}><div className="flex items-center justify-center w-[20px] h-[20px] bg-[#E7F4FC] rounded-[20px] mr-[14px]"><Check /></div>Style: 805899-202</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;