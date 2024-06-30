import React, { useState } from "react";

const Network = () => {
  //   const [network, setNetwork] = useState(["None", "Low", "High"]);
  const [active, setActive] = useState("None");

  const handleChange = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className=" flex items-center justify-center rounded-lg border border-[#e3e3e3] dark:border-[#29292e] dark:bg-[#35353B] bg-[#e3e3e3]">
      <button
        onClick={() => setActive("None")}
        className={`w-full p-3 ${
          active === "None"
            ? "dark:bg-[#414149] bg-[#e3e3d9] dark:text-[#E8C155]"
            : ""
        }`}
      >
        None
      </button>
      <button
        onClick={() => setActive("Low")}
        className={`w-full p-3 ${
          active === "Low"
            ? "dark:bg-[#414149] bg-[#e3e3d9] dark:text-[#E8C155]"
            : ""
        }`}
      >
        Low
      </button>
      <button
        onClick={() => setActive("High")}
        className={`w-full p-3 ${
          active === "High"
            ? "dark:bg-[#414149] bg-[#e3e3d9] dark:text-[#E8C155]"
            : ""
        }`}
      >
        High
      </button>
    </div>
  );
};

export default Network;
