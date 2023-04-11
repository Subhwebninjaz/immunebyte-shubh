import React from 'react'
import AppPeneBanner from './components/app-pene/app-pene-banner'
import AppPeneWhat from './components/app-pene/app-pene-what'
import AppPeneCommon from './components/app-pene/app-pene-common'
import AppPeneBenefit from './components/app-pene/app-pene-ben'
import AppPeneOffers from './components/app-pene/app-pene-offers'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaAurora() {
  return (
    <>
    <main className="main-services">
    <AppPeneBanner />
    <AppPeneWhat/>
    <AppPeneCommon />
    <AppPeneBenefit/>
    <AppPeneOffers/>
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}