import React from 'react'
import ScaFantomBanner from './components/sca_fantom/sca-banner'
import ScaFantomImportance from './components/sca_fantom/sca-importance'
import ScaFantomOffers from './components/sca_fantom/sca-offers'
import ScaFantomHowitworks from './components/sca_fantom/sca-how-it-works'
import ScaFantomWhy from './components/sca_fantom/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaFantom() {
  return (
    <>
    <main className="main-services">
    <ScaFantomBanner />
    <ScaFantomImportance />
    <ScaFantomWhy />
    <ScaFantomHowitworks />
    <ScaFantomOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
