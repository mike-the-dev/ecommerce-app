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
    name: "biege",
    color: "#ECDECC",
  },
  {
    index: 1,
    id: "2",
    name: "green",
    color: "#BBD278",
  },
  {
    index: 2,
    id: "3",
    name: "purple",
    color: "#BBC1F8",
  },
  {
    index: 3,
    id: "4",
    name: "pink",
    color: "#FFD3F8",
  },
  {
    index: 4,
    id: "5",
    name: "red",
    color: "#FFB6B6",
  }
];

const Variant: React.FC<VariantProps> = (props): React.ReactElement => {
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
      <button key={index} onClick={onSelectVariant(index)}>
        <div className="flex justify-center items-center w-[64px] h-[64px] rounded-[64px]" style={{ border: 3, borderColor: variant.color, borderStyle: "solid", backgroundColor: "#FFF"}}>
          <div className="w-[50px] h-[50px] rounded-[50px]" style={{ backgroundColor: variant.color }}></div>
        </div>
      </button>
    );

   return (
      <button key={index} onClick={onSelectVariant(index)}>
       <div className="flex justify-center items-center w-[64px] h-[64px] rounded-[64px]" style={{ border: 3, borderColor: "#FFF", borderStyle: "solid", backgroundColor: "#FFF" }}>
         <div className="w-[50px] h-[50px] rounded-[50px]" style={{ backgroundColor: variant.color }}></div>
       </div>
      </button>
   );
  });

  return (
    <div id="Variant">
      <div className="text-[16px] text-[#B9BBBF] mb-[16px]">Choose a Color</div>
      <div className="flex flex-row w-[368px] justify-between">
        {renderVariants()}
      </div>
    </div>
  );
};

export default Variant;