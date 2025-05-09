import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Site from './Components/Site'
import Amenities from './Components/Amenities'
import Gallery from './Components/Gallery'
import Price from './Components/Price'
import Location from './Components/Location'
import Footer from './Components/Footer'

function Home() {
  return (
    <>
      <Header />
        <Hero />
      <Price />
      <Site />
      <Amenities />
      <Gallery />
      <Location />
        
      
      <Footer />
    </>
  )
}

export default Home
