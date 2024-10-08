import React, { useState } from 'react'
import { Phone, Mail, Globe } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Contact Us</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-primary text-gray-900 py-2 px-4 rounded-md button-effect">Send Message</button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <Phone className="w-6 h-6 mr-4 text-primary" />
                <a href="tel:+27612980377" className="hover:text-primary transition-colors duration-300">+27 61 298 0377</a>
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="w-6 h-6 mr-4 text-primary" />
                <a href="mailto:thabiso@nahainc.co.za" className="hover:text-primary transition-colors duration-300">thabiso@nahainc.co.za</a>
              </p>
              <p className="flex items-center text-gray-300">
                <Globe className="w-6 h-6 mr-4 text-primary" />
                <a href="https://www.nahainc.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">www.nahainc.co.za</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact