// Testimonial.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import TestimonialImg from '../../Images/Candidate.jpg';
import './Testimonials.css';

const testimonials = [
  {
    name: "Hiscope Technologies",
    role: "Chennai",
    text: "Ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labuore et dolore magna aliqua.",
    imgSrc: TestimonialImg
  },
  {
    name: "Swapna Madiraju",
    role: "Delhi",
    text: "Ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labuore et dolore magna aliqua.",
    imgSrc: TestimonialImg
  },
  {
    name: "Hiscope Technologies",
    role: "Chennai",
    text: "Ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labuore et dolore magna aliqua.",
    imgSrc: TestimonialImg
  },
  {
    name: "Hiscope Technologies",
    role: "Chennai",
    text: "Ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labuore et dolore magna aliqua.",
    imgSrc: TestimonialImg
  },
  {
    name: "Hiscope Technologies",
    role: "Chennai",
    text: "Ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labuore et dolore magna aliqua.",
    imgSrc: TestimonialImg
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // 3 seconds
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const Testimonials = () => {
  return (
    <section className="testimonial-section spad mb-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="section-title">
              <div className="d-flex justify-content-center align-items-center">
                <div className="pill-btn mb-3">Testimonials</div>
              </div>
              <div className="text-center">
                <h1 className="mb-3">Our Client Say</h1>
                {/* <p>Et ligula sit quam, sapien lorem. Nec risus lorem vestibulum mi facilisis.</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div className="testimonial__item" key={index}>
                <img src={item.imgSrc} alt={item.name} />
                <h5>{item.name}</h5>
                <span>{item.role}</span>
                <p>{item.text}</p>
                <div className="testimonial__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
