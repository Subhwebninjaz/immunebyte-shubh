import React from 'react'
import Web3SecurityBanner from './components/web3_security/web3-security-banner'
import Web3SecurityService from './components/web3_security/web3-security-service'

export default function DigitalSecurity() {
  return (
    <>
    <main className="main-services">
    <Web3SecurityBanner />
    <Web3SecurityService />  
    </main>
    </>
  )
}
