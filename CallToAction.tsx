import React from "react";

export const CallToAction: React.FC = () => {
  return (
    <section className="flex relative flex-col justify-center items-center px-20 py-56 w-full min-h-[660px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d356727bb3de15fa7ff85ff6cf8b99017c39d79c5b7aa2a4397c33722d624434?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <div className="flex relative flex-col px-20 max-w-full w-[1280px] max-md:px-5">
        <h2 className="text-5xl font-bold text-yellow-200 leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
          지금 시작해도 늦지 않았어요
          <br />
          건강하고 즐겁게 살기위한 첫 단계
        </h2>
        <a
          href="https://www.greennbite.com"
          target="_blank"
          className="self-start px-10 py-5 mt-10 text-base font-semibold leading-none text-black capitalize bg-lime-300 rounded-[99px] max-md:px-5"
        >
          내 건강식단 찾아보기
        </a>
      </div>
    </section>
  );
};
