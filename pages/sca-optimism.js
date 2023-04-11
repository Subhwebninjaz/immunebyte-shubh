import React from 'react'
import ScaOptimismBanner from './components/sca_optimism/sca-banner'
import ScaOptimismImportance from './components/sca_optimism/sca-importance'
import ScaOptimismOffers from './components/sca_optimism/sca-offers'
import ScaOptimismHowitworks from './components/sca_optimism/sca-how-it-works'
import ScaOptimismWhy from './components/sca_optimism/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaOptimism() {
  return (
    <>
    <main className="main-services">
    <ScaOptimismBanner />
    <ScaOptimismImportance />
    <ScaOptimismWhy />
    <ScaOptimismHowitworks />
    <ScaOptimismOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
