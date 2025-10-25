'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Contact us for additional details or assistance. Our team is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={status === 'sending' || status === 'sent'}
                  >
                    {status === 'idle' && (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 inline" />
                      </>
                    )}
                    {status === 'sending' && 'Sending...'}
                    {status === 'sent' && '✓ Message Sent!'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-effect rounded-xl p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">support@vetric.io</p>
                    <p className="text-gray-600 dark:text-gray-400">sales@vetric.io</p>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office</h3>
                    <p className="text-gray-600 dark:text-gray-400">123 Web3 Street</p>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-primary-500/10 to-secondary-500/10">
                <h3 className="font-semibold text-white mb-2">Need immediate help?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Check out our documentation or join our community Discord for real-time support.
                </p>
                <div className="flex space-x-3">
                  <button className="btn-secondary text-sm px-4 py-2">
                    Documentation
                  </button>
                  <button className="btn-secondary text-sm px-4 py-2">
                    Discord
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Visual Section */}
      <section className="section-padding bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Map Placeholder</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">Integrate Google Maps or Mapbox here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


