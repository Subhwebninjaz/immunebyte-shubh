import React from 'react'
import ScaNftBanner from './components/sca_nft/sca-banner'
import ScaNftStage from './components/sca_nft/sca-stage'
import ScaNftOffers from './components/sca_nft/sca-offers'
import ScaNftImportant from './components/sca_nft/sca-important'
import ScaNftsmart from './components/sca_nft/sca-smart'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaNft() {
  return (
    <>
    <main className="main-services">
    <ScaNftBanner />
    <ScaNftsmart/>
    <ScaNftStage />
    <ScaNftImportant/> 
    <ScaNftOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}