'use client'

import { motion } from 'framer-motion'

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Workflow Automation',
      description: 'Streamline your business processes with intelligent automation using n8n and cutting-edge AI tools. Reduce manual work and increase productivity.',
      icon: '🤖',
      features: [
        'Custom workflow design',
        'Process automation',
        'Task scheduling',
        'Error handling & monitoring'
      ]
    },
    {
      title: 'Process Optimization',
      description: 'Analyze and improve your existing workflows to maximize efficiency and reduce operational costs through data-driven insights.',
      icon: '📈',
      features: [
        'Workflow analysis',
        'Performance optimization',
        'Cost reduction strategies',
        'Efficiency metrics'
      ]
    },
    {
      title: 'Integration Services',
      description: 'Seamlessly integrate AI tools and services into your existing business infrastructure with our expert integration solutions.',
      icon: '🔄',
      features: [
        'API integration',
        'System connectivity',
        'Data synchronization',
        'Custom webhooks'
      ]
    },
    {
      title: 'Custom AI Solutions',
      description: 'Get tailored AI solutions designed specifically for your unique business needs and goals, powered by the latest AI technologies.',
      icon: '🎯',
      features: [
        'Custom AI models',
        'Predictive analytics',
        'Machine learning',
        'AI consulting'
      ]
    },
    {
      title: 'Data Analytics & Reporting',
      description: 'Transform raw data into actionable insights with custom analytics dashboards and automated reporting tailored to your business.',
      icon: '📊',
      features: [
        'Real-time data visualization',
        'Custom KPI tracking',
        'Automated report generation',
        'Data-driven decision support'
      ]
    },
    {
      title: 'Chatbot & Virtual Assistants',
      description: 'Enhance customer engagement and support with AI-powered chatbots and virtual assistants built to fit your brand voice.',
      icon: '💬',
      features: [
        '24/7 customer support bots',
        'Natural language processing',
        'Seamless multi-channel integration',
        'Personalized user interactions'
      ]
    }
  ]

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI automation services. We help companies streamline operations, improve efficiency, and boost productivity through intelligent, customized solutions tailored to your unique needs.
          </p>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto italic">
            Whether you're a startup or an established enterprise, our expert team is ready to assist you in scaling your workflows and embracing AI-driven innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-red-500/70 shadow-glow-red flex flex-col"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 select-none">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 text-gray-400">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-red-500 mr-3">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Custom workflows & demo contact section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 max-w-3xl mx-auto text-center bg-white/10 p-10 rounded-xl border border-white/20 shadow-glow-red"
        >
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Custom Workflows & Demos
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Looking for a tailored AI automation workflow or a live demo? We understand that every business has unique needs.  
            Contact us to discuss your specific requirements, and our experts will craft custom solutions just for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-glow-red"
          >
            Contact Us for Custom Solutions
          </a>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 max-w-4xl mx-auto text-gray-400"
        >
          <p className="mb-2 italic">
            Not sure where to start? Our team offers free consultations to help you understand how AI automation can transform your business.
          </p>
          <p>
            Reach out today to schedule your consultation and begin your journey to smarter workflows.
          </p>
        </motion.div>
      </div>
    </main>
  )
} 