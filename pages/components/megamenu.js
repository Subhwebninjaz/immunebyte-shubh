import React, { useState,useEffect } from 'react';
import Link from 'next/link'; 
import { FaArrowRight } from 'react-icons/fa';

const MegaMenu= ()=>{
  const [activeTab, setActiveTab] = useState(1);
    const handleTabHover = (tabNumber) => {
      setActiveTab(tabNumber);
    };

    // hide mega-menu on child link click
    const dropdownMenu = typeof document !== 'undefined' && document.querySelector('.dropdown-menu');
    const childElements = dropdownMenu && dropdownMenu.querySelectorAll('.mm-link');
    if(dropdownMenu && childElements ){
        childElements.forEach(link => {
        link.addEventListener('click', () => {
          dropdownMenu.classList.remove('show');
        });
      });
    }

    // hide mobile-menu on child link click
    const mobMenu = typeof document !== 'undefined' && document.querySelector('.mobile-menu ');
    const mobLinks = mobMenu && mobMenu.querySelectorAll('.mm-link');
    if(mobMenu && mobLinks ){
        mobLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobMenu.style.left='100%';
        });
      });
    }

    const Tab1 = () => {
      return (
        <> 
         <div className="hv-tb-cont ">
            <p className='ty-head'>By Type</p>
            <div className="row g-3">
              <div className="col-md-3">
                <Link className="os-simple mm-link" href="/sca-defi">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>DeFi</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="os-simple mm-link" href="/sca-nft">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>NFT</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-token">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Token</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-dapp">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>dApp</h5>
                </Link>
              </div>
            </div>
          </div>


          <div className="hv-tb-cont">
            <p className='ty-head'>By Language</p>
            <div className="row g-3">
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-solidity">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Solidity</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-rust">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Rust</h5>
                </Link>
              </div>
            
            </div>
          </div>


          <div className="hv-tb-cont">
            <p className='ty-head'>By Ecosystem</p>
            <div className="row g-3">
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-ethereum">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Ethereum</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-bsc">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>BSC</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-polygon">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Polygon</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-avalanche">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Avalache</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-near">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Near</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-solana">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Solana</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-aurora">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Aurora</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-arbitrum">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Arbitrum</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-optimism">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Optimism</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-fantom">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Fantom</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-algorand">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Algorand</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-celo">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Celo</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-flow">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Flow</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-cardano">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Cardano</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/sca-polkadot">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>polkaDOT</h5>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    };
    const Tab2 = () => {
      return <></>;
    };
    const Tab3 = () => {
      return (
        <>
          <div className="hv-tb-cont">
            <div className="row g-3">
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/app-pene">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Mobile</h5>
                </Link>
              </div>
              <div className="col-md-3">
                <Link className="mm-link os-simple" href="/web-pene">
                  <div className="img-div">
                    <img src="images/sample.jpg" alt="" />
                  </div>
                  <h5>Web</h5>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
      };
      const Tab4 = () => {
        return <></>;
      };
      const Tab5 = () => {
        return <></>;
      };
      
  return(
    <>
     <div className="mega-menu">
        <div className="row">
          <div className="col-5">
            <ul className="list-unstyled mm-left-ul ">
              <li>
                <div className={`${activeTab === 1 ? 'active' : ''}`} onMouseOver={() => handleTabHover(1)}>
                  <Link href="/" >
                    <div className="testi-author mm-left mm-link">
                      <div className="img-div ta-img"></div>
                      <div className="ta-text">
                        <h5 className="od-title author-name">Smart Contract Audit<span><FaArrowRight /></span></h5>
                        <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className={`${activeTab === 2 ? 'active' : ''}`} onMouseOver={() => handleTabHover(2)}>
                  <Link href="/bchain-security">
                    <div className="testi-author mm-left mm-link">
                    <div className="img-div ta-img"></div>
                    <div className="ta-text">
                      <h5 className="od-title author-name">Blockchain Security Services</h5>
                      <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
                    </div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className={`${activeTab === 3? 'active' : ''}`} onMouseOver={() => handleTabHover(3)} >
                    <Link href="/penetration" >
                      <div className="testi-author mm-left mm-link">
                      <div className="img-div ta-img"></div>
                      <div className="ta-text">
                        <h5 className="od-title author-name">Penetration Testing<span><FaArrowRight/></span></h5>
                        <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
                      </div>
                      </div>
                   </Link>
                </div>
              </li>
              <li>
                <div className={`${activeTab === 4 ? 'active' : ''}`} onMouseOver={() => handleTabHover(4)}>
                  <Link href="/web3-security">
                    <div className="testi-author mm-left mm-link">
                    <div className="img-div ta-img"></div>
                    <div className="ta-text">
                      <h5 className="od-title author-name">Web 3 Security Consulting</h5>
                      <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
                    </div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
               <div className={`${activeTab === 5 ? 'active' : ''}`} onMouseOver={() => handleTabHover(5)}>
                  <Link href="/digital-security">
                    <div className="testi-author mm-left mm-link">
                    <div className="img-div ta-img"></div>
                    <div className="ta-text">
                      <h5 className="od-title author-name">Digital Assets Security</h5>
                      <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
                    </div>
                    </div>
                  </Link>
               </div>
              </li>
            </ul>
          </div>
          <div className="col-7">
            <div className="mm-content">
              {activeTab === 1 && <Tab1 />}
              {activeTab === 2 && <Tab2 />}
              {activeTab === 3 && <Tab3 />}
              {activeTab === 4 && <Tab4 />}
              {activeTab === 5 && <Tab5 />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MegaMenu;

 