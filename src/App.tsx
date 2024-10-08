import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import UseCases from './components/UseCases'
import Clients from './components/Clients'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Services />
      <UseCases />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App