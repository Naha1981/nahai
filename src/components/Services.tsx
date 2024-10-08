import React from 'react'
import { Bot, Globe, Users, Cpu } from 'lucide-react'

const services = [
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    title: 'AI Automation',
    description: 'Streamline your business processes with cutting-edge AI automation solutions.'
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: 'Web Applications',
    description: 'Custom web applications tailored to your specific business needs.'
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: 'Employee Training',
    description: 'Empower your team with AI-driven training programs for enhanced productivity.'
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary" />,
    title: 'Autonomous AI Agents',
    description: 'Build AI agents that perform 40-70% of all jobs in every department, boosting efficiency and reducing employee burnout.'
  }
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover-effect">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services