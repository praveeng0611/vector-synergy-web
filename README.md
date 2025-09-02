# Vector Synergy - Engineering Innovation. Delivered.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Sentry](https://img.shields.io/badge/Sentry-Monitoring-362D59?style=flat-square&logo=sentry)](https://sentry.io/)

A comprehensive, production-ready website for Vector Synergy - a B2B engineering company specializing in product design, simulation, prototyping, and manufacturing solutions.

## 🎯 **Project Overview**

Vector Synergy is a professional corporate website showcasing engineering excellence through:

- **🏗️ Product Design & CAD** - Comprehensive design solutions and 3D modeling
- **🔬 E-R&D Services** - Engineering research and development
- **⚡ Prototyping** - Rapid prototyping and iterative development
- **📊 CAE Simulation** - Advanced computational analysis and validation
- **🧪 Testing & Validation** - Quality assurance and compliance testing
- **🔧 Process Design** - Manufacturing process optimization
- **💰 Strategic Sourcing** - Cost-effective procurement strategies
- **🏭 Contract Manufacturing** - End-to-end production services

## ✨ **Features**

### **🎨 Design & User Experience**
- ✅ **Modern, Clean Design** - Professional engineering aesthetic
- ✅ **Light Theme** - Optimized for business environments
- ✅ **Fully Responsive** - Mobile-first design approach
- ✅ **Accessibility Compliant** - WCAG AA standards
- ✅ **Fast Loading** - Optimized performance and Core Web Vitals

### **🔧 Technical Excellence**
- ✅ **Next.js 14** - App Router with server-side rendering
- ✅ **TypeScript** - Full type safety and development experience
- ✅ **Tailwind CSS v4** - Modern styling with OKLCH color system
- ✅ **Component Library** - Reusable Shadcn UI components
- ✅ **Error Monitoring** - Comprehensive Sentry integration
- ✅ **SEO Optimized** - Metadata, sitemap, and search engine ready

### **📄 Pages & Content**
- ✅ **Home Page** - Hero, services, projects, testimonials
- ✅ **About Page** - Company story, mission, values, timeline
- ✅ **Services Page** - Detailed service descriptions and process
- ✅ **Projects Page** - Case studies and portfolio showcase
- ✅ **Contact Page** - Contact form, office info, and location
- ✅ **Error Pages** - Custom 404, error boundaries, and loading states

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager
- Git for version control

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/vector-synergy.git
   cd vector-synergy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables (see [Configuration](#configuration))

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ **Technology Stack**

### **Core Technologies**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React 18](https://react.dev/)** - Modern React with hooks and concurrent features

### **UI & Components**
- **[Shadcn UI](https://ui.shadcn.com/)** - Accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[Framer Motion](https://motion.dev/)** - Production-ready motion library

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting with Airbnb configuration
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Class Variance Authority](https://cva.style/)** - Component variant management
- **[clsx](https://github.com/lukeed/clsx)** - Dynamic className utility

### **Monitoring & Analytics**
- **[Sentry](https://sentry.io/)** - Error monitoring and performance tracking
- **Custom Analytics** - Performance monitoring and user insights

### **Design System**
- **Fonts:** Poppins (headings) & Inter (body text)
- **Colors:** OKLCH-based color system for modern browsers
- **Spacing:** Consistent spacing scale with Tailwind utilities
- **Components:** Atomic design pattern (atoms, molecules, organisms)

## 📁 **Project Structure**

```
vector-synergy/
├── 📄 README.md                    # Project documentation
├── 📄 SENTRY_SETUP.md             # Sentry configuration guide
├── 📁 public/                      # Static assets
│   ├── favicon.svg                 # Website favicon
│   ├── logo-full.svg              # Full company logo
│   ├── logo-icon.svg              # Icon version of logo
│   ├── 📁 icons/                  # Additional icons
│   └── 📁 images/                 # Image assets
├── 📁 src/                        # Source code
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── globals.css            # Global styles & design system
│   │   ├── layout.tsx             # Root layout component
│   │   ├── page.tsx               # Home page
│   │   ├── loading.tsx            # Loading UI
│   │   ├── not-found.tsx          # 404 page
│   │   ├── error.tsx              # Error boundary
│   │   ├── global-error.tsx       # Global error handler
│   │   ├── sitemap.ts             # SEO sitemap
│   │   ├── robots.ts              # Search engine robots
│   │   ├── 📁 about/              # About page
│   │   ├── 📁 services/           # Services page
│   │   ├── 📁 projects/           # Projects page
│   │   └── 📁 contact/            # Contact page
│   ├── 📁 components/             # React components
│   │   ├── 📁 atoms/              # Basic components
│   │   ├── 📁 molecules/          # Simple compound components
│   │   ├── 📁 organisms/          # Complex UI sections
│   │   ├── 📁 templates/          # Page-level templates
│   │   ├── 📁 layouts/            # Layout components
│   │   └── 📁 ui/                 # Shadcn UI components
│   ├── 📁 lib/                    # Utility functions
│   │   ├── utils.ts               # General utilities
│   │   └── sentry.ts              # Sentry utility functions
│   ├── 📁 hooks/                  # Custom React hooks
│   ├── 📁 types/                  # TypeScript type definitions
│   └── instrumentation.ts         # Next.js instrumentation
├── 📄 sentry.client.config.ts     # Sentry client configuration
├── 📄 sentry.server.config.ts     # Sentry server configuration
├── 📄 sentry.edge.config.ts       # Sentry edge configuration
├── 📄 next.config.mjs             # Next.js configuration
├── 📄 tailwind.config.ts          # Tailwind CSS configuration
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 components.json             # Shadcn UI configuration
├── 📄 eslint.config.mjs           # ESLint configuration
├── 📄 .prettierrc                 # Prettier configuration
└── 📄 package.json                # Dependencies and scripts
```

## ⚙️ **Configuration**

### **Environment Variables**

Create a `.env.local` file with the following variables:

```bash
# =============================================================================
# SENTRY CONFIGURATION (Production)
# =============================================================================
SENTRY_DSN=https://your-dsn@o0.ingest.sentry.io/0000000
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@o0.ingest.sentry.io/0000000
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=vector-synergy
SENTRY_AUTH_TOKEN=your-auth-token
SENTRY_ENVIRONMENT=production
NEXT_PUBLIC_SENTRY_ENVIRONMENT=production

# =============================================================================
# SITE CONFIGURATION
# =============================================================================
NEXT_PUBLIC_SITE_URL=https://vector-synergy.com

# =============================================================================
# DEVELOPMENT (Optional)
# =============================================================================
ENABLE_SENTRY=false  # Enable Sentry in development
```

### **Key Configuration Files**

- **`next.config.mjs`** - Next.js configuration with Sentry integration
- **`tailwind.config.ts`** - Tailwind CSS configuration with custom theme
- **`components.json`** - Shadcn UI component configuration
- **`sentry.*.config.ts`** - Sentry monitoring configuration
- **`tsconfig.json`** - TypeScript compiler configuration

## 🏗️ **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Code Quality
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
```

### **Adding New Components**

1. **Use Shadcn UI for base components:**
   ```bash
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add card
   ```

2. **Follow Atomic Design Pattern:**
   - **Atoms:** `src/components/atoms/` - Basic building blocks
   - **Molecules:** `src/components/molecules/` - Simple combinations
   - **Organisms:** `src/components/organisms/` - Complex UI sections

3. **Use TypeScript interfaces:**
   ```typescript
   interface ComponentProps {
     title: string;
     description?: string;
     className?: string;
   }
   ```

### **Code Style Guidelines**

- **TypeScript:** Use explicit types, avoid `any`
- **Components:** Functional components with hooks
- **Styling:** Tailwind CSS utilities, avoid custom CSS
- **Naming:** PascalCase for components, camelCase for functions
- **Imports:** Absolute imports with `@/` prefix

## 🚀 **Deployment**

### **Vercel Deployment (Recommended)**

1. **Connect to Vercel:**
   ```bash
   npx vercel
   ```

2. **Set Environment Variables in Vercel Dashboard:**
   - Add all production environment variables
   - Ensure Sentry configuration is set up

3. **Deploy:**
   ```bash
   npx vercel --prod
   ```

### **Docker Deployment**

```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM base AS build
COPY . .
RUN npm run build

FROM base AS runtime
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

### **Static Export**

For static hosting (CDN, S3, etc.):

```bash
npm run build
npm run export
```

## 📊 **Performance & Monitoring**

### **Core Web Vitals Targets**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **Lighthouse Score:** > 90 for all categories

### **Sentry Monitoring**
- **Error Tracking:** Automatic error capture and reporting
- **Performance Monitoring:** Page load times and Core Web Vitals
- **Session Replay:** Visual reproduction of user sessions
- **Custom Events:** Business metrics and user interactions

See [SENTRY_SETUP.md](./SENTRY_SETUP.md) for detailed configuration.

## 🔒 **Security**

### **Security Features**
- **Content Security Policy (CSP)** headers
- **XSS Protection** with secure headers
- **Input Validation** on all forms
- **Error Boundary** prevents information leakage
- **Source Map Security** (uploaded to Sentry, hidden in production)

### **Data Privacy**
- **No Analytics Tracking** without consent
- **PII Scrubbing** in error reports
- **GDPR Compliant** data handling

## 🤝 **Contributing**

### **Development Setup**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### **Code Standards**

- Follow existing code style and patterns
- Add TypeScript types for all new code
- Include tests for new functionality
- Update documentation as needed
- Ensure all checks pass before submitting PR

## 📞 **Support & Contact**

### **Vector Synergy**
- **Website:** [https://vector-synergy.com](https://vector-synergy.com)
- **Email:** info@vector-synergy.com
- **Phone:** +91 (9765210570) VECTOR
- **LinkedIn:** [/company/vector-synergy](https://linkedin.com/company/vector-synergy)

### **Technical Support**
- **Development Team:** dev@vector-synergy.com
- **Emergency Support:** emergency@vector-synergy.com
- **Documentation:** [Vector Synergy Docs](https://docs.vector-synergy.com)

## 📄 **License**

This project is proprietary and confidential. All rights reserved by Vector Synergy.

---

**Vector Synergy - Engineering Innovation. Delivered.** 🚀

