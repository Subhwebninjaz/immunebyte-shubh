import React from 'react'
import AboutBanner from './components/about/about-banner'
import AboutLeadership from './components/about/about-leadership'
import IndustryPartner from './components/industry-partner'
import Testimonials from './components/testimonials'
import AboutCulture from './components/about/about-culture'

export default function AboutUs() {
  return (
    <>
    <main className="main-about-us">
    <AboutBanner />
    <IndustryPartner />
    <AboutLeadership />
    <AboutCulture />
    <Testimonials />
    </main>
    </>
  )
}
