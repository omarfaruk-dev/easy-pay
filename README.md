# 💳 EasyPay - Modern Payment Landing Page

> A sleek, responsive, and highly animated landing page for a cutting-edge payment platform built with Next.js and GSAP.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Key Packages](#key-packages)
- [Components](#components)
- [Animations](#animations)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

EasyPay is a modern, professional landing page designed for a next-generation payment platform. The project showcases smooth animations, responsive design, and a premium user experience using the latest web technologies.

### Key Highlights

- ✨ **Smooth Animations**: Professional GSAP animations throughout
- 📱 **Fully Responsive**: Mobile-first design approach
- 🎨 **Modern UI**: Clean and intuitive interface
- ⚡ **Performance Optimized**: Fast loading and smooth interactions
- 🔒 **Secure by Design**: Emphasis on security and trust
- 🎭 **Interactive Elements**: Engaging user interactions

## 🚀 Features

- **Hero Section**: Eye-catching hero with animated floating cards
- **Features Showcase**: Highlighted platform capabilities
- **Brand Partners**: Featured brand logo carousel
- **How It Works**: Step-by-step user journey
- **Security Section**: Trust-building security features
- **Pricing Plans**: Transparent pricing display
- **Testimonials**: User reviews and social proof
- **Call to Action**: Conversion-optimized CTAs
- **Footer**: Comprehensive site navigation and links

## 🛠 Tech Stack

### Core Technologies

- **Framework**: [Next.js 16.0.0](https://nextjs.org/) - React framework for production
- **UI Library**: [React 19.2.0](https://react.dev/) - JavaScript library for building user interfaces
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [GSAP 3.13.0](https://greensock.com/gsap/) - Professional animation library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit

### Additional Libraries

- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) - Touch-friendly carousel
- **Marquee**: [React Fast Marquee](https://www.react-fast-marquee.com/) - Smooth scrolling marquee
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority` - Utility functions

## 📁 Project Structure

```
easy-pay/
├── public/                 # Static assets
│   └── [svg files]
├── src/
│   ├── app/
│   │   ├── assets/        # Images and icons
│   │   │   ├── Avatar-1.png
│   │   │   ├── Avatar-2.png
│   │   │   ├── brand-logo/
│   │   │   ├── icons/
│   │   │   └── [other assets]
│   │   ├── favicon.ico
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Root layout
│   │   └── page.js        # Home page
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   │   └── button.jsx
│   │   ├── CallToAction.jsx
│   │   ├── FeaturedBrand.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Security.jsx
│   │   └── Testimonials.jsx
│   └── lib/
│       └── utils.js       # Utility functions
├── components.json         # Shadcn configuration
├── eslint.config.mjs      # ESLint configuration
├── jsconfig.json          # JavaScript configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies
├── postcss.config.mjs     # PostCSS configuration
└── README.md             # This file
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/omarfaruk-dev/easy-pay.git
   cd easy-pay
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Development Server

```bash
npm run dev
```

Starts the development server on `http://localhost:3000` with hot-reloading enabled.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm run start
```

Runs the production server (requires running `npm run build` first).

### Lint Code

```bash
npm run lint
```

Runs ESLint to check code quality.

## 📦 Key Packages

### Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.0.0 | React framework |
| `react` | 19.2.0 | UI library |
| `react-dom` | 19.2.0 | React DOM renderer |
| `gsap` | 3.13.0 | Animation library |
| `lucide-react` | 0.548.0 | Icon components |
| `embla-carousel-react` | 8.6.0 | Carousel component |
| `react-fast-marquee` | 1.6.5 | Marquee scrolling |
| `@radix-ui/react-slot` | 1.2.3 | UI primitives |
| `tailwind-merge` | 3.3.1 | Tailwind utility merger |
| `class-variance-authority` | 0.7.1 | Component variant management |
| `clsx` | 2.1.1 | Conditional class names |

### DevDependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | 4.x | CSS framework |
| `@tailwindcss/postcss` | 4.x | Tailwind PostCSS plugin |
| `eslint` | 9.x | Linting tool |
| `eslint-config-next` | 16.0.0 | Next.js ESLint config |
| `tw-animate-css` | 1.4.0 | Animation utilities |

## 🧩 Components

### Main Page Components

- **Hero** - Landing hero section with animated elements
- **Features** - Platform feature showcase
- **FeaturedBrand** - Brand partner carousel
- **HowItWorks** - Step-by-step user guide
- **Security** - Security features and trust builders
- **Pricing** - Transparent pricing plans
- **Testimonials** - Customer reviews and testimonials
- **CallToAction** - Conversion-focused call-to-action
- **Footer** - Site navigation and links

### UI Components

- **Button** - Customizable button component with variants
- **Logo** - Brand logo component
- **Navbar** - Navigation bar with scroll effects
- **SectionHeader** - Reusable section header component

## 🎬 Animations

### GSAP Implementation

The project uses **GSAP (GreenSock Animation Platform)** for smooth, professional animations:

#### Hero Section
- Fade-in and slide-up animations
- Sequential element reveals
- Floating card animations

#### Features Section
- Scroll-triggered animations
- Staggered card animations
- Smooth transitions

#### Scroll Animations
- **ScrollTrigger** plugin for scroll-based animations
- Fade-in on scroll
- Stagger effects for lists
- Scale and rotation animations
- Timeline coordination

### Animation Techniques

- **Initial State Setup**: Elements start hidden with `gsap.set()`
- **Timeline Coordination**: Sequential animations with overlaps
- **Stagger Effects**: Delayed animations for lists
- **Scroll Triggers**: Animations trigger on viewport entry
- **Smooth Easing**: Power curves for natural motion

## 📝 Scripts

```json
{
  "dev": "next dev",      // Start development server
  "build": "next build",   // Build for production
  "start": "next start",   // Start production server
  "lint": "eslint"        // Run ESLint
}
```

## 🎨 Design Features

- **Color Scheme**: Professional gradient palette
- **Typography**: Modern, readable fonts
- **Spacing**: Consistent spacing system
- **Responsive Breakpoints**: Mobile-first approach
- **Interactive States**: Hover and active states
- **Loading States**: Smooth loading transitions

## 🔧 Configuration Files

- **`next.config.mjs`** - Next.js configuration
- **`postcss.config.mjs`** - PostCSS configuration
- **`jsconfig.json`** - JavaScript path configuration
- **`eslint.config.mjs`** - ESLint rules
- **`components.json`** - Shadcn UI configuration
- **`tailwind.config.js`** - Tailwind CSS configuration

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any Node.js hosting provider

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting for faster loads
- Lazy loading for below-the-fold content
- Smooth animations with GSAP
- Mobile-optimized assets

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Credits

Built with ❤️ using:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Made with ❤️ for the future of payments**