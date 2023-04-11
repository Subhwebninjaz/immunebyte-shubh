import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import Header from './components/header';
import Footer from './components/footer'
import {ApolloProvider} from '@apollo/client/react'
import {client} from './api/apollo'

export default function App({ Component, pageProps }) {
  return (
    <>
    
    <ApolloProvider client={client} >
      
    <Header />
     <Component {...pageProps} />
    <Footer />
    </ApolloProvider>
    </>
  )
}