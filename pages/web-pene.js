import React from 'react'
import WebPeneBanner from './components/web-pene/web-pene-banner'
import WebPeneWhat from './components/web-pene/web-pene-what'
import WebPeneCommon from './components/web-pene/web-pene-common'
import WebPeneBenefit from './components/web-pene/web-pene-ben'
import WebPeneOffers from './components/web-pene/web-pene-offers'


import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function WebPene() {
  return (
    <>
    <main className="main-services">
    <WebPeneBanner />
    <WebPeneWhat/>
    <WebPeneCommon />
    <WebPeneBenefit/>
    <WebPeneOffers/>

    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}