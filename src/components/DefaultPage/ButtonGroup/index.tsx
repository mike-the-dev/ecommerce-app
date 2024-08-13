"use client";
import React from "react";

const ButtonGroup: React.FC = (): React.ReactElement => {
  const [state, setState] = React.useState<number>(1);

  const decrement = () => {
    if (state === 1) return;
    setState(prevState => prevState - 1 );
  };
  
  const increment = () => {
    setState(prevState => prevState + 1);
  };

  return (
    <div id="ButtonGroup">
      <div className="flex flex-row">
        <div className="flex flex-row w-[169px] h-[59px] bg-[#F3F3F3] rounded-[30px]">
          <button onClick={decrement} className="w-[60px]">-</button>
          <div className="flex flex-1 items-center justify-center">{state}</div>
          <button onClick={increment} className="w-[60px]">+</button>
        </div>
        <button className="w-[309px] h-[59px] bg-[#3A4980] text-[16px] text-[#FFF] font-semibold rounded-[30px] ml-[20px]">Buy It Now</button>
      </div>
    </div>
  );
};

export default ButtonGroup;