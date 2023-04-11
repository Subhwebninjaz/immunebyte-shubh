import React from 'react'
import ScaPolygonBanner from './components/sca_polygon/sca-banner'
import ScaPolygonImportance from './components/sca_polygon/sca-importance'
import ScaPolygonOffers from './components/sca_polygon/sca-offers'
import ScaPolygonHowitworks from './components/sca_polygon/sca-how-it-works'
import ScaPolygonWhy from './components/sca_polygon/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaPolygon() {
  return (
    <>
    <main className="main-services">
    <ScaPolygonBanner />
    <ScaPolygonImportance />
    <ScaPolygonWhy />
    <ScaPolygonHowitworks />
    <ScaPolygonOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
