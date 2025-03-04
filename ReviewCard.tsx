import React from "react";

interface ReviewCardProps {
  name: string;
  review: string;
  profileImage: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  profileImage,
}) => {
  return (
    <article className="flex flex-col grow shrink justify-center self-stretch p-10 my-auto rounded-3xl border border-solid border-[color:var(--foundation-gray-light-active,#B9B9B9)] min-w-60 w-[438px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex gap-4 items-center self-start text-xl leading-none whitespace-nowrap">
          <img
            src={profileImage}
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square rounded-[99px]"
            alt={`${name}'s profile`}
          />
          <div className="flex gap-2 items-center self-stretch my-auto">
            <span className="self-stretch my-auto font-bold">{name}</span>
            <span className="self-stretch my-auto font-medium">님</span>
          </div>
        </div>
        <p className="mt-8 text-base font-medium leading-6 max-md:max-w-full">
          {review}
        </p>
      </div>
    </article>
  );
};
