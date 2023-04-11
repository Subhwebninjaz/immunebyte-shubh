import Link from 'next/link';
import { FaCriticalRole } from 'react-icons/fa';

export default function OurTools() {
  return (
    <>
    <section className="tt-our-tools">
      <div className="container">
          <h2 className="sec-title">Our Tools</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />  
                </div>
                <h3 className="od-title">Lorem Ipsum</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                  <Link className="lm-link" href="">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />  
                </div>
                <h3 className="od-title">Lorem Ipsum</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                  <Link className="lm-link" href="">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />  
                </div>
                <h3 className="od-title">Lorem Ipsum</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                  <Link className="lm-link" href="">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />  
                </div>
                <h3 className="od-title">Lorem Ipsum</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                  <Link className="lm-link" href="">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <div className="img-div">
                  <img src="images/sample.jpg" alt="" />  
                </div>
                <h3 className="od-title">Lorem Ipsum</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                  <Link className="lm-link" href="">Learn More</Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}