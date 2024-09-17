'use client'

import React from 'react'
import Button from '../common/Button'

export default function CallToAction() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="mb-8">Start your free trial today and experience the power of Cogleads.</p>
        <Button primary className="px-8 py-3">Get Started Now</Button>
      </div>
    </section>
  )
}