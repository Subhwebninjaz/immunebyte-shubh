import React from 'react'
import ScaBscBanner from './components/sca_bsc/sca-banner'
import ScaBscImportance from './components/sca_bsc/sca-importance'
import ScaBscOffers from './components/sca_bsc/sca-offers'
import ScaBscHowitworks from './components/sca_bsc/sca-how-it-works'
import ScaBscWhy from './components/sca_bsc/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaBsc() {
  return (
    <>
    <main className="main-services">
    <ScaBscBanner />
    <ScaBscImportance />
    <ScaBscWhy />
    <ScaBscHowitworks />
    <ScaBscOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
