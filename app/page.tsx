import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Raise Animals Wiki & Codes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your complete guide to mastering Roblox's most engaging animal simulation game
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/animals"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Animals
              </Link>
              <Link
                href="/codes"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Codes
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What is Raise Animals Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What is Raise Animals?
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Raise Animals is an engaging Roblox simulation game where players build their own animal zoo from scratch.
                Start your journey by catching animals with lassos, earning currency through feeding and care,
                and experiencing exciting breeding and management systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From common creatures to legendary beasts, collect over 45 unique animals across different regions,
                participate in rodeo minigames, and unlock rare species as you progress through this immersive experience.
              </p>
            </div>
          </div>

          {/* Economic Cycle */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mt-12 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-orange-900">💰 The Economic Cycle</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Catch</h4>
                <p className="text-sm text-gray-700">Use lassos to catch animals</p>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-3xl text-orange-500">→</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Raise</h4>
                <p className="text-sm text-gray-700">Feed and care for animals</p>
              </div>
              <div className="text-center flex items-center justify-center">
                <span className="text-3xl text-orange-500">→</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Earn</h4>
                <p className="text-sm text-gray-700">Visitors pay automatically</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <span className="text-3xl text-orange-500">↓</span>
            </div>
            <div className="text-center mt-4 bg-white rounded-lg p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                ♻️
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Reinvest</h4>
              <p className="text-sm text-gray-700">Buy better lassos, more animals, and upgrades</p>
              <p className="text-xs text-green-700 font-bold mt-2">= Exponential Growth!</p>
            </div>
          </div>

          {/* Core Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🦁</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">45+ Animals</h3>
              <p className="text-gray-700 mb-3">Collect and raise diverse species from common to legendary</p>
              <div className="text-sm text-blue-700 font-semibold">PvE Only - No Combat</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🪢</div>
              <h3 className="text-xl font-bold mb-2 text-orange-900">15 Lassos</h3>
              <p className="text-gray-700 mb-3">Upgrade your catching tools from basic to divine tier</p>
              <div className="text-sm text-orange-700 font-semibold">Strategic Progression</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💤</div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Offline Earnings</h3>
              <p className="text-gray-700 mb-3">Zoo generates income even when you're not playing</p>
              <div className="text-sm text-purple-700 font-semibold">True Idle Game</div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">💡 What Makes It Special?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-start mb-2">
                  <span className="text-2xl mr-3">📈</span>
                  <div>
                    <strong>Delayed Gratification</strong>
                    <p className="text-sm text-gray-700">Watch income grow from $10/sec to millions/sec</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-2">
                  <span className="text-2xl mr-3">🌱</span>
                  <div>
                    <strong>Compound Growth</strong>
                    <p className="text-sm text-gray-700">Every upgrade multiplies your potential exponentially</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-2">
                  <span className="text-2xl mr-3">🎮</span>
                  <div>
                    <strong>Low Time Investment</strong>
                    <p className="text-sm text-gray-700">15-30 minutes per session, 2-3 times daily</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-2">
                  <span className="text-2xl mr-3">🆓</span>
                  <div>
                    <strong>F2P Friendly</strong>
                    <p className="text-sm text-gray-700">Free codes provide plenty of resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Raise Animals Guides Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Complete Raise Animals Guides
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Master every aspect of the game with our comprehensive guides covering animal catching techniques,
              breeding strategies, rodeo minigame tips, and strategies to unlock rare species.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Animals Guide Card */}
            <Link
              href="/animals"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">🦁</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Animals Database
                    </h3>
                    <p className="text-sm text-gray-500">Complete encyclopedia</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore detailed information on all 45 animals including their passive abilities, spawn regions,
                  movement speeds, and catching difficulty ratings.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">✓</span>
                    <span>Passive abilities and stats for each animal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">✓</span>
                    <span>Region-specific spawn locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">✓</span>
                    <span>Breeding compatibility charts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">✓</span>
                    <span>Catching and feeding strategies</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  View Animals Guide <span className="ml-2">→</span>
                </div>
              </div>
            </Link>

            {/* Lassos Guide Card */}
            <Link
              href="/lassos"
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">🪢</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      Lassos Guide
                    </h3>
                    <p className="text-sm text-gray-500">Catching mechanics</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn about all 15 lassos from basic ropes to divine-tier tools. Understand power levels,
                  costs, and optimal upgrade paths for efficient progression.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">✓</span>
                    <span>Complete lasso tier list with stats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">✓</span>
                    <span>Cost-effective upgrade strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">✓</span>
                    <span>Rarity tier explanations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">✓</span>
                    <span>Best lassos for each animal type</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                  View Lassos Guide <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Raise Animals Codes Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Raise Animals Codes
            </h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Unlock free rubies, cash, and exclusive rewards with active codes.
              We update daily so you never miss premium animals, special items, and limited-time offers!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-gray-900">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Why Use Codes?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-2xl">💎</span>
                    <div>
                      <div className="font-semibold">Free Premium Currency</div>
                      <div className="text-sm text-gray-600">Get rubies to unlock divine-tier lassos</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-2xl">💰</span>
                    <div>
                      <div className="font-semibold">Bonus Cash Rewards</div>
                      <div className="text-sm text-gray-600">Speed up your zoo expansion</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-2xl">🎁</span>
                    <div>
                      <div className="font-semibold">Exclusive Items</div>
                      <div className="text-sm text-gray-600">Access limited-time special rewards</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Active Codes</h3>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono font-bold text-lg">8 CODES</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">ACTIVE</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Redeem now for thousands of rubies and cash! Updated January 2025.
                  </p>
                  <Link
                    href="/codes"
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View All Codes →
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t pt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                💡 Pro tip: Bookmark this page and check back daily for new codes!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Master Every Aspect Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Master Every Aspect of Raise Animals
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to become a top zoo manager
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Animal Habitats & Maps</h3>
              <p className="text-gray-700 text-sm">
                Discover spawn locations across all regions and optimize your catching routes
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-xl font-bold mb-2 text-green-900">Animal Breeding System</h3>
              <p className="text-gray-700 text-sm">
                Learn breeding mechanics to create rare hybrid species and maximize profits
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Advanced Strategies</h3>
              <p className="text-gray-700 text-sm">
                Master rodeo minigames, efficient farming routes, and late-game progression
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="text-xl font-bold mb-2 text-orange-900">Game Mechanics</h3>
              <p className="text-gray-700 text-sm">
                Understand feeding systems, animal care, and currency management
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-xl font-bold mb-2 text-pink-900">Items & Upgrades</h3>
              <p className="text-gray-700 text-sm">
                Complete guide to lassos, food items, and zoo expansion options
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-2 text-indigo-900">Community & Updates</h3>
              <p className="text-gray-700 text-sm">
                Stay updated with latest game patches, events, and community strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Zoo Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of players building the ultimate animal collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.roblox.com/games/122826953758426/Raise-Animals"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              🎯 Play Now on Roblox
            </a>
            <Link
              href="/codes"
              className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free Codes
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
