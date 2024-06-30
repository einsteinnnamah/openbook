import Link from "next/link";
import React, { useContext } from "react";
import {
  Overview,
  OverviewActive,
  Swap,
  SwapActive,
  ListMarket,
  ListMarketActive,
} from "@/svg/icons";
import { Context } from "../../context";
import Image from "next/legacy/image";

const Sidebar = ({ active }: { active: string }) => {
  const { icon } = useContext(Context);
  const comp = active
    ? "text-[#1e1e1e] dark:text-[#F0C756]"
    : "text-[#616161] dark:text-[#B3B3B3]";
  const Links = [
    {
      id: 0,
      href: "/",
      name: "Overview",
      active: <OverviewActive active={active} />,
      inactive: <Overview />,
    },
    {
      id: 1,
      href: "/swap",
      name: "Swap",
      active: <SwapActive />,
      inactive: <Swap />,
    },
    {
      id: 2,
      href: "/listMarket",
      name: "List Market/Token",
      active: <ListMarketActive />,
      inactive: <ListMarket />,
    },
  ];
  return (
    <nav className="p-4 flex item-center justify-start flex-col h-screen">
      <h1 className="py-4 px-2 font-bold text-2xl w-[150px] relative my-2">
        <Image
          src={`/${icon}.png`}
          alt="/"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </h1>
      {Links.map((link, index) => (
        <Link
          href={link.href}
          key={index + link.id + link.name}
          className="py-2 px-2 flex items-center justify-start gap-2 w-full"
        >
          <span
            className={`rounded-full flex items-center justify-center w-9 h-7 bg-[#E3E3E3] ${
              active === link.name ? "dark:bg-[#f0c756]" : ""
            } `}
          >
            {active === link.name ? link.active : link.inactive}
          </span>
          <li
            className={`text-nowrap w-full inline-block ${
              active === link.name
                ? "text-[#1e1e1e] dark:text-[#F0C756]"
                : "text-[#616161] dark:text-[#B3B3B3]"
            }`}
          >
            {link.name}
          </li>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
