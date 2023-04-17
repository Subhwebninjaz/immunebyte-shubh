import React from 'react'
import TestimonialsBanner from './components/testimonials/test-banner'
import TestimonialsExp from './components/testimonials/test-exp'
import TestimonialsStories from './components/testimonials/test-stories'

export default function Testimonials() {
  return (
    <>
    <main className="main-about-us">
    <TestimonialsBanner />
    <TestimonialsExp />
    <TestimonialsStories/>
    </main>
    </>
  )
}
