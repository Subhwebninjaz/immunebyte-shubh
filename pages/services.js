import React from 'react'
import ServicesBanner from './components/services/services-banner';
import ServicesTypes from './components/services/services-types';

export default function Services() {
  return (
    <>
    <main className="main-services">
      <ServicesBanner />
      <ServicesTypes />
    </main>
    </>
  )
}
