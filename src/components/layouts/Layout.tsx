import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

interface LayoutProp {
  children: React.ReactNode;
  active: string;
}

const Layout = (props: LayoutProp) => {
  const { children, active } = props;
  return (
    <div className="w-full flex ">
      <Sidebar active={active} />
      <main className="w-full">
        <Topbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
