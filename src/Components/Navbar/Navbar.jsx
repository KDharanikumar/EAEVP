import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Images/Candidate.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-sm-12 col-lg-2 text-end py-2">
              <Link to="/" onClick={closeMenu} className="logo">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-10">
              <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={30} /> : <FaBars size={30} />}
              </div>
              <nav className="navbar d-flex justify-content-end">

                <div className="topbar py-3 px-4 d-flex flex-wrap justify-content-center align-items-center">
                  <div className="title">
                    <h4 className="me-lg-5 me-sm-0 mb-2">Education and Employment Verification Process</h4>
                  </div>
                  <div className="top-btn">
                    <button className="me-2">Help</button>
                    <button>Languages</button>
                  </div>
                </div>



                <div>
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                      <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services" onClick={closeMenu}>Our Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/why" onClick={closeMenu}>Why EAEVP?</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" onClick={closeMenu}>
                        <button type="submit">LOGIN</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Navbar;
