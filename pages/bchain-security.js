import React from 'react'
import BchainSecurityBanner from './components/bchain_security/bchain-security-banner'
import BchainSecurityScheme from './components/bchain_security/bchain-security-scheme'
import MainnetTabs from './components/bchain_security/mainnet-tabs'
import CryptoTabs from './components/bchain_security/crpto-tabs'
import TestingTabs from './components/bchain_security/testing-tabs'
import CommunityTabs from './components/bchain_security/community-tabs'

export default function DigitalSecurity() {
  return (
    <>
    <main className="main-services">
      <BchainSecurityBanner />
      <BchainSecurityScheme/>
      <MainnetTabs/>
      <CryptoTabs/>
      <TestingTabs/>
      <CommunityTabs/>
    </main>
    </>
  )
}