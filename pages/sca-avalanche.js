import React from 'react'
import ScaAvalancheBanner from './components/sca_avalanche/sca-banner'
import ScaAvalancheImportance from './components/sca_avalanche/sca-importance'
import ScaAvalancheOffers from './components/sca_avalanche/sca-offers'
import ScaAvalancheHowitworks from './components/sca_avalanche/sca-how-it-works'
import ScaAvalancheWhy from './components/sca_avalanche/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaAvalanche() {
  return (
    <>
    <main className="main-services">
    <ScaAvalancheBanner />
    <ScaAvalancheImportance />
    <ScaAvalancheWhy />
    <ScaAvalancheHowitworks />
    <ScaAvalancheOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
