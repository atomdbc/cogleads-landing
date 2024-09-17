'use client'

import React from 'react'
import { Rocket } from 'lucide-react'
import Image from 'next/image'
import Button from '../common/Button'

export default function Hero() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-20 mb-16">
          <div className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mb-6">
            <Rocket className="mr-2" size={20} />
            <span>Unlock Effortless Growth with AI-Powered CRM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Spend 10x time on closing deals<br />
            using Cogleads
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Experience 10x efficiency, 50% cost reduction, and 100% customer satisfaction. Our AI-powered all-in-one solution works tirelessly so you don't have to.
          </p>
          <div className="space-x-4">
            <Button primary className="px-6 py-3">Start Growing Today</Button>
            <Button className="px-6 py-3">See Success Stories</Button>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/placeholder.png"
              alt="Cogleads Dashboard" 
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}