'use client'

import { motion } from 'framer-motion'
import Card from '@/components/Card'
import { 
  Network, 
  Shield, 
  Zap, 
  Users, 
  Coins, 
  Database,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/Button'

export default function Features() {
  const features = [
    {
      icon: Network,
      title: 'Cross-Chain Access',
      description: 'Seamlessly interact with multiple blockchain networks. Access assets and data across different chains with a single unified interface.',
      benefits: ['Multi-chain support', 'Unified API', 'Real-time sync', 'Low latency'],
    },
    {
      icon: Shield,
      title: 'Decentralized Identity',
      description: 'Take control of your digital identity with our decentralized identity management system. Secure, private, and user-owned.',
      benefits: ['Self-sovereign identity', 'Privacy-first', 'Verifiable credentials', 'Zero-knowledge proofs'],
    },
    {
      icon: Zap,
      title: 'Smart Contract Automation',
      description: 'Deploy and manage smart contracts with ease. Automated workflows, testing, and monitoring for your decentralized applications.',
      benefits: ['Auto-deployment', 'Built-in testing', 'Gas optimization', 'Contract templates'],
    },
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Participate in platform decisions through decentralized governance. Vote on proposals and shape the future of VETRIC.',
      benefits: ['DAO integration', 'Voting mechanisms', 'Proposal system', 'Transparent decisions'],
    },
    {
      icon: Coins,
      title: 'Asset Tokenization',
      description: 'Transform real-world assets into digital tokens. Create, manage, and trade tokenized assets on the blockchain.',
      benefits: ['NFT support', 'Fractional ownership', 'Compliance tools', 'Liquidity pools'],
    },
    {
      icon: Database,
      title: 'Interoperable Data Exchange',
      description: 'Exchange data seamlessly between different systems and blockchains. Standards-based protocols ensure compatibility.',
      benefits: ['Standard protocols', 'Data bridges', 'API gateways', 'Event streaming'],
    },
  ]

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
              Powerful <span className="gradient-text">Features</span> for Web3
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Everything you need to build, deploy, and scale your decentralized applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} delay={index * 0.1} className="flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {feature.description}
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="section-padding bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Built for <span className="gradient-text">Performance</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Industry-leading specifications for enterprise-grade applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '< 100ms', label: 'Transaction Speed' },
              { value: '1M+', label: 'TPS Capacity' },
              { value: '99.99%', label: 'Network Uptime' },
              { value: '$0.001', label: 'Avg. Gas Fee' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-8 text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            className="relative overflow-hidden rounded-3xl glass-effect p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Start building with VETRIC today and unlock the full potential of Web3
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5 inline" />
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

