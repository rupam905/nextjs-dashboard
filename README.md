# Next-Gen Learning Dashboard

A high-fidelity student learning dashboard prototype built with Next.js, Supabase, Framer Motion, and Tailwind CSS.

## Features

- **Dark Mode Design**: Sophisticated dark theme with neutral tones and subtle gradients
- **Bento Grid Layout**: Responsive grid-based dashboard with sidebar navigation
- **Real-time Data**: Server-rendered course data from Supabase PostgreSQL
- **Hardware-Accelerated Animations**: Framer Motion with spring physics and stagger effects
- **Responsive Design**: Adapts seamlessly from desktop to mobile
- **Zero Layout Shifts**: All animations use transform and opacity exclusively
- **Semantic HTML**: Proper semantic elements for accessibility

## Tech Stack

- **Framework**: Next.js 16 (App Router, Server Components)
- **Database**: Supabase PostgreSQL
- **Styling**: Tailwind CSS (dark mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## Getting Started

### 1. Set Up Supabase

#### Create a Supabase Project:
1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Copy your project URL and anon key from Settings > API

#### Create Database Tables:

Run the following SQL in the Supabase Query Editor:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  streak INT DEFAULT 0
);

CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  progress INT DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (name, streak) VALUES ('Alex Chen', 7);

INSERT INTO courses (title, progress, icon_name) VALUES
('Advanced React Patterns', 75, 'Code2'),
('Web Performance Optimization', 45, 'Zap'),
('TypeScript Mastery', 82, 'BookOpen'),
('System Design Fundamentals', 60, 'Database');
```

### 2. Configure Environment

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### 3. Run Development Server

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

- **Server Components**: `app/page.tsx` fetches Supabase data on the server and uses `connection()` so the dashboard renders on demand instead of baking data at build time.
- **Client Components**: Framer Motion tiles, animated progress, and navigation state live in isolated client components.
- **Graceful Data Handling**: Supabase failures return typed fallback data with an in-app notice, keeping the dashboard usable while surfacing configuration problems.
- **Suspense**: Loading states use grid-matched skeleton tiles with subtle pulse animation.
- **Animations**: Framer Motion powers staggered entry, spring hover states, active-nav layout highlights, and transform-based progress animation.
- **Responsive**: Desktop full sidebar -> tablet icon rail -> mobile bottom navigation.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production
```

## Deployment

Deploy to Vercel - environment variables are configured in project settings.
