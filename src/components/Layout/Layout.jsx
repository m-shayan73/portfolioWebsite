import React from "react";
import "./layout.scss";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="page-display">
        <span className="top-tags">
          <span className="tag html-tag">&lt;html&gt;</span>
          <br />
          <span className="tag">&lt;body&gt;</span>
        </span>

        <Outlet />

        <span className="bottom-tags">
          <span className="tag">&lt;/body&gt;</span>
          <br />
          <span className="tag html-tag">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  );
};

export default Layout;
