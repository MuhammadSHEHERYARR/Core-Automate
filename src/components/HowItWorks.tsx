'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    title: 'Discovery Call',
    description: 'We start with a detailed consultation to understand your business needs and automation goals.',
    icon: PhoneIcon,
  },
  {
    title: 'Workflow Design',
    description: 'Our team designs custom automation workflows tailored to your specific requirements.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Deployment & Monitoring',
    description: 'We implement the solution and provide ongoing support to ensure optimal performance.',
    icon: RocketLaunchIcon,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark via-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A simple, transparent process to get your automation up and running
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-dark-800/50 to-dark-900/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm hover:border-red-500/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-lg mb-6">
                  <step.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-500/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 