import React from 'react'
import ScaDappBanner from './components/sca_dapp/sca-banner'
import ScaDappStage from './components/sca_dapp/sca-stage'
import ScaDappOffers from './components/sca_dapp/sca-offers'
import ScaDappImportant from './components/sca_dapp/sca-important'
import ScaDappsmart from './components/sca_dapp/sca-smart'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaDapp() {
  return (
    <>
    <main className="main-services">
    <ScaDappBanner />
    <ScaDappsmart/>
    <ScaDappStage />
    <ScaDappImportant/> 
    <ScaDappOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}