'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import Button from './Button'
import { Check } from 'lucide-react'

interface PricingPlan {
  name: string
  price: number
  yearlyPrice: number
  description: string
  features: string[]
  popular?: boolean
}

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans: PricingPlan[] = [
    {
      name: 'Basic',
      price: 9.99,
      yearlyPrice: 7.99,
      description: 'Perfect for individuals getting started',
      features: [
        'Cross-Chain Access',
        'Basic Identity Verification',
        '5 Smart Contracts/month',
        'Community Support',
        '10GB Storage',
      ],
    },
    {
      name: 'Pro',
      price: 19.99,
      yearlyPrice: 15.99,
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Basic',
        'Advanced Identity Features',
        'Unlimited Smart Contracts',
        'Priority Support',
        '100GB Storage',
        'Asset Tokenization',
        'Analytics Dashboard',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: 29.99,
      yearlyPrice: 23.99,
      description: 'For enterprises with advanced needs',
      features: [
        'Everything in Pro',
        'Dedicated Account Manager',
        'Custom Integration',
        '1TB Storage',
        'Advanced Security Features',
        'White-label Options',
        'API Access',
        'Custom SLA',
      ],
    },
  ]

  const getPrice = (plan: PricingPlan) => {
    return isYearly ? plan.yearlyPrice : plan.price
  }

  return (
    <div className="w-full">
      {/* Toggle Switch */}
      <div className="flex items-center justify-center mb-12">
        <span className={`text-lg mr-4 ${!isYearly ? 'text-white font-semibold' : 'text-gray-400'}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
            isYearly ? 'bg-gradient-to-r from-primary-500 to-secondary-500' : 'bg-gray-700'
          }`}
        >
          <motion.div
            className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
            animate={{ x: isYearly ? 32 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>
        <span className={`text-lg ml-4 ${isYearly ? 'text-white font-semibold' : 'text-gray-400'}`}>
          Yearly
        </span>
        {isYearly && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-3 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full"
          >
            Save 20%
          </motion.span>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={plan.name}
            delay={index * 0.1}
            className={`relative ${
              plan.popular ? 'border-2 border-primary-500 shadow-2xl shadow-primary-500/20' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold gradient-text">
                  ${getPrice(plan).toFixed(2)}
                </span>
                <span className="text-gray-400 ml-2">/{isYearly ? 'year' : 'month'}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? 'primary' : 'secondary'}
              className="w-full"
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PricingTable
