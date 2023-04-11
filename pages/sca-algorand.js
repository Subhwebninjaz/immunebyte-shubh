import React from 'react'
import ScaAlgorandBanner from './components/sca_algorand/sca-banner'
import ScaAlgorandImportance from './components/sca_algorand/sca-importance'
import ScaAlgorandOffers from './components/sca_algorand/sca-offers'
import ScaAlgorandHowitworks from './components/sca_algorand/sca-how-it-works'
import ScaAlgorandWhy from './components/sca_algorand/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaAlgorand() {
  return (
    <>
    <main className="main-services">
    <ScaAlgorandBanner />
    <ScaAlgorandImportance />
    <ScaAlgorandWhy />
    <ScaAlgorandHowitworks />
    <ScaAlgorandOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
