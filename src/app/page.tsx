import BreadCrumb from "@/components/DefaultPage/Breadcrumb";
import Carousel from "@/components/DefaultPage/Carousel";
import Header from "@/components/DefaultPage/Header";
import Divider from "@/components/Divider";
import Spacer from "@/components/Spacer";
import PriceReview from "@/components/DefaultPage/PriceReview";
import Variant from "@/components/DefaultPage/Variant";
import Size from "@/components/DefaultPage/Variant/Size";
import ButtonGroup from "@/components/DefaultPage/ButtonGroup";
import DeliveryDetails from "@/components/DefaultPage/DeliveryDetails";
import ProductDetail from "@/components/DefaultPage/ProductDetail";

export default function Home() {
  return (
    <div className="w-[1300px] m-auto pt-[40px]">
      {/* Row */}
      <div className="flex flex-row">
        {/* Column */}
        <div className="w-full">
          {/* Carousel */}
          <Carousel />
        </div>
        {/* Column */}
        <div className="w-full">
          <BreadCrumb step="product" />
          <Header />
          <Divider y={30} />
          <PriceReview />
          <Divider y={30} />
          <Variant />
          <Divider y={30} />
          <Size />
          <Divider y={30} />
          <ButtonGroup />
          <DeliveryDetails />
        </div>
      </div>
      <Spacer y={70} />
      {/* Row */}
      <div className="flex flex-row">
        {/* Column */}
        <div className="w-full">
          <ProductDetail />
        </div>
      </div>
    </div>
  );
}
