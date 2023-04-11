export default function PenetrationBanner() {
  return (
    <>
    <section className="Penetration-banner">
      <div className="container">
        <div className="row g-4 hb-row1">
          <div className="col-lg-7">
            <h1 className="sec-title main-title">Penetration Testing</h1>
            <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue vestibulum mi, vitae auctor sapien. Suspendisse a semper magna.</p>
            <div className="btn-div">
              <button className="btn btn-fill" type="button">Request Penetration Test</button>
            </div>
          </div>
          <div className="col-lg-5">
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