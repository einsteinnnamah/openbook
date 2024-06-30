/* eslint-disable react-hooks/rules-of-hooks */
import SettingsLayout from "@/components/layouts/SettingsLayout";
import React, { useContext } from "react";
import { Context } from "../../../../context";

const index = () => {
  const {
    theme,
    logos,
    icon,
    options,
    handleThemeSelection,
    handleLogoSelection,
  } = useContext(Context);
  return (
    <SettingsLayout active="Display">
      <div className="flex flex-col w-[80%] mx-auto items-start justify-start">
        <div className="w-full flex items-center justify-between my-2">
          <div className="w-full text-left">Theme</div>
          <select
            value={theme}
            onChange={handleThemeSelection}
            className="p-3 border border-[#e3e3e3] dark:bg-[#29292E] rounded-md px-10 w-[200px] text-left outline-none"
          >
            {options?.map(
              (
                option: {
                  value: string | number | readonly string[] | undefined;
                  label:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                },
                index: any
              ) => (
                <option
                  key={option.value + index}
                  value={option.value}
                  className="p-3 px-10 text-3xl text-left bg-[#e3e3e3] dark:bg-[#29292E]"
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>
        <div className="w-full flex items-center justify-between my-2">
          <div className="w-full text-left">Logo</div>
          <select
            value={icon}
            onChange={handleLogoSelection}
            className="p-3 border border-[#e3e3e3] dark:bg-[#29292E] rounded-md px-10 w-[200px] text-left outline-none"
          >
            {logos?.map(
              (
                option: {
                  value: string | number | readonly string[] | undefined;
                  label:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                },
                index: any
              ) => (
                <option
                  key={option.value + index}
                  value={option.value}
                  className="p-3 px-10 text-3xl text-left bg-[#e3e3e3] dark:bg-[#29292E]"
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default index;
