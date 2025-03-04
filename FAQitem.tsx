"use client";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-8 w-full border-b border-solid border-b-[color:var(--foundation-grey-light-active,#B9B9B9)] max-md:max-w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full"
      >
        <h3 className="self-stretch my-auto text-xl font-bold leading-snug text-stone-900">
          {question}
        </h3>
        <div className="flex overflow-hidden flex-col justify-center self-stretch p-2.5 my-auto w-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b16b8782cd9f96ec582caebe8991e801ab97298c202cc8e64702a49ae471765?placeholderIfAbsent=true&apiKey=ead9656846974f2bb4f67bc0b20fb79d"
            className={`object-contain w-5 aspect-square transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            alt="Toggle answer"
          />
        </div>
      </button>
      {isOpen && (
        <p className="mt-4 text-xl font-medium leading-snug text-stone-900">
          {answer}
        </p>
      )}
    </div>
  );
};
