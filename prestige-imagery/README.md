# Prestige Imagery — Next.js / TypeScript / Tailwind CSS

This is the **Prestige Imagery** photography website fully migrated from plain HTML/CSS/JS to a modern stack:

| Original       | New Stack                                |
| -------------- | ---------------------------------------- |
| HTML pages     | Next.js 14 App Router (TSX pages)        |
| Bootstrap CSS  | Tailwind CSS                             |
| Vanilla JS     | React hooks + TypeScript                 |
| Separate files | Shared components (Navbar, Footer, etc.) |

---

## Project Structure

```
prestige-imagery/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, global head)
│   ├── globals.css         ← All converted CSS styles
│   ├── page.tsx            ← Home (index.html)
│   ├── gallery/
│   │   └── page.tsx        ← Portfolio/Gallery (portfolio.html)
│   ├── about/
│   │   └── page.tsx        ← About (about.html)
│   ├── testimonials/
│   │   └── page.tsx        ← Testimonials (testimonial.html)
│   ├── contact/
│   │   └── page.tsx        ← Contact (contact.html)
│   └── book/
│       └── page.tsx        ← Book a Session (book.html)
│
├── components/
│   ├── Navbar.tsx          ← Shared navbar with mobile toggle
│   ├── Footer.tsx          ← Shared footer
│   ├── HeroCarousel.tsx    ← Auto-sliding hero carousel
│   ├── PortfolioFilter.tsx ← Client-side gallery filter
│   ├── WhatsAppButton.tsx  ← Floating WhatsApp button
│   └── AOSInit.tsx         ← AOS scroll animations initializer
│
├── public/
│   └── assets/
│       └── images/         ← PUT ALL YOUR IMAGES & VIDEOS HERE
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Add your assets

Copy your entire `assets/images/` folder into `public/assets/images/`:

```
public/
  assets/
    images/
      img-3.jpg
      img-5.jpg
      img-6.jpg
      family.jpg
      ceo.jpg
      funke.jpeg
      blessingg.jpeg
      jenni.jpg
      tope.jpeg
      ChatGPT_Image_Nov_12__2025__08_10_15_PM-removebg-preview.png
      SnapInsta.to_*.jpg   ← all portfolio images
      SnapInsta.to_*.mp4   ← all portfolio videos
```

### 3. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

---

## Page Routes

| Original File      | New Route       |
| ------------------ | --------------- |
| `index.html`       | `/`             |
| `portfolio.html`   | `/gallery`      |
| `about.html`       | `/about`        |
| `testimonial.html` | `/testimonials` |
| `contact.html`     | `/contact`      |
| `book.html`        | `/book`         |

---

## Features Preserved

- ✅ Fixed navbar with gold hover underline effect + mobile hamburger toggle
- ✅ Auto-playing hero carousel (4-second interval, fade transition)
- ✅ "Why Choose Us" section with icon cards
- ✅ CTA banner with background image
- ✅ Portfolio gallery with category filter (All / Wedding / Events / Brand Images / Photoshoot / Videography)
- ✅ Image hover zoom + overlay + caption
- ✅ Videography section with video players
- ✅ About page with photographer bio and quote
- ✅ Our Approach section
- ✅ Testimonials grid with client photos
- ✅ Contact form (Web3Forms integration)
- ✅ Booking form (Web3Forms integration) with full fields
- ✅ Booking info cards (Booking Process, What to Expect, Availability)
- ✅ Footer with Quick Links, Contact Info, Social Icons
- ✅ Floating WhatsApp button
- ✅ AOS scroll animations
- ✅ Google Fonts (Playfair Display + Open Sans)
- ✅ Font Awesome icons
- ✅ Bootstrap Icons (for WhatsApp button)
- ✅ Responsive design for all screen sizes

---

## Notes

- All image/video paths are unchanged — they just live under `public/assets/images/` instead of `assets/images/`
- Web3Forms `access_key` values are preserved exactly from the original forms
- Social media links are preserved exactly
- Contact info (email, phone, address) is preserved exactly
