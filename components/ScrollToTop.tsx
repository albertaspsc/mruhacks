"use client";

import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

import { classNames } from "./utils/classNames";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 p-20">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "hidden lg:inline-flex lg:bg-primary-600 hover:bg-primary-700 focus:ring-primary items-center rounded-full p-3 text-primary shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2",
        )}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
