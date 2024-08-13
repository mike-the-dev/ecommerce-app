"use client";
import React from "react";

interface VariantProps {

};

interface VariantState {
  isSelected: number;
  variants: any[];
};

type OnSelectVariant = () => void;

const data = [
  {
    index: 0,
    id: "1",
    name: "small",
    display: "Small",
  },
  {
    index: 1,
    id: "2",
    name: "medium",
    display: "Medium",
  },
  {
    index: 2,
    id: "3",
    name: "large",
    display: "Large",
  },
  {
    index: 3,
    id: "4",
    name: "extra-large",
    display: "Extra Large",
  },
  {
    index: 4,
    id: "5",
    name: "xxl",
    display: "XXL",
  }
];

const Size: React.FC = (): React.ReactElement => {
  const [state, setState] = React.useState<VariantState>({
    isSelected: 0,
    variants: data
  });

  const onSelectVariant = (index: number): OnSelectVariant => {
    return (): void => {
      setState(prevState => ({
        ...prevState,
        isSelected: index,
      }))
    }
  };

  const renderVariants = (): React.ReactElement[] => state.variants.map((variant, index) => {
    if (state.isSelected === index) return (
      <button 
        key={index} 
        onClick={onSelectVariant(index)} 
        className="flex flex-row items-center h-[31px] text-[14px] text-[#3A4980] font-medium bg-[#EDF0F8] rounded-[8px] px-[10px]"
      >
        <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#EDF0F8] border-[1px] border-[#3A4980] rounded-[16px]">
          <div className="w-[10px] h-[10px] bg-[#3A4980] rounded-[10px]"></div>
        </div>
        <span className="ml-[8px]">{variant.display}</span>
      </button>
    );

    return (
      <button 
        key={index} 
        onClick={onSelectVariant(index)} 
        className="flex flex-row items-center h-[31px] text-[14px] text-[#726C6C] font-medium bg-[#F3F3F3] rounded-[8px] px-[10px]"
      >
        <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#EDF0F8] border-[1px] border-[#726C6C] rounded-[16px]"></div>
        <span className="ml-[8px]">{variant.display}</span>
      </button>
    );
  });

  return (
    <div id="Variant">
      <div className="text-[16px] text-[#B9BBBF] mb-[16px]">Choose a Size</div>
      <div className="flex flex-row w-[497px] justify-between">
        {renderVariants()}
      </div>
    </div>
  );
};

export default Size;