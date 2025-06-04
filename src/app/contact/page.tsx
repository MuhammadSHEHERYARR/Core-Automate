'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Contact Us
          </h1>

          <p className="text-gray-300 text-center mb-12">
            Ready to transform your business with AI automation? Get in touch with us today.
          </p>

          {/* Contact Info Only */}
          <section className="bg-white/10 p-8 rounded-lg border border-white/20 shadow-glow-red">
            <h2 className="text-2xl font-semibold text-red-400 mb-4 text-center">
              How to Reach Us
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white">For Service Inquiries:</strong>  
                <br />
                Email us at{' '}
                <a
                  href="mailto:sales@coreautomate.site"
                  className="text-red-500 hover:underline"
                >
                  sales@coreautomate.site
                </a>
              </p>

              <p>
                <strong className="text-white">For Complaints or Feedback:</strong>  
                <br />
                Reach out directly at{' '}
                <a
                  href="mailto:director@coreautomate.site"
                  className="text-red-500 hover:underline"
                >
                  director@coreautomate.site
                </a>
              </p>

              <p>
                <strong className="text-white">Want to chat quickly?</strong>  
                <br />
                Message us on WhatsApp:{' '}
                <a
                  href="https://wa.me/923185851061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  +92 318 585 1061
                </a>
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  )
} 