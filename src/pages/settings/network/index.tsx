import SettingsLayout from "@/components/layouts/SettingsLayout";
import Network from "@/components/Network";
import RpcProvider from "@/components/RpcProvider";
import React from "react";

const index = () => {
  return (
    <SettingsLayout active="Network">
      <div className="w-full md:w-[80%] mx-auto flex flex-col items-start justify-start gap-4 ">
        <div className="w-full flex items-center justify-between my-4 gap-4">
          <div className="p-2 text-nowrap">RPC Provider</div>
          <div className="w-[70%]">
            <RpcProvider />
          </div>
        </div>
        <div className="w-full flex items-center justify-between my-4">
          <div className="w-full">Priority Fee</div>
          <div className="w-full">
            <Network />
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default index;
