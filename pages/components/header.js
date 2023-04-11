import { useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from './contact-form';

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

function MegaMenu() {
  return (
    <div className="mega-menu">
      <div className="row">
        <div className="col-5">
          <ul className="list-unstyled mm-left-ul">
            <li><Link href="#">
              <div className="testi-author mm-left">
                <div className="img-div ta-img"></div>
                <div className="ta-text">
                  <h5 className="od-title author-name">Smart Contract Audit</h5>
                  <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
                </div>
              </div>
            </Link></li>
            <li><Link href="#">
            <div className="testi-author mm-left">
              <div className="img-div ta-img"></div>
              <div className="ta-text">
                <h5 className="od-title author-name">Blockchain Security Services</h5>
                <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
              </div>
            </div>
            </Link></li>
            <li><Link href="#">
            <div className="testi-author mm-left">
              <div className="img-div ta-img"></div>
              <div className="ta-text">
                <h5 className="od-title author-name">Penetration Testing</h5>
                <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
              </div>
            </div>
            </Link></li>
            <li><Link href="#">
            <div className="testi-author mm-left">
              <div className="img-div ta-img"></div>
              <div className="ta-text">
                <h5 className="od-title author-name">Web 3 Security Consulting</h5>
                <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
              </div>
            </div>
            </Link></li>
            <li><Link href="#">
            <div className="testi-author mm-left">
              <div className="img-div ta-img"></div>
              <div className="ta-text">
                <h5 className="od-title author-name">Digital Assets Security</h5>
                <span className="author-role">Lorem ipsum dolor sit consectetur adipiscing elit.</span>
              </div>
            </div>
            </Link></li>
          </ul>
        </div>
        <div className="col-7">
          <ul className="list-unstyled">
            <li><Link href="#">Item 1</Link></li>
            <li><Link href="#">Item 2</Link></li>
            <li><Link href="#">Item 3</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function BsNavDropdown() {
  useEffect(() => {
    // const dropdown = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    if (dropdown && dropdownMenu) {
      dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.classList.add('show');
      });
      
      dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.classList.remove('show');
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
              <li className="nav-item"> <Link className="nav-link" href="/"> Portfolio </Link> </li>
              <li className="nav-item"> <Link className="nav-link" href="/about-us"> About Us </Link> </li>
              <li className="nav-item"> <Link className="nav-link" href="/contact-us"> Contact Us </Link> </li>
            </ul>
            <AuditModal />
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
