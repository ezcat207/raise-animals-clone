import Link from 'next/link'

export const metadata = {
  title: 'Ultimate Beginner\'s Guide - Raise Animals',
  description: 'Complete beginner\'s guide to Raise Animals. Learn the economic system, progression path, and essential tips to build your ultimate zoo.',
}

export default function BeginnersGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/guides" className="inline-flex items-center text-green-100 hover:text-white mb-4">
            ← Back to All Guides
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ultimate Beginner's Guide
          </h1>
          <p className="text-xl md:text-2xl text-green-100">
            Your complete roadmap to mastering Raise Animals from day one
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <a href="#what-is-raise-animals" className="text-blue-600 hover:text-blue-800">1. What is Raise Animals?</a>
            <a href="#economic-system" className="text-blue-600 hover:text-blue-800">2. Understanding the Economic System</a>
            <a href="#getting-started" className="text-blue-600 hover:text-blue-800">3. Getting Started</a>
            <a href="#progression" className="text-blue-600 hover:text-blue-800">4. Progression Path</a>
            <a href="#core-gameplay" className="text-blue-600 hover:text-blue-800">5. Core Gameplay Loop</a>
            <a href="#tips" className="text-blue-600 hover:text-blue-800">6. Essential Tips</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">

            {/* Section 1 */}
            <div id="what-is-raise-animals" className="mb-16 scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">What is Raise Animals?</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Raise Animals is a <strong>Roblox simulation game</strong> that combines elements of idle/tycoon games with animal collecting.
                  The core concept is simple: <strong>build and manage your own animal zoo from scratch</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Unlike action-heavy games, Raise Animals focuses on <strong>strategic decision-making</strong>,
                  <strong>resource management</strong>, and <strong>long-term progression</strong>. It's perfect for players who
                  enjoy seeing their virtual empire grow over time.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">🎯 Game Type</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-600">✓</span>
                      <span><strong>Idle Tycoon:</strong> Passive income generation even when offline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-600">✓</span>
                      <span><strong>Collection Game:</strong> 45+ unique animals to discover and raise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-600">✓</span>
                      <span><strong>PvE Experience:</strong> No player vs player combat - focus on your own progress</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 - Economic System */}
            <div id="economic-system" className="mb-16 scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Understanding the Economic System</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The heart of Raise Animals is its <strong>economic loop</strong>. Understanding this system is crucial
                  to progressing efficiently. The game uses a <strong>"放置大亨" (Idle Tycoon) model</strong> where wealth
                  compounds over time.
                </p>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-900">💰 The Economic Cycle</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        1
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Initial Investment (Catching)</h4>
                        <p className="text-gray-700">
                          Use lassos to catch animals in different regions. This is your <strong>initial capital</strong> -
                          the foundation of your zoo empire.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        2
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Building Production (Raising)</h4>
                        <p className="text-gray-700">
                          Place animals in your zoo, feed them, and care for them. Well-maintained animals attract more visitors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        3
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Value Generation (Production)</h4>
                        <p className="text-gray-700">
                          Your animals continuously generate value. Rare animals and special breeds attract premium visitors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        4
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Automatic Income (Visitors)</h4>
                        <p className="text-gray-700">
                          <strong>This is the magic!</strong> Visitors automatically come to your zoo and pay admission.
                          The better your zoo, the more visitors and higher ticket prices.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        5
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Reinvestment (Upgrades)</h4>
                        <p className="text-gray-700">
                          Use earned money to buy more animals, better lassos, food upgrades, and zoo expansions.
                          This creates a <strong>snowball effect</strong> of exponential growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h4 className="text-xl font-bold mb-3 text-blue-900">💡 Key Economic Insights</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mr-3 text-2xl">📈</span>
                      <div>
                        <strong className="text-blue-900">Delayed Gratification:</strong>
                        <p className="text-gray-700">Watch your income grow from dollars/second to millions/second</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-2xl">💤</span>
                      <div>
                        <strong className="text-blue-900">Offline Earnings:</strong>
                        <p className="text-gray-700">Animals grow and produce even when you're not playing - always come back to rewards!</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-2xl">🌱</span>
                      <div>
                        <strong className="text-blue-900">Compound Growth:</strong>
                        <p className="text-gray-700">Every upgrade multiplies your income potential exponentially</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 - Getting Started */}
            <div id="getting-started" className="mb-16 scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Getting Started</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Your First 30 Minutes</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="text-xl font-bold mb-2">Step 1: Complete the Tutorial</h4>
                    <p className="text-gray-700">
                      The game will guide you through basic catching and placing mechanics.
                      Pay attention - this sets up your foundation!
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="text-xl font-bold mb-2">Step 2: Redeem All Active Codes</h4>
                    <p className="text-gray-700 mb-3">
                      This is critical! Codes give you free cash and rubies to jumpstart your progress.
                    </p>
                    <Link
                      href="/codes"
                      className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                    >
                      View All Active Codes →
                    </Link>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="text-xl font-bold mb-2">Step 3: Catch Your First Animals</h4>
                    <p className="text-gray-700 mb-3">
                      Start with common animals in the starting area:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Snake:</strong> Fast and easy to catch (Desert region)</li>
                      <li><strong>Buffalo:</strong> Good starter animal (Savanna region)</li>
                      <li><strong>Fish:</strong> Beginner-friendly (Ocean region)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="text-xl font-bold mb-2">Step 4: Build Your First Habitats</h4>
                    <p className="text-gray-700">
                      Place animals strategically in your zoo. Group similar types together for efficiency bonuses.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="text-xl font-bold mb-2">Step 5: Wait and Grow</h4>
                    <p className="text-gray-700">
                      Let visitors start coming! Your first income will be small, but it grows quickly.
                      Check back after 15-30 minutes to see your first profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 - Progression */}
            <div id="progression" className="mb-16 scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Progression Path</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-green-900">🌱 Early Game (Hours 1-5)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>✓ Focus on common animals</li>
                      <li>✓ Upgrade to Rusty/Wooden lassos</li>
                      <li>✓ Learn region layouts</li>
                      <li>✓ Build 10-15 animals</li>
                      <li>✓ Income: $10-1000/sec</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-orange-900">🔥 Mid Game (Hours 5-20)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>✓ Catch rare animals</li>
                      <li>✓ Get Steel/Phantom lassos</li>
                      <li>✓ Start breeding</li>
                      <li>✓ Expand to 30-50 animals</li>
                      <li>✓ Income: $1K-100K/sec</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-purple-900">👑 Late Game (20+ hours)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>✓ Hunt legendary animals</li>
                      <li>✓ Divine-tier lassos</li>
                      <li>✓ Weather event mutations</li>
                      <li>✓ Optimize for multipliers</li>
                      <li>✓ Income: $100K+/sec</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 - Core Gameplay */}
            <div id="core-gameplay" className="mb-16 scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Core Gameplay Loop</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 mb-6">
                  Your daily routine in Raise Animals follows a simple but engaging pattern:
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-900">🎯 Login → Collect → Upgrade → Catch → Wait</h3>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li><strong>Log in</strong> and collect your offline earnings</li>
                      <li><strong>Check codes</strong> for new freebies</li>
                      <li><strong>Upgrade</strong> lassos or buy better food</li>
                      <li><strong>Catch</strong> new animals or replace weak ones</li>
                      <li><strong>Wait</strong> for income to accumulate (or play other games!)</li>
                    </ol>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-purple-900">⏰ Time Investment</h3>
                    <p className="text-gray-700 mb-4">
                      This is an <strong>idle game</strong> - you don't need to grind for hours:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Active sessions:</strong> 15-30 minutes, 2-3 times per day</li>
                      <li>• <strong>Offline time:</strong> Let your zoo work while you sleep/study/work</li>
                      <li>• <strong>Check-ins:</strong> Quick 5-minute visits earn great returns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 - Essential Tips */}
            <div id="tips" className="mb-16 scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Essential Tips for New Players</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid gap-6">
                  <div className="border-l-4 border-red-500 pl-6 py-2 bg-red-50 rounded">
                    <h3 className="text-xl font-bold mb-2 text-red-900">❌ Common Mistakes to Avoid</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Don't waste rubies on common animals - save for divine lassos</li>
                      <li>• Don't ignore breeding - mutations give huge multipliers</li>
                      <li>• Don't skip Friday admin events - free high-multiplier mutations!</li>
                      <li>• Don't buy random lassos - follow the upgrade path</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6 py-2 bg-green-50 rounded">
                    <h3 className="text-xl font-bold mb-2 text-green-900">✅ Smart Strategies</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Check codes daily - they update frequently</li>
                      <li>• Join the community for admin event schedules</li>
                      <li>• Match lasso tier to animal rarity for efficiency</li>
                      <li>• VIP Pass is worth it if you play regularly</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-50 rounded">
                    <h3 className="text-xl font-bold mb-2 text-yellow-900">💎 F2P vs Paid Strategy</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Free-to-Play is 100% viable!</strong> The game is designed for F2P players:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Codes give plenty of free rubies</li>
                      <li>• Patience beats paying - just takes longer</li>
                      <li>• VIP Pass (~$5) is the only recommended purchase for active players</li>
                      <li>• Avoid "speed up" purchases - not worth real money</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/animals" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">🦁</div>
                  <h3 className="text-2xl font-bold mb-2">Animals Database</h3>
                  <p className="text-blue-100">View all 45 animals, their stats, and spawn locations</p>
                </Link>

                <Link href="/lassos" className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">🪢</div>
                  <h3 className="text-2xl font-bold mb-2">Lassos Guide</h3>
                  <p className="text-orange-100">Complete lasso tier list and upgrade recommendations</p>
                </Link>

                <Link href="/codes" className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">🎮</div>
                  <h3 className="text-2xl font-bold mb-2">Active Codes</h3>
                  <p className="text-purple-100">Get free cash, rubies, and exclusive rewards</p>
                </Link>

                <Link href="/guides" className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="text-2xl font-bold mb-2">All Guides</h3>
                  <p className="text-green-100">Browse more advanced guides and strategies</p>
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}
