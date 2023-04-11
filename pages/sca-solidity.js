import React from 'react'
import ScaSolidityBanner from './components/sca_solidity/sca-banner'
import ScaSolidityStage from './components/sca_solidity/sca-stage'
import ScaSolidityOffers from './components/sca_solidity/sca-offers'
import ScaSolidityStructure from './components/sca_solidity/sca-structure'
import ScaSolidityImportant from './components/sca_solidity/sca-important'

import ScaSoliditysmart from './components/sca_solidity/sca-smart'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function ScaSolidity() {
  return (
    <>
    <main className="main-services">
    <ScaSolidityBanner />
    <ScaSoliditysmart/>
    <ScaSolidityStage />
    <ScaSolidityStructure/>
    <ScaSolidityImportant/> 
    <ScaSolidityOffers />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}