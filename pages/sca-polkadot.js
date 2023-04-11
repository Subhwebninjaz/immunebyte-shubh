import React from 'react'
import ScaPolkadotBanner from './components/sca_polkadot/sca-banner'
import ScaPolkadotImportance from './components/sca_polkadot/sca-importance'
import ScaPolkadotOffers from './components/sca_polkadot/sca-offers'
import ScaPolkadotHowitworks from './components/sca_polkadot/sca-how-it-works'
import ScaPolkadotWhy from './components/sca_polkadot/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaPolkadot() {
  return (
    <>
    <main className="main-services">
    <ScaPolkadotBanner />
    <ScaPolkadotImportance />
    <ScaPolkadotWhy />
    <ScaPolkadotHowitworks />
    <ScaPolkadotOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
