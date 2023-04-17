import { FaBars, FaTimes, FaMinus } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from './contact-form';
import MegaMenu from './megamenu'
import Accordion from 'react-bootstrap/Accordion';

const AuditModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-fill" onClick={handleShow}> Request Audit </Button>
      <Modal show={show} onHide={handleClose} centered className="req-audit-modal">
        <Button className="ram-close" onClick={handleClose}> <FaTimes /> </Button>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

function BsNavDropdown() {
  useEffect(() => {
    // const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownToggle = document.querySelector('.navbar-toggler');
    const mmClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    if (dropdown && dropdownMenu && dropdownToggle) {
      dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.classList.add('show');
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.classList.remove('show');
      });
      dropdownToggle.addEventListener('click', () => {
        mobileMenu.style.left='0';
      });
      mmClose.addEventListener('click', () => {
        mobileMenu.style.left='100%';
      });
    }
  }, []);
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" > Services </a>
      <div className="dropdown-menu mega-dropdown" aria-labelledby="navbarDropdown">
        <MegaMenu />
      </div>
    </li>
  );
}


export default function Header() {
  return (
    <>
    <header className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="images/immunebytes-icon.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
              <li className="nav-item"> <Link className="nav-link active" aria-current="page" href="/"> Home </Link> </li>
              <BsNavDropdown />
              <li className="nav-item"> <Link className="nav-link" href="/tools"> Tools </Link> </li>
              <li className="nav-item"> <Link className="nav-link" href="/portfolio"> Portfolio </Link> </li>
              <li className="nav-item"> <Link className="nav-link" href="/about-us"> About Us </Link> </li>
              <li className="nav-item"> <Link className="nav-link" href="/contact-us"> Contact Us </Link> </li>
            </ul>
            <AuditModal />
          </div>

          {/* mobile menu */}
          <div className="faq mobile-menu ">
            <div className="logo-close">
              <a className="navbar-brand" href="/"> <img src="images/immunebytes-icon-white.svg" alt="" /> </a>
              <div className="mobile-menu-close"> <FaTimes /> </div>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item mm-link"> <Link className="nav-link" href="/"> Home </Link> </li>
                <li className="nav-item ">
                  <Accordion flush className="nav-link">
                      <Accordion.Item eventKey="1">
                      <Link className='mm-link' href="/services">Services</Link>
                      <Accordion.Header><div className='acc-icn'><FaMinus className='faq-mns'/><FaMinus /></div></Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li className="nav-item">
                            <Accordion flush className="nav-link">
                              <Accordion.Item eventKey="1">
                              <Link className='mm-link' href="/">Smart Contract Audit</Link>
                                <Accordion.Header><div className='acc-icn'><FaMinus className='faq-mns'/><FaMinus /></div></Accordion.Header>
                                <Accordion.Body>
                                   <div className="mob-hv-tab-cont">
                                     <p className='nav-link'>By Type:</p>
                                      <ul>
                                        <li><Link className="mm-link nav-link" href="/sca-defi"> Defi </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-nft"> NFT </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-token"> Token </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-dapp"> DApp </Link></li>
                                      </ul>
                                   </div>
                                   <div className="mob-hv-tab-cont">
                                     <p className='nav-link'>By Ecosystem:</p>
                                      <ul>
                                        <li><Link className="mm-link nav-link" href="/sca-ethereum"> Ethereum </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-bsc"> BSC </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-polygon"> Polygon </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-avalanche"> Avalache </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-near"> Near </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-solana"> Solana </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-aurora"> Aurora </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-arbitrum"> Arbitrum </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-optimism"> Optimism </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-fantom"> Fantom </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-algorand"> Algorand </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-celo"> Celo </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-flow"> Flow </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-cardano"> Cardano </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-polkadot"> polkaDOT </Link></li>
                                      </ul>
                                   </div>
                                   <div className="mob-hv-tab-cont">
                                     <p className='nav-link'>By Language:</p>
                                      <ul>
                                        <li><Link className="mm-link nav-link" href="/sca-solidity"> Solidity </Link></li>
                                        <li><Link className="mm-link nav-link" href="/sca-rust"> Rust </Link></li>
                                      </ul>
                                   </div>
                                   
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </li>
                          <li className="nav-item mm-link"><Link className="nav-link" href="/bchain-security"> Blockchain Security Services </Link></li>
                          <li className="nav-item">
                            <Accordion flush className="nav-link">
                              <Accordion.Item eventKey="1">
                              <Link className='mm-link' href="/penetration">Penetration Testing</Link>
                                <Accordion.Header><div className='acc-icn'><FaMinus className='faq-mns'/><FaMinus /></div></Accordion.Header>
                                <Accordion.Body>
                                <div className="mob-hv-tab-cont">
                                      <ul>
                                        <li><Link className="mm-link nav-link" href="/app-pene  "> Mobile App </Link></li>
                                        <li><Link className="mm-link nav-link" href="/web-pene"> Web App </Link></li>
                                      </ul>
                                   </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </li>
                          <li className="nav-item mm-link"><Link className="nav-link" href="/web3-security"> Web 3 Security Consulting </Link></li>
                          <li className="nav-item mm-link"><Link className="nav-link" href="/digital-security"> Digital Assets Security </Link></li>
                        </ul>
                      </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                </li>
                <li className="nav-item mm-link"> <Link className="nav-link" href="/tools"> Tools </Link> </li>
                <li className="nav-item mm-link"> <Link className="nav-link" href="/"> Portfolio </Link> </li>
                <li className="nav-item mm-link"> <Link className="nav-link" href="/about-us"> About Us </Link> </li>
                <li className="nav-item mm-link"> <Link className="nav-link" href="/contact-us"> Contact Us </Link> </li>
              </ul>
              <div className="btn-div">
                <button className="btn btn-fill btn-outline ex-port-lg" type="button">Request Audit</button>
              </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
