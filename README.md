# Arco-divercidade

**Strategic Inclusion Program Proposal Web Application**

A comprehensive digital proposal showcasing DiverCidade Hub's strategic program for implementing disability inclusion (PcD - Pessoas com Deficiência) at Arco Educação.

🌐 **Live Demo**: [pratofeitoo.github.io/Arco-divercidade](https://pratofeitoo.github.io/Arco-divercidade/)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About the Project

Arco-divercidade is an interactive web proposal that presents a comprehensive **12-month strategic inclusion program** for people with disabilities at Arco Educação. The program focuses on:

- **Cultural Preparation**: Building organizational readiness before expanding hiring
- **Leadership Development**: Training leaders in inclusive management practices
- **Scalable Content**: Creating accessible educational content via LMS
- **Continuous Support**: Ongoing consulting and governance through an inclusion committee
- **Sustainable Results**: Measurable outcomes for retention and engagement

The web application transforms a traditional proposal document into an engaging, accessible, and professional presentation that can be shared with stakeholders.

---

## ✨ Key Features

### 📊 **Interactive Proposal Sections**
- Executive Summary with clear value proposition
- Context and organizational challenges
- SMART objectives with measurable metrics
- Detailed scope and exclusions
- Six comprehensive program modules
- 12-month implementation timeline
- Flexible investment models
- Risk assessment and mitigation strategies

### 🎨 **Modern Design**
- Fully responsive layout (mobile, tablet, desktop)
- Dark/light theme support via `next-themes`
- Accessible UI components from `shadcn/ui`
- Professional color scheme with Tailwind CSS
- Smooth scrolling and interactive elements

### ♿ **Accessibility**
- WCAG compliant components
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

### 📱 **User Experience**
- Interactive table of contents with smooth scrolling
- Module cards with visual indicators
- Timeline visualization
- Pricing cards with clear comparison
- Team credentials showcase
- Call-to-action buttons

---

## 🛠️ Technology Stack

### **Core Framework**
- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety
- **Vite 5.4** - Build tool and dev server

### **Styling & UI**
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **next-themes** - Theme management

### **State Management & Routing**
- **React Router DOM 6.30** - Client-side routing
- **TanStack Query 5.83** - Server state management

### **Forms & Validation**
- **React Hook Form 7.61** - Form handling
- **Zod 3.25** - Schema validation

### **Development Tools**
- **ESLint 9.32** - Linting
- **TypeScript ESLint 8.38** - TypeScript linting
- **Vitest 3.2** - Unit testing
- **Testing Library** - Component testing
- **Playwright** - E2E testing

### **Deployment**
- **GitHub Pages** - Static site hosting
- **gh-pages** - Deployment automation

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js

We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions:

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js LTS
nvm install --lts
nvm use --lts
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/pratofeitoo/Arco-divercidade.git
cd Arco-divercidade
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will open at `http://localhost:5173`

---

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Run linter
npm run lint

# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Development Workflow

1. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test locally:
   ```bash
   npm run dev
   npm run lint
   npm run test
   ```

3. **Build and preview** before committing:
   ```bash
   npm run build
   npm run preview
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/your-feature-name
   ```

### Code Quality

- **Linting**: ESLint is configured with TypeScript support
- **Type Checking**: TypeScript strict mode is enabled
- **Testing**: Vitest for unit tests, Playwright for E2E
- **Formatting**: Follow the existing code style

---

## 🚢 Deployment

The project is automatically deployed to GitHub Pages. Deployments are triggered:

### Manual Deployment

```bash
# Deploy to GitHub Pages
npm run build
npx gh-pages -d dist
```

### Automated Deployment

GitHub Actions can be configured for automatic deployments on push to main branch.

**Deployment URL**: [https://pratofeitoo.github.io/Arco-divercidade/](https://pratofeitoo.github.io/Arco-divercidade/)

### Configuration

The app is configured for GitHub Pages deployment with:
- Base path: `/Arco-divercidade/`
- Build output: `dist/`
- Router: Hash-based routing for GitHub Pages compatibility

For detailed deployment instructions, see:
- [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md)
- [DEPLOYMENT_ARCHITECTURE.md](./DEPLOYMENT_ARCHITECTURE.md)
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)

---

## 📁 Project Structure

```
Arco-divercidade/
├── src/
│   ├── components/          # React components
│   │   ├── proposal/        # Proposal-specific components
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main proposal page
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── assets/             # Static assets (images, fonts)
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Public static assets
├── proposal_files/         # Original proposal markdown files
├── .github/                # GitHub configuration
│   ├── instructions/       # Copilot instructions
│   └── workflows/          # GitHub Actions (if configured)
├── dist/                   # Production build output
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── vitest.config.ts        # Vitest configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

### Key Directories

- **`src/components/proposal/`**: Components specific to the proposal presentation
  - `ProposalHero.tsx` - Hero section with title and description
  - `ProposalSection.tsx` - Reusable section wrapper
  - `ObjectivesTable.tsx` - SMART objectives table
  - `ModuleCard.tsx` - Program module cards
  - `TimelineItem.tsx` - Timeline visualization
  - `PricingCard.tsx` - Investment pricing cards
  - `TeamSection.tsx` - Team credentials
  - `TableOfContents.tsx` - Navigation menu
  - `Footer.tsx` - Footer component

- **`src/components/ui/`**: Reusable UI components from shadcn/ui
  - Button, Card, Dialog, Toast, Tooltip, etc.

- **`proposal_files/`**: Original proposal documents in Markdown format
  - `DRAFT_PROPOSTA_ARCOR_EDUCACAO.md` - Main proposal document
  - `RACI_ARCOR.md` - RACI matrix
  - `risk_log_ARCOR.md` - Risk log

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'feat: add amazing feature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test updates
- `chore:` - Build/config changes

### Code Style

- Use TypeScript for all new code
- Follow existing code patterns and component structure
- Ensure all tests pass before submitting PR
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is private and proprietary to DiverCidade Hub and Arco Educação.

**© 2026 DiverCidade Hub**. All rights reserved.

Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without explicit written permission from the copyright holders.

---

## 📞 Contact & Support

For questions, support, or collaboration inquiries:

- **Project Repository**: [github.com/pratofeitoo/Arco-divercidade](https://github.com/pratofeitoo/Arco-divercidade)
- **Live Application**: [pratofeitoo.github.io/Arco-divercidade](https://pratofeitoo.github.io/Arco-divercidade/)

---

## 📚 Additional Resources

- [Quick Start Guide](./QUICK_START.md) - Fast setup instructions
- [Deployment Guide](./GITHUB_PAGES_DEPLOYMENT.md) - GitHub Pages deployment
- [Deployment Architecture](./DEPLOYMENT_ARCHITECTURE.md) - Technical architecture
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md) - Pre-deployment checks
- [Proposal Draft](./proposal_files/DRAFT_PROPOSTA_ARCOR_EDUCACAO.md) - Original proposal document

---

## 🎓 About the Program

This web application presents the **Strategic Inclusion Program for People with Disabilities (PcD)** designed by DiverCidade Hub for Arco Educação. The program is structured in 6 modules over 12 months:

1. **Strategic Diagnostic** - Organizational assessment and roadmap
2. **Institutional Awareness** - Company-wide sensitization sessions
3. **Leadership Training** - Inclusive management development
4. **Educational Content (LMS)** - Scalable accessible content
5. **Continuous Consulting** - Ongoing strategic support
6. **Approval Committee** - Governance for inclusive content

The goal is to prepare the organization to attract, develop, and retain PcD talent in a sustainable and impactful way, aligned with Arco's culture of high performance, innovation, and educational excellence.

---

**Built with ❤️ for inclusive education**
