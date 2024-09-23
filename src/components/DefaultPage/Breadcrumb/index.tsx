"use client";

import ArrowRight from "@/components/Icons/ArrowRight";
import { Fragment } from "react";

interface BreadCrumbProps {
  step: "product" | "billing" | "payment" | "confirmation";
};

interface Crumb {
  index: number;
  id: string;
  title: string;
  step: string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = (props): React.ReactElement => {
  const crumbs: Crumb[] = [
    {
      index: 0,
      id: "01",
      title: "Product",
      step: "product"
    },
    {
      index: 1,
      id: "02",
      title: "Billing",
      step: "billing"
    },
    {
      index: 2,
      id: "03",
      title: "Payment",
      step: "payment"
    },
    {
      index: 3,
      id: "04",
      title: "Confirmation",
      step: "confirmation"
    }
  ];

  const renderCrumbs = (): React.ReactElement[] => crumbs.map((crumb, index) => {
    if (crumb.index === 0 || crumb.index === 3) return (
      <div
        className=""
        style={{
          color: crumb.index === index && props.step === crumb.step ? "#3A4980" : "#A3A9C2",
          fontWeight: crumb.index === index && props.step === crumb.step ? "bold" : "normal"
        }}
        key={crumb.index}>{crumb.title}
      </div>
    );

    return (
      <Fragment key={crumb.index}>
        <div className="flex">
          <ArrowRight color={"#A3A9C2"} />
        </div>
        <div
          className="text-[#A3A9C2]"
          style={{
            color: crumb.index === index && props.step === crumb.step ? "#3A4980" : "#A3A9C2",
            fontWeight: crumb.index === index && props.step === crumb.step ? "bold" : "normal"
          }} >{crumb.title}
        </div>
        {crumb.index === 2 ? (
          <div className="flex">
            <ArrowRight color={"#A3A9C2"} />
          </div>
        ) : null}
      </Fragment>
    );
  });

  return (
    <div id="bread-crumb">
      <div className="flex flex-row max-w-[495px] h-[33px] items-center justify-between  bg-[#EDF0F8] px-[12px] rounded-[8px]">
        {renderCrumbs()}
      </div> 
    </div>
  );
};

export default BreadCrumb;
