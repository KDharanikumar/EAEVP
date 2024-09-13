import React from 'react'
import Candidates from '../../Components/Candidates/Candidates'
import Employers from '../../Components/Employers/Employers'
import Hero from "../../Components/Hero/Hero"
import Testimonials from "../../Components/Testimonials/Testimonials"
import VerificationProcess from '../../Components/VerificationProcess/VerificationProcess'
import WhyEaevp from '../../WhyEAEVP/WhyEaevp'
import "./Home.css"

const Home = () => {
  return (
    <div className='container-fluid' id="home">

      <div className='row'>
        <Hero />
        <div className='container'>
          <WhyEaevp />
        </div>
        <VerificationProcess />
        <Employers />
        <Candidates />
        <Testimonials />

      </div>
    </div>
  )
}

export default Home