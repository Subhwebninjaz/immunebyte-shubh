import React from 'react';
import  AllTable from './components/portfolio/all-table';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <>
    <main className="main-portfolio ">
      <section>
        <div className="container">
            <h2 className="sec-title main-title">Portfolio</h2>
            <p className="sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro inventore cum nisi libero odio voluptas non molestiae consequatur. Quos, sint voluptatem. </p>
        </div>
      </section>
      <AllTable/>
      <section className="issue">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-2">
              <div className="chain-div">
                <div className="os-simple audit-div">
                  <p className="exp-p">Explore Auditing</p>
                  <h1>10+</h1>
                  <p className="exp-p">Chains</p>
                </div>
                <div className="os-simple audit-div">
                  <p className="exp-p">Explore Auditing</p>
                  <h1>10+</h1>
                  <p className="exp-p">Chains</p>
                </div>
                <div className="os-simple audit-div">
                  <p className="exp-p">Explore Auditing</p>
                  <h1>10+</h1>
                  <p className="exp-p">Chains</p>
                </div>
              </div>
            </div>  
            <div className="col-lg-6">
              <div className="os-simple mod-os-simple" >
                <h3>Severity Issues</h3>
                <div className='sev-issue'>
                 <div className="il-div">
                    <input type="checkbox" id="" name="" value=""/>
                    <label for="">SEVERITY BREAKDOWN</label>
                 </div>
                  <div className="il-div">
                    <input type="checkbox" id="" name="" value=""/>
                    <label for="">CLOSED</label>
                  </div>
                  <div className="il-div">
                    <input className='reg-check' type="checkbox" id="" name="" value=""/>
                    <label  for="">ACKNOWLEDGED</label>
                  </div>
                </div>
                <div className='img-div'><img src="images/sec-issue.jpg" alt=""/></div>
              </div>
            </div>
            <div className="col-lg-4">
               <div className="prof-subs">
                 <div className="ib-proof">
                   <h5>Proofed By ImmuneBytes</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <Link className="lm-link" href="#"> Learn More</Link>
                   <div className="btn-div ">
                     <button className="btn btn-fill btn-outline" type="button">Request Audit</button>
                   </div>
                 </div>
                 <div className="ib-proof">
                   <h5>Proofed By ImmuneBytes</h5>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <Link className="lm-link" href="#"> Learn More</Link>
                   <div className="btn-div ">
                     <button className="btn btn-fill btn-outline" type="button">Subscribe</button>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </section>
    </main>
    </>
  )
}
