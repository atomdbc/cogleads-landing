'use client'

import React from 'react'
import Button from '../common/Button'
import Image from 'next/image'

export default function CallToAction() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image Mockup */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/api/placeholder/800/600"
                alt="Cogleads AI in action"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Text and CTAs */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-4">Overwhelmed by your workload?</h2>
            <p className="mb-6 text-xl">
              Cogleads AI acts as your intelligent assistant, helping you:
            </p>
            <ul className="list-disc list-inside mb-6 text-lg space-y-2">
              <li>Boost productivity significantly</li>
              <li>Meet deadlines consistently</li>
              <li>Transform complex data into actionable insights</li>
            </ul>
            <p className="mb-6 text-lg">
              Join thousands of professionals who have optimized their workflow.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
              <Button primary className="px-8 py-3 text-lg">
                Start Free Trial
              </Button>
              <a 
                href="https://calendly.com/sonetz-inc/30min?month=2024-09" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button secondary className="px-8 py-3 text-lg">
                  Book a Demo
                </Button>
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              No credit card required. 14-day trial with full access. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
