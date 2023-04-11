import React from 'react'
import ScaEthereumBanner from './components/sca_ethereum/sca-banner'
import ScaEthereumImportance from './components/sca_ethereum/sca-importance'
import ScaEthereumOffers from './components/sca_ethereum/sca-offers'
import ScaEthereumHowitworks from './components/sca_ethereum/sca-how-it-works'
import ScaEthereumWhy from './components/sca_ethereum/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaEthereum() {
  return (
    <>
    <main className="main-services">
    <ScaEthereumBanner />
    <ScaEthereumImportance />
    <ScaEthereumWhy />
    <ScaEthereumHowitworks />
    <ScaEthereumOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
