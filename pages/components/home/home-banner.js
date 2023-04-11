import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
const Responsive_ip = {
  0: {
    items: 2.5,
    margin: 10,
    // dots: false,
    dotsEach: true,
    loop: true,
  },
}

export default function HomeBanner() {
  return (
    <>
    <section className="home-banner">
      <div className="container">
        <div className="row hb-row1">
          <div className="col-lg-7">
            <h1 className="sec-title main-title">Smart Contract Audits</h1>
            <p className="sec-p">Our comprehensive smart contract audit services</p>
            <div className="hb-stats">
              <div className="row">
                <div className="col-md-4">
                  <div className="hbs">
                    <h2>175+</h2>
                    <h6>Project Audited</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hbs">
                    <h2>$4.1Bn</h2>
                    <h6>Onchain Value Secured</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hbs">
                    <h2>145+</h2>
                    <h6>Happy Clients</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-div">
              <button className="btn btn-fill" type="button">Request Audit</button>
              <button className="btn btn-fill btn-outline ex-port-lg" type="button">Explore Portfolio</button>
            </div>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="img-div hb-lg-img d-none d-lg-flex">
              <div className="row banner-logos">
                <div className="col-4">
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                </div>
                <div className="col-4 center-col">
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                </div>
                <div className="col-4">
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                  <div className="img-div"><img src="images/airplane-engines.svg" alt="" /></div>
                </div>
                </div>
            </div>
            <div className="hb-our-profile d-lg-none">
              <h2 className="sec-title">Our Portfolio</h2>
              <OwlCarousel className="owl-our-portfolio" responsive={Responsive_ip}>
                <div className="img-div"><img src="images/immunebytes-logo.svg" alt="" /></div>
                <div className="img-div"><img src="images/immunebytes-logo.svg" alt="" /></div>
                <div className="img-div"><img src="images/immunebytes-logo.svg" alt="" /></div>
              </OwlCarousel>
              <div className="btn-div bd-testi">
                <Link href="" className="btn btn-fill btn-outline  ex-port-sm">Explore Portfolio<FaChevronRight /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}