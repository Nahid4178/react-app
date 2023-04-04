import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="assets/newsletter.png" alt="newsletter" />
              <h2 className="mb-0 text-white">
                Sign Up For Get It
              </h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
            <input type="text" className="form-control py-1" placeholder='Your Email Address' aria-label='Your Email Address' aria-describedby='basic-addon2'/>
            <span className='input-group-text p-3' id='basic-addon2'>
             <a className='text-white'>Subscribe</a> 
            </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className='text-white'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
              Hno: 255 Near Dhanmondi vill chapa, <br /> monipura store <br />
              PinCode : 123435
              </address>
              <a to="tel : +088 564786483" className="mt-4 d-block md-2 text-white">
                +088 374564365
              </a>
              
              <a to="mailto: nahid@gmail.com " className="mt-4 d-block md-2 text-white">
              freelancernahid4178@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-30">
                <a className="text-white fs-5 mt-3">
                  <BsLinkedin />
                </a>
                <a className="text-white fs-5 mt-3">
                  <BsGithub/>
                </a>
                <a className="text-white fs-5 mt-3">
                  <BsYoutube/>
                </a>
                <a className="text-white fs-5 mt-3">
                  <BsInstagram/>
                </a>
              </div>
            </div>
      
        </div>
        <div className="col-3">
          <h4 className='text-white'>Information</h4>
          <div className='footer-links d-flex flex-column'>
            <a className='text-white py-2 mb-1'>Privecy </a>
            <a className='text-white py-2 mb-1'>Refund</a>
            <a className='text-white py-2 mb-1'>Collaboration</a>
            <a className='text-white py-2 mb-1'>Terms of </a>
            <a className='text-white py-2 mb-1'>Blogs</a>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white'>Account</h4>
          <div className='footer-links d-flex flex-column'>
            <a className='text-white py-2 mb-1'>Search</a>
            <a className='text-white py-2 mb-1'>About Us</a>
            <a className='text-white py-2 mb-1'>Faq</a>
            <a className='text-white py-2 mb-1'>Contact</a>
          </div>
        </div>
        <div className="col-2 mr-7">
          <h4 className='text-white'>Quick Links</h4>
          <div className='footer-links d-flex flex-column'>
            <a className='text-white py-2 mb-1'>Find Me</a>
            <a className='text-white py-2 mb-1'>About Me</a>
            <a className='text-white py-2 mb-1'>Contact with us</a>
            <a className='text-white py-2 mb-1'>Youtube video</a>
          </div>
        </div>
      </div>
    </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center md-0 text-white">
           &copy; {new Date().getFullYear()}: Powerd by Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer