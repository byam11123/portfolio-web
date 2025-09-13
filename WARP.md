# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is **The Priyanshu Portfolio**, a modern personal portfolio website built with Remix + TypeScript, featuring stunning animations, dark/light theme toggle, and a responsive design. The site showcases projects, skills, and professional experience with GSAP animations and a mobile-first approach.

**Live Site**: https://thepriyanshu.vercel.app

## Development Commands

### Core Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Lint code
npm run lint
```

### Development Notes
- Development server runs on `http://localhost:5173` (Vite)
- The project uses Remix's file-based routing system
- All TypeScript files use `.tsx` extension for React components
- Environment requires Node.js >= 20.0.0

## Architecture Overview

### Project Structure
```
app/
├── components/          # Reusable React components
│   ├── ui/             # UI components (SparklesText, TextRevealByWord, etc.)
│   └── Loader/         # Loading animations
├── context/            # React context providers
├── routes/             # File-based routing (Remix convention)
├── models/             # Data models and server-side functions
├── utils/              # Utility functions (email, toast)
├── assets/             # Static images and assets
└── lib/                # Library utilities
```

### Key Technologies
- **Remix**: Full-stack React framework with server-side rendering
- **TypeScript**: Type-safe development with TSX components
- **GSAP**: Advanced animations library with scroll triggers
- **Tailwind CSS**: Utility-first CSS framework with dark mode support
- **Framer Motion**: Additional animation library
- **React Hot Toast**: Toast notifications
- **Nodemailer**: Email functionality for contact form

### Animation System
The project heavily uses GSAP for animations:
- Intro slider animation on first visit (stored in sessionStorage)
- Scroll-triggered animations throughout the site
- Component-level animations using `useGSAP` hook
- Timeline-based animations for complex sequences

### Theme System
- Dark/light theme toggle functionality
- Theme state stored in localStorage
- CSS classes applied to `document.documentElement`
- Responsive navigation: FloatingDock (desktop) vs Navbar (mobile)

### Routes Structure
- `_index.tsx`: Home page with hero, skills, projects, timeline, contact
- `resume.tsx`: Resume/experience page
- `projects._index.tsx`: Projects listing page  
- `projects.$id.tsx`: Individual project detail pages

### Data Management
- Project data is statically defined in `models/project.server.ts`
- No external database - projects are hardcoded with detailed descriptions
- Contact form uses Remix actions for server-side email handling

### Mobile Detection
Uses `mobile-device-detect` library to conditionally render:
- FloatingDock for desktop navigation
- Traditional Navbar for mobile devices

### Path Alias
- `~/` maps to `./app/` directory (configured in tsconfig.json)
- Import components and utilities using this alias

## Development Guidelines

### Component Development
- Use TypeScript with proper interfaces for all props
- Implement responsive design with Tailwind CSS classes
- Follow the existing pattern of using GSAP for animations
- Maintain the dark/light theme compatibility

### Animation Patterns
- Use `useGSAP` hook for component-level animations
- Store animation state in sessionStorage for intro sequences
- Implement scroll-triggered animations where appropriate
- Follow timeline-based animation sequences for complex effects

### Form Handling
- Use Remix's `useFetcher` for form submissions
- Implement proper loading states during form submission
- Clear form fields on successful submission
- Show toast notifications for user feedback

### Asset Management
- Store images in `app/assets/` directory
- Import images directly in components or models
- Use proper alt text for accessibility

### Email Configuration
Contact form functionality requires environment variables:
- Set up email service credentials in environment
- Email templates are handled server-side via Remix actions

### Performance Considerations
- The project uses Vite for fast development builds
- Images are optimized and served from the assets directory
- GSAP animations are optimized to avoid layout thrashing
- Theme switching is handled efficiently with CSS classes
