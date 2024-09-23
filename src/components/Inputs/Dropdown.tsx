"use client";
import React from "react";
import { FieldApi } from "@tanstack/react-form";
import { BillingInformation } from "../Forms/BillingForm";
import ArrowRight from "@/components/Icons/ArrowRight";

interface SelectProps {
  field: FieldApi<BillingInformation, "state", undefined, undefined, string>;
  items: any[];
};

const Select: React.FC<SelectProps> = (props): React.ReactElement => {
  const myRef = React.useRef<HTMLSelectElement>(null);

  return (
    <div>
      <select 
        style={{ visibility: "hidden", position: "absolute" }}
        id="cars" 
        name="cars" 
        ref={myRef}
        onChange={(event) => props.field.handleChange(event.target.value)}
      >
        {
          props.items.map((item, index) => (
            <option 
              key={index}
              value={item}>
                {item}
            </option>
          ))
        }
      </select>
      <button
        className="flex items-center flex-row w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px] cursor-pointer text-left"
        onChange={e => e.preventDefault()}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onClick={(e) => {
          e.preventDefault();
          myRef.current?.showPicker()
        }}
      >
        <label className="w-full" style={{ opacity: props.field.state.value === "" ? 0.5 : 1 }}>
          {props.field.state.value ? props.field.state.value : props.field.name[0].toUpperCase() + props.field.name.replace("s", "")}
        </label>
        <span className="rotate-90"><ArrowRight color={"#A3A9C2"} /></span>
      </button>
    </div>
  );
};

export default Select;