import Image from "next/image";
import { FaChevronRight, FaPlay, FaPlayCircle } from 'react-icons/fa';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const VideoModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn video-btn" onClick={handleShow}><FaPlay /></Button>
      <Modal show={show} onHide={handleClose} centered className="req-audit-modal vid-modal">
        <Button className="ram-close" onClick={handleClose}> </Button>
        <Modal.Body className="vid-modal-body">
          <video controls autoPlay muted> <source src={props.testi_video} type="video/mp4" /> </video>
        </Modal.Body>
      </Modal>
    </>
  );
};


var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import Link from "next/link";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
const Responsive_testi = {
  0: {
    items: 1,
    margin:10
  },
  1024: {
    items: 2,
    margin:30,
    loop:true,
    dots:true,
    // autoplay:true,
    dotsEach: true,
    // video: true,
  },
}

export default function Testimonials() {
  return (
    <>
    <section className="testimonials">
      <div className="container">
          <h2 className="sec-title">Testimonials</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="left-col">

                <div className="col-sub col-sub1">
                  <div className="testi-title2">
                    <h3>What <span>People</span> Say <span>About</span> Us</h3>
                  </div>
                  <div className="os-simple">
                    <div className="img-div"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/> </svg> </div>
                    <p className="quote-p">Lorem ipsum dolor sit amet, elit. Lorem ipsum dolor sit amet Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus porttitor. Donec varius facilisis ex et aliquet. Cras consectetur sem nec tortor interdum pellentesque.Cras consectetur sem nec.</p>
                    <div className="testi-author">
                      <div className="img-div ta-img"><img src="" alt="" /></div>
                      <div className="ta-text">
                        <h5 className="od-title author-name">Adam Boudjemaa</h5>
                        <div className="author-company">PolyTrade Finance</div>
                        <div className="author-role">Lead Blockchain Developer</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sub os-simple">
                  <div className="img-div"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/> </svg> </div>
                  <p className="quote-p">Lorem ipsum dolor sit amet, elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus porttitor. Donec varius facilisis ex et aliquet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur amet consecteturadipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus porttitor. Donec varius facilisis ex et aliquet.</p>
                  <div className="testi-author">
                    <div className="img-div ta-img"><img src="" alt="" /></div>
                    <div className="ta-text">
                      <h5 className="od-title author-name">Adam Boudjemaa</h5>
                      <div className="author-company">PolyTrade Finance</div>
                      <div className="author-role">Lead Blockchain Developer</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-5">
              <div className="col-sub right-col">
                <div className="os-simple">
                  <div className="img-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/> </svg>
                  </div>
                  <p className="quote-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum...</p>
                  <div className="testi-author">
                    <div className="img-div ta-img"><img src="" alt="" /></div>
                    <div className="ta-text">
                      <h5 className="od-title author-name">Adam Boudjemaa</h5>
                      <div className="author-company">PolyTrade Finance</div>
                      <div className="author-role">Lead Blockchain Developer</div>
                    </div>
                  </div>
                </div>
                <div className="os-simple">
                  <div className="img-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/> </svg>
                  </div>
                  <p className="quote-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum...</p>
                  <div className="testi-author">
                    <div className="img-div ta-img"><img src="" alt="" /></div>
                    <div className="ta-text">
                      <h5 className="od-title author-name">Adam Boudjemaa</h5>
                      <div className="author-company">PolyTrade Finance</div>
                      <div className="author-role">Lead Blockchain Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OwlCarousel className="owl-testimonial" responsive={Responsive_testi}>
                <div className="testi-item">
                  <div className="img-div os-div">
                    <VideoModal testi_video="video/sample.mp4" />
                  </div>
                  <div className="ta-text">
                      <h5 className="od-title author-name">Adam Boudjemaa</h5>
                      <div className="author-company">PolyTrade Finance</div>
                      <div className="author-role">Lead Blockchain Developer</div>
                    </div>
                </div>
                <div className="testi-item">
                  <div className="img-div os-div">
                    <VideoModal testi_video="video/mov_bbb.mp4" />
                  </div>
                  <div className="ta-text">
                      <h5 className="od-title author-name">Adam Boudjemaa</h5>
                      <div className="author-company">PolyTrade Finance</div>
                      <div className="author-role">Lead Blockchain Developer</div>
                    </div>
                </div>
                <div className="testi-item">
                  <div className="img-div os-div">
                    <VideoModal testi_video="video/sample.mp4" />
                  </div>
                  <div className="ta-text">
                      <h5 className="od-title author-name">Adam Boudjemaa</h5>
                      <div className="author-company">PolyTrade Finance</div>
                      <div className="author-role">Lead Blockchain Developer</div>
                    </div>
                </div>
                <div className="testi-item">
                  <div className="img-div os-div">
                    <VideoModal testi_video="video/mov_bbb.mp4" />
                  </div>
                  <div className="ta-text">
                      <h5 className="od-title author-name">Adam Boudjemaa</h5>
                      <div className="author-company">PolyTrade Finance</div>
                      <div className="author-role">Lead Blockchain Developer</div>
                    </div>
                </div>
            </OwlCarousel>
            <div className="btn-div bd-testi">
              <Link href="" className="btn btn-fill">View All Testimonials <FaChevronRight /></Link>
            </div>
        </div>
        
      </div>
    </section>
    </>
  )
}