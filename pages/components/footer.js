import Link from 'next/link';

export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="clr-bg ib-proof foot-subscribe">
          <div className="row">
            <div className="col-lg-4">
              <div className="img-div">
                <img src="images/sample.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row-text">
                <h3>Subscribe To Our Newsletter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu purus, rhoncus sed porttitor ut, cursus ac leo. Nunc at placerat sem. Nam sed faucibus urna.</p>
                <form className="btn-div subs-form">
                  <input type="email" name="subs-email" id="subs-email" placeholder='E-mail'/> 
                  <button className="btn btn-fill btn-outline" type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="main-foot">
          <div className="row g-4 g-lg-0">
            <div className="col-lg-2"><a href="/" className="img-div foot-logo"><img src="images/immunebytes-logo.svg" /></a></div>
            <div className="col-lg-3">
              <h5 className="foot-title fs-title">join our community</h5>
              <div className="foot-social">
                <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
                <a href="#" className="img-div"><img src="images/airplane-engines.svg" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="serv-div">
                <h5 className="foot-title">services</h5>
                <ul>
                  <li><Link href="/">smart contract audit</Link></li>
                  <li><Link href="/bchain-security">blockchain security services</Link></li>
                  <li><Link href="/penetration">penetration testing</Link></li>
                  <li><Link href="/web3-security">web3 security consulting</Link></li>
                  <li><Link href="/digital-security">digital asset security</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="comp-div">
                <h5 className="foot-title">company</h5>
                <ul>
                  <li><Link href="/about-us">about us</Link></li>
                  <li><Link href="/contact-us">contact us</Link></li>
                  <li><Link href="/testimonials">testimonials</Link></li>
                  <li><Link href="/help">help</Link></li>
                  <li><Link href="/privacy-policy">privacy policy</Link></li>
                  <li><Link href="/disclaimer">disclaimer</Link></li>
                  <li><Link href="/portfolio">portfolio</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="foot-title">resources</h5>
              <ul>
                <li><Link href="/sca-cost">pricing calculator</Link></li>
                <li><Link href="#">blog</Link></li>
                <li><Link href="/tools">tools</Link></li>
                <li><Link href="#">audit reports</Link></li>
              </ul>
            </div>
            <div className="col-lg-1">
              <h5 className="foot-title">career</h5>
              <ul>
                <li><Link href="#">join us</Link></li>
              </ul>
            </div>
          </div>
          <div className="foot-btm">
            &copy;2021 ImmuneBytes. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}