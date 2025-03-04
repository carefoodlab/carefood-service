"use client";
import React from "react";
import { NavigationBar } from "./NavigationBar";
import { Hero } from "./Hero";
import { FeatureCard } from "./FeatureCard";
import { ReviewCard } from "./ReviewCard";
import { FAQItem } from "./FAQItem";
import { CallToAction } from "./CallToAction";

export const Main: React.FC = () => {
  const features = [
    {
      number: 1,
      title: "건강검진 데이터 입력",
      description: "간단히 결과를 업로드 하거나 주요 정보를 입력합니다",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e9fb4cb790e3728168a3586198b1edc12b35c85332d221b490d17336302a45ed?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d",
    },
    {
      number: 2,
      title: "개인 건강 상태 분석",
      description:
        "AI가 혈압, 혈당, 등 주요 데이터를 이해하여현재 개인의 건강상태를 자세히 분석하여 보여줍니다",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/71505672f28bb97de8131f897a423c20a7421a8e84f18e6cf0e2d835b99f4fee?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d",
    },
    {
      number: 3,
      title: "맞춤형 음식 추천",
      description:
        "내 건강 상태에 적합한 음식은 무엇��� 있고,\n나만의 맞춤형 건강 식단 레시피는 어떤것이 있는 추천합니다.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a2dd8517b10735b6054e797e56d0b6731f40e1aa43381edd7bc85be3e0166e5?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d",
    },
    {
      number: 4,
      title: "신선한 식재료 배송",
      description:
        "내 건강 상태에 적합한 음식은 무엇이 있고,\n나만의 맞춤형 건강 식단 레시피는 어떤것이 있는 추천합니다.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dd9a115e72bfb7bc53a473fe47593447d4c795aabfb93cbccf67c7a5fe0ac5c1?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d",
    },
  ];

  const reviews = [
    {
      name: "김**",
      review:
        "매번 뭐 해 먹을지 고민했는데, 내 건강 상태에 딱 맞춘 레시피를 받아보니까 정말 편하고 좋아요! 재료도 간단하고 건강하게 챙겨 먹고 있어요. 맛있고 신선한 레시피 덕분에 몸도 가볍고 에너지가 넘치는 기분이 들어요!",
      profileImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5825824d2ea249f9458e92fc02fb27236d66eb65ed633efbfd161570e0bb3f20?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d",
    },
  ];

  const faqs = [
    {
      question: "Q. 어떤 건강 정보를 입력해야 하나요?",
      answer:
        "A. 기본적으로 알레르기 정보, 건강 목표(다이어트, 근육 증가, 균형 잡힌 식단 등), 선호하는 음식 등을 입력하면 됩니다.",
    },
    {
      question: "Q. 레시피 추천은 얼마나 자주 받을 수 있나요?",
      answer:
        "A. 원하는 빈도를 설정할 수 있으며, 매일 또는 주 3~4회 등 선택이 가능합니다.",
    },
    {
      question: "Q. 제공되는 레시피는 모두 건강한 음식인가요?",
      answer: "A. 네! 사용자의 건강 상태에 맞춘 균형 잡힌 식단을 제공합니다.",
    },
    {
      question: "Q. 비건/채식 식단도 지원하나요?",
      answer: "A. 네! 사용자의 건강 상태에 맞춘 균형 잡힌 식단을 제공합니다.",
    },
  ];

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <NavigationBar variant="transparent" />
        <Hero />
        <NavigationBar variant="white" />

        <section className="px-20 mt-5 max-w-full w-[1280px] max-md:px-5">
          <h2 className="w-full text-5xl font-bold leading-[65px] text-stone-900 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
            나의 건강상태를 분석해서
            <br />
            개인 맞춤형 식단을 제공해요
          </h2>

          {features.map((feature, index) => (
            <div
              key={index}
              className="mt-16 w-full max-md:mt-10 max-md:max-w-full"
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </section>

        <section className="px-20 mt-40 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
          <div className="flex flex-col justify-center w-full text-stone-900 max-md:max-w-full">
            <h2 className="text-5xl font-bold leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
              신뢰할 수 있는
              <br />
              과학적 접근의 건강��단이에요
            </h2>
            <p className="mt-5 text-xl font-medium leading-7 max-md:max-w-full">
              내 건강 상태에 적합한 음식은 무엇이 있고,
              <br />
              나만의 맞춤형 건강 식단 레시피는 어떤것이 있는 추천합니다.
            </p>
          </div>

          <div className="flex gap-6 items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap flex-1 shrink gap-6 items-center w-full basis-0 min-w-60 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddcc026d5b4b3dbd312b03bc224b0ae59b72cd686497740053b32dceaa364b86?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d"
                className="object-contain self-stretch my-auto rounded-3xl aspect-[0.87] min-w-60 w-[572px] max-md:max-w-full"
                alt="Scientific approach"
              />
              <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96adcc09e0126e1edc09469dbb12aa6100e809f201a0cbf5024b492378236a0?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d"
                  className="object-contain w-full rounded-3xl aspect-[1.65] max-md:max-w-full"
                  alt="Healthy meal"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ac2f6565d9db58b1858e8070d99d773ae6f839645cb6582b40155ae6224ca51?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d"
                  className="object-contain mt-6 w-full rounded-3xl aspect-[1.65] max-md:max-w-full"
                  alt="Meal preparation"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-20 mt-44 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
          <h2 className="w-full text-5xl font-bold leading-[65px] text-stone-900 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
            많은 분들이 간편하고
            <br />
            건강 맞춤 식단을 받고 있어요
          </h2>

          <div className="flex flex-wrap gap-6 items-center mt-16 w-full text-stone-900 max-md:mt-10 max-md:max-w-full">
            {[...Array(4)].map((_, index) => (
              <ReviewCard key={index} {...reviews[0]} />
            ))}
          </div>
        </section>

        <section className="px-20 mt-44 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
          <h2 className="w-full text-5xl font-bold leading-tight text-stone-900 max-md:max-w-full max-md:text-4xl">
            자주 묻는 질문
          </h2>

          <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </section>

        <CallToAction />
      </div>
    </main>
  );
};

export default Main;
