import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div classname="container header_container">
        <h5>Hello I am</h5>
        <h1>Joel Bascombe</h1>
        <h5 className="text-light">fullstack Developer</h5>
        <CTA></CTA>
      </div>
    </header>
  );
};

export default Header;
