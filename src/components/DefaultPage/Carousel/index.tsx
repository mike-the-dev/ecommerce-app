"use client";

import Image from "next/image";

const Carousel: React.FC = (): React.ReactElement => {
  return (
    <div id="carousel" className="max-w-[587px]">
      {/* Hero Image */}
      <div className="relative w-[587px] h-[691px]">
        <Image
          className="rounded-2xl object-cover"
          src="/hero-image.jpg"
          alt="hero-image"
          priority
          fill={true}
        />
      </div>
      {/* Navigation w/ preview */}
      <div className="flex flex-row pt-[40px]">
        <div className="flex pr-[9px]">
          <button onClick={() => alert("Arrow clicked!")}>
            <Image
              src="/arrow-left.svg"
              alt="Vercel Logo"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
        <div className="flex flex-1 flex-row justify-between">
          <div className="relative w-[115px] h-[115px] cursor-pointer">
            <Image
              className="rounded-2xl object-cover"
              src="/carousel-1.jpg"
              alt="hero-image"
              priority
              fill={true}
            />
          </div>
          <div className="relative w-[115px] h-[115px] cursor-pointer">
            <Image
              className="rounded-2xl object-cover"
              src="/carousel-2.jpg"
              alt="hero-image"
              priority
              fill={true}
            />
          </div>
          <div className="relative w-[115px] h-[115px] cursor-pointer">
            <Image
              className="rounded-2xl object-cover"
              src="/carousel-3.jpg"
              alt="hero-image"
              priority
              fill={true}
            />
          </div>
          <div className="relative w-[115px] h-[115px] cursor-pointer">
            <Image
              className="rounded-2xl object-cover"
              src="/carousel-3.jpg"
              alt="hero-image"
              priority
              fill={true}
            />
          </div>
        </div>
        <div className="flex pl-[9px]">
          <button onClick={() => alert("Arrow clicked!")}>
            <Image
              src="/arrow-right.svg"
              alt="Vercel Logo"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;