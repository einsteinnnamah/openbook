import React from "react";
import { ArrowLeft, WalletLight, Settings, Wallet } from "@/svg/icons";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="w-full p-4 py-4 flex items-center justify-between">
      <div className="flex items-center justify-start gap-2">
        <span>
          <WalletLight />
        </span>
        <span className="flex items-center justify-start gap-1">
          Connect to get started <ArrowLeft />
        </span>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Link
          href={"/bridge"}
          className="flex items-center justify-center p-2 border-l-[#e3e3e3] dark:border-l-[#29292E] border-2 border-r-0 border-b-0 border-t-0"
        >
          Bridge
        </Link>
        <Link
          href={"/settings/account/"}
          className="flex items-center justify-center p-2 border-l-[#e3e3e3] dark:border-l-[#29292E] border-2 border-r-0 border-b-0 border-t-0"
        >
          <Settings />
        </Link>
        <Link
          href={"/connect"}
          className="bg-[#e3e3e3] dark:bg-[#29292E] flex items-center justify-center p-2 gap-2"
        >
          <Wallet /> Connect
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
