# 🚀 React Admin Dashboard Portfolio

A modern **React + TypeScript** admin dashboard project built to demonstrate real-world frontend architecture, API integration, and scalable state management patterns.

---

## ✨ Live Demo

https://projects-manager-qujb.vercel.app/

---

## 🧠 Features

- ⚛️ React + TypeScript architecture
- 🔄 CRUD operations with API integration
- 🌐 React Query for server state management
- 🧠 Zustand for global state (auth)
- 📝 React Hook Form + Zod validation
- 🌍 Multi-language support (EN / AR)
- 🎨 TailwindCSS modern UI
- 🧩 Reusable component architecture
- 📡 Service / Provider / Types separation pattern
- 📊 Mock backend using JSON Server
- 🧭 React Router navigation with protected layout
- 📱 Responsive design

---

## 🏗️ Tech Stack

- React 18
- TypeScript
- React Query (@tanstack/react-query)
- Zustand
- React Hook Form
- Zod
- React Router DOM
- Tailwind CSS
- Axios
- JSON Server (mock API)

---

## 📁 Project Structure

src/
│
├── lib/
│ ├── api/
│ │ └── ProjectServices/
│ │ ├── project.service.ts # API calls (MockAPI)
│ │ ├── project.provider.ts # React Query hooks
│ │ └── project.types.ts # Types & interfaces
│ │
│ ├── clients/ # Axios instance
│ └── methods/ # HTTP helper methods
│
├── components/ # Reusable UI components
├── pages/ # Application pages
├── hooks/ # Custom hooks
├── context/ # Language context (i18n)
├── store/ # Zustand store
├── routes/ # App routing
├── locales/ # en/ar translations
├── utils/ # Helpers
├── styles/ # Global styles
└── main.tsx
