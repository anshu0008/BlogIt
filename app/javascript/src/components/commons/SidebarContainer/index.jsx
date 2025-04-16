import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import SideBar from "./Sidebar";

const Container = ({ children, className = "" }) => (
  <div className="flex h-screen overflow-hidden">
    <SideBar />
    <div className={classnames("mx-auto max-w-6xl px-6", [className])}>
      {children}
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
