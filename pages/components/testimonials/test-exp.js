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

export default function TestimonialsExp() {
  return (
    <>
    <section className="testi-exp">
      <div className="container">
          <h2 className="sec-title">Featured Experiences</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>

        <div className="testi-item">
            <div className="img-div os-simple">
              <VideoModal testi_video="video/mov_bbb.mp4" />
            </div>
        </div>
        <div className="row py-4 g-4">
          <div className="col-md-6">
            <div className="os-simple db-quote">
                <div className="testi-author">
                  <div className="img-div ta-img"><img src="images/user-img.png" alt="" /></div>
                  <div className="ta-text">
                    <h5 className="od-title author-name p-bolder">ADAM BOUDJEMAA</h5>
                    <div className="author-company">PolyTrade Finance</div>
                    <div className="author-role">Lead Blockchain Developer</div>
                  </div>
                </div>
                <p className='p-bold'>Lorem ipsum dolor sit amet!! </p>
                <p className="quote-p">Lorem ipsum dolor sit amet, elit. Lorem ipsum dolor sit amet Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus porttitor. Donec varius facilisis ex et aliquet. Cras consectetur sem nec tortor interdum pellentesque.Cras consectetur sem ne Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus temporibus voluptates. </p>
            </div>
          </div>
          <div className="col-md-6">
          <div className="os-simple db-quote">
                <div className="testi-author">
                  <div className="img-div ta-img"><img src="images/user-img.png" alt="" /></div>
                  <div className="ta-text">
                    <h5 className="od-title author-name p-bolder ">ADAM BOUDJEMAA</h5>
                    <div className="author-company">PolyTrade Finance</div>
                    <div className="author-role">Lead Blockchain Developer</div>
                  </div>
                </div>
                <p className='p-bold'>Lorem ipsum dolor sit amet!! </p>
                <p className="quote-p">Lorem ipsum dolor sit amet, elit. Lorem ipsum dolor sit amet Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus porttitor. Donec varius facilisis ex et aliquet. Cras consectetur sem nec tortor interdum pellentesque.Cras consectetur sem nec Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus temporibus voluptates..</p>
            </div>
          </div>
        </div>       
        <div className="os-simple lq-sec">
          <div className="row">
            <div className="col-md-4">
              <div className="auth-pic">
                <div className="img-div"><img src="images/user-img.png" alt="" /></div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="col-sub">
                <div className="img-div"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/> </svg> </div>
                <p className="quote-p">Lorem ipsum dolor sit amet, elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus porttitor. Donec varius facilisis ex et aliquet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur amet consecteturadipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus porttitor. Donec varius facilisis ex et aliquet.</p>
                <div className="testi-author">
                  <div className="ta-text">
                    <h4 className="od-title author-name">ADAM BOUDJEMAA</h4>
                    <div className="author-company">PolyTrade Finance</div>
                    <div className="author-role">Lead Blockchain Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}