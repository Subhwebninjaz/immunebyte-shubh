import React from 'react'
import Link from 'next/link'
import ContactForm from './components/contact-form'

export default function ContactUs() {
  return (
    <>
    <main className="main-contact">
      <section className="">
        <div className="container">
            <h2 className="sec-title">Contact us</h2>
            <p className="sec-p">Aenean lobortis lacus ut lectus molestie vehicula. Aenean nisi ligula, facilisis ac tellus ut, fermentum fringilla nisi. Phasellus dapibus ex leo, sed tincidunt felis imperdiet ut. Aliquam lectus ante, volutpat congue dolor ac, mollis imperdiet diam.</p>
            <p className="sec-p">Complete the form below and we will contact you to discuss your project. Your information will be kept confidential.</p>
        </div>
      </section>
      <section className="cu-form-div">
        <div className="container">
          <ContactForm />
        </div>
      </section>
      <section className="">
        <div className="container">
            <h2 className="sec-title">Get In Touch</h2>
            <p className="sec-p">Aenean lobortis lacus ut lectus molestie vehicula. Aenean nisi ligula, facilisis ac tellus ut, fermentum fringilla nisi. Phasellus dapibus ex leo, sed tincidunt felis imperdiet ut. Aliquam lectus ante, volutpat congue dolor ac, mollis imperdiet diam.</p>
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="col-sub os-div hvr-shadow">
                  <div className="img-div"> <img src="images/sample.jpg" alt="" /> </div>
                  <h3 className="od-title">Connect With Us</h3>
                  <span><Link href="/" className="link-cyan">Click Here </Link>to start chatting with us.</span>
                  <span>Open 24/7</span>
                  <a className="sp-bold" href="mailto:team@immunebytes.com">Email: team@immunebytes.com</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="col-sub os-div hvr-shadow">
                  <div className="img-div"> <img src="images/sample.jpg" alt="" /> </div>
                  <h3 className="od-title">Follow Us</h3>
                  <div className="foot-social cu-social">
                    <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                    <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                    <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                    <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                    <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                    <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="col-sub os-div hvr-shadow">
                  <div className="img-div"> <img src="images/sample.jpg" alt="" /> </div>
                  <h3 className="od-title">Give Us A Call</h3>
                  <a  className="sp-bold" href="tel:+91-9876543210">Phone: +91-9876543210</a>
                  <span>24 Hour Emergency</span>
                  <span>Smart Contract Consulting Line:</span>
                  <a  className="sp-bold" href="tel:+91-9876543210">+91-9876543210</a>
                </div>
              </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
