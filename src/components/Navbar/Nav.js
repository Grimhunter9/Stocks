import React, { useContext } from "react";
import Logo from "./dark.jpg";
import Sun from "./sun.jpg";
import Burger from "./burger.jpg";
import Cross from "./cross.jpg";
import { BsFillMoonFill } from "react-icons/bs";
import { AppContext } from "../../Mycontext/text";


export default function Nav() {
  const { color, change, menu, blackout } = useContext(AppContext);
  return (
    <div>
      <div className="header">
        <a href="#">
          <img
            style={{ filter: color ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)brightness(102%) contrast(102%)" : "" }}
            className="logo"
            src={Logo}
            alt="The logo of the site"
          />
        </a>
        <div className="navbar">
          <a
            style={{ color: color ? "white" : "black" }}
            href="#Networks"
            className="links"
          >
            Networks
          </a>
          <a
            style={{ color: color ? "white" : "black" }}
            href="#Teams"
            className="links"
          >
            Team
          </a>
          <a
            style={{ color: color ? "white" : "black" }}
            href="#Contacts"
            className="links"
          >
            Contact Us
          </a>
          <nav onClick={() => change()}>
            {color === false ?
              <BsFillMoonFill className="Moon" />
              :
              <img
                onClick={change}
                className="sun"
                src={Sun}
                alt="The sun"
              />
            }
          </nav>
          <a onClick={blackout} href="#menu">
            <img className="burger" src={Burger} alt="the burger menu" />
          </a>
        </div>
      </div>

      <section style={{ display: menu ? "" : "none" }} className="blackout" />
      
      <section
        style={{ background: color ? "#212121" : "" }}
        id="menu"
        className="slider"
      >
        <a href="#">
          <img
            onClick={blackout}
            style={{
              filter: color
                ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)brightness(102%) contrast(102%)"
                : "",
            }}
            className="close"
            src={Cross}
            alt="The cross menu"
          />
        </a>
        <nav className="container">
          <a
            style={{ color: color ? "white" : "black" }}
            href="#Networks"
            onClick={blackout}
            className="links--new"
          >
            Networks
          </a>
          <a
            style={{ color: color ? "white" : "black" }}
            href="#Team"
            onClick={blackout}
            className="links--new"
          >
            Team
          </a>
          <a
            style={{ color: color ? "white" : "black" }}
            href="#Contacts"
            onClick={blackout}
            className="links--new"
          >
            Contact Us
          </a>
        </nav>
      </section>
    </div>
  );
}
