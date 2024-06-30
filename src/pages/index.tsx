import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layouts/Layout";
import { WalletLight } from "@/svg/icons";
import Link from "next/link";
import Volume from "@/components/Volume";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Links = [
    {
      id: 0,
      name: "Deposit",
      href: "/deposit",
    },
    {
      id: 1,
      name: "Withdraw",
      href: "/withdraw",
    },
    {
      id: 2,
      name: "Borrow",
      href: "/borrow",
    },
    {
      id: 3,
      name: "Repay",
      href: "/repay",
    },
  ];
  return (
    <main className="w-full ">
      <Layout active="Overview">
        <main className="w-full grid grid-cols-1 md:grid-cols-3 h-[600px] p-4 ">
          <div className="col-span-1 md:col-span-2 flex items-center justify-between flex-col">
            <div className="flex flex-col h-full items-center justify-center gap-2">
              <WalletLight />
              <h1>Connect wallet</h1>
              <Link
                href={"/connect"}
                className="bg-[#e3e3e3] dark:bg-[#29292E] flex items-center justify-center p-2 px-8"
              >
                Connect
              </Link>
            </div>
            <div className="flex w-full items-center justify-center border border-[#e3e3e3] dark:border-[#29292E]">
              {Links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index + link.id + link.name}
                  className="w-full p-4 border border-[#e3e3e3] dark:border-[#29292E]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <Volume />
          </div>
        </main>
      </Layout>
    </main>
  );
}
