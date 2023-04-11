import React from 'react'
import ScaAuroraBanner from './components/sca_aurora/sca-banner'
import ScaAuroraImportance from './components/sca_aurora/sca-importance'
import ScaAuroraOffers from './components/sca_aurora/sca-offers'
import ScaAuroraHowitworks from './components/sca_aurora/sca-how-it-works'
import ScaAuroraWhy from './components/sca_aurora/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaAurora() {
  return (
    <>
    <main className="main-services">
    <ScaAuroraBanner />
    <ScaAuroraImportance />
    <ScaAuroraWhy />
    <ScaAuroraHowitworks />
    <ScaAuroraOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
