import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="flex relative flex-col justify-center self-stretch py-72 mt-0 w-full min-h-[800px] px-[575px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33388797e1a6c839f8c7881f7dde54f19018b1bad06488588d0278fcbb30f5e3?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d"
        className="object-contain absolute right-0 bottom-0 z-0 aspect-[2.4] h-[800px] w-[1920px] max-md:max-w-full"
        alt="Hero background"
      />
      <div className="flex z-0 flex-col w-full max-w-[770px] max-md:max-w-full">
        <h1 className="text-5xl font-bold text-center text-yellow-200 leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
          <span>건강 데이터로 나에게 딱 맞는</span>
          <br />
          <span>건강한 한 입을 추천해요</span>
        </h1>
        <a
          href="https://www.greennbite.com"
          target="_blank"
          className="self-center px-10 py-5 mt-10 text-base font-semibold leading-none text-black capitalize bg-lime-300 cursor-pointer pointer-events-auto rounded-[99px] max-md:px-5"
        >
          내 건강식단 찾아보기
        </a>
      </div>
    </section>
  );
};
