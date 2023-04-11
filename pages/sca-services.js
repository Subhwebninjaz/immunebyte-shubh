import React from 'react'
import ScaServicesBanner from './components/sca_services/sca-banner'
import ScaServicesOffers from './components/sca_services/sca-offers'
import ScaServicesProject from './components/sca_services/sca-project'
import ScaServicesLanguage from './components/sca_services/sca_lan'
import ScaServicesHowitworks from './components/sca_services/sca-process'
import ScaServicessmart from './components/sca_services/sca-smart'
import ScaServicesVulnerabilities from './components/sca_services/sca-vul'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaSolidity() {
  return (
    <>
    <main className="main-services">
    <ScaServicesBanner />
    <ScaServicesHowitworks />
    <ScaServicesProject/>
    <ScaServicessmart/>
    <ScaServicesLanguage/>
    <ScaServicesOffers />
    <ScaServicesVulnerabilities />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}