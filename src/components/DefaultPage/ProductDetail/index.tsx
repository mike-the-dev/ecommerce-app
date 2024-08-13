"use client";
import React from "react";
import SubNavigation from "@/components/DefaultPage/SubNavigation";
import ProductDescription from "@/components/DefaultPage/ProductDescription";
import Spacer from "@/components/Spacer";
import ProductReview from "@/components/DefaultPage/ProductReview";

interface ProductDetailProps {

};

const ProductDetail: React.FC<ProductDetailProps> = (): React.ReactElement => {
  const [state, setState] = React.useState({
    index: 0,
  });

  const updateIndex = (index: number): void => {
    setState((prevState) => ({ ...prevState, index: index }));
  };

  const renderSection = (): React.ReactElement => {
    if (state.index === 1) return <ProductReview />;

    return (
      <ProductDescription /> 
    );
  };

  return (
    <>
      <SubNavigation index={state.index} updateIndex={updateIndex} />
      <Spacer y={48} />
      { renderSection() }
    </>
  );
};

export default ProductDetail;