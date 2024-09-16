import BreadCrumb from "@/components/DefaultPage/Breadcrumb";
import Divider from "@/components/Divider";
import Spacer from "@/components/Spacer";
import Image from "next/image";

export default function Billing() {
  return (
    <div className="w-[1300px] m-auto pt-[40px]">
      <div className="flex flex-row">
        <div className="w-full bg-[#F9FAFB] py-[47px] px-[44px] rounded-l-[14px]">
          <h3 className="text-[28px] font-bold mb-[21px]">Your order 🛍 ️️</h3>
          <p className="text-[16px] text-[#5A5A5A] mb-[30px]">Items in your cart.</p>
          <div className="flex flex-row">
            <div className="text-[20px] font-bold w-full">Total: </div>
            <div className="text-[20px] font-bold">$200 </div>
          </div>
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
        <div className="w-full bg-[#FFF] py-[57px] px-[63px]">
          <div className="mb-[20px] mt-[-20px]">
            <BreadCrumb step="billing" />
          </div>
          {/* Form */}
          <h3 className="text-[34px] font-bold">Let's Get You Sorted With <br /> Billing Details 👋</h3>
          <Spacer y={40} />
          <p className="text-[16px] text-[#5A5A5A] mb-[30px]">* All information is requried.</p>
          <Spacer y={10} />
          <em></em>
          <div className="flex flex-row">
            <div className="w-full">
              <label className="block text-[16px] text-[#444444] mb-[11px]">First Name</label>
              <input
                type="text"
                name="lastName"
                className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
              />
            </div>
            <div className="px-[10px]"></div>
            <div className="w-full">
              <label className="block text-[16px] text-[#444444] mb-[11px]">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
              />
            </div>
          </div>
          <Spacer y={30} />
          <label className="block text-[16px] text-[#444444] mb-[11px]">Phone</label>
          <input
            type="text"
            name="phoneNumber"
            className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
          />
          <Spacer y={30} />
          <label className="block text-[16px] text-[#444444] mb-[11px]">Address</label>
          <input
            type="text"
            name="phoneNumber"
            className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
            placeholder="Street address, apartment, suite, floor, etc"
          />
          <Spacer y={30} />
          <input
            type="text"
            name="city"
            className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
            placeholder="City"
          />
          <Spacer y={30} />
          <input
            type="text"
            name="zipcode"
            className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
            placeholder="Zip"
          />
          <Spacer y={30} />
          <input
            type="text"
            name="state"
            className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
            placeholder="State"
          />
          <Spacer y={56} />
          <button className="text-[#FFF] bg-[#1472B2] w-[295px] h-[54px] rounded-[30px]">
            To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};