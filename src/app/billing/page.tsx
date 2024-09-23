import Affirm from "@/components/Affirm";
import BreadCrumb from "@/components/DefaultPage/Breadcrumb";
import Divider from "@/components/Divider";
import BillingForm from "@/components/Forms/BillingForm";
import Image from "next/image";

export default function Billing() {
  return (
    <div className="w-[100%] max-w-[1300px] m-auto pt-[40px]">
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col">
        <div className="
          w-full 
          bg-[#F9FAFB] 
          py-[20px] 
          px-[10px] 
          md:py-[47px] 
          md:px-[44px] 
          rounded-l-[14px]">
          <h3 className="text-[28px] font-bold mb-[21px]">Your order 🛍 ️️</h3>
          <p className="text-[16px] text-[#5A5A5A] mb-[30px]">Items in your cart.</p>
          <div className="flex flex-row">
            <div className="text-[20px] font-bold w-full">Total: </div>
            <div className="text-[20px] font-bold">$200 </div>
          </div>
          <Affirm price={20000} />
          <Divider y={30} />
          <div className="cart-items">
            <div className="cart-item flex flex-row mb-[20px]">
              <Image
                className="rounded-[8px] object-cover"
                style={{ marginRight: 16 }}
                src="/product-preview.webp"
                alt="hero-image"
                width={80}
                height={80}
                priority
              />
              <div className="w-full">
                <div className="title">Botox</div>
                <div className="subtitle">20 Units</div>
                <div className="flex flex-row">
                  <div className="w-full">Qty: 1</div>
                  <div>$200</div>
                </div>
              </div>
            </div>
            <div className="cart-item flex flex-row">
              <Image
                className="rounded-[8px] object-cover"
                style={{ marginRight: 16 }}
                src="/product-preview.webp"
                alt="hero-image"
                width={80}
                height={80}
                priority
              />
              <div className="w-full">
                <div className="title">Botox</div>
                <div className="subtitle">20 Units</div>
                <div className="flex flex-row">
                  <div className="w-full">Qty: 1</div>
                  <div>$200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#FFF] py-[30px] px-[15px] sm:py-[30px] sm:px-[30px] md:py-[57px] md:px-[63px]">
          <div className="mb-[20px] mt-[0px] md:mb-[20px] md:mt-[-20px]">
            <BreadCrumb step="billing" />
          </div>
          {/* Form */}
          <BillingForm />
        </div>
      </div>
    </div>
  );
};