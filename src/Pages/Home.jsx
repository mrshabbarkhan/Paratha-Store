import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import AppStore from '../components/AppStore/AppStore'
import Testimonial from '../components/Testimonial/Testimonial'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    {/* <CoverBanner/> */}
    <AppStore/>
    <Testimonial/>
    <Footer/>
  </div>
  )
}

export default Home
