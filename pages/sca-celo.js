import React from 'react'
import ScaCeloBanner from './components/sca_celo/sca-banner'
import ScaCeloImportance from './components/sca_celo/sca-importance'
import ScaCeloOffers from './components/sca_celo/sca-offers'
import ScaCeloHowitworks from './components/sca_celo/sca-how-it-works'
import ScaCeloWhy from './components/sca_celo/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaCelo() {
  return (
    <>
    <main className="main-services">
    <ScaCeloBanner />
    <ScaCeloImportance />
    <ScaCeloWhy />
    <ScaCeloHowitworks />
    <ScaCeloOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
