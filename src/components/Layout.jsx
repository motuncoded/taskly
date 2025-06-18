import React from "react";
import Header from "./layouts/Header";
import { Outlet } from "@tanstack/react-router";
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
