import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com/" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/" target="_blank">
        <BsTwitter />
      </a>
      {/* <a href="" target="_blank"></a> */}
    </div>
  );
};

export default Socials;
