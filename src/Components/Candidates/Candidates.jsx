import React from 'react';
import { SiTicktick } from "react-icons/si";
import About from "../../Images/Candidate.jpg";
import "./Candidates.css";

const Candidates = () => {
  return (
    <section id='who-we-are' className='my-5'>
      <div className='container who-we-are'>
        <div className='row'>
          <div className='col-md-6'>
            <div className="section-title">
              <div className="d-flex justify-content-start align-items-center">
                <div className="pill-btn mb-3">For Candidates</div>
              </div>
              <div className="text-start">
                <h4 className="mb-4">Getting Verified with us is like...</h4>
              </div>
            </div>
            <hr />
            <div className='key-points mb-4'>
              <p><span><SiTicktick /></span> Getting Verified with us is like having complete visibility into a candidate's background, as if you've personally tracked their education and career milestones. Every detail is throughly confirmed, giving you the confidence to make informed hiring decisions.</p>
            </div>
            <div>
              <button className='consulting-btn'>Click To Register</button>
            </div>
          </div>

          <div className='col-md-6 text-center'>
            <div className='img1'>
              <img src={About} alt="img" />
            </div>
            <div className='img2'>
              <img src={About} alt="img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Candidates