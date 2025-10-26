'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-700/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-lime-500/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-lime-400 mr-2" />
                <span className="text-sm font-medium">The Future of Web3 is Here</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
                Build the Future with{' '}
                <span className="gradient-text">Web3</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                Discover how we can help you connect with the next generation of the internet. 
                Harness the power of decentralization, security, and innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Sign Up Now
                    <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold gradient-text">100K+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Integrations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">99.9%</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Uptime</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 3D Visual Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-lime-700/20 rounded-3xl blur-2xl"></div>
                <div className="relative glass-effect rounded-3xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-lime-500 to-lime-700 rounded-full flex items-center justify-center animate-glow">
                      <Zap className="w-24 h-24 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Visual Placeholder</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">Replace with 3D model or hero image</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Why Choose <span className="gradient-text">VETRIC</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the power of next-generation blockchain technology with our comprehensive platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security with decentralized infrastructure',
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Process transactions in milliseconds with our optimized network',
              },
              {
                icon: Sparkles,
                title: 'Easy Integration',
                description: 'Seamlessly integrate with your existing systems and workflows',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-700 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/features">
              <Button variant="outline" size="lg">
                Explore All Features
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl glass-effect p-12 md:p-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-lime-700/10"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of developers and businesses building on VETRIC
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="secondary" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


