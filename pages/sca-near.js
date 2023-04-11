import React from 'react'
import ScaNearBanner from './components/sca_near/sca-banner'
import ScaNearImportance from './components/sca_near/sca-importance'
import ScaNearOffers from './components/sca_near/sca-offers'
import ScaNearHowitworks from './components/sca_near/sca-how-it-works'
import ScaNearWhy from './components/sca_near/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaNear() {
  return (
    <>
    <main className="main-services">
    <ScaNearBanner />
    <ScaNearImportance />
    <ScaNearWhy />
    <ScaNearHowitworks />
    <ScaNearOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
