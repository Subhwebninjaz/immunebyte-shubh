
export default function TestimonialsBanner() {
  return (
    <>
    <section className="testimonials-banner">
      <div className="container">
        <div className="row hb-row1">
          <div className="col-lg-7">
            <h1 className="sec-title main-title">Testimonials</h1>
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