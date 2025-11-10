import Image from 'next/image'
import animalsData from '@/data/animals-data.json'

export const metadata = {
  title: 'All Animals in Raise Animals - Complete Index',
  description: 'Discover every animal you can catch and raise in Roblox Raise Animals. Complete animal index with rarities, locations, and breeding information.',
}

export default function AnimalsPage() {
  const { metadata, animals, tips } = animalsData

  const regionColors: { [key: string]: string } = {
    'Desert': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'Savanna': 'bg-amber-100 text-amber-800 border-amber-300',
    'Ocean': 'bg-blue-100 text-blue-800 border-blue-300',
    'Forest': 'bg-green-100 text-green-800 border-green-300',
    'Arctic': 'bg-cyan-100 text-cyan-800 border-cyan-300',
    'Jungle': 'bg-emerald-100 text-emerald-800 border-emerald-300',
    'Halloween2025': 'bg-purple-100 text-purple-800 border-purple-300',
    'Mythical Realm': 'bg-pink-100 text-pink-800 border-pink-300',
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {metadata.heading}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {metadata.introduction}
        </p>
        <p className="mt-4 text-lg font-semibold text-blue-600">
          Total: {animals.length} Animals
        </p>
      </div>

      <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Filter by Region</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(regionColors).map((region) => {
            const count = animals.filter((a) => a.region === region).length
            return (
              <button
                key={region}
                className={`px-4 py-2 rounded-full font-medium border-2 transition-all duration-200 hover:scale-105 ${regionColors[region]}`}
              >
                {region} ({count})
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {animals.map((animal) => (
          <div
            key={animal.slug}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {animal.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${regionColors[animal.region]}`}>
                  {animal.region}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {animal.passive}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Animal Catching & Raising Tips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">🎯 Maximize Your Catches</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {tips.maximizeCatches.map((tip: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-purple-600">💰 Breeding for Profit</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {tips.breedingForProfit.map((tip: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-pink-600">⭐ Rare Animal Locations</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {tips.rareLocations}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
