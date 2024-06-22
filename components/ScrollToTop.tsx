"use client";

import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

import { Button } from "./ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [isVisible]);

  if (!isVisible) {
    return;
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-16 md:right-16">
      <Button
        variant="outline"
        onClick={scrollToTop}
        className={`
            text-base-100 rounded-full w-12 h-12 bg-secondary
            `}
      >
        <BiArrowFromBottom className="text-xl scale-[150%]" />
      </Button>
    </div>
  );
};
