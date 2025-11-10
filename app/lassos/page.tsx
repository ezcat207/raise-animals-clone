import Image from 'next/image'
import lassosData from '@/data/lassos-data.json'

export const metadata = {
  title: 'Raise Animals Lassos - Complete Guide',
  description: 'Complete guide to all 15 lassos in Raise Animals. Learn about catching mechanics, lasso progression, and the best strategies.',
}

export default function LassosPage() {
  const { metadata, lassos, tips, strategies } = lassosData

  const rarityColors: { [key: string]: string } = {
    'Common': 'from-gray-400 to-gray-500',
    'Uncommon': 'from-green-400 to-green-500',
    'Rare': 'from-blue-400 to-blue-500',
    'Epic': 'from-purple-400 to-purple-500',
    'Legendary': 'from-orange-400 to-orange-500',
    'Mythical': 'from-pink-400 to-pink-500',
    'Divine': 'from-yellow-300 to-yellow-400',
  }

  const rarityTextColors: { [key: string]: string } = {
    'Common': 'text-gray-700',
    'Uncommon': 'text-green-700',
    'Rare': 'text-blue-700',
    'Epic': 'text-purple-700',
    'Legendary': 'text-orange-700',
    'Mythical': 'text-pink-700',
    'Divine': 'text-yellow-600',
  }

  const rarityBadgeColors: { [key: string]: string } = {
    'Common': 'bg-gray-100 text-gray-800 border-gray-300',
    'Uncommon': 'bg-green-100 text-green-800 border-green-300',
    'Rare': 'bg-blue-100 text-blue-800 border-blue-300',
    'Epic': 'bg-purple-100 text-purple-800 border-purple-300',
    'Legendary': 'bg-orange-100 text-orange-800 border-orange-300',
    'Mythical': 'bg-pink-100 text-pink-800 border-pink-300',
    'Divine': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
          {metadata.heading}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {metadata.introduction}
        </p>
        <p className="mt-4 text-lg font-semibold text-orange-600">
          Total: {lassos.length} Lassos
        </p>
      </div>

      <div className="mb-12 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Rarity Tiers</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {lassosData.rarityTiers.map((rarity) => {
            const count = lassos.filter((l) => l.rarity === rarity).length
            return (
              <div
                key={rarity}
                className={`px-4 py-2 rounded-full font-medium border-2 ${rarityBadgeColors[rarity]}`}
              >
                {rarity} ({count})
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {lassos.map((lasso) => (
          <div
            key={lasso.tier}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className={`h-2 bg-gradient-to-r ${rarityColors[lasso.rarity]}`}></div>
            {lasso.image && (
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                <Image
                  src={lasso.image}
                  alt={lasso.name}
                  fill
                  className="object-contain p-4"
                  unoptimized
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-400">#{lasso.tier}</span>
                    <h3 className={`text-2xl font-bold ${rarityTextColors[lasso.rarity]}`}>
                      {lasso.name}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${rarityBadgeColors[lasso.rarity]}`}>
                    {lasso.rarity}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Power:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{lasso.power}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                  <span className="font-semibold text-orange-600">{lasso.cost}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {lasso.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-6">💡 Pro Tips</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">🎯 Progression Strategy</h3>
              <p className="opacity-90">{tips.progression}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">💎 Best Value</h3>
              <p className="opacity-90">{tips.bestValue}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">🏆 Endgame Focus</h3>
              <p className="opacity-90">{tips.endgame}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">💰 Getting Rubies</h3>
              <p className="opacity-90">{tips.rubies}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-6">🎮 Strategies</h2>
          <ul className="space-y-3">
            {strategies.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-2xl">✓</span>
                <span className="opacity-90">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">🎁 Need Free Rubies?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Check out our active codes to get free rubies for premium lassos!
        </p>
        <a
          href="/codes"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View Active Codes 🎮
        </a>
      </div>
    </div>
  )
}
