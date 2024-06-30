import React from "react";
import Layout from "@/components/layouts/Layout";
import { InfoIcon } from "@/svg/icons";
import Link from "next/link";

const index = () => {
  const Rules = [
    "You need at least 100,000 MNGO deposited in Mango Governance",
    "Is there sufficient liquidity ?",
    "New markets and tokens are approved by DAO vote. This takes 3 days",
  ];
  return (
    <main className="w-full">
      <Layout active="List Market/Token">
        <div className="w-full sm:w-[95%] mx-auto flex flex-col gap-4 items-start justify-start">
          <div className="w-full text-left">
            <h1 className="text-xl text-left">New Market or Token Listing</h1>
            {Rules.map((rule, index) => (
              <li
                key={index}
                className="text-sm font-light list-none flex items-center justify-start gap-1 py-2"
              >
                <InfoIcon />
                {rule}
              </li>
            ))}
          </div>
          <div className="md:w-[80%] w-full text-left border border-[#e3e3e3] dark:border-[#29292E] p-8 flex gap-1 flex-col items-start justify-center">
            {/* <ListToken /> */}
            <h1 className="text-2xl font-semibold">List Token</h1>
            <h2 className="text-sm font-light">
              List any SLP token on openbook
            </h2>
            <Link
              href={"/listMarket/listing/"}
              className="rounded-md p-3 bg-[#e3e3e3] dark:bg-[#29292E] text-sm font-light"
            >
              List Token
            </Link>
          </div>
          <div className="w-full text-left"></div>
        </div>
      </Layout>
    </main>
  );
};

export default index;
