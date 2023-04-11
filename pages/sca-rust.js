import React from 'react'
import ScaRustBanner from './components/sca_rust/sca-banner'
import ScaRustStage from './components/sca_rust/sca-stage'
import ScaRustOffers from './components/sca_rust/sca-offers'
import ScaRustStructure from './components/sca_rust/sca-structure'
import ScaRustImportant from './components/sca_rust/sca-important'
import ScaRustsmart from './components/sca_rust/sca-smart'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaRust() {
  return (
    <>
    <main className="main-services">
    <ScaRustBanner />
    <ScaRustsmart/>
    <ScaRustStage />
    <ScaRustStructure/>
    <ScaRustImportant/> 
    <ScaRustOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}