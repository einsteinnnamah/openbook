import React, { useState } from "react";

const RpcProvider = () => {
  const [active, setActive] = useState("Triton Shared");

  const handleChange = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className=" flex items-center justify-center rounded-lg border border-[#e3e3e3] dark:border-[#29292e] dark:bg-[#35353B] bg-[#e3e3e3]">
      <button
        onClick={() => setActive("Triton Shared")}
        className={`w-full p-3 ${
          active === "Triton Shared"
            ? "dark:bg-[#414149] bg-[#e3e3d9] dark:text-[#E8C155]"
            : ""
        }`}
      >
        None
      </button>
      <button
        onClick={() => setActive("Triton Deposited")}
        className={`w-full p-3 ${
          active === "Triton Deposited"
            ? "dark:bg-[#414149] bg-[#e3e3d9] dark:text-[#E8C155]"
            : ""
        }`}
      >
        Low
      </button>
      <button
        onClick={() => setActive("Custom")}
        className={`w-full p-3 ${
          active === "Custom"
            ? "dark:bg-[#414149] bg-[#e3e3d9] dark:text-[#E8C155]"
            : ""
        }`}
      >
        High
      </button>
    </div>
  );
};

export default RpcProvider;
