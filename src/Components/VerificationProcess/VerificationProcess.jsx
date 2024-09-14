// import React, { useState } from 'react';

import { BsCheck2All } from "react-icons/bs";
import "./VerificationProcess.css";


const VerificationProcess = () => {
  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => setShowModal(true);
  // const closeModal = () => setShowModal(false);

  return (
    <section id='process' className='py-5'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className="section-title mb-4">
              <div className="d-flex justify-content-start align-items-center">
                <div className="pill-btn mb-3">Our Process</div>
              </div>
              <div className="text-start">
                <h1 className="mb-3 text-white">Complete Verification Process in 3 Simple Steps</h1>
              </div>
            </div>
            <div className='main-card'>
              <div className='d-flex flex-wrap flex-xl-nowrap justify-content-between align-items-center gap-5 mb-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h5><span><BsCheck2All /></span>Step-1</h5>
                    <p>Register with Us! As Employer / Candidate.</p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-body'>
                    <h5><span><BsCheck2All /></span>Step-2</h5>
                    <p>Your documents will be verified and updated.</p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-body'>
                    <h5><span><BsCheck2All /></span>Step-3</h5>
                    <p>Your documents will be verified and updated.</p>
                  </div>
                </div>
              </div>
              <div className="verified-section text-center">
                <p>Click here to see how we do it</p>
                <button className="mb-3">Get Verified Now</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerificationProcess