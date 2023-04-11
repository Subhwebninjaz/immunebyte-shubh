import React from 'react'
import ScaSolanaBanner from './components/sca_solana/sca-banner'
import ScaSolanaImportance from './components/sca_solana/sca-importance'
import ScaSolanaOffers from './components/sca_solana/sca-offers'
import ScaSolanaHowitworks from './components/sca_solana/sca-how-it-works'
import ScaSolanaWhy from './components/sca_solana/sca-why'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaSolana() {
  return (
    <>
    <main className="main-services">
    <ScaSolanaBanner />
    <ScaSolanaImportance />
    <ScaSolanaWhy />
    <ScaSolanaHowitworks />
    <ScaSolanaOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
