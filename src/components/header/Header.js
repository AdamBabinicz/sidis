import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <header>
        <div className="d-flex justify-content-between nav align-center">
          <div className="logo">William James Sidis</div>
          <div className={hamburgerOpen ? "nav-brand expanded" : "nav-brand"}>
            <ul className="nav-bar d-flex">
              <li className="nav-list ml-2 p-1">
                <a
                  href="#geniusz"
                  onClick={() => {
                    setHamburgerOpen(!hamburgerOpen);
                  }}
                >
                  Geniusz
                </a>
              </li>
              <li className="nav-list ml-2 p-1">
                <a
                  href="#fototeka"
                  onClick={() => {
                    setHamburgerOpen(!hamburgerOpen);
                  }}
                >
                  Fototeka
                </a>
              </li>
              <li className="nav-list ml-2 p-1">
                <a
                  href="#media"
                  onClick={() => {
                    setHamburgerOpen(!hamburgerOpen);
                  }}
                >
                  Media
                </a>
              </li>
              <li className="nav-list ml-2 p-1">
                <a
                  href="#kontakt"
                  onClick={() => {
                    setHamburgerOpen(!hamburgerOpen);
                  }}
                >
                  Kontakt
                </a>
              </li>
            </ul>
            <button
              className="hamburger"
              onClick={() => {
                setHamburgerOpen(!hamburgerOpen);
              }}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
