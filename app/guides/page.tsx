import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Raise Animals Guides - Complete Strategy Guides',
  description: 'Master Raise Animals with our comprehensive guides covering everything from beginner tips to advanced strategies.',
}

const guides = [
  {
    id: 'beginners',
    title: 'Ultimate Beginner\'s Guide',
    description: 'Start your journey with this comprehensive guide covering all the basics',
    difficulty: 'Beginner',
    topics: ['Getting Started', 'Economic System', 'First Animals', 'Progression Tips'],
    icon: '🎯',
    color: 'from-green-500 to-emerald-600',
    href: '/guides/beginners',
    image: '/images/guides/beginners-guide.jpg'
  },
  {
    id: 'catching',
    title: 'Catching & Lasso Guide',
    description: 'Master the art of catching animals with optimal lasso usage',
    difficulty: 'Beginner',
    topics: ['Lasso Tiers', 'Catching Techniques', 'Region Strategies', 'Upgrade Path'],
    icon: '🪢',
    color: 'from-orange-500 to-red-600',
    href: '/guides/catching',
    image: '/images/guides/catching-guide.jpg'
  },
  {
    id: 'breeding',
    title: 'Breeding & Weather Events',
    description: 'Learn breeding mechanics and how to get rare mutations from weather events',
    difficulty: 'Intermediate',
    topics: ['Breeding Basics', 'Weather Events', 'Admin Abuse Events', 'Mutations'],
    icon: '🧬',
    color: 'from-purple-500 to-pink-600',
    href: '/guides/breeding',
    image: '/images/guides/breeding-guide.jpg'
  },
  {
    id: 'codes',
    title: 'Codes & Free Rewards Guide',
    description: 'Maximize your free resources with codes and daily rewards',
    difficulty: 'All Levels',
    topics: ['Active Codes', 'How to Redeem', 'Best Rewards', 'Code Strategy'],
    icon: '🎁',
    color: 'from-pink-500 to-rose-600',
    href: '/guides/codes-guide',
    image: '/images/guides/codes-guide.jpg'
  },
]

const difficultyColors: { [key: string]: string } = {
  'Beginner': 'bg-green-100 text-green-800 border-green-300',
  'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'Advanced': 'bg-red-100 text-red-800 border-red-300',
  'All Levels': 'bg-blue-100 text-blue-800 border-blue-300',
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Complete Strategy Guides
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Master every aspect of Raise Animals with our in-depth guides
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span>📚</span>
              <span>{guides.length} Guides Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span>🎯</span>
              <span>All Skill Levels</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span>🔄</span>
              <span>Regularly Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${guide.color}`}></div>

                {guide.image && (
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{guide.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[guide.difficulty]}`}>
                      {guide.difficulty}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {guide.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</div>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Read Guide <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Quick Tips for Success</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Start Small</h3>
              <p className="text-gray-600">
                Begin with common animals and upgrade gradually. Don't rush to catch legendary creatures before you're ready.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Understand Economics</h3>
              <p className="text-gray-600">
                The game is built on passive income. Focus on building a steady visitor flow before expanding too fast.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Patience Pays</h3>
              <p className="text-gray-600">
                This is an idle game at heart. Your zoo generates income even when you're offline - take advantage of it!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Building Your Zoo?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Check out our active codes for free rewards to give your zoo a head start
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/codes"
              className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Free Codes
            </Link>
            <Link
              href="/animals"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Browse Animals
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
