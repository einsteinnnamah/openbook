import SettingsLayout from "@/components/layouts/SettingsLayout";
import React from "react";

const index = () => {
  return (
    <SettingsLayout active="Account">
      <div className="md:w-[80%] mx-auto pt-8 p-2 border border-[#e3e3e3] rounded-md ">
        <h1 className="w-full text-center py-2 px-8 text-2xl font-bold">
          Create Account
        </h1>
        <p className="w-full text-center py-2 px-8 text-base font-light">
          Solana requires 0.041 SOL rent to create a Openbook Account. This will
          be returned if you close your account.
        </p>
        <form className="p-2 w-full">
          <label
            htmlFor="AccountName"
            className="w-full text-sm font-extralight text-left"
          >
            Account Name (optional)
          </label>
          <input
            type="text"
            name="accountName"
            id="accountName"
            className="w-full text-base rounded-md p-3 border border-[#e3e3e3] dark:bg-[#29292E] my-2 inline-block"
          />
          <div className="w-full flex items-center justify-between p-2 rounded-md border border-[#e3e3e3]">
            <div className="text-left w-full ">
              <h1 className="text-sm font-light">Enable Notifications</h1>
              <h2 className="text-xs font-light">
                You&apos;ll be asked to sign a transaction
              </h2>
            </div>
            {/* radio switch */}
            <div></div>
          </div>
          <input
            type="submit"
            value="Create Account"
            className="w-full text-base rounded-md p-3 bg-[#e3e3e3] dark:bg-[#29292E] text-center my-8 inline-block"
          />
        </form>
      </div>
    </SettingsLayout>
  );
};

export default index;
