import React from 'react'
import ScaFlowBanner from './components/sca_flow/sca-banner'
import ScaFlowImportance from './components/sca_flow/sca-importance'
import ScaFlowOffers from './components/sca_flow/sca-offers'
import ScaFlowHowitworks from './components/sca_flow/sca-how-it-works'
import ScaFlowWhy from './components/sca_flow/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaFlow() {
  return (
    <>
    <main className="main-services">
    <ScaFlowBanner />
    <ScaFlowImportance />
    <ScaFlowWhy />
    <ScaFlowHowitworks />
    <ScaFlowOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}