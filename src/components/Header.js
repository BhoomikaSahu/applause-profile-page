import React, { useEffect, useRef, useState } from "react";
import logo from "../images/Logo.svg";
import icon from "../images/icon.png";
import Dropdown from "./Dropdown";

const Header = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef();
  const avtarRef = useRef();
  const arrowRef = useRef();
  const menuRef = useRef();

  const clickOutside = (e) => {
    if (dropdownRef.current.contains(e.target) || avtarRef.current.contains(e.target) || arrowRef.current.contains(e.target) || menuRef.current.contains(e.target)) {
      return;
    }
    setShow(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [show]);

  return (
    <>
      <div className="Navbar row">
        <div className="NavTitle">
          <img src={logo} alt="Applause Logo" />
        </div>
        <div className="MenuItems" ref={menuRef} onClick={()=>setShow(!show)}></div>
        <div className="NavItems row">
          <a href="/">Help</a>
          <a href="/">All Events</a>
          <div className=" NavAvtar Avtar" ref={avtarRef} onClick={()=>setShow(!show)}>MJ</div>
          <img src={icon} ref={arrowRef} onClick={()=>setShow(!show)} />
        </div>
      </div>
      {show && (<div ref={dropdownRef}><Dropdown /></div>)}
    </>
  );
};

export default Header;
