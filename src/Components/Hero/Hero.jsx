import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container-fluid">
        <div className="container" data-aos="fade-up">
          <div className="row m-0 mt-5 justify-content-center align-items-center text-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-lg-6 mb-4">
              {/* <p className="text-white">Lorem ipsum dolor sit amet consectetur</p> */}
              <h1 className="mb-4">
                Human resources are like natural resources! <span></span>
              </h1>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​</p>
            </div>
            <Link to="enquiry" className="nav-item text-center mt-4">
              <button type="submit">Begin Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
};
export default Hero;