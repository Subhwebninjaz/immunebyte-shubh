import { FaCriticalRole } from 'react-icons/fa';

export default function ScaServicesLanguage () {
  return (
    <>
    <section className="services digital-service">
      <div className="container">
          <h2 className="sec-title">Languages That We Support</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Whether it's about performing Metaverse smart contract audit or DAPP smart contract audit, our ingenious audit practices coupled with thorough review from our subject matter experts ensure that your project isLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="col-sub os-simple">
                <div className="img-div"> <FaCriticalRole /> </div>
                <h3 className="od-title">Solidity</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="col-sub os-simple">
                <div className="img-div"> <FaCriticalRole /> </div>
                <h3 className="od-title">Rust</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec</p>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}