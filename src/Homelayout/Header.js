import React, { useState, useEffect } from "react";
import "./navbar.css";

import { icons } from "react-icons";

import Social from "../Social";
import { Link } from "react-router-dom";

function Header() {
  function handleClick() {
    this.setstate({ clicked: !this.state.clicked });
  }
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <header className="App-header">
        <Social />

        <div className="mailpart">
          <a href="mailto:info@bhavishyanirman.com" className="bn">
            <h1>info@bhavishyanirman.com</h1>
          </a>
        </div>


        <div className="phone-btnnn">
          <a href="tel:9899550700">
            <button>9899550700</button>
          </a>
        </div>
      </header>
      <div>
        <DisplayMobile
          setState={setState}
          isNavExpanded={isNavExpanded}
          setIsNavExpanded={setIsNavExpanded}
        />
      </div>
      <div className="desktopView">
        <DesktopView />
      </div>
    </>
  );
}

export default Header;

const DisplayMobile = ({ setIsNavExpanded, isNavExpanded }) => {
  return (
    <div>
      <nav className="navigation">
        <a href="/" className="brand-name">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fbn.3b598744.png?alt=media&token=b8ae751a-31bd-41ff-8736-89130bdb0f2a"
              style={{ height: "60px", width: "80px", objectFit: "contain" }}
            />
          </div>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link
                className={
                  window.location.pathname === "/" ? "active" : "nav-link"
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  window.location.pathname === "/about-us" ? "active" : "nav-link"
                }
                to="/about-us"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={
                  window.location.pathname === "/properties"
                    ? "active"
                    : "nav-link"
                }
                to="/properties"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                className={
                  window.location.pathname === "/blog" ? "active" : "nav-link"
                }
                to="/blog"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className={
                  window.location.pathname === "/speak-to-an-expert"
                    ? "active"
                    : "nav-link"
                }
                to="/speak-to-an-expert"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                className={
                  window.location.pathname === "/flats-in-chattarpur/"
                    ? "active"
                    : "nav-link"
                }
                to="/flats-in-chattarpur/"
              >
                Flatsinchattarpur
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const DesktopView = () => {
  return (
    <>
      <div className="App-classses">
        <header className="App-header1">
          <div>
            <img
              className="image"
              src="https://firebasestorage.googleapis.com/v0/b/bn-developers-e3987.appspot.com/o/bestimage%2Fbn.3b598744.png?alt=media&token=b8ae751a-31bd-41ff-8736-89130bdb0f2a"
            ></img>
          </div>

          <div className="home-list">
            <Link
              className={
                window.location.pathname === "/" ? "active" : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                window.location.pathname === "/about-us" ? "active" : "nav-link"
              }
              to="/about-us"
            >
              About
            </Link>
            <Link
              className={
                window.location.pathname === "/properties"
                  ? "active"
                  : "nav-link"
              }
              to="/properties"
            >
              Properties
            </Link>
            <Link
              className={
                window.location.pathname === "/blog" ? "active" : "nav-link"
              }
              to="/blog"
            >
              Blogs
            </Link>
            <Link
              className={
                window.location.pathname === "/speak-to-an-expert"
                  ? "active"
                  : "nav-link"
              }
              to="/speak-to-an-expert"
            >
              Contact us
            </Link>
            <li>
              <Link
                className={
                  window.location.pathname === "/flats-in-chattarpur/"
                    ? "active"
                    : "nav-link"
                }
                to="/flats-in-chattarpur/"
              >
                Flatsinchattarpur
              </Link>
            </li>
          </div>
        </header>
        <div>
          <i className="FaBars"></i>
        </div>
      </div>
    </>
  );
};
