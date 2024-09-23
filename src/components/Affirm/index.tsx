"use client";
import React from "react";

interface AffirmProps {
  price: number; 
};

const Affirm: React.FC<AffirmProps> = (props): React.ReactElement => {
  return (
    <div>
      <p className="affirm-as-low-as" data-page-type="product" data-amount={props.price}></p>
    </div>
  );
};

export default Affirm;