# Vision Science Academy - Coaching Website

A modern, full-stack web application for managing a competitive exam coaching institute. Built with Next.js 15, this platform provides comprehensive batch management, student registration, faculty profiles, and an admin dashboard for JEE, NEET, and Pre-foundation programs.

## 🎯 Features

- **Batch Management**: Browse and manage coaching batches for JEE (11th, 12th, Dropper), NEET, and Pre-foundation programs
- **Faculty Profiles**: Showcase faculty members with their expertise and experience
- **Toppers Showcase**: Display success stories and achievements of top-performing students
- **Admin Dashboard**: Comprehensive admin panel for managing batches, faculty, and students
- **Multiple Modes**: Support for online, offline, and hybrid batch delivery modes
- **Responsive Design**: Modern, mobile-first UI built with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) with React 19
- **Language**: TypeScript
- **Database**: PostgreSQL with [Prisma](https://www.prisma.io/) ORM
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, Lucide React Icons
- **State Management**: Zustand
- **Image Storage**: Cloudinary
- **Deployment**: Optimized for Vercel

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database
- Cloudinary account (for image uploads)
- Environment variables configured (see `.env.example`)

## 🚀 Getting Started

1. **Clone the repository**
   git clone <repository-url>
   cd coaching-website
   2. **Install dependencies**sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   3. **Set up environment variables**
   Create a `.env` file in the root directory:
   DATABASE_URL="postgresql://user:password@localhost:5432/coaching_db"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   4. **Set up the database**ash
   npx prisma generate
   npx prisma migrate dev
   npx prisma db seed
   5. **Run the development server**
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
