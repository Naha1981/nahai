import React from 'react'
import { TrendingUp, Users, Target, Zap, UserPlus, Video, GraduationCap, BarChart } from 'lucide-react'

const useCases = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: 'Boost Sales with AI Automation',
    impact: '20-30% Increase in Sales',
    description: 'Automate repetitive tasks to free your sales team for high-value activities. AI can analyze customer data to identify sales opportunities, resulting in tailored product recommendations and up to 30% higher conversion rates.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Enhance Customer Satisfaction',
    impact: '25-40% Improvement',
    description: 'Provide personalized responses with AI virtual assistants, reducing response times by 25-30% and boosting satisfaction levels by up to 40%.'
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Elevate Marketing Efficiency',
    impact: '25-35% Growth',
    description: 'Optimize marketing campaigns with AI-driven insights. Personalized messaging can increase engagement rates by 30-35%.'
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Streamline Internal Operations',
    impact: '20-40% Improvement',
    description: 'AI can automate policy renewals and claims processing, improving operational efficiency by 20-40%.'
  },
  {
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: 'Increase Customer Retention',
    impact: '20-30% Improvement',
    description: 'AI helps proactively engage customers with personalized offers, reducing churn by up to 30%.'
  },
  {
    icon: <Video className="w-8 h-8 text-primary" />,
    title: 'Foster Interactive Experiences',
    impact: '30-50% Increase in Engagement',
    description: 'Use AI-driven video and conversational interfaces to enhance customer interactions, boosting engagement rates by 40-50%.'
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: 'Optimize Employee Training',
    impact: '20-30% Improvement',
    description: 'Personalized AI training modules enhance onboarding and productivity by 20-30%.'
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Improve Decision-Making and Risk Management',
    impact: '30-40% Improvement',
    description: 'AI provides real-time analytics for better underwriting and fraud detection, reducing claims costs by 30-40%.'
  }
]

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover-effect">
              <div className="flex items-center mb-4">
                {useCase.icon}
                <h3 className="text-xl font-semibold ml-2 text-white">{useCase.title}</h3>
              </div>
              <p className="text-primary font-bold mb-2">Estimated Impact: {useCase.impact}</p>
              <p className="text-gray-400">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases