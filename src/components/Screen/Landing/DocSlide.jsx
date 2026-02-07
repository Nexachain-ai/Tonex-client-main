// src/components/DocSlide.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import shadow from "../../../assets/Landing/shadow.png";
import documentation from "../../../assets/Landing/documentation.png";
import poweredPic from "../../../assets/Landing/poweredPic.png";
import liveChatPic from "../../../assets/Landing/liveChatPic.png";

const slides = [
  {
    title: "Documentation",
    description:
      "Learn how the 4Exchai platform works, including AI trading logic, smart contracts, and participation guidelines.",
    buttonText: "Explore Docs",
    buttonLink: "/",
    image: documentation,
    imageAlt: "4Exchai Documentation",
    imageBottom: "bottom-[63px]",
    height: "h-[457px]",
  },
  {
    title: "AI Powered Trading",
    description:
      "Intelligent AI agents analyze market data and automate trade execution based on data-driven strategies.",
    buttonText: "Discover AI",
    buttonLink: "/",
    image: poweredPic,
    imageAlt: "AI Powered Trading",
    imageBottom: "bottom-0",
    height: "lg:h-[517px] h-[457px]",
  },
  {
    title: "Community & Support",
    description:
      "Connect with the 4Exchai community, ask questions, and get guidance from experienced participants.",
    buttonText: "Join Community",
    buttonLink: "/",
    image: liveChatPic,
    imageAlt: "Community Support",
    imageBottom: "bottom-[39px]",
    height: "h-[457px]",
  },
];

const Card = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  imageAlt,
  imageBottom,
  height,
}) => (
  <div
    className={`${height} lg:h-[451px] text-[#dffcfb] relative bg-[linear-gradient(180deg,#111_0%,#0C0C0C_100%)] rounded-[20px] overflow-hidden border border-white-100 p-[40px] w-full lg:p-[24px]`}
  >
    <div className="flex flex-col items-start space-y-[24px]">
      <div className="flex flex-col space-y-[12px] relative z-[50]">
        <span className="text-[24px] font-medium">{title}</span>
        <span className="text-sm text-white-500 leading-[22.4px]">
          {description}
        </span>
      </div>
      <a
        href={buttonLink}
        className="flex items-center justify-center px-5 h-[40px] rounded-full bg-[#1d1f22] border border-[#216EFF] backdrop-blur-[25px] bg-blend-overlay text-sm hover:bg-[#216EFF]/40 transition-colors relative z-[50]"
      >
        <span>{buttonText}</span>
      </a>
    </div>

    <img
      src={shadow}
      className="absolute top-0 left-0 w-full pointer-events-none"
      alt="Shadow background"
    />

    <img
      className={`absolute left-1/2 -translate-x-1/2 ${imageBottom} pointer-events-none lg:max-w-[500px]`}
      src={image}
      alt={imageAlt}
    />
  </div>
);

const DocSlide = () => {
  return (
    <div id="packages" className="scroll-mt-[100px]">
      {/* Mobile Swiper */}
      <div className="h-full w-full lg:hidden flex swiper-backface-hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          className="swiper_slider__ysApw"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Card {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Static Cards */}
      <div className="hidden lg:flex items-center space-x-[2rem] max-w-[1170px] mx-auto lg:px-[16px] mt-5">
        {slides.map((slide, index) => (
          <Card key={index} {...slide} />
        ))}
      </div>
    </div>
  );
};

export default DocSlide;
