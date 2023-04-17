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
                <h4>Private Key Prediction</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, massa varius laoreet molestie, justo mi gravida enim, eget imperdiet elit nulla sed magna. Phasellus eget lorem eget purus commodo viverra. Maecenas ut mauris nec enim aliquet fermentum in at nibh. Donec nec tortor quam. Aenean tristique porttitor lacus.</p>
              </div>
              <div className='structure-content'>
                <h4>Rug Pull Attack</h4>
                <p>Rug pull is a type of crypto scam which takes place when a team pumps the token of their project before vanishing with the funds and leaving the investors with a valueless asset.</p>
              </div>
              <div className='structure-content'>
                <h4>Insecure Encryption Library</h4>
                <p>Insecure Cryptographic Storage is a common vulnerability that occurs when sensitive data is not stored securely. Insecure Cryptographic Storage isn't a single vulnerability, but a collection of vulnerabilities.</p>
              </div>
              <div className='structure-content'>
                <h4>Transaction Malleability Attack</h4>
                <p>The transaction malleability problem is a vulnerability in blockchain which can be exploited by altering a cryptographic hash, such as the digital signature used to identify a cryptocurrency transaction.</p>
              </div>
              <div className='structure-content'>
                <h4>Transaction Replay Attack</h4>
                <p>A replay attack usually happens when blockchains alter or upgrade their protocols, a process known as a hard fork. It is a type of cybercrime where bad actors get hold of an original encrypted message during data transmission and use it to fool the system into carrying out the same transaction multiple times.</p>
              </div>
              <div className='structure-content'>
                <h4>False Top-up Attack</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, massa varius laoreet molestie, justo mi gravida enim, eget imperdiet elit nulla sed magna. Phasellus eget lorem eget purus commodo viverra. Maecenas ut mauris nec enim aliquet fermentum in at nibh. Donec nec tortor quam. Aenean tristique porttitor lacus.</p>
              </div>
              <div className='structure-content'>
                <h4>RPC Theft</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, massa varius laoreet molestie, justo mi gravida enim, eget imperdiet elit nulla sed magna. Phasellus eget lorem eget purus commodo viverra. Maecenas ut mauris nec enim aliquet fermentum in at nibh. Donec nec tortor quam. Aenean tristique porttitor lacus.</p>
              </div>
            </div>
    </>;
  };

  return (
    <>
    <section >
      <div className="container">
        <div className="vt-tab">
          <h3 className="od-title">Cryptocurrency Exchange Listing Security Audit</h3>
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