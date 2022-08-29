import React from "react";
import "./SideDrawer.scss";
import ReactDOM from "react-dom";

const SideDrawer = (props) => {
  const { children } = props;
  const content = <aside className="side-drawer">{children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
