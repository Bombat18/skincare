import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Para from '../components/Para'
import OurProducts from '../components/OurProducts'
import BestSellers from '../components/BestSellers'
import Feel from '../components/Feel'
import Product2nd from '../components/Product2nd'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Para/>
      <OurProducts/>
      <BestSellers/>
      <Feel/>
      <Product2nd/>
      <FaqSection/>
      <Footer/>

    </div>
  )
}

export default Home