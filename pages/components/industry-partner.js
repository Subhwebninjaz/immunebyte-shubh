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
  0: {items: 1,margin:5},
  768: {items: 2,margin:10},
  1024: {
    items: 3,
    margin:20,
    loop:true,
    dots:true,
    autoplay:true,
    dotsEach: true,
  }
}

export default function HomeIndustryPartner() {
  return (
    <>
    <section className="ind-partner">
      <div className="container">
          <h2 className="sec-title">Our Industry Partners</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
          <OwlCarousel className="owl-industry-partner" responsive={Responsive_ip}>
              <div className="os-div">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />
                </div>
                <h3 className='od-title'>Smart Contract Audit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
              </div>
              <div className="os-div">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />
                </div>
                <h3 className='od-title'>Smart Contract Audit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
              </div>
              <div className="os-div">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />
                </div>
                <h3 className='od-title'>Smart Contract Audit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
              </div>
              <div className="os-div">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />
                </div>
                <h3 className='od-title'>Smart Contract Audit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
              </div>
              <div className="os-div">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />
                </div>
                <h3 className='od-title'>Smart Contract Audit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
              </div>
          </OwlCarousel>
      </div>
    </section>
    </>
  )
}