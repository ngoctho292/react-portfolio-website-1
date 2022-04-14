import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setactiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setactiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setactiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setactiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setactiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
