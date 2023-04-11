import Link from 'next/link';
import { FaCriticalRole } from 'react-icons/fa';

export default function ScaArbitrumImportance() {
  return (
    <>
    <section className="services">
      <div className="container">
          <h2 className="sec-title">Why Is It Important?</h2>
          <p className="sec-p">Whether it's about performing Metaverse smart contract audit or DAPP smart contract audit, our ingenious audit practices coupled with thorough review from our subject matter experts ensure that your project is high on security and performance.</p>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="col-sub os-div">
                <div className="img-div"> <FaCriticalRole /> </div>
                <h3 className="od-title">Prevent Costly Exploits</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="col-sub os-div">
                <div className="img-div"> <FaCriticalRole /> </div>
                <h3 className="od-title">Optimize Your Code</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="col-sub os-div">
                <div className="img-div"> <FaCriticalRole /> </div>
                <h3 className="od-title">Increase Audience Trust</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}