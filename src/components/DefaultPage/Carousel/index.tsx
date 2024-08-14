"use client";

import React from "react";
import Image from "next/image";

type OnSelectSlide = () => void;

const data = [
  {
    index: 0,
    id: "1",
    url: "/hero-image.jpg"
  },
  {
    index: 1,
    id: "2",
    url: "/carousel-1.jpg"
  },
  {
    index: 2,
    id: "3",
    url: "/carousel-2.jpg"
  },
  {
    index: 3,
    id: "4",
    url: "/carousel-3.jpg"
  }
];

const Carousel: React.FC = (): React.ReactElement => {
  const [state, setState] = React.useState({
    currentSlideIndex: 0,
    slides: data
  });

  const onSelectSlide = (index: number): OnSelectSlide => {
    return (): void => {
      setState(prevState => ({
        ...prevState,
        currentSlideIndex: index,
      }))
    }
  };


  const renderSlides = () => state.slides.map((slide, index) => {
    return (
      <button key={index} onClick={onSelectSlide(index)}>
        <div className="relative w-[115px] h-[115px] cursor-pointer">
          <Image
            className="rounded-2xl object-cover"
            style={{ border: state.currentSlideIndex === index ? 1 : 0, borderStyle: state.currentSlideIndex === index ? "solid" : "none", borderColor: state.currentSlideIndex === index ? "#3A4980" : "transparent" }}
            src={slide.url}
            alt="hero-image"
            priority
            fill={true}
          />
        </div>
      </button>
    )
  });

  const onNext = (): void => {
    if (state.currentSlideIndex === state.slides.length - 1) return;

    setState(prevState => ({
      ...prevState,
      currentSlideIndex: prevState.currentSlideIndex + 1
    }));
  };

  const onPrevious = (): void => {
    if (state.currentSlideIndex === 0) return;

    setState(prevState => ({
      ...prevState,
      currentSlideIndex: prevState.currentSlideIndex - 1
    }));
  };

  return (
    <div id="carousel" className="max-w-[587px]">
      {/* Hero Image */}
      <div className="relative w-[587px] h-[691px]">
        <Image
          className="rounded-2xl object-cover border-[1px] border-[#EDF0F8]"
          src={state.slides[state.currentSlideIndex].url}
          alt="hero-image"
          priority
          fill={true}
        />
      </div>
      {/* Navigation w/ preview */}
      <div className="flex flex-row pt-[40px]">
        {/* Left Button */}
        <div className="flex pr-[9px]">
          <button onClick={onPrevious}>
            <Image
              src="/arrow-left.svg"
              alt="Vercel Logo"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
        {/* Preview Slides */}
        <div className="flex flex-1 flex-row justify-between">
          {renderSlides()}
        </div>
        {/* Right Button */}
        <div className="flex pl-[9px]">
          <button onClick={onNext}>
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