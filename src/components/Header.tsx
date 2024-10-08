import React from 'react'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="animated-logo text-primary">
          <span>N</span>
          <span>a</span>
          <span>h</span>
          <span>a</span>
          <span>I</span>
          <span>n</span>
          <span>c</span>
          <span> </span>
          <span>AI</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">Services</a>
          <a href="#clients" className="text-gray-300 hover:text-primary transition-colors duration-300">Clients</a>
          <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300">About</a>
          <a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-300">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-primary transition-colors duration-300">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="#services" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-primary transition-colors duration-300">Services</a>
          <a href="#clients" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-primary transition-colors duration-300">Clients</a>
          <a href="#about" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-primary transition-colors duration-300">About</a>
          <a href="#contact" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-primary transition-colors duration-300">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Header