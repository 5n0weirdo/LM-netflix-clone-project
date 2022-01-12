import React, { useState, useEffect } from "react";
import "./Nav.css";
import NavLogo from "./img/netflix-logo.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        style={{ height: "40px", objectFit: "contain", marginTop: "0px" }}
        classname="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-socks-png-18.png"
        alt="Netflix Logo"
      />
      <img
        style={{ marginTop: "0px", objectFit: "contain" }}
        className="nav_avatar"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gAoBZTchuV06h2zGCGTsPgAAAA%26pid%3DApi&f=1"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
