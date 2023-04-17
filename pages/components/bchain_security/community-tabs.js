import React, { useState } from 'react';


const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  
  const Tab1 = () => {
    return <>
         <div className='structure-side'>
              <div className='structure-content'>
                <h4>Replay Attack</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Rearrangement Attack</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Conditional Race Attack</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Access Control Attack</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Block Data Dependency Attack</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Explicit Visibility of Function State Variables</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Arithmetic Precision Error</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Malicious Event Audit</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>State Consistency Audit</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Failed Rollback Audit</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='structure-content'>
                <h4>Unit Test Audit</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur sem nec tortor interdum pellentesqueLorem ipsum dolor sit amet, consectetur ecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
    </>;
  };

  return (
    <>
    <section >
      <div className="container">
          <div className="vt-tab">
          <h3 className="od-title">Community Customized Audit plan</h3>
          <p className='sec-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, mollitia quo assumenda veniam a debitis? Neque dicta illo provident veniam sed incidunt</p>
        <div className="row g-4">
          <div className="col-lg-3">
              <div className="struct-btn">
                  <div className={`vertical-tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                      <button className="btn btn-fill" type="button">Lorem ipsum</button>
                  </div>
              </div>
          </div>
          <div className="col-lg-9">
              {activeTab === 1 && <Tab1 />}
          </div>
        </div>
          </div>
      </div>
    </section>
    </>
  );
};

export default VerticalTabs;