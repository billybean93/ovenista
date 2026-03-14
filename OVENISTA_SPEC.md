# 🔥 OVENISTA — Full Website Specification
> **Agent-Ready Build Document** | Next.js 14 App Router | TypeScript | Luxury × Warm × European Soul

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Brand Identity](#2-brand-identity)
3. [Design System](#3-design-system)
4. [Tech Stack & Dependencies](#4-tech-stack--dependencies)
5. [Project Structure](#5-project-structure)
6. [Pages & Routes](#6-pages--routes)
7. [Section-by-Section Layout Spec](#7-section-by-section-layout-spec)
8. [Component Library](#8-component-library)
9. [Animations & Interactions](#9-animations--interactions)
10. [SEO Strategy](#10-seo-strategy)
11. [Performance Optimization](#11-performance-optimization)
12. [Responsive & Mobile Strategy](#12-responsive--mobile-strategy)
13. [Environment Variables](#13-environment-variables)
14. [Agent Task Breakdown](#14-agent-task-breakdown)

---

## 1. Project Overview

| Field | Value |
|---|---|
| **Restaurant Name** | Ovenista |
| **Tagline** | From Oven With Soul |
| **Cuisine** | Authentic European — Pizza, Pasta, Smoked Specialties |
| **Service** | Dine-in & Takeaway |
| **Location** | Ho Chi Minh City, Vietnam |
| **Primary Goal** | Drive dine-in reservations and takeaway orders |
| **Secondary Goal** | Establish brand identity as a warm, crafted, soulful European restaurant |

---

## 2. Brand Identity

### Voice & Tone
- Warm, intimate, artisanal
- "We don't just cook. We craft."
- Short, poetic copy — evoke smell, warmth, texture
- European soul, not corporate restaurant

### Visual Identity (extracted from restaurant photo)

The restaurant has a stunning, distinctive interior:
- **Exposed orange-red brick wall** — raw, textural, warm
- **Dark charcoal/slate walls** — moody backdrop
- **A red-domed wood-fired oven** tiled in deep forest green, with the *Ovenista* name glowing in warm gold script — **this is the hero object of the brand**
- **Edison string lights** hanging overhead — amber glow, intimate
- **A large hand-drawn mural** of a Venetian gondola scene on the dark wall — European soul, illustrative energy
- **Dark wood tables, red napkins** — warm and unpretentious

### Color Palette

```css
:root {
  /* Core */
  --color-bg:          #141410;   /* Near-black charcoal — dark walls */
  --color-bg-surface:  #1C1A14;   /* Slightly warmer dark — table/card backgrounds */
  --color-bg-elevated: #252018;   /* Elevated surfaces, modals */

  /* Brand */
  --color-ember:       #C8452A;   /* Brick red / ember — brick wall + oven dome */
  --color-gold:        #D4A853;   /* Warm gold — glowing Ovenista script */
  --color-gold-muted:  #9A7A3A;   /* Gold at rest / secondary accents */
  --color-forest:      #3D5A3E;   /* Deep forest green — oven tile surround */
  --color-cream:       #F5EDD8;   /* Warm linen/cream — primary text */
  --color-cream-muted: #A89880;   /* Muted cream — secondary text, captions */

  /* Functional */
  --color-border:      rgba(212, 168, 83, 0.18);  /* Gold border at low opacity */
  --color-border-hover:rgba(212, 168, 83, 0.40);
  --color-overlay:     rgba(20, 20, 16, 0.72);    /* For image overlays */

  /* Gradients */
  --gradient-hero:     linear-gradient(
                         to bottom,
                         rgba(20,20,16,0.10) 0%,
                         rgba(20,20,16,0.40) 60%,
                         rgba(20,20,16,0.92) 100%
                       );
  --gradient-card:     linear-gradient(
                         to bottom,
                         rgba(20,20,16,0) 30%,
                         rgba(20,20,16,0.95) 100%
                       );
}
```

### Typography

```css
/* Load in app/layout.tsx via next/font/google */

--font-display:  'Cormorant Garamond', serif;
/* Usage: headings, hero title, section titles, restaurant name */
/* Style: elegant, tall, old-world Italian editorial */

--font-body:     'Jost', sans-serif;
/* Usage: body copy, nav links, labels, buttons */
/* Style: geometric humanist, clean but warm — not sterile */

--font-accent:   'Cormorant SC', serif;
/* Usage: small-caps labels, category tags, "FROM OVEN WITH SOUL" decorative text */
/* Style: same family as display, spaced small-caps */
```

#### Type Scale

```css
--text-hero:    clamp(72px, 10vw, 140px);   /* "OVENISTA" main title */
--text-display: clamp(48px, 6vw, 88px);     /* Section heroes */
--text-heading: clamp(32px, 4vw, 54px);     /* Section titles */
--text-sub:     clamp(18px, 2vw, 24px);     /* Subheadings */
--text-body:    16px;                        /* Body copy */
--text-small:   13px;                        /* Captions, labels */
--text-label:   11px;                        /* Small caps, tags */

/* Letter spacing for display/accent text */
--tracking-wide:  0.08em;
--tracking-wider: 0.18em;  /* Used on small-caps labels */
```

### Texture & Atmosphere

- Apply a **grain overlay** globally (SVG noise filter or CSS, ~4% opacity) — gives warmth, depth, and avoids sterile digital look
- Use **background-blend-mode: multiply** on image cards with the dark overlay
- The **Venetian mural illustration style** should influence decorative SVG dividers between sections (thin horizontal line with a small gondola or flame motif center)

---

## 3. Design System

### Spacing Scale (use multiples of 8px)

```
4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200
```

### Border Radius

```css
--radius-sm:   4px;
--radius-md:   8px;
--radius-lg:   16px;
--radius-xl:   24px;
--radius-full: 9999px;
```

### Shadows

```css
--shadow-card:  0 4px 32px rgba(0,0,0,0.6);
--shadow-glow:  0 0 40px rgba(212, 168, 83, 0.15);  /* Gold aura on hover */
--shadow-ember: 0 0 60px rgba(200, 69, 42, 0.20);   /* Ember glow near oven section */
```

### Motion Tokens

```css
--ease-luxury:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-reveal:    cubic-bezier(0.16, 1, 0.3, 1);   /* Spring-like entrance */
--duration-fast:  200ms;
--duration-base:  400ms;
--duration-slow:  700ms;
--duration-hero:  1200ms;
```

---

## 4. Tech Stack & Dependencies

### Core

```bash
npx create-next-app@latest ovenista \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

### Required Packages

```bash
# Animation
npm install framer-motion

# Forms
npm install react-hook-form zod @hookform/resolvers

# Fonts (via next/font — no extra package needed)

# Icons
npm install lucide-react

# Date/time picker for reservation form
npm install react-day-picker date-fns

# Utilities
npm install clsx tailwind-merge

# Dev
npm install -D @types/node
```

### Tailwind Configuration

```js
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#141410',
        surface:   '#1C1A14',
        elevated:  '#252018',
        ember:     '#C8452A',
        gold:      '#D4A853',
        'gold-muted': '#9A7A3A',
        forest:    '#3D5A3E',
        cream:     '#F5EDD8',
        'cream-muted': '#A89880',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        accent:  ['var(--font-accent)', 'serif'],
      },
      animation: {
        'ember-float': 'emberFloat 4s ease-in-out infinite',
        'marquee':     'marquee 28s linear infinite',
        'fade-up':     'fadeUp 0.8s var(--ease-reveal) both',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        emberFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '50%':      { transform: 'translateY(-24px) scale(0.85)', opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(212,168,83,0.10)' },
          '50%':      { boxShadow: '0 0 60px rgba(212,168,83,0.25)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 5. Project Structure

```
ovenista/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── interior-01.jpg         ← Restaurant interior (provided)
│   │   │   ├── hero-slide-01.jpg
│   │   │   ├── hero-slide-02.jpg
│   │   │   └── hero-video.mp4          ← Optional: oven/fire video
│   │   ├── food/
│   │   │   ├── pizza-01.jpg
│   │   │   ├── pasta-01.jpg
│   │   │   ├── smoked-01.jpg
│   │   │   └── [more food shots]
│   │   ├── interior/
│   │   │   ├── oven-closeup.jpg        ← Red oven dome + gold script
│   │   │   ├── mural-detail.jpg        ← Venetian mural
│   │   │   ├── brick-wall.jpg
│   │   │   └── ambiance-01.jpg
│   │   └── og-image.jpg               ← 1200×630 OG image for social sharing
│   ├── fonts/                          ← Self-hosted font fallbacks (optional)
│   ├── favicon.ico
│   ├── icon.svg
│   └── manifest.json
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  ← Root layout: fonts, metadata, analytics
│   │   ├── page.tsx                    ← Home page (assembles all sections)
│   │   ├── menu/
│   │   │   └── page.tsx                ← Full menu page
│   │   ├── reserve/
│   │   │   └── page.tsx                ← Standalone reservation page
│   │   ├── about/
│   │   │   └── page.tsx                ← Our story (optional standalone)
│   │   ├── sitemap.ts                  ← Auto-generated sitemap
│   │   ├── robots.ts                   ← robots.txt config
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileDrawer.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileBottomBar.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         ← Slideshow or video hero
│   │   │   ├── ManifestoStrip.tsx      ← Tagline + marquee
│   │   │   ├── SignatureDishes.tsx     ← 4-card menu teaser
│   │   │   ├── OurStory.tsx            ← Split layout about section
│   │   │   ├── GallerySection.tsx      ← Asymmetric masonry grid
│   │   │   ├── ReviewsSection.tsx      ← Google review cards
│   │   │   ├── ReservationSection.tsx  ← Booking form
│   │   │   ├── TakeawayBanner.tsx      ← Takeaway CTA strip
│   │   │   └── LocationSection.tsx     ← Map + hours
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionLabel.tsx        ← Small-caps gold label (e.g. "— Our Menu —")
│   │   │   ├── DishCard.tsx
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── GrainOverlay.tsx        ← Sitewide film grain texture
│   │   │   ├── SectionDivider.tsx      ← Decorative SVG divider line
│   │   │   ├── EmberParticle.tsx       ← Animated floating ember dot
│   │   │   ├── ParallaxImage.tsx       ← next/image with parallax scroll
│   │   │   └── AnimatedText.tsx        ← Staggered letter/word reveal
│   │   │
│   │   └── forms/
│   │       └── ReservationForm.tsx
│   │
│   ├── lib/
│   │   ├── fonts.ts                    ← next/font/google config
│   │   ├── metadata.ts                 ← Shared metadata helpers
│   │   ├── restaurant-data.ts          ← Menu items, hours, contact info
│   │   └── utils.ts                    ← cn() utility (clsx + tailwind-merge)
│   │
│   └── types/
│       └── index.ts                    ← Shared TypeScript types
│
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 6. Pages & Routes

### `/` — Home (Landing Page)
The main experience. All sections flow as a single scroll narrative. This is the primary page for SEO and conversions.

**Section order:**
1. HeroSection
2. ManifestoStrip
3. SignatureDishes
4. OurStory
5. GallerySection
6. ReviewsSection
7. TakeawayBanner
8. ReservationSection
9. LocationSection
10. Footer

### `/menu` — Full Menu Page
- Categorized menu: Pizza / Pasta / Long-Smoked / Drinks / Desserts
- Each item: name, description, price, dietary tags
- Sticky category tabs at top
- Same dark aesthetic, warm card design

### `/reserve` — Reservation Page
- Full-page reservation form
- Same form as on home but with more breathing room
- Confirmation / success state

### `sitemap.ts` — Auto Sitemap

```ts
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ovenista.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://ovenista.com/menu', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://ovenista.com/reserve', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
```

### `robots.ts`

```ts
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ovenista.com/sitemap.xml',
  }
}
```

---

## 7. Section-by-Section Layout Spec

---

### 7.1 Navbar

**Desktop:**
- Fixed, full-width, starts transparent — transitions to `rgba(20,20,16,0.92)` + `backdrop-blur(12px)` on scroll > 80px
- Left: `OVENISTA` wordmark in Cormorant Garamond, gold, 22px, spaced
- Center: Nav links — `Menu` / `Our Story` / `Gallery` / `Location`
- Right: `Reserve a Table` button (gold border, cream text, hover fills gold)
- Thin 1px gold border-bottom at 8% opacity when scrolled

**Mobile:**
- Same fixed header, hamburger icon on right opens `MobileDrawer`
- Logo centered on mobile

**MobileDrawer:**
- Slides in from right, full-height
- Dark surface background (`--color-bg-elevated`)
- Links stacked vertically in large Cormorant italic
- Social icons at bottom (Instagram, Facebook)
- Closes on route change or outside click

---

### 7.2 Hero Section

**Concept:** Either a **full-screen slideshow** OR a **muted autoplay video** — configurable via `NEXT_PUBLIC_HERO_TYPE=slideshow|video` env variable.

#### Slideshow variant:
- Full viewport height (`100dvh`)
- 3–5 images: interior shot, oven close-up, hero food shot, mural detail
- **Ken Burns effect** on each slide: slow `scale(1.08)` over 6s duration
- Crossfade transition between slides (1s)
- Gradient overlay: `--gradient-hero` (transparent top → near-black bottom)

#### Video variant:
- `<video autoPlay muted loop playsInline>` as background
- Same gradient overlay
- Falls back to poster image if video fails to load

#### Content overlay (both variants):
```
[SectionLabel]  — Authentic European Dining —

[AnimatedText]  OVENISTA
                (staggered letter reveal, Cormorant Garamond, hero size)

[Tagline]       From Oven With Soul
                (fades in 400ms after title, Jost 18px, cream-muted, tracked)

[CTAs]          [Reserve a Table]   [View Menu]
                (staggered entrance 200ms after tagline)
```

**Ember particles:**
- 6–8 small orange/amber dots (`3–6px`)
- Float upward with `emberFloat` keyframe animation
- Random `animation-delay` and `animation-duration` per particle
- Positioned in bottom 30% of hero — simulates rising heat from oven

**Scroll indicator:**
- Thin animated line pulsing downward at bottom center
- Text: "scroll" in `11px` small-caps, cream-muted

---

### 7.3 Manifesto Strip

**Full-width, dark background, ~180px tall on desktop.**

Left half: Large editorial quote in Cormorant Garamond italic — *"Crafted with passion, baked with soul."*

Right half (or below on mobile): Infinite horizontal marquee loop:

```
Pizza  ·  Handmade Pasta  ·  Long-Smoked  ·  European Craft  ·  Dine-in  ·  Takeaway  ·
```

Marquee text: `Jost`, `--text-sub`, `--color-gold-muted`, `--tracking-wider`

Thin `1px` top and bottom borders in gold at 12% opacity separate this strip from adjacent sections.

---

### 7.4 Signature Dishes

**Section Label:** `— Our Craft —`
**Section Title:** `Four Things We Do With Soul`

**Layout:** 4-column grid on desktop → 2-column on tablet → 1-column on mobile

**4 categories:**
1. **Wood-Fired Pizza** — "Blistered crust, ancient dough"
2. **Handmade Pasta** — "Pulled by hand, every morning"
3. **Long-Smoked** — "Low fire. Long patience. Pure flavour."
4. **Chef's Selection** — "Whatever the oven is feeling today"

**Each DishCard:**
```
┌─────────────────────────────┐
│                             │
│     [Photo — 3:4 ratio]     │
│                             │
│   [gradient overlay]        │
│                             │
│  Category label (gold, sm)  │
│  Dish name (Cormorant, 28px)│
│  Short description (Jost)   │
│  → Explore Menu             │
└─────────────────────────────┘
```

**Hover state:**
- Image scales to `1.06` (300ms)
- Card border: `1px solid var(--color-border-hover)`
- Subtle `--shadow-glow` appears beneath card
- Arrow icon translates `4px` right

**Scroll entrance:** Cards stagger in from bottom with `fadeUp` — 100ms delay between each.

---

### 7.5 Our Story

**Split layout — desktop only:**

Left column (55%): The restaurant interior photo (provided), displayed as a tall `3:4` image with a subtle warm vignette overlay on the edges. A thin gold border frame sits `16px` inset from the photo edge.

Right column (45%): Story copy

```
[SectionLabel]  — From Oven With Soul —

[Heading]       We Didn't Open a Restaurant.
                We Lit a Fire.

[Body]
  Ovenista was born from a simple belief: that the best food
  comes from patience, craft, and a proper fire. Every pizza
  dough rests overnight. Every pasta is pulled by hand. Every
  smoked cut earns its low-and-slow hours.

  This is European dining the way it was meant to be —
  intimate, unhurried, and made with love.

[Signature line]  — The Ovenista Kitchen
  (in Cormorant italic, gold, 18px — like a handwritten signature)
```

**Decorative detail:** A small flame SVG icon (3 strokes, minimal) sits between the section label and heading.

**Mobile:** Stack vertically — photo full-width on top, text below with horizontal padding.

---

### 7.6 Gallery Section

**Section Label:** `— Inside Ovenista —`
**Section Title:** `The Space. The Craft. The Fire.`

**Desktop layout — asymmetric masonry grid (5 images):**

```
┌──────────────┬──────┬──────┐
│              │      │      │
│   [Large]    │ [Sm] │ [Sm] │
│              │      │      │
│  (2 col,     ├──────┴──────┤
│   2 row)     │   [Wide]    │
│              │  (2 col,    │
│              │   1 row)    │
└──────────────┴─────────────┘
                + [Tall] right edge
```

Precise grid:
- **Image A** (interior full shot): `col-span-2 row-span-2` — hero of the grid
- **Image B** (pizza close-up): `col-span-1 row-span-1`
- **Image C** (mural detail): `col-span-1 row-span-1`
- **Image D** (oven dome close-up): `col-span-2 row-span-1` — wide panoramic
- **Image E** (hands on pasta): `col-span-1 row-span-2` — tall portrait on right

Gap: `8px` between images. Each image: `overflow-hidden`, `object-fit-cover`.

**Hover:** Image scales to `1.04`, a very subtle `rgba(212,168,83,0.08)` gold tint overlay appears.

**Mobile:** Horizontal scroll carousel — snap-scroll, full-width slides, swipe gesture.

---

### 7.7 Reviews Section

**Section Label:** `— What Guests Say —`

**Layout:** 3 review cards, horizontal on desktop → vertical stack on mobile

**Each ReviewCard:**
```
┌──────────────────────────────────┐
│  ★ ★ ★ ★ ★   (gold stars)        │
│                                  │
│  "The pizza was extraordinary.   │
│   Crispy, soulful, perfect."      │
│                                  │
│  — Maria G., via Google          │
│    October 2024                  │
└──────────────────────────────────┘
```

Card style: `--color-bg-surface` background, `1px solid var(--color-border)` border, `--radius-lg` corners, `--shadow-card` shadow.

**Stagger entrance:** Cards animate in from bottom, 150ms apart.

**Source badge:** Small Google "G" icon + "Google Review" label at card bottom — cream-muted, 11px.

---

### 7.8 Takeaway Banner

**Full-width strip, ~200px tall, forest green background (`--color-forest`)**

Left: Heading + subtext
```
Take the Oven Home
Pizza & Pasta made fresh for takeaway — call ahead or walk in.
```

Right: Two buttons
- `Call to Order` (cream border, cream text)
- `Get Directions` (gold fill, dark text)

Subtle texture: grain overlay at slightly higher opacity on this strip.

On mobile: stack vertically, buttons full-width.

---

### 7.9 Reservation Section

**Section Label:** `— Book Your Table —`
**Section Title:** `Reserve Your Evening`

**Background:** Full-width image behind form with `--color-overlay` darkening it. Use the interior/ambiance photo.

**Form fields:**

```
Full Name           [text input]
Email               [email input]
Phone               [tel input]
Date                [date picker — react-day-picker]
Time                [select: 11:30am – 10:00pm, 30min intervals]
Party Size          [select: 1 – 12+]
Special Requests    [textarea, 3 rows]

                    [Reserve Now →]  (gold button, full width on mobile)
```

**Input style:**
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid var(--color-border)` → `var(--color-border-hover)` on focus
- Label: `11px` small-caps, gold, above each input
- Text: cream, `--font-body`
- Placeholder: cream-muted

**Success state:**
- Replace form with a centered confirmation message
- Small animated flame icon ✓
- Message: *"Your table is confirmed. We'll see you soon."*
- Subtext: address + date + time

**Validation:** Zod schema — all fields required except Special Requests.

---

### 7.10 Location Section

**Section Label:** `— Find Us —`

**Two-column layout:**

Left (55%): Google Maps embed — static, lazy-loaded iframe

```html
<iframe
  src="https://www.google.com/maps/embed?pb=[EMBED_ID]"
  width="100%"
  height="420"
  style="border:0;"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

Replace `[EMBED_ID]` with the correct Google Maps Embed API ID for Ovenista's address.

Right (45%): Info block

```
🔥 OVENISTA

📍 [Address — Ho Chi Minh City]

🕐 Hours
   Monday – Sunday
   11:00 AM – 10:00 PM

📞 [Phone number]

🍕 Dine-in  ·  Takeaway

[Get Directions →]    [Call Now →]
```

Labels: small-caps gold. Values: cream. Icons: lucide-react icons in ember color.

**Mobile:** Stack vertically — map on top (320px tall), info below.

---

### 7.11 Footer

```
┌───────────────────────────────────────────────────────┐
│                                                       │
│      OVENISTA          Quick Links    Follow Us       │
│   From Oven With Soul  ─────────      ─────────       │
│                        Menu           Instagram       │
│   [address line]       Reserve        Facebook        │
│   [phone]              Our Story      TikTok          │
│   [email]              Location                       │
│                                                       │
│  ─────────────────────────────────────────────────   │
│       © 2025 Ovenista · All rights reserved           │
└───────────────────────────────────────────────────────┘
```

- Background: `--color-bg` (darkest)
- Top border: `1px solid var(--color-border)`
- Logo in Cormorant Garamond, cream, large
- Links: Jost, cream-muted, hover → gold
- Social icons: Lucide, 20px, hover → ember color

---

## 8. Component Library

### `Button.tsx`

```tsx
type ButtonProps = {
  variant: 'primary' | 'ghost' | 'outline'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}
```

- `primary`: gold background, dark text, hover darkens
- `ghost`: no background, cream text, hover adds subtle cream bg at 8%
- `outline`: gold border, cream text, hover fills gold

### `SectionLabel.tsx`

```tsx
// Renders: — {text} —
// Style: font-accent, text-label, text-gold, tracking-wider, uppercase
```

### `DishCard.tsx`

```tsx
type DishCardProps = {
  image: string
  category: string   // e.g. "Wood-Fired Pizza"
  name: string       // e.g. "Margherita della Casa"
  description: string
  href: string
}
```

### `ReviewCard.tsx`

```tsx
type ReviewCardProps = {
  rating: 1|2|3|4|5
  text: string
  author: string
  source: 'google' | 'tripadvisor'
  date: string
}
```

### `GrainOverlay.tsx`

```tsx
// Fixed position, pointer-events-none, z-50
// SVG feTurbulence noise filter at 3–5% opacity
// Covers entire viewport — applied once in root layout
```

```tsx
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px',
      }}
    />
  )
}
```

### `SectionDivider.tsx`

```tsx
// Thin SVG horizontal rule with centered flame/ornament motif
// 80% opacity gold stroke, 0.5px line, ornament in ember color
```

### `EmberParticle.tsx`

```tsx
type EmberParticleProps = {
  x: number     // % from left
  size: number  // px, 3–6
  delay: number // animation-delay in seconds
  duration: number // animation-duration in seconds
}

// Renders: absolute-positioned circle, amber/ember color
// Animation: emberFloat keyframe
```

### `AnimatedText.tsx` (Framer Motion)

```tsx
// Splits text into words or letters
// Staggered fadeUp entrance using Framer Motion variants
// Only animates when in viewport (useInView)
```

### `ParallaxImage.tsx`

```tsx
// next/image wrapper with Framer Motion useScroll + useTransform
// translateY: scrollProgress maps to [-20px, 20px]
// Use for hero and OurStory images
```

---

## 9. Animations & Interactions

### Page Load Sequence (Home)

```
0ms    → Navbar fades in
200ms  → Hero image/video starts
400ms  → "OVENISTA" title: staggered letter reveal (Framer Motion, 0.04s per letter)
800ms  → Tagline fades up
1000ms → CTA buttons stagger in
1400ms → Ember particles begin floating
```

### Scroll-Triggered Reveals

Use Framer Motion `useInView` with `once: true` and `margin: "-10%"`:

- **SectionLabel**: fade in + scale from 0.95 → 1
- **Section titles**: `AnimatedText` word stagger
- **Cards**: `fadeUp` stagger, 80–120ms between items
- **Images**: fade in + subtle scale from 0.97 → 1

### Parallax

- Hero background: `y: ["0%", "20%"]` on scroll (Framer Motion scroll-driven)
- OurStory left image: `y: [-20, 20]` parallax range

### Hover States Summary

| Element | Hover Effect |
|---|---|
| Dish card | Image scale 1.06, gold border, glow shadow |
| Gallery image | Scale 1.04, gold tint overlay |
| Nav link | Color transitions to gold, underline expands from left |
| Button (primary) | Darken 10%, scale 0.98 |
| Footer link | Slide-in underline from left |
| Review card | Lift `translateY(-4px)`, border brightens |

### Marquee (ManifestoStrip)

```tsx
// Duplicate text content exactly once for seamless loop
// animation: marquee 28s linear infinite
// pause on hover (animation-play-state: paused)
// prefers-reduced-motion: pause all animations
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. SEO Strategy

### Root Metadata (`app/layout.tsx`)

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Ovenista',
    default: 'Ovenista — From Oven With Soul | European Restaurant Ho Chi Minh City',
  },
  description:
    'Ovenista brings authentic European dining to Ho Chi Minh City. ' +
    'Wood-fired pizza, handmade pasta, and long-smoked specialties. ' +
    'Dine-in and takeaway available.',
  keywords: [
    'Ovenista', 'restaurant HCMC', 'pizza Ho Chi Minh City',
    'Italian restaurant Saigon', 'European restaurant Vietnam',
    'wood-fired pizza', 'handmade pasta Saigon', 'best pizza HCMC',
    'dine in takeaway Saigon', 'smoked food restaurant Vietnam',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_VN',
    url: 'https://ovenista.com',
    siteName: 'Ovenista',
    title: 'Ovenista — From Oven With Soul',
    description: 'Authentic European dining in Ho Chi Minh City. Wood-fired pizza, handmade pasta, and long-smoked specialties.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ovenista Restaurant Interior' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ovenista — From Oven With Soul',
    description: 'Authentic European dining in Ho Chi Minh City.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ovenista.com' },
}
```

### JSON-LD Structured Data

Add to `app/layout.tsx` inside a `<script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Ovenista",
  "description": "Authentic European dining. Wood-fired pizza, handmade pasta, and long-smoked specialties.",
  "url": "https://ovenista.com",
  "telephone": "+84-[PHONE]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STREET ADDRESS]",
    "addressLocality": "Ho Chi Minh City",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LAT]",
    "longitude": "[LNG]"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "11:00",
      "closes": "22:00"
    }
  ],
  "servesCuisine": ["Italian", "European", "Pizza", "Pasta"],
  "priceRange": "$$",
  "image": "https://ovenista.com/og-image.jpg",
  "hasMenu": "https://ovenista.com/menu",
  "acceptsReservations": true
}
```

### Per-Page Metadata

```tsx
// app/menu/page.tsx
export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore Ovenista\'s full menu: wood-fired pizza, handmade pasta, long-smoked specialties and more.',
}

// app/reserve/page.tsx
export const metadata: Metadata = {
  title: 'Reserve a Table',
  description: 'Book your table at Ovenista. Authentic European dining in Ho Chi Minh City. Dine-in and takeaway.',
}
```

---

## 11. Performance Optimization

### Images

```tsx
// All images MUST use next/image
import Image from 'next/image'

// Hero images: priority={true}, sizes for responsive
<Image
  src="/images/hero/interior-01.jpg"
  alt="Ovenista restaurant interior with exposed brick and wood-fired oven"
  fill
  priority
  quality={85}
  sizes="100vw"
  className="object-cover"
/>

// Food/gallery images: lazy by default
<Image
  src="/images/food/pizza-01.jpg"
  alt="Wood-fired pizza at Ovenista"
  width={600}
  height={800}
  quality={80}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### `next.config.ts`

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],  // AVIF first for best compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128],
  },
  experimental: {
    optimizeCss: true,   // Critters for CSS inlining
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
```

### Fonts

```tsx
// src/lib/fonts.ts
import { Cormorant_Garamond, Cormorant_SC, Jost } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',  // Prevent invisible text during font load
  preload: true,
})

