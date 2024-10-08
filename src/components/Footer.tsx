import React from 'react'
import { Twitter, Linkedin, Phone, Mail, Globe } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">NahaInc AI</h3>
            <p className="text-sm text-gray-400">Transforming businesses with AI solutions</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-2">
              <a href="https://twitter.com/Naha_AI_Agency" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/in/thabiso-naha-4985316b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Linkedin />
              </a>
            </div>
            <div className="flex flex-col items-center md:items-end text-sm text-gray-400">
              <a href="tel:+27612980377" className="hover:text-primary transition-colors duration-300 flex items-center">
                <Phone className="w-4 h-4 mr-2" /> +27 61 298 0377
              </a>
              <a href="mailto:thabiso@nahainc.co.za" className="hover:text-primary transition-colors duration-300 flex items-center">
                <Mail className="w-4 h-4 mr-2" /> thabiso@nahainc.co.za
              </a>
              <a href="https://www.nahainc.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 flex items-center">
                <Globe className="w-4 h-4 mr-2" /> www.nahainc.co.za
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NahaInc AI. All rights reserved. Built By: NahaInc AI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer