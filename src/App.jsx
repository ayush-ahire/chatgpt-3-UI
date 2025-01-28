import './App.css'
import Brand from './components/brands/Brand'
import Features from './components/features/Features'
import Features1 from './components/Features1/Features1'
import Navbar from './components/navbar/Navbar'
import Blog from './containers/blog/Blog'
import CTA from './containers/CTA/CTA'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Possibility from './containers/possibility/Possibility'
import WhatGPT3 from './containers/whatGPT3/whatGPT3'
import WhyMediFor7 from './containers/Why/WhyMediFor7'
function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <WhyMediFor7 />
      <Features1 />
      <CTA />
      <Blog />
      <Footer />



    </div>
  )
}


export default App

