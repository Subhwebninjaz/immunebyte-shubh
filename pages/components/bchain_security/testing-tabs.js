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
              <h4>Static Source Code Analysis</h4>
              <p>The SlowMist team checks code quality using open source or commercial code scanners, we support all popular language, such as C/C++/GoIang/Rust/Java/Nodejs/C#</p>
            </div>
          </div>
    </>;
  };
  
  const Tab2 = () => {
    return <>
         <div className='structure-side'>
            <div className='structure-content'>
              <h4>State Consistency</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
            </div>
            <div className='structure-content'>
              <h4>Fail Rollback</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
            </div>
            <div className='structure-content'>
              <h4>Numerical Overflow</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
            </div>
            <div className='structure-content'>
              <h4>Parameter Verification</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
            </div>
            <div className='structure-content'>
              <h4>Error Handle</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
            </div>
            <div className='structure-content'>
              <h4>Boundary Check</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
            </div>
            <div className='structure-content'>
              <h4>Unit Test Coverage</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas lacus sodales massa rhoncus, ut lobortis nulla posuere. Duis eu erat tincidunt.</p>
            </div>
          </div>
    </>;
  };

  
  return (
    <>
    <section >
      <div className="container">
        <div className="vt-tab">
          <h3 className="od-title">Code-based Testing Audit</h3>
          <p className='sec-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, mollitia quo assumenda veniam a debitis? Neque dicta illo provident veniam sed incidunt</p>
          <div className="row g-4">
            <div className="col-lg-3">
                <div className="struct-btn">
                    <div className={`vertical-tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                        <button className="btn btn-fill" type="button">SAST</button>
                    </div>
                    <div className={`vertical-tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                        <button className="btn btn-fill" type="button">Manual Code Review</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                {activeTab === 1 && <Tab1 />}
                {activeTab === 2 && <Tab2 />}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default VerticalTabs;
