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
    <div
      className="flex justify-center items-center gap-1 p-4 border-b-2 border-grey-500 bg-transparent backdrop-blur-md font-bold text-2xl fixed right-0 left-0 cursor-pointer"
      onClick={handleScrollToTop}
    >
      <div className="text-3xl">
        <FcAutomotive />
      </div>
      <h1>AutoShop</h1>
    </div>
  );
};
