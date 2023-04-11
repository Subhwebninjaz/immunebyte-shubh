import React from 'react'
import HelpForm from './components/help-form'
import Faq from './components/faq'

export default function Help() {
  return (
    <>
    <main className="main-contact">
      <section className="">
        <div className="container">
            <h2 className="sec-title">We're Here To Help</h2>
            <p className="sec-p">Aenean lobortis lacus ut lectus molestie vehicula. Aenean nisi ligula, facilisis ac tellus ut Aenean lobortis lacus ut lectus molestie vehicula. Aenean nisi ligula, facilisis ac tellus ut.</p>
        </div>
      </section>
      <section className="cu-form-div">
        <div className="container">
          <HelpForm />
        </div>
      </section>
      <Faq />
    </main>
    </>
  )
}
