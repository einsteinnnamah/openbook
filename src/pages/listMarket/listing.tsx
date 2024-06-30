import Layout from "@/components/layouts/Layout";
import { ChevronLeft } from "@/svg/icons";
import React, { useState } from "react";
import { useRouter } from "next/router";

const listing = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const route = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [token, setToken] = useState("");

  const handleRoute = () => route.back();
  const handleTokenValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setToken(e.target.value);
  };

  return (
    <main className="w-full">
      <Layout active="Listing">
        <main className="md:w-[80%] mx-auto mt-20">
          <h1 className="flex items-center justify-start gap-1 text-2xl my-4">
            <button onClick={handleRoute}>
              <ChevronLeft />
            </button>
            List Token
          </h1>
          <div className="flex items-start justify-start gap-2 flex-col">
            <label htmlFor="Token Mint" className="text-base font-light">
              Token Mint
            </label>
            <input
              type="text"
              name="token"
              id="token"
              className="p-3 border border-[#e3e3e3] dark:bg-[#29292E] dark:border-[#29292E] rounded-md md:w-[50%] w-[90%]"
              value={token}
              onChange={handleTokenValue}
            />
          </div>
          <button className="bg-[#e3e3e3] dark:bg-[#29292E] rounded-md p-3 my-4">
            Find Token
          </button>
        </main>
      </Layout>
    </main>
  );
};

export default listing;
