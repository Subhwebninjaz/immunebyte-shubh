import React from 'react'
import CostForm from './components/cost-form'
import Faq from './components/faq'

export default function ScaCost() {
  return (
    <>
    <main className="main-contact">
      <section className="">
        <div className="container">
            <h2 className="sec-title">Smart Contract Audit Cost</h2>
            <p className="sec-p">Aenean lobortis lacus ut lectus molestie vehicula. Aenean nisi ligula, facilisis ac tellus ut, fermentum fringilla nisi. Phasellus dapibus ex leo, sed tincidunt felis imperdiet ut. Aliquam lectus ante, volutpat congue dolor ac, mollis imperdiet diam.Phasellus dapibus ex leo, sed tincidunt felis imperdiet ut. Aliquam lectus ante, volutpat congue dolor ac, mollis imperdiet diam.</p>
        </div>
      </section>
      <section className="cu-form-div">
        <div className="container">
          <CostForm />
        </div>
      </section>
      <Faq />
    </main>
    </>
  )
}
