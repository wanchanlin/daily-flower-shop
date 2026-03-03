# 🌸 Daily Flower Show

> One Flower. Every Day.

Daily Flower Show is a modern web experience built with Next.js that highlights a single flower each day.  
The project blends botanical education with editorial storytelling and clean, responsive UI design.

---

## ✨ Features

- 🌼 Automatic daily flower rotation
- 📖 Dynamic flower detail pages (App Router)
- 📅 Archive view of past flowers
- 🔍 Search and filtering system
- ❤️ Save favorite flowers (localStorage)
- ⏳ Countdown to next flower
- 🌗 Dark / Light mode
- 📱 Fully responsive layout
- 🔎 SEO-optimized metadata per flower

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** Dynamic routes (`/flower/[slug]`)
- **Deployment:** Vercel

---

## 📂 Project Structure

```bash
app/
  page.tsx                 # Today's flower
  archive/page.tsx         # Archive page
  flower/[slug]/page.tsx   # Dynamic flower page
components/
  HeroFlower.tsx
  FlowerCard.tsx
  CountdownTimer.tsx
lib/
  data.ts
```

---

## 🌿 How It Works

The featured flower automatically changes based on the current date:

```ts
const todayIndex = new Date().getDate() % flowers.length
```

This ensures a new flower appears daily without manual updates.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/daily-flower-show.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🎯 Project Goals

- Practice dynamic routing in Next.js
- Build reusable UI components
- Implement date-based content logic
- Apply SEO best practices
- Create a calm, editorial-style user experience

---

## 🌼 Future Improvements

- Admin dashboard for flower uploads
- CMS integration (Sanity / Strapi)
- Newsletter integration
- AI flower identification feature
- Progressive Web App (PWA)

---

## 💼 Portfolio Context

This project showcases:

- Frontend architecture with Next.js App Router
- Component-driven development
- UI/UX storytelling
- Clean responsive design
- Performance & SEO considerations

---

Designed & developed by Joyce Lin 🌷