import React from 'react'
import ScaDefiBanner from './components/sca_defi/sca-banner'
import ScaDefiStage from './components/sca_defi/sca-stage'
import ScaDefiOffers from './components/sca_defi/sca-offers'
import ScaDefiImportant from './components/sca_defi/sca-important'
import ScaDefismart from './components/sca_defi/sca-smart'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaDefi() {
  return (
    <>
    <main className="main-services">
    <ScaDefiBanner />
    <ScaDefismart/>
    <ScaDefiStage />
    <ScaDefiImportant/> 
    <ScaDefiOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}