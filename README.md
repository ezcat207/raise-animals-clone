# Raise Animals - Website Clone

A modern, fully responsive clone of the Raise Animals wiki website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Pages**:
  - Home page with quick navigation
  - Animals page with 45 animals, filterable by region
  - Codes page with copy-to-clipboard functionality
- **Beautiful UI**: Gradient backgrounds, smooth animations, and modern design
- **Type-Safe**: Full TypeScript support for better development experience
- **Performance Optimized**: Next.js image optimization and static generation

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
raise-animals-clone/
├── app/                    # Next.js App Router
│   ├── animals/           # Animals page
│   ├── codes/             # Codes page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation bar
│   └── Footer.tsx         # Footer
├── data/                  # Data files
│   ├── animals-data.json  # Animals database
│   └── codes-data.json    # Codes database
├── public/                # Static assets
└── ...config files
```

## 🎨 Pages

### Home Page (`/`)
- Hero section with animated gradient titles
- Quick navigation cards to Animals and Codes pages
- Play Now button linking to Roblox game

### Animals Page (`/animals`)
- Display all 45 animals with images, stats, and passives
- Filter by region (8 different regions)
- Tips section for catching and breeding
- Responsive grid layout

### Codes Page (`/codes`)
- 8 active codes with rewards
- One-click copy to clipboard
- Step-by-step redemption guide
- Tips and troubleshooting sections
- Reward usage information

## 🛠️ Technologies

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Library**: [React 18](https://react.dev/)
- **Image Optimization**: Next.js Image component

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Key Features

### Navigation
- Sticky navigation bar
- Active page highlighting
- Mobile-responsive menu
- Quick access to Play Now button

### Animals Page
- Beautiful card-based layout
- Region-based color coding
- Hover effects and animations
- Fast image loading with Next.js optimization

### Codes Page
- Interactive code copying
- Visual feedback on copy
- Comprehensive guides
- Troubleshooting help

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📊 Data

All data is stored in JSON format in the `/data` directory:
- `animals-data.json`: Complete database of 45 animals
- `codes-data.json`: Active codes, guides, and tips

## 🎨 Customization

### Colors
Modify the theme colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
    },
  },
}
```

### Content
Update the JSON files in the `/data` directory to modify:
- Animal information
- Codes and rewards
- Tips and guides

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
Build the project:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## 📝 License

This is a fan-made clone for educational purposes. All game content and trademarks belong to their respective owners.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📞 Support

For issues or questions:
- Check the original website: [raiseanimals.com](https://raiseanimals.com)
- Play the game: [Roblox - Raise Animals](https://www.roblox.com/games/122826953758426/Raise-Animals)

---

**Built with ❤️ using Next.js and Tailwind CSS**
