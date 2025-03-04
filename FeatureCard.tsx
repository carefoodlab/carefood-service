import React from "react";

interface FeatureCardProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
      <div className="flex relative flex-col items-center self-stretch px-10 pt-10 pb-80 my-auto text-xl font-bold leading-none text-white whitespace-nowrap rounded-3xl min-h-[390px] min-w-60 w-[571px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          src={imageSrc}
          className="object-cover absolute inset-0 size-full"
          alt={title}
        />
        <div className="relative self-stretch px-2.5 my-auto w-10 h-10 bg-green-700 rounded-[99px]">
          {number}
        </div>
      </div>
      <div className="flex-1 shrink self-stretch my-auto basis-20 min-h-[390px] min-w-60 text-stone-900 max-md:max-w-full">
        <h3 className="text-4xl font-bold leading-snug max-md:max-w-full">
          {title}
        </h3>
        <p className="mt-4 text-xl font-medium leading-7 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
};
