import Link from 'next/link';

export default function RecentBlogs() {
  return (
    <>
    <section className="recent-blogs">
      <div className="container">
          <h2 className="sec-title">Recent Blogs</h2>
          <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
          <div className="row g-5">

            <div className="col-lg-4 col-md-6">
              <div className="col-sub rb-vcol">
                <div className="img-div">
                <img src="images/sample.jpg" alt="" />  
                </div>
                <h3 className="od-title">Lorem Ipsum Dolor Sit Amet Consect</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus.</p>
                <Link className="btn btn-fill" href="">Read Article</Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="col-sub rb-vcol">
                <div className="img-div">
                <img src="images/sample.jpg" alt="" />  
                </div>
                <h3 className="od-title">Lorem Ipsum Dolor Sit Amet Consect</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesque. Integer sit amet sem et lacus dapibus.</p>
                <Link className="btn btn-fill" href="">Read Article</Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="col-sub rb-hcol">
                <div className="">
                  <h3 className="od-title">Lorem Ipsum Dolor Sit Amet Consect</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link className="rb-link" href="">Read Article</Link>
                </div>
                <div className="">
                  <h3 className="od-title">Lorem Ipsum Dolor Sit Amet Consect</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link className="rb-link" href="">Read Article</Link>
                </div>
                <div className="">
                  <h3 className="od-title">Lorem Ipsum Dolor Sit Amet Consect</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link className="rb-link" href="">Read Article</Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}