# Coin Flip Game

A fun and interactive coin flip game built with Next.js, featuring smooth animations and an attractive, mobile-friendly UI.

![Coin Flip Game](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=for-the-badge&logo=tailwind-css)

## Features

- 🎯 **Interactive Gameplay**: Choose heads or tails and watch the coin flip with smooth 3D animations
- 📊 **Statistics Tracking**: Track your wins, losses, win rate, current streak, and best streak
- 💾 **Persistent Storage**: All stats are saved in localStorage and survive page refreshes
- 📱 **Mobile-Friendly**: Fully responsive design that works perfectly on all devices
- 🎨 **Beautiful UI**: Modern glass-morphism design with gradient backgrounds
- ⚡ **Fast Performance**: Built with Next.js 16 and Turbopack for lightning-fast load times
- 🎭 **Smooth Animations**: Professional animations using CSS transforms and keyframes

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: CSS3 Transforms & Keyframes
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: localStorage API

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ismat-Samadov/coin_flip_game.git
cd coin_flip_game
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Game Rules

1. **Choose Your Side**: Click either the "Heads" or "Tails" button
2. **Watch the Flip**: The coin will perform a realistic spinning animation
3. **See the Result**: After the animation, you'll see if you won or lost
4. **Track Your Stats**: Your performance is automatically tracked and displayed

## Statistics

The game tracks the following metrics:

- **Total Games**: Number of games played
- **Wins**: Number of correct predictions
- **Losses**: Number of incorrect predictions
- **Win Rate**: Percentage of games won
- **Current Streak**: Consecutive wins
- **Best Streak**: Highest consecutive wins achieved

## Project Structure

```
coin_flip_game/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── icon.svg          # Favicon
│   ├── apple-icon.svg    # Apple touch icon
│   └── manifest.json     # PWA manifest
├── components/
│   └── CoinFlipGame.tsx  # Main game component
├── public/               # Static assets
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies

```

## Customization

### Changing Colors

Edit the gradient in `app/page.tsx`:
```tsx
<main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
```

### Modifying Animation Speed

Update the animation duration in `components/CoinFlipGame.tsx`:
```tsx
transition: isFlipping ? 'transform 1s ease-out' : 'none'
```

### Adjusting Coin Design

Modify the coin styles in `app/globals.css`:
```css
.coin-heads {
  background: linear-gradient(145deg, #ffd700, #ffed4e);
}
```

## Deployment

### Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ismat-Samadov/coin_flip_game)

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ for Performance, Accessibility, Best Practices, and SEO
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Bundle Size**: Optimized with Next.js automatic code splitting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

**Ismat Samadov**

- GitHub: [@Ismat-Samadov](https://github.com/Ismat-Samadov)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by classic coin flip games

---

Made with ❤️ by Ismat Samadov
