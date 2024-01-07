"use client";

import React from "react";
import { FcAutomotive } from "react-icons/fc";

export const NavBar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center gap-1 p-4 border-b-2 border-grey-500 bg-transparent backdrop-blur-md font-bold text-2xl fixed right-0 left-0">
      <div
        className="flex items-center text-3xl cursor-pointer"
        onClick={handleScrollToTop}
      >
        <FcAutomotive />
        <h1>AutoShop</h1>
      </div>
    </div>
  );
};
