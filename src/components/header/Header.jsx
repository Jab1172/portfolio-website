import React from "react";
import "./header.css";
import CTA from "./CTA";
import ImageMe from "../../assets/joel_Pixel1.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div classname="container header_container">
        <h5>Hello I am</h5>
        <h1>Joel Bascombe</h1>
        <h5 className="text-light">fullstack Developer</h5>
        <CTA></CTA>
        <Socials></Socials>
        <div className="me">
          <img src={ImageMe} alt="Joel Bascombe" className="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
