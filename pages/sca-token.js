import React from 'react'
import ScaTokenBanner from './components/sca_token/sca-banner'
import ScaTokenStage from './components/sca_token/sca-stage'
import ScaTokenOffers from './components/sca_token/sca-offers'
import ScaTokenImportant from './components/sca_token/sca-important'
import ScaTokensmart from './components/sca_token/sca-smart'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaToken() {
  return (
    <>
    <main className="main-services">
    <ScaTokenBanner />
    <ScaTokensmart/>
    <ScaTokenStage />
    <ScaTokenImportant/> 
    <ScaTokenOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}