import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero/HeroBanner'
import SmoothScroll from './scroll/SmoothScroll'
import DesignStudio from './components/DesignStudio'
import BrandScroller from './components/BrandScroller'
import WeThinkOut from './components/WeThinkOut'
import OnePrompt from './components/OnePrompt'
import StatsSection from './components/StatsSection'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer/Footer'
const App = () => {

  return (
     <div className="bg-white dark:bg-black min-h-screen transition-all duration-300">
      <Navbar />
      <SmoothScroll />
      <HeroSection />
      <DesignStudio/>
      <BrandScroller />
      <WeThinkOut />
      <OnePrompt />
      <StatsSection/>
      <LatestNews/>
      <Footer/>
     
    </div>
    
  )
}

export default App