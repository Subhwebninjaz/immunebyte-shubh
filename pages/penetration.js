import React from 'react'
import ScaAuroraBanner from './components/penetration/pene-banner'
import ScaAuroraImportance from './components/penetration/pene-type'
import ScaAuroraOffers from './components/penetration/pene-testing'

import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaAurora() {
  return (
    <>
    <main className="main-services">
    <ScaAuroraBanner />
    <ScaAuroraImportance />


    <ScaAuroraOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}