export const cormorantSC = Cormorant_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-accent',
  display: 'swap',
  preload: false,  // Not critical path
})

export const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
})
```

### Lazy Loading Strategy

```tsx
// Sections below the fold: use React.lazy + Suspense OR next/dynamic
import dynamic from 'next/dynamic'

const GallerySection     = dynamic(() => import('@/components/sections/GallerySection'))
const ReviewsSection     = dynamic(() => import('@/components/sections/ReviewsSection'))
const ReservationSection = dynamic(() => import('@/components/sections/ReservationSection'))
const LocationSection    = dynamic(() => import('@/components/sections/LocationSection'))

// Keep above-fold sections as static imports:
// HeroSection, ManifestoStrip, SignatureDishes, OurStory
```

### Google Maps

- Use **static embed iframe** with `loading="lazy"` — do NOT load the Maps JS API
- Wrap in an `IntersectionObserver` — only inject the iframe `src` when scrolled into view
- This avoids loading 300kb+ Maps JS on every page visit

```tsx
// src/components/sections/LocationSection.tsx
'use client'
import { useRef, useEffect, useState } from 'react'

export function LocationMap() {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true) },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full h-[420px] rounded-lg overflow-hidden">
      {loaded && (
        <iframe
          src="https://www.google.com/maps/embed?pb=[EMBED_ID]"
          width="100%" height="100%" style={{ border: 0 }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  )
}
```

### Web Vitals Targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| FCP | < 1.8s |
| TTFB | < 600ms |

### Caching Headers (`next.config.ts`)

```ts
headers: async () => [
  {
    source: '/images/(.*)',
    headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
  },
  {
    source: '/fonts/(.*)',
    headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
  },
],
```

---

## 12. Responsive & Mobile Strategy

### Breakpoints (Tailwind defaults)

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

### Mobile-Specific Components

#### `MobileBottomBar.tsx`

Sticky bottom bar on mobile only (`md:hidden`):

```
[ 📞 Call ]   [ 🍽 Reserve ]   [ 📋 Menu ]
```

- Fixed bottom-0, full-width
- `z-50`, `backdrop-blur(12px)`, `bg-bg/90`
- 3 equal-width tap targets, min 44px tall (accessibility)
- Top border: `1px solid var(--color-border)`
- Active state: gold text + subtle gold glow

#### Gallery — Mobile Carousel

```tsx
// Horizontal scroll snap on mobile
<div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-3 pb-4 -mx-4 px-4">
  {images.map(img => (
    <div key={img} className="snap-center shrink-0 w-[85vw] aspect-[3/4] rounded-lg overflow-hidden">
      <Image ... />
    </div>
  ))}
</div>
// Hide scrollbar via CSS but keep scroll functionality
```

### Mobile Typography Scale

```css
/* Scale down on small screens — handled by clamp() in type scale */
/* Minimum sizes guaranteed by clamp first value */
--text-hero:    clamp(52px, 15vw, 140px);
--text-display: clamp(36px, 8vw, 88px);
--text-heading: clamp(26px, 5vw, 54px);
```

### Touch & Accessibility

- All interactive elements: minimum `44px × 44px` touch target
- Color contrast: cream on dark bg = 10:1+ (WCAG AAA)
- Gold on dark = tested for 4.5:1 minimum (AA)
- Focus styles: gold `outline` on keyboard focus, `outline-offset: 2px`
- `aria-label` on all icon-only buttons
- Reservation form: proper `<label>` for every `<input>`
- Images: descriptive `alt` text on every `<Image>`

---

## 13. Environment Variables

```bash
# .env.local

# Hero type: 'slideshow' or 'video'
NEXT_PUBLIC_HERO_TYPE=slideshow

# Google Maps Embed ID (from Google Maps "Share > Embed a map")
NEXT_PUBLIC_MAPS_EMBED_ID=YOUR_EMBED_ID_HERE

# Restaurant contact info
NEXT_PUBLIC_PHONE=+84-XXX-XXX-XXXX
NEXT_PUBLIC_ADDRESS="[Street], Ho Chi Minh City, Vietnam"
NEXT_PUBLIC_EMAIL=hello@ovenista.com

# Social links
NEXT_PUBLIC_INSTAGRAM=https://instagram.com/ovenista
NEXT_PUBLIC_FACEBOOK=https://facebook.com/ovenista

# Optional: form submission endpoint
RESERVATION_WEBHOOK_URL=https://...   # (server-side only, no NEXT_PUBLIC_)
```

---

## 14. Agent Task Breakdown

Use this section to assign individual tasks to agents or development sprints.

---

### 🏗 Phase 1 — Foundation

| # | Task | Files |
|---|---|---|
| 1.1 | Init Next.js project with TypeScript + Tailwind | `package.json`, `tsconfig.json` |
| 1.2 | Configure Tailwind with brand tokens | `tailwind.config.ts` |
| 1.3 | Set up font loading (Cormorant Garamond, Cormorant SC, Jost) | `src/lib/fonts.ts`, `app/layout.tsx` |
| 1.4 | Create CSS variables in `globals.css` | `app/globals.css` |
| 1.5 | Set up `cn()` utility | `src/lib/utils.ts` |
| 1.6 | Create `restaurant-data.ts` with all static content | `src/lib/restaurant-data.ts` |
| 1.7 | Configure `next.config.ts` (images, headers, compress) | `next.config.ts` |
| 1.8 | Set up environment variables | `.env.local`, `.env.example` |

---

### 🧩 Phase 2 — UI Components

| # | Task | Files |
|---|---|---|
| 2.1 | Build `Button` component (3 variants) | `components/ui/Button.tsx` |
| 2.2 | Build `SectionLabel` component | `components/ui/SectionLabel.tsx` |
| 2.3 | Build `GrainOverlay` component | `components/ui/GrainOverlay.tsx` |
| 2.4 | Build `SectionDivider` SVG component | `components/ui/SectionDivider.tsx` |
| 2.5 | Build `EmberParticle` component | `components/ui/EmberParticle.tsx` |
| 2.6 | Build `AnimatedText` with Framer Motion | `components/ui/AnimatedText.tsx` |
| 2.7 | Build `DishCard` component | `components/ui/DishCard.tsx` |
| 2.8 | Build `ReviewCard` component | `components/ui/ReviewCard.tsx` |
| 2.9 | Build `ParallaxImage` component | `components/ui/ParallaxImage.tsx` |

---

### 🧭 Phase 3 — Layout

| # | Task | Files |
|---|---|---|
| 3.1 | Build `Navbar` (transparent → frosted glass on scroll) | `components/layout/Navbar.tsx` |
| 3.2 | Build `MobileDrawer` | `components/layout/MobileDrawer.tsx` |
| 3.3 | Build `MobileBottomBar` | `components/layout/MobileBottomBar.tsx` |
| 3.4 | Build `Footer` | `components/layout/Footer.tsx` |

---

### 🎨 Phase 4 — Sections

| # | Task | Files |
|---|---|---|
| 4.1 | Build `HeroSection` (slideshow + video mode, ember particles, CTAs) | `components/sections/HeroSection.tsx` |
| 4.2 | Build `ManifestoStrip` (quote + marquee) | `components/sections/ManifestoStrip.tsx` |
| 4.3 | Build `SignatureDishes` (4-card grid with hover) | `components/sections/SignatureDishes.tsx` |
| 4.4 | Build `OurStory` (split layout, parallax image) | `components/sections/OurStory.tsx` |
| 4.5 | Build `GallerySection` (masonry desktop, carousel mobile) | `components/sections/GallerySection.tsx` |
| 4.6 | Build `ReviewsSection` (3 cards, stagger) | `components/sections/ReviewsSection.tsx` |
| 4.7 | Build `TakeawayBanner` (forest green strip, CTAs) | `components/sections/TakeawayBanner.tsx` |
| 4.8 | Build `ReservationSection` (form with validation, success state) | `components/sections/ReservationSection.tsx`, `components/forms/ReservationForm.tsx` |
| 4.9 | Build `LocationSection` (lazy map embed + info block) | `components/sections/LocationSection.tsx` |

---

### 📄 Phase 5 — Pages & SEO

| # | Task | Files |
|---|---|---|
| 5.1 | Assemble `app/page.tsx` (home — all sections) | `app/page.tsx` |
| 5.2 | Build `/menu` page with category tabs | `app/menu/page.tsx` |
| 5.3 | Build `/reserve` page | `app/reserve/page.tsx` |
| 5.4 | Add root metadata + JSON-LD to layout | `app/layout.tsx` |
| 5.5 | Add per-page metadata to each route | `app/menu/page.tsx`, `app/reserve/page.tsx` |
| 5.6 | Add `sitemap.ts` + `robots.ts` | `app/sitemap.ts`, `app/robots.ts` |
| 5.7 | Create OG image (`1200×630`) | `public/og-image.jpg` |

---

### ⚡ Phase 6 — Performance & Polish

| # | Task | Files |
|---|---|---|
| 6.1 | Audit all images — add `sizes`, `priority`, `alt` | All section files |
| 6.2 | Dynamic import for below-fold sections | `app/page.tsx` |
| 6.3 | Test lazy map embed with IntersectionObserver | `LocationSection.tsx` |
| 6.4 | Add `prefers-reduced-motion` CSS | `app/globals.css` |
| 6.5 | Accessibility audit — contrast, touch targets, aria | All components |
| 6.6 | Run Lighthouse — target LCP < 2.5s, CLS < 0.1 | — |
| 6.7 | Test all breakpoints (375, 768, 1024, 1440, 1920px) | — |

---

### 📝 Notes for Agents

1. **Image placeholders:** Until real photos are provided, use `https://picsum.photos/seed/{name}/{w}/{h}` with appropriate seeds. Mark each with a `// TODO: replace with real photo` comment.

2. **Real content slots:** Wherever you see `[PLACEHOLDER]`, `[PHONE]`, `[ADDRESS]`, or `[LAT/LNG]` — these must be filled in from the client before going live. Create a `CONTENT_TODO.md` listing every unfilled slot.

3. **Map embed:** To get the correct embed ID, open Google Maps, search for Ovenista, click Share → Embed a map, and copy the `src` URL from the iframe code.

4. **Form submission:** The `ReservationForm` should submit to a `RESERVATION_WEBHOOK_URL`. For MVP, this can be a simple `mailto:` form action or a Vercel serverless function that sends an email.

5. **Grain overlay z-index:** The `GrainOverlay` must be `z-50` and `pointer-events-none` — it sits above everything visually but never blocks clicks.

6. **Framer Motion + Next.js:** Any component using Framer Motion hooks (`useScroll`, `useInView`, etc.) must be a `'use client'` component. Keep server components for static sections where possible.

7. **Font loading:** Never use `@import` in CSS for fonts. Always use `next/font/google` for optimal performance.

---

*Last updated: 2025 | Spec version: 1.0 | Built for Ovenista — From Oven With Soul 🔥*
