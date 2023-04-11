import React from 'react'
import ScaCardanoBanner from './components/sca_cardano/sca-banner'
import ScaCardanoImportance from './components/sca_cardano/sca-importance'
import ScaCardanoOffers from './components/sca_cardano/sca-offers'
import ScaCardanoHowitworks from './components/sca_cardano/sca-how-it-works'
import ScaCardanoWhy from './components/sca_cardano/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaCardano() {
  return (
    <>
    <main className="main-services">
    <ScaCardanoBanner />
    <ScaCardanoImportance />
    <ScaCardanoWhy />
    <ScaCardanoHowitworks />
    <ScaCardanoOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
