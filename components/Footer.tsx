export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <span>🐾</span>
              <span>Raise Animals Wiki</span>
            </h3>
            <p className="text-gray-400">
              Complete guide, animals database, lassos, and latest codes for Raise Animals on Roblox.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/animals" className="text-gray-400 hover:text-white transition-colors">
                  All Animals
                </a>
              </li>
              <li>
                <a href="/codes" className="text-gray-400 hover:text-white transition-colors">
                  Active Codes
                </a>
              </li>
              <li>
                <a
                  href="https://www.roblox.com/games/122826953758426/Raise-Animals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Play Game
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl"
                title="GitHub"
              >
                <span>📱</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl"
                title="Twitter"
              >
                <span>🐦</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Raise Animals Wiki. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This is an unofficial fan site. Raise Animals is a game on the Roblox platform.
          </p>
        </div>
      </div>
    </footer>
  )
}
