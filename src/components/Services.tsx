'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathIcon,
  CommandLineIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Automate CRM & Sales',
    description: 'Streamline your customer relationships with automated workflows for Hubspot, Pipedrive, and more.',
    icon: CpuChipIcon,
    category: 'Business Automation',
  },
  {
    title: 'AI Email Assistants',
    description: 'Let AI handle your email communications with smart automation and natural language processing.',
    icon: ChatBubbleLeftRightIcon,
    category: 'AI Solutions',
  },
  {
    title: 'WhatsApp & Chatbot Flows',
    description: 'Create intelligent chatbot experiences that engage customers 24/7 across multiple platforms.',
    icon: ArrowPathIcon,
    category: 'Communication',
  },
  {
    title: 'Data Sync & Reporting',
    description: 'Automate data synchronization and generate real-time reports across your business systems.',
    icon: CloudIcon,
    category: 'Data Management',
  },
  {
    title: 'Custom AI Agents',
    description: 'Build specialized AI agents powered by GPT to handle complex business tasks and workflows.',
    icon: CommandLineIcon,
    category: 'AI Solutions',
  },
  {
    title: 'APIs & n8n Integrations',
    description: 'Connect your tools and services with custom API integrations and n8n workflows.',
    icon: WrenchScrewdriverIcon,
    category: 'Integration',
  },
]

// Group services by category
const groupedServices = services.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = []
  }
  acc[service.category].push(service)
  return acc
}, {} as Record<string, typeof services>)

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 via-dark-800 to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI automation solutions to transform your business operations
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(groupedServices).map(([category, categoryServices], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative bg-gradient-to-br from-dark-800/50 to-dark-900/50 p-6 rounded-xl border border-white/5 backdrop-blur-sm hover:border-red-500/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-lg">
                          <service.icon className="w-6 h-6 text-red-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 