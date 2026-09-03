# BIS Intelligent Assistant 🇮🇳

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![SIH 2026](https://img.shields.io/badge/SIH-2026_Hackathon-orange?style=flat)](#)

> **AI-Powered Guide to Bureau of Indian Standards (BIS) Specifications, ISI Mark Certification, and Quality Compliance.**  
> Developed for **Smart India Hackathon (SIH 2026)**.

---

## 🌟 Key Features

- **🔍 Natural Language Standards Discovery**: Describe any consumer product, industrial machinery, or raw material in plain language to instantly identify applicable Indian Standards (IS codes).
- **📋 Scheme-I vs Scheme-II Clarity**: Distinct regulatory paths for mandatory ISI Mark certification vs. Compulsory Registration Scheme (CRS) for electronics and IT goods.
- **🧪 Testing & Laboratory Checklists**: Specific laboratory tests required (high voltage surge, flammability, hydrostatic pressure, drop impact) and step-by-step documentation roadmaps.
- **🌐 Multilingual Intelligence**: Full native language support across English, Hindi (हिन्दी), and Marathi (मराठी).
- **📌 Interactive Compliance Action Plans**: Real-time checklists with persistent local session storage.
- **📎 Official Source Backing**: Every response includes direct links to official Bureau of Indian Standards portals ([manakonline.in](https://www.manakonline.in) and [bis.gov.in](https://www.bis.gov.in)).

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/chirag1107/BIS-Intelligent-Assistant.git

# Navigate into project directory
cd BIS-Intelligent-Assistant

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **UI Components**: Radix UI Primitives, Lucide Icons
- **State & Storage**: Client-side localStorage persistence

---

## 📂 Project Structure

```
├── app/
│   ├── globals.css          # Global Tailwind design tokens
│   ├── layout.tsx           # App root layout with SEO metadata
│   └── page.tsx             # Interactive Home & Chat view controller
├── components/
│   ├── chat/                # AI Chat workspace & sidebar components
│   ├── landing/             # Modern landing page & search hero
│   └── ui/                  # Reusable UI primitives
├── lib/
│   ├── bis-data.ts          # Comprehensive Indian Standards index
│   ├── bis-engine.ts        # Standards resolution & response generator
│   └── use-chat-store.ts    # Chat history and state management
├── types/
│   └── index.ts             # TypeScript interface definitions
├── index.html               # Standalone vanilla web app
├── index.css                # Standalone vanilla CSS
└── index.js                 # Standalone vanilla JS engine
```

---

## ⚖️ Disclaimer

*This application is an AI-powered advisory guidance tool developed for Smart India Hackathon (SIH 2026). Always refer to the official [Manakonline Portal](https://www.manakonline.in) for statutory filings and legal conformity.*
