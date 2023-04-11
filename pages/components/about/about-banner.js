import Link from 'next/link';

export default function AboutBanner() {
  return (
    <>
    <section className="about-banner">
      <div className="container">
        <div className="row hb-row1">
          <div className="col-lg-7">
            <h1 className="sec-title main-title">About Us</h1>
            <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue vestibulum mi, vitae auctor sapien. Suspendisse a semper magna.</p>
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
              <Link href="/" className="btn btn-fill">Get In Touch</Link>
            </div>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="img-div">
              <img src="images/sample.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="who-vr">
      <div className="container">
        <h1 className="sec-title main-title">Who we are?</h1>
        <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt. Aenean lobortis lacus ut lectus molestie vehicula. Aenean nisi ligula, facilisis ac tellus ut, fermentum fringilla nisi. Phasellus dapibus ex leo, sed tincidunt felis imperdiet ut. Aliquam lectus ante, volutpat congue dolor ac, mollis imperdiet diam.</p>
        <p className="sec-p"> Our clients count on us to help them lead their industries. They trust our deep expertise in blockchain, cryptography, virtualization and software exploits. Our Security Services include auditing their products or networks, consulting on modifications necessary for a secure deployment, and developing the secure features that close gaps in their security. </p>
      </div>
    </section>
    <section className="our-vision">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="sec-title main-title">Our Vision</h1>
            <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt. Aenean lobortis lacus ut lectus molestie vehicula. Aenean nisi ligula, facilisis ac tellus ut, fermentum fringilla nisi. Phasellus dapibus ex leo, sed tincidunt felis imperdiet ut. Aliquam lectus ante, volutpat congue dolor ac, mollis imperdiet diam.</p>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="img-div">
              <img src="images/sample.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}