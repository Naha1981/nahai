import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Transforming Businesses with AI Solutions in South Africa</h1>
            <p className="text-xl mb-8 text-gray-300">NahaInc AI helps businesses leverage AI technologies to improve efficiency, productivity, and innovation.</p>
            <a href="#contact" className="bg-primary text-gray-900 py-2 px-6 rounded-full font-bold button-effect inline-block">Get Started</a>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="AI Concept" className="rounded-lg shadow-lg hover-effect w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero