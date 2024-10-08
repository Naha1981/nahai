import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src="https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="AI Technology" className="rounded-lg shadow-lg hover-effect w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-6 text-primary">About NahaInc AI</h2>
            <p className="text-gray-300 mb-6">
              NahaInc AI is a leading AI agency in South Africa, dedicated to helping businesses harness the power of artificial intelligence. Our team of experts combines cutting-edge technology with industry expertise to deliver innovative solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-300 mb-6">
              Founded by Thabiso Naha, our mission is to make AI accessible and beneficial for businesses of all sizes across South Africa. We're committed to pushing the boundaries of what's possible with AI, always staying at the forefront of technological advancements.
            </p>
            <a href="https://www.linkedin.com/in/thabiso-naha-4985316b" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors duration-300">Connect with Thabiso on LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About