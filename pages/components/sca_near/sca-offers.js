import Link from 'next/link';
import { FaCriticalRole, FaJava } from 'react-icons/fa';

export default function ScaNearOffers() {
  return (
    <>
    <section className="tt-our-tools">
      <div className="container">
          <h2 className="sec-title">What We Offer?</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <FaCriticalRole />
                <h3 className="od-title">Extensive Audit Report</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <FaCriticalRole />
                <h3 className="od-title">Check For 100+ Vulnerabilities</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <FaCriticalRole />
                <h3 className="od-title">Smart Contract Fuzzing</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <FaCriticalRole />
                <h3 className="od-title">Post Refactor Reaudits</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <FaCriticalRole />
                <h3 className="od-title">Security Test Cases</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="os-div ihc-hover">
                <FaCriticalRole />
                <h3 className="od-title">Quick Turnaround Time</h3>
                <div className="hover-cnt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}