import { ChevronRight, Close } from "@/svg/icons";
import React, { Children } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface SettingsProp {
  children: React.ReactNode;
  active: string;
}

const SettingsLayout = ({ children, active }: SettingsProp) => {
  const AccountLink = [
    {
      id: 1,
      name: "Account",
      href: "/settings/account/",
    },
    {
      id: 2,
      name: "Display",
      href: "/settings/display/",
    },
    {
      id: 1,
      name: "Network",
      href: "/settings/network/",
    },
  ];
  const route = useRouter();
  const handleSettingsCloseRoute = () => route.push("/");
  return (
    <div className="w-full md:w-[80%] mx-auto p-8 ">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-2xl">Settings</h1>
        <span onClick={handleSettingsCloseRoute}>
          <Close />
        </span>
      </div>
      <div className="w-full grid grid-cols-3 gap-4 my-8">
        <div className="flex col-span-1 flex-col items-start justify-start gap-4 w-full">
          {AccountLink.map((link, idx) => (
            <Link
              href={link.href}
              key={idx + link.name}
              className={`w-full p-3 px-6 bg-[#e3e3e3] dark:bg-[#29292E] text-base font-light rounded-md flex items-center justify-between ${
                active === link.name
                  ? "dark:bg-[#414149] bg-[#D6D6D6] dark:text-[#E8C155] font-bold"
                  : ""
              }`}
            >
              {link.name}
              <span className="">
                <ChevronRight />
              </span>
            </Link>
          ))}
        </div>
        <div className="col-span-2 min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
