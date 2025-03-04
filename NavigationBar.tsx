"use client";
import React from "react";

interface NavigationBarProps {
  variant?: "transparent" | "white";
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  variant = "transparent",
}) => {
  const textColor =
    variant === "transparent" ? "text-yellow-200" : "text-stone-900";
  const borderColor =
    variant === "transparent" ? "border-yellow-200" : "border-[#1E1E1E]";

  return (
    <nav
      className={`flex justify-between items-center px-20 py-12 max-w-full text-base font-bold leading-none whitespace-nowrap w-[1280px] max-md:px-5 ${textColor}`}
    >
      <div className="flex flex-1 shrink gap-8 items-center self-stretch my-auto basis-0 min-w-60 w-[894px]">
        <a
          href="https://www.greennbite.com"
          target="_blank"
          className={`gap-2.5 self-stretch px-5 py-3 my-auto border-2 border-solid ${borderColor} rounded-[99px]`}
        >
          로그인
        </a>
      </div>
    </nav>
  );
};
