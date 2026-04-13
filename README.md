# 🖥️ TERMINAL_OS // Portfolio MR

> **Mauricio Ribotta** — Software Technician & Product Owner Hybrid.

Welcome to my personal portfolio. Designed to look and feel like a brutalist retro-terminal or specialized compiler interface. Built completely from the ground up as a high-performance **Single Page Application (SPA)**.

![Status: Stable](https://img.shields.io/badge/System_Status-Stable-00FF41?style=for-the-badge&logoColor=black)
![React 19](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind V4](https://img.shields.io/badge/Tailwind_CSS-V4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## ⚡ Tech Stack & Architecture

- **Frontend Core**: React 19 + TypeScript + Vite.
- **Routing**: `react-router-dom` v7 handling an internally fully routed component structure (`/about`, `/projects`, `/experience`, `/skills`, `/contact`).
- **Styling**: Tailwind CSS V4 for a hyper-specialized dark mode theme mimicking a code editor terminal environment. Strict usage of `hsl/hex` color palettes without rounded borders (`border-radius: 0px` globally).
- **Design Metaphor**: Brutalism combined with terminal-grade functional aesthetics (`#00FF41` classic hacker green, `#FFA504` warning amber).

## 📂 Project Structure

```bash
ROOT/
├── index.html            # Main Entry Point with Global Metatags & Layout Overlays
├── public/               
│   └── CV_Mauricio_Ribotta.pdf # Publicly hosted CV File
├── src/
│   ├── components/       # Reusable UI Blocks
│   │   └── layout/       # App Shell: TopNavBar, Footer, AppLayout
│   ├── pages/            # View Components
│   │   ├── Hero.tsx      # Landing Section
│   │   ├── About.tsx     # Profile & Origin Story
│   │   ├── Projects.tsx  # Interactive Showcase
│   │   ├── Experience.tsx# Timeline / Logs
│   │   ├── Skills.tsx    # Hardware/Software Metric Bars
│   │   └── Contact.tsx   # Secured Terminal Form
│   ├── App.tsx           # Inner Routing Maps
│   ├── main.tsx          # React Injection Root
│   └── index.css         # Tailwind directives and visual tokens
```

## 🚀 Execution & Setup

To boot this terminal environment locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MauriicioRibotta/portfolioMR.git 
   cd portfolioMR
   ```

2. **Install node modules**:
   ```bash
   npm install
   ```

3. **Ignite the server**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

## 🎨 UI/UX Features

- **Scanlines**: Pure CSS overlays to simulate old CRT screens. 
- **Monospaced Fonts**: Heavy reliance on `JetBrains Mono` and `Space Grotesk` to execute the code-compiler presentation.
- **Blinking Cursors**: CSS keyframe animations for standard terminal indicators.
- **No-Radius Policy**: Sharp corners everywhere inside the app for maximum structural brutalism.
- **Responsive**: Adapts gracefully up seamlessly from a mobile CLI feel up to wide-monitor dual-split panels.

---
> *(C) 2024 TERMINAL_OS [BUILD_429]*
> IP: 127.0.0.1 // ADMIN_OPERATOR: Mauricio Ribotta
