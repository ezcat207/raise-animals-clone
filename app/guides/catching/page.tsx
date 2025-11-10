import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Catching & Lasso Guide - Raise Animals',
  description: 'Master the art of catching animals with optimal lasso usage. Complete lasso tier list and catching strategies.',
}

export default function CatchingGuidePage() {
  const lassoTiers = [
    { tier: '1-3', name: 'Basic Tier', lassos: ['Old Lasso', 'Rusty Rope', 'Wooden Rope'], color: 'gray', animals: 'Common animals only' },
    { tier: '4-5', name: 'Uncommon Tier', lassos: ['Hunter Loop', 'Iron Loop'], color: 'green', animals: 'Common + Uncommon animals' },
    { tier: '6-7', name: 'Rare Tier', lassos: ['Steel Lasso', 'Phantom Rope'], color: 'blue', animals: 'Up to Rare animals' },
    { tier: '8-9', name: 'Epic Tier', lassos: ['Shadow Rope', 'Spirit Loop'], color: 'purple', animals: 'Up to Epic animals' },
    { tier: '10-11', name: 'Legendary Tier', lassos: ['Dragon Loop', 'Crystal Lasso'], color: 'orange', animals: 'Up to Legendary animals' },
    { tier: '12-15', name: 'Endgame Tier', lassos: ['Thunder Rope', 'Spectral Lasso', 'Rainbow Rope', 'Prism Lasso'], color: 'yellow', animals: 'All animals efficiently' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/guides" className="inline-flex items-center text-orange-100 hover:text-white mb-4">
            ← Back to All Guides
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Catching & Lasso Guide
          </h1>
          <p className="text-xl md:text-2xl text-orange-100">
            Master the art of catching animals with optimal lasso strategies
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/lassos/steel-lasso.jpg"
              alt="Lasso Catching Mechanics"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Choose the Right Lasso</h2>
                <p className="text-xl text-gray-200">Match your lasso tier to animal difficulty for maximum efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">

          {/* Lasso Tier System */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Understanding Lasso Tiers</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Raise Animals features <strong>15 lassos</strong> divided into 6 distinct tiers. Each tier is designed for
                specific animal rarities. Using the correct tier is crucial for efficient progression and resource management.
              </p>

              <div className="space-y-4">
                {lassoTiers.map((tier, index) => (
                  <div key={index} className={`border-l-4 border-${tier.color}-500 bg-${tier.color}-50 rounded-lg p-6`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Tier {tier.tier}: {tier.name}
                      </h3>
                      <span className={`px-4 py-2 bg-${tier.color}-100 text-${tier.color}-800 rounded-full font-semibold text-sm`}>
                        {tier.lassos.length} Lassos
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Lassos:</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {tier.lassos.map((lasso, i) => (
                            <li key={i}>{lasso}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Best For:</h4>
                        <p className="text-gray-700">{tier.animals}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Catching Techniques */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Pro Catching Techniques</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">🎯 Technique #1: Match Tier to Rarity</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Golden Rule:</strong> Your lasso tier should match or exceed the animal's rarity.
                  </p>
                  <div className="bg-white rounded p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Common animals:</strong> Basic lassos (Tier 1-3) work fine</li>
                      <li>• <strong>Rare animals:</strong> Require at least Tier 6 (Steel Lasso)</li>
                      <li>• <strong>Legendary animals:</strong> Need Tier 10+ (Dragon Loop or better)</li>
                      <li>• <strong>Divine/Mythical:</strong> Invest in endgame lassos (Tier 12-15)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-900">💰 Technique #2: Cost-Effective Upgrading</h3>
                  <p className="text-gray-700 mb-4">
                    Don't buy every lasso! Follow this upgrade path:
                  </p>
                  <div className="bg-white rounded p-4">
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                        <span><strong>Old Lasso</strong> (Free) → Start catching commons</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                        <span><strong>Hunter Loop</strong> (500 cash) → Skip Rusty & Wooden</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
                        <span><strong>Steel Lasso</strong> (5K cash) → Skip Iron Loop</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
                        <span><strong>Shadow Rope</strong> (50K cash) → For epic animals</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
                        <span><strong>Crystal Lasso</strong> (1.5M or 250 rubies) → Best value legendary</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
                        <span><strong>Prism Lasso</strong> (2K rubies) → Endgame perfection</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-900">🗺️ Technique #3: Region Strategies</h3>
                  <p className="text-gray-700 mb-4">
                    Each region has different animal densities and rarities. Plan your routes:
                  </p>
                  <div className="bg-white rounded p-4">
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <strong className="text-yellow-700">🏜️ Desert/Savanna:</strong> Best for beginners - abundant common animals
                      </li>
                      <li>
                        <strong className="text-blue-700">🌊 Ocean:</strong> Mixed rarities - bring multiple lasso tiers
                      </li>
                      <li>
                        <strong className="text-green-700">🌴 Jungle:</strong> High-value animals - worth the travel time
                      </li>
                      <li>
                        <strong className="text-cyan-700">❄️ Arctic:</strong> Rare spawns - check frequently for legendaries
                      </li>
                      <li>
                        <strong className="text-purple-700">🎃 Halloween2025:</strong> Special event animals - time-limited!
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-orange-900">⚡ Technique #4: Speed vs Power</h3>
                  <div className="bg-white rounded p-4">
                    <p className="text-gray-700 mb-4">
                      <strong>Higher tier ≠ always better!</strong> Sometimes lower tiers are more efficient:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Use <strong>lower tiers</strong> for mass-catching common animals (faster, cheaper)</li>
                      <li>• Save <strong>high tiers</strong> for rare/legendary targets</li>
                      <li>• Don't waste Prism Lasso catches on common snakes!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Quick Reference Chart</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4">Your Goal</th>
                    <th className="text-left py-3 px-4">Recommended Lasso</th>
                    <th className="text-left py-3 px-4">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Just started, first animals</td>
                    <td className="py-3 px-4 font-semibold">Old Lasso → Hunter Loop</td>
                    <td className="py-3 px-4">Free → 500 cash</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Building mid-game zoo</td>
                    <td className="py-3 px-4 font-semibold">Steel → Shadow Rope</td>
                    <td className="py-3 px-4">5K → 50K cash</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Hunting legendaries</td>
                    <td className="py-3 px-4 font-semibold">Crystal Lasso</td>
                    <td className="py-3 px-4">1.5M cash OR 250 rubies</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Perfect catch rate (endgame)</td>
                    <td className="py-3 px-4 font-semibold">Rainbow → Prism Lasso</td>
                    <td className="py-3 px-4">1250 → 2000 rubies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Related Links */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/lassos" className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🪢</div>
                <h3 className="text-2xl font-bold mb-2">All Lassos Database</h3>
                <p className="text-orange-100">View complete lasso stats, costs, and descriptions</p>
              </Link>

              <Link href="/animals" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🦁</div>
                <h3 className="text-2xl font-bold mb-2">Animals by Region</h3>
                <p className="text-blue-100">Find out which animals spawn where</p>
              </Link>

              <Link href="/codes" className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="text-2xl font-bold mb-2">Free Ruby Codes</h3>
                <p className="text-purple-100">Get rubies to buy premium lassos faster</p>
              </Link>

              <Link href="/guides/beginners" className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Beginner's Guide</h3>
                <p className="text-green-100">Start from the basics</p>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
