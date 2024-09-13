import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Brand from "../../Images/Candidate.jpg";
import "./Navbar.css";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <section id="header" className="header fixed-top">
      <div className="topbar d-flex align-items-center">
        <div className="container p-0 d-flex justify-content-center justify-content-md-between">
          <div className="title">
            <h4 className="text-white">Education and Employment Verifiction Process</h4>
            {/* <span> <MdOutlineAttachEmail /></span> */}
            {/* Email : <Link to="mailto:contact@example.com" className="text-white">  contact@example.com</Link> */}
          </div>
          <div className="top-btn">
            <button className="me-2">Help</button>
            <button>Languages</button>
            {/* <span><MdOutlinePhonelinkRing /></span> Phone : +91 99999 99999 */}
          </div>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg ${isSticky ? "sticky" : "initial"}`}>
        <div className="container">
          <div>
            <Link
              to="/"
              className="navbar-brand"
              onClick={() => handleSetActiveLink("/")}
            >
              <img src={Brand} alt="Brand" />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className={`nav-item ${activeLink === "/" ? "active" : ""}`}>
                <Link to="/" className="nav-link" aria-current="page" onClick={() => handleSetActiveLink("/")}>
                  HOME
                </Link>
              </li>
              <li className={`nav-item ${activeLink === "/aboutus" ? "active" : ""}`}>
                <Link className="nav-link" to="/###" onClick={() => handleSetActiveLink("/aboutus")}>
                  ABOUT US
                </Link>
              </li>
              <li className={`nav-item ${activeLink === "/gallery" ? "active" : ""}`}>
                <Link className="nav-link" to="/###" onClick={() => handleSetActiveLink("/gallery")}>
                  OUR SERVICES
                </Link>
              </li>
              <li className={`nav-item ${activeLink === "/events" ? "active" : ""}`}>
                <Link className="nav-link" to="/###" onClick={() => handleSetActiveLink("/events")}>
                  WHY EAEVP
                </Link>
              </li>
              <li className={`nav-item ${activeLink === "/contact" ? "active" : ""}`}>
                <Link className="nav-link" to="/###" onClick={() => handleSetActiveLink("/contact")}>
                  CONTACT US
                </Link>
              </li>
            </ul>
            <Link to="contact" className="nav-item text-center me-5">
              <button type="submit">LOGIN</button>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
