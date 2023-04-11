import React from 'react'
import ScaArbitrumBanner from './components/sca_arbitrum/sca-banner'
import ScaArbitrumImportance from './components/sca_arbitrum/sca-importance'
import ScaArbitrumOffers from './components/sca_arbitrum/sca-offers'
import ScaArbitrumHowitworks from './components/sca_arbitrum/sca-how-it-works'
import ScaArbitrumWhy from './components/sca_arbitrum/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaArbitrum() {
  return (
    <>
    <main className="main-services">
    <ScaArbitrumBanner />
    <ScaArbitrumImportance />
    <ScaArbitrumWhy />
    <ScaArbitrumHowitworks />
    <ScaArbitrumOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
