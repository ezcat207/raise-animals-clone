import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Breeding & Weather Events Guide - Raise Animals',
  description: 'Master breeding mechanics and catch Admin Abuse events for high-multiplier mutations. Complete guide to getting rare species.',
}

export default function BreedingGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/guides" className="inline-flex items-center text-purple-100 hover:text-white mb-4">
            ← Back to All Guides
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Breeding & Weather Events
          </h1>
          <p className="text-xl md:text-2xl text-purple-100">
            Get rare mutations and maximize your animal value through strategic breeding
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/animals/phoenix.png"
              alt="Rare Mutated Animal"
              fill
              className="object-contain bg-gradient-to-br from-purple-100 to-pink-100"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Unlock Legendary Mutations</h2>
                <p className="text-xl text-gray-200">Weather events create animals with massive stat multipliers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">

          {/* Breeding Basics */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Breeding System Explained</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Breeding in Raise Animals allows you to combine two animals to create offspring with
                <strong> enhanced stats and rare mutations</strong>. The breeding system is key to late-game progression
                and massive income multipliers.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-900">🧬 How Breeding Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">1️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Select Two Parent Animals</h4>
                      <p className="text-gray-700">Choose any two animals from your zoo. Higher rarity parents = better offspring chances.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-3xl mr-4">2️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Wait for Breeding Time</h4>
                      <p className="text-gray-700">Breeding takes time (varies by rarity). Check back after the timer completes.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-3xl mr-4">3️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Claim Your Offspring</h4>
                      <p className="text-gray-700">The baby animal inherits traits from parents + potential mutations!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
                <h4 className="text-xl font-bold mb-3 text-blue-900">💡 Pro Tip</h4>
                <p className="text-gray-700">
                  <strong>Breeding compatibility matters!</strong> Some species breed better together. Experiment with
                  different combinations to discover hidden hybrid species with unique abilities.
                </p>
              </div>
            </div>
          </div>

          {/* Weather Events - THE KEY FEATURE */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">⚡ Weather Events (Admin Abuse)</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">🎉</span>
                  <div>
                    <h3 className="text-3xl font-bold">Friday Admin Abuse Events</h3>
                    <p className="text-lg text-yellow-100">The BEST time to breed animals!</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every <strong>Friday during the weekly update</strong>, game developers trigger special
                <strong> Weather Events</strong> (also called "Admin Abuse" by the community). During these events,
                animals born have a <strong>massively increased chance</strong> of getting high-multiplier mutations!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-purple-900">🌟 Normal Breeding</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 5-10% mutation chance</li>
                    <li>• 1.1x - 1.5x stat multipliers</li>
                    <li>• Standard offspring traits</li>
                    <li>• Good for everyday progress</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-4 border-orange-400">
                  <h4 className="text-xl font-bold mb-3 text-orange-900">⚡ Weather Event Breeding</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 50-80% mutation chance! 🔥</li>
                    <li>• 2x - 10x stat multipliers! 💎</li>
                    <li>• Rare visual mutations ✨</li>
                    <li>• <strong>GAME-CHANGING results!</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded p-6 mb-6">
                <h4 className="text-xl font-bold mb-3 text-green-900">📅 When to Breed</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>✅ DO breed during:</strong></p>
                  <ul className="list-disc list-inside ml-4 mb-4">
                    <li>Friday weekly update (Admin Abuse time)</li>
                    <li>Special holiday events</li>
                    <li>When weather icons appear in-game</li>
                  </ul>

                  <p><strong>❌ DON'T waste breeding slots:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Normal days (unless you need specific animals)</li>
                    <li>When no events are active</li>
                    <li>Save your best pairs for Fridays!</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
                <h4 className="text-xl font-bold mb-3 text-red-900">⏰ Event Schedule</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Every Friday</strong> when the game updates (exact time varies by timezone):
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Developers announce update in official Discord/social media</li>
                  <li>Weather effects activate in-game (rain, snow, lightning, etc.)</li>
                  <li>Players rush to breed their best animals</li>
                  <li>Event lasts 2-4 hours typically</li>
                  <li>Check in-game chat for confirmation!</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Mutation Types */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Types of Mutations</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid gap-6">
                <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-blue-900">💪 Stat Multipliers</h3>
                  <p className="text-gray-700 mb-3">
                    The most common and valuable mutation. Your animal's income/value gets multiplied:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>1.5x:</strong> Common mutation (50% more value)</li>
                    <li>• <strong>2x-3x:</strong> Rare mutation (doubles/triples value)</li>
                    <li>• <strong>5x-10x:</strong> Legendary weather event mutation (JACKPOT!)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-900">🎨 Visual Mutations</h3>
                  <p className="text-gray-700 mb-3">
                    Cosmetic changes that make your animals unique and valuable:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Shiny/sparkle effects</li>
                    <li>• Color palette changes (golden, rainbow, etc.)</li>
                    <li>• Size variations (giant or tiny)</li>
                    <li>• Particle effects (flames, ice, lightning)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-green-900">⚡ Ability Mutations</h3>
                  <p className="text-gray-700 mb-3">
                    Enhanced or new passive abilities:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stronger versions of parent abilities</li>
                    <li>• Combination of both parents' abilities</li>
                    <li>• Completely new unique abilities (rare!)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Breeding Strategy */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Advanced Breeding Strategy</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-orange-900">🎯 Strategy #1: Save Your Best Pairs</h3>
                  <p className="text-gray-700 mb-4">
                    Don't breed your legendary animals randomly! Wait for Friday events:
                  </p>
                  <div className="bg-white rounded p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Keep 2-4 of your rarest animals for event breeding</li>
                      <li>• Mark them in your zoo (mental note or organize)</li>
                      <li>• Set alarms for Friday updates</li>
                      <li>• Have breeding slots ready before the event</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-900">💎 Strategy #2: Rarity Stacking</h3>
                  <p className="text-gray-700 mb-4">
                    Breed high rarity + high rarity = even better offspring:
                  </p>
                  <div className="bg-white rounded p-4">
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Optimal Pairs:</strong></p>
                      <ul className="list-disc list-inside ml-4">
                        <li>Legendary + Legendary = Best mutation chance</li>
                        <li>Legendary + Epic = Great results</li>
                        <li>Epic + Epic = Good results</li>
                        <li>Don't breed Common + Common (waste of time)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">🔄 Strategy #3: Mutation Breeding Chain</h3>
                  <p className="text-gray-700 mb-4">
                    Mutated offspring can be bred again for COMPOUND mutations:
                  </p>
                  <div className="bg-white rounded p-4">
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Get 2x multiplier animal from weather event</li>
                      <li>Breed that 2x animal with another legendary</li>
                      <li>Offspring can inherit the 2x AND get NEW mutations</li>
                      <li>Result: 2x × 3x = 6x multiplier animal! 🚀</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Checklist */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Friday Event Checklist</h2>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">✅ Before the Event</h3>
              <div className="space-y-3 mb-8">
                <label className="flex items-center space-x-3 text-lg">
                  <input type="checkbox" className="w-6 h-6" />
                  <span>Join official Discord/social media for event announcements</span>
                </label>
                <label className="flex items-center space-x-3 text-lg">
                  <input type="checkbox" className="w-6 h-6" />
                  <span>Identify your 4-6 best animals to breed</span>
                </label>
                <label className="flex items-center space-x-3 text-lg">
                  <input type="checkbox" className="w-6 h-6" />
                  <span>Clear breeding slots (finish ongoing breedings)</span>
                </label>
                <label className="flex items-center space-x-3 text-lg">
                  <input type="checkbox" className="w-6 h-6" />
                  <span>Have enough food/resources ready</span>
                </label>
              </div>

              <h3 className="text-2xl font-bold mb-6">🎉 During the Event</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 text-lg">
                  <input type="checkbox" className="w-6 h-6" />
                  <span>Look for weather effects in-game (rain, storm, etc.)</span>
                </label>
                <label className="flex items-center space-x-3 text-lg">
                  <input type="checkbox" className="w-6 h-6" />
                  <span>Start breeding your best pairs IMMEDIATELY</span>
                </label>
                <label className="flex items-center space-x-3 text-lg">
                  <input type="checkbox" className="w-6 h-6" />
                  <span>Use all available breeding slots</span>
                </label>
                <label className="flex items-center space-x-3 text-lg">
                  <input type="checkbox" className="w-6 h-6" />
                  <span>Check results and celebrate mutations! 🎊</span>
                </label>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/animals" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🦁</div>
                <h3 className="text-2xl font-bold mb-2">All Animals</h3>
                <p className="text-blue-100">Find the best animals to breed together</p>
              </Link>

              <Link href="/codes" className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="text-2xl font-bold mb-2">Free Codes</h3>
                <p className="text-purple-100">Get resources to speed up breeding</p>
              </Link>

              <Link href="/guides/beginners" className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Beginner's Guide</h3>
                <p className="text-green-100">Learn the basics before breeding</p>
              </Link>

              <Link href="/guides/catching" className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">🪢</div>
                <h3 className="text-2xl font-bold mb-2">Catching Guide</h3>
                <p className="text-orange-100">Catch legendary animals to breed</p>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
