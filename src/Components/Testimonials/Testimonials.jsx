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
  slidesToShow: 3, // Show 3 slides on larger screens
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // 3 seconds
  responsive: [
    {
      breakpoint: 992, // Tablets and below
      settings: {
        slidesToShow: 2, // Show 2 slides
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // Mobile devices
      settings: {
        slidesToShow: 1, // Show 1 slide
        slidesToScroll: 1,
      }
    }
  ]
};

const Testimonials = () => {
  return (
    <section className="testimonial-section spad mb-5">
      <div className="container p-0">
        <div className="row mb-5 m-0">
          <div className="section-title">
            <div className="d-flex justify-content-center align-items-center">
              <div className="pill-btn mb-3">Testimonials</div>
            </div>
            <div className="text-center">
              <h1 className='mb-0'>Our Client Say</h1>
            </div>
          </div>
        </div>
        <div className="row m-0">
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
