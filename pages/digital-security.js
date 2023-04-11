import React from 'react'
import DigitalSecurityBanner from './components/digital_security/digital-security-banner'
import DigitalSecurityService from './components/digital_security/digital-security-service'

export default function DigitalSecurity() {
  return (
    <>
    <main className="main-services">
    <DigitalSecurityBanner />
    <DigitalSecurityService />  
    </main>
    </>
  )
}
