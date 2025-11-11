'use client'

import { useState } from 'react'
import Image from 'next/image'
import codesData from '@/data/codes-data.json'

export default function CodesPage() {
  const { metadata, activeCodes, howToRedeem, tips, rewardUsage, troubleshooting } = codesData
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/images/codes-banner.jpg"
          alt="Raise Animals Codes Banner"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              {metadata.heading}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl">
              {metadata.introduction}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Active Codes</h2>
        <p className="text-center text-gray-600 mb-2">
          Last updated: <strong>November 7, 2025</strong>
        </p>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Click the copy button to copy each code to your clipboard:
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {activeCodes.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-1 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                        {item.code}
                      </div>
                      {item.isNew && (
                        <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Reward:</span> {item.reward}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(item.code)}
                  className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    copiedCode === item.code
                      ? 'bg-green-500 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {copiedCode === item.code ? '✓ Copied!' : '📋 Copy Code'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-12 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">How to Redeem Codes</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Follow these simple steps to redeem your codes in Raise Animals on Roblox:
        </p>
        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {howToRedeem.steps.map((step) => (
            <div key={step.step} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-3">
                {step.step}
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl p-8 mb-12 border-2 border-yellow-200 dark:border-yellow-600">
        <h2 className="text-2xl font-bold mb-6 text-center">💡 Tips for Using Codes</h2>
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
              <span className="mr-3 text-xl">✅</span>
              <span className="text-gray-700 dark:text-gray-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How to Use Your Rewards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold mb-4">💎 Gems</h3>
            <p className="mb-3 opacity-90 text-sm">Use your gems to:</p>
            <ul className="space-y-2 text-sm">
              {rewardUsage.gems.map((use: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold mb-4">🍬 Candy</h3>
            <p className="mb-3 opacity-90 text-sm">Use your candy to:</p>
            <ul className="space-y-2 text-sm">
              {rewardUsage.candy.map((use: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold mb-4">🪸 Coral</h3>
            <p className="mb-3 opacity-90 text-sm">Use your coral to:</p>
            <ul className="space-y-2 text-sm">
              {rewardUsage.coral.map((use: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold mb-4">🎰 Spins</h3>
            <p className="mb-3 opacity-90 text-sm">Use your spins to:</p>
            <ul className="space-y-2 text-sm">
              {rewardUsage.spins.map((use: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-gray-800 rounded-2xl p-8 border-2 border-red-200 dark:border-red-600">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600 dark:text-red-400">
          🔧 Troubleshooting
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
              Code not working?
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {troubleshooting.codeNotWorking.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
              Can't find the codes menu?
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {troubleshooting.cantFindCodesMenu.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
