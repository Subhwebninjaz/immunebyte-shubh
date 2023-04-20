import React from 'react'
import HomeBanner from './components/home/home-banner'
// import HomeServices from './components/home/home-services'
import HomeServices2 from './components/home/home-services2'
import IndustryPartner from './components/industry-partner'
import HomeLeagueProjects from './components/home/home-league-projects'
import HomeFeaturedAudits from './components/home/home-featured-audits'
import Testimonials from './components/testimonials'
import RecentBlogs from './components/recent-blogs'
import Faq from './components/faq'

export default function Home() {
  return (
    <>
    <main className="main-services">
    <HomeBanner bannerheading="Smart Contract Audits"  />
    {/* <HomeServices /> */}
    <HomeServices2 />
    <IndustryPartner />
    <HomeLeagueProjects />
    <HomeFeaturedAudits />
    <Testimonials />
    <RecentBlogs />
    <Faq />
    </main>
    </>
  )
}
