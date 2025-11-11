import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Codes & Free Rewards Guide - Raise Animals',
  description: 'Maximize your free resources with active codes, daily rewards, and ruby management strategies.',
}

export default function CodesGuidePage() {
  const redemptionSteps = [
    { step: 1, title: 'Open Game Menu', description: 'Click the menu icon (☰) in the top-right corner of your screen' },
    { step: 2, title: 'Find Codes Button', description: 'Look for the "Codes" button - usually has a gift box icon 🎁' },
    { step: 3, title: 'Enter Code', description: 'Type or paste the code exactly as shown (case-sensitive!)' },
    { step: 4, title: 'Claim Reward', description: 'Hit "Redeem" and your rewards appear instantly!' },
  ]

  const codeStrategies = [
    {
      icon: '💎',
      title: 'Ruby Codes = Highest Priority',
      description: 'Rubies are premium currency. Always redeem ruby codes first.',
      color: 'purple',
      tips: ['Save rubies for Divine/Mythical lassos', 'Don\'t spend on common items', '2000 rubies = Prism Lasso (endgame)']
    },
    {
      icon: '💰',
      title: 'Cash Codes = Redeem Immediately',
      description: 'Cash loses value as you progress. Use early for maximum impact.',
      color: 'green',
      tips: ['Early game: buy better lassos', 'Mid game: unlock new regions', 'Late game: cash codes become less valuable']
    },
    {
      icon: '🎫',
      title: 'VIP Pass Codes = Game Changers',
      description: 'VIP Pass gives permanent benefits. Best value in the game!',
      color: 'orange',
      tips: ['2x cash multiplier (passive income)', '2x breeding chances', 'Worth more than temporary bonuses']
    },
    {
      icon: '⏰',
      title: 'Time-Limited Codes = Act Fast',
      description: 'Event codes expire quickly. Check daily for new releases.',
      color: 'red',
      tips: ['Holiday events have special codes', 'Major updates = new codes', 'Join Discord for instant notifications']
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/guides" className="inline-flex items-center text-pink-100 hover:text-white mb-4">
            ← Back to All Guides
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Codes & Free Rewards Guide
          </h1>
          <p className="text-xl md:text-2xl text-pink-100">
            Maximize your progress with free codes and smart resource management
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/guides/codes-guide.jpg"
              alt="Free Codes and Rewards"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Get Free Resources</h2>
                <p className="text-xl text-gray-200">Boost your zoo with codes worth thousands of rubies and millions in cash</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">

          {/* How to Redeem */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">How to Redeem Codes</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-8">
                Redeeming codes in Raise Animals is simple and takes less than 30 seconds. Follow these steps:
              </p>

              <div className="space-y-6">
                {redemptionSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                  <span>⚠️</span> Important Tips:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Codes are case-sensitive</strong> - Type them exactly as shown</li>
                  <li>• <strong>Check for spaces</strong> - Some codes have spaces, others don't</li>
                  <li>• <strong>One-time use</strong> - Each code can only be redeemed once per account</li>
                  <li>• <strong>Expired codes</strong> won't work - Always check our <Link href="/codes" className="text-pink-600 hover:underline font-semibold">Active Codes page</Link> for latest codes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Code Strategies */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Smart Code Strategies</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-8">
                Not all codes are equal! Use this priority system to maximize value:
              </p>

              <div className="space-y-6">
                {codeStrategies.map((strategy, index) => (
                  <div key={index} className={`bg-${strategy.color}-50 rounded-lg p-6 border-l-4 border-${strategy.color}-500`}>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl">{strategy.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{strategy.title}</h3>
                        <p className="text-gray-700 mb-4">{strategy.description}</p>
                        <div className="bg-white rounded p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Pro Tips:</h4>
                          <ul className="space-y-1 text-gray-700">
                            {strategy.tips.map((tip, i) => (
                              <li key={i}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Codes CTA */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Ready to Claim Codes?</h2>
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-3xl font-bold mb-4">Browse All Active Codes</h3>
                <p className="text-xl text-pink-100 mb-8">
                  We update our codes page daily with the latest working codes, including exclusive event codes!
                </p>
                <Link
                  href="/codes"
                  className="inline-block bg-white hover:bg-gray-100 text-pink-600 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  View All Active Codes →
                </Link>
              </div>
            </div>
          </div>

          {/* Daily Rewards */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Don't Forget Daily Rewards!</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Besides codes, Raise Animals offers several ways to earn free rewards every day:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                    <span>📅</span> Daily Login Streak
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Log in every day for increasing rewards:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Day 1-3: Cash rewards</li>
                    <li>• Day 4-6: Rubies + Cash</li>
                    <li>• Day 7: <strong>Big ruby bonus!</strong></li>
                    <li>• Day 30: <strong>Legendary rewards</strong></li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center gap-2">
                    <span>🎯</span> Spin the Wheel
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Free daily spin with prizes including:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 50-500 rubies</li>
                    <li>• 10K-1M cash</li>
                    <li>• Random lassos</li>
                    <li>• <strong>Grand Prize: VIP Pass!</strong></li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-900 flex items-center gap-2">
                    <span>👥</span> Social Rewards
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Connect your account for one-time bonuses:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Join Group: <strong>500 rubies</strong></li>
                    <li>• Follow on Twitter: <strong>250 rubies</strong></li>
                    <li>• Like the game: <strong>100 rubies</strong></li>
                    <li>• Total: <strong>850 free rubies!</strong></li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-orange-900 flex items-center gap-2">
                    <span>🎬</span> Watch Ads (Optional)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Quick way to earn extra:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 30-second ad = 50 rubies</li>
                    <li>• 3 ads per hour limit</li>
                    <li>• <strong>150 rubies/hour</strong> potential</li>
                    <li>• Great for F2P players!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Optimization Tips */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Resource Management Pro Tips</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-900">💎 Ruby Spending Priority</h3>
                  <div className="bg-white rounded p-4">
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <div>
                          <strong>Crystal Lasso (250 rubies)</strong> - Best value for catching legendaries
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <div>
                          <strong>Prism Lasso (2000 rubies)</strong> - Endgame perfection, 100% catch rate
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <div>
                          <strong>VIP Pass</strong> - 2x multipliers, permanent benefit
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <div>
                          <strong>Skip</strong>: Common animals, cosmetics (save rubies!)
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">📊 Code Value Calculator</h3>
                  <p className="text-gray-700 mb-4">Not sure if a code is worth it? Use this rough conversion:</p>
                  <div className="bg-white rounded p-4">
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between items-center border-b pb-2">
                        <span><strong>100 Rubies</strong></span>
                        <span className="text-green-600 font-semibold">≈ $1 USD value</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span><strong>1M Cash</strong></span>
                        <span className="text-green-600 font-semibold">≈ 50 rubies (early game)</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span><strong>VIP Pass</strong></span>
                        <span className="text-green-600 font-semibold">≈ 2000+ rubies (best value!)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span><strong>Free Lasso Code</strong></span>
                        <span className="text-green-600 font-semibold">Varies by tier (50-2000 rubies)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/codes" className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="text-2xl font-bold mb-2">Active Codes List</h3>
                <p className="text-pink-100">Browse all working codes updated daily</p>
              </Link>

              <Link href="/lassos" className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🪢</div>
                <h3 className="text-2xl font-bold mb-2">Lasso Database</h3>
                <p className="text-orange-100">See which lassos to buy with your rubies</p>
              </Link>

              <Link href="/guides/beginners" className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Beginner's Guide</h3>
                <p className="text-green-100">Learn the game fundamentals</p>
              </Link>

              <Link href="/guides/catching" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🦁</div>
                <h3 className="text-2xl font-bold mb-2">Catching Guide</h3>
                <p className="text-blue-100">Master lasso tiers and catching strategies</p>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
