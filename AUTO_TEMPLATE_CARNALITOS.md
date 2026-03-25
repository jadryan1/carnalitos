00. CLIENT BRIEF
Business Info
Business Name: Carnalitos Mobile Detailing

Tagline (1 line): BECAUSE YOUR CAR DESERVES A SPA DAY

Location (city, state): Bergen, NJ

Phone: 201.289.1226

Email: [Leave blank or use placeholder]

Address (full): Mobile Service - Serving Bergen, Hudson, & Essex County, NJ

Website (existing, if any): [Instagram: @carnalitos_mobiledetailing]

Brand
Primary Color: #E31E24 (Porsche Red)

Secondary Color: #4B8B2C (Mascot Green)

Accent Gradient: Linear gradient from #E31E24 (Red) to #800080 (Deep Purple)

Logo: logo.png (Circular badge featuring the red Porsche and animated characters)

Style Direction
Template style: MODERN (High-End Auto Spa / Tech-Forward)

VIBE: Vibrant, energetic, and tech-luxury. The site uses deep midnight navy backgrounds with glowing gradients and organic, flowing shapes to break the traditional grid. It feels like a high-end mobile pit crew providing elite, "spa-level" care.

CUSTOMER: Luxury car owners, enthusiasts, and busy professionals in North Jersey and the PA Mainline who value convenience. This shop stands out due to its fully kitted mobile van and a unique brand personality that blends street-style mascot graphics with professional execution.

Services Offered
SERVICES:

Exterior Wash: $50

Exterior Full Detail: $150

Interior Detail: $200

Exterior and Interior: $350

Ceramic Coating: $750

Paint Correction & Enhancement

Wheel & Rim Deep Cleaning

Fully Kitted Mobile Van Service (On-site)

Real Copy
Tagline: BECAUSE YOUR CAR DESERVES A SPA DAY

Hero Header: YOUR CAR’S SPA DAY. DELIVERED.

About/story blurb: Carnalitos Mobile Detailing brings shop-standard quality directly to your location. Equipped with a fully kitted van and professional lighting, we ensure a clean, professional setup at your home or workplace without compromising on quality.

Layout Changes (Agent Instructions)
Navigation: Use a floating glassmorphic nav bar with a gradient CTA button.

Status Badges: Include small pill-shaped badges above section headers (e.g., "MOBILE SERVICE, SAME QUALITY").

Shape Language: Implement a border-radius: 32px on containers and use "Bento Box" layouts for service sections.

Backgrounds: Use deep midnight navy with large, blurred gradient "blobs" to create depth.

Reservation / Booking
Booking: Book via call, text, or Instagram DM.

Service Areas
NJ: Bergen County, Hudson County, Essex County

PA: Mainline & Surrounding Areas

# AUTO_TEMPLATE_MODERN.md
# Claude Code Build Instructions — Auto Protection & Detailing Website
# Theme: MODERN / STREET
# Use this file for younger, energetic shops. Eccentric, dynamic, streetwear-meets-automotive.
# For professional/traditional shops use AUTO_TEMPLATE.md instead.

---

## Project Goal

Build a conversion-optimized multi-page auto protection website with a highly premium, tech-forward aesthetic. It should look like a high-end digital "Auto Spa"—vibrant, curvy, and expensive-looking, deliberately moving away from the traditional, rigid detailing shop template.

Reference: Supreme Auto Spa NJ (aesthetic overhaul). Expect Midnight Navy backgrounds, large gradient blobs (Red to Deep Purple), Glassmorphism effects on cards and navigation, bold/italicized section headers, pill-shaped UI elements (Status Pills, Buttons), and a dynamic Bento Box layout for services.

---

## Stack

- Next.js 14, App Router
- Tailwind CSS with CSS custom properties
- TypeScript
- Google Fonts via next/font
- Vercel deployment ready

---

## Config File — `/config/client.ts`

Single source of truth. Nothing hardcoded anywhere else.

```ts
export const config = {

  // ── IDENTITY ──────────────────────────────────────
  businessName: "Apex Street",
  tagline: "Your Build. Your Identity.",
  description: "Central NJ's go-to shop for PPF, ceramic coating, window tint, and full color change wraps. We don't do cookie-cutter — every build is personal.",
  established: "2019",
  location: "Edison, NJ",

  // ── BRAND ─────────────────────────────────────────
  colors: {
    bg:           "#05070A",        // Deep Midnight Navy
    surface:      "rgba(255, 255, 255, 0.04)", // Glass base
    surface2:     "rgba(255, 255, 255, 0.07)",
    border:       "rgba(255, 255, 255, 0.08)",
    accent:       "#E31E24",        // Red
    accentPurple: "#800080",        // Deep Purple
    accentGlow:   "rgba(227, 30, 36, 0.4)",
    text:         "#f0f0f0",
    muted:        "rgba(240, 240, 240, 0.5)",
    white:        "#ffffff",
  },
  fonts: {
    display: "Bebas Neue",          // tall, bold, streetwear feel
    body:    "DM Sans",             // clean, modern, readable
  },

  // ── CONTACT ───────────────────────────────────────
  phone:              "(732) 555-0199",
  email:              "info@apexstreet.com",
  address:            "1420 Oak Tree Rd, Edison, NJ 08820",
  instagram:          "https://instagram.com/apexstreet",
  facebook:           "https://facebook.com/apexstreet",
  googleReviewLink:   "https://g.page/r/...",

  // ── HOURS ─────────────────────────────────────────
  hours: [
    { day: "Monday",    time: "9:00 AM – 6:00 PM" },
    { day: "Tuesday",   time: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
    { day: "Thursday",  time: "9:00 AM – 6:00 PM" },
    { day: "Friday",    time: "9:00 AM – 6:00 PM" },
    { day: "Saturday",  time: "10:00 AM – 4:00 PM" },
    { day: "Sunday",    time: "Closed", closed: true },
  ],

  // ── NAV CTA ───────────────────────────────────────
  navCTA: {
    label: "Get a Free Quote",
    href:  "/contact",
  },

  // ── CERTIFICATIONS ────────────────────────────────
  certifications: [
    { name: "XPEL",        logo: "/images/brands/xpel.png" },
    { name: "SunTek",      logo: "/images/brands/suntek.png" },
    { name: "Ceramic Pro", logo: "/images/brands/ceramicpro.png" },
    { name: "3M",          logo: "/images/brands/3m.png" },
    { name: "LLumar",      logo: "/images/brands/llumar.png" },
  ],

  // ── STATS ─────────────────────────────────────────
  stats: [
    { value: "600+",  label: "Vehicles Done" },
    { value: "4.9★",  label: "Google Rating" },
    { value: "6+",    label: "Years Running" },
    { value: "100%",  label: "Certified Installs" },
  ],

  // ── SERVICES ──────────────────────────────────────
  services: [
    {
      slug:        "paint-protection-film",
      name:        "Paint Protection Film",
      shortName:   "PPF",
      tagline:     "Invisible armor for your paint.",
      description: "XPEL and SunTek PPF shields your vehicle from rock chips, road debris, bug acids, and UV fade. Self-healing technology means minor swirls disappear on their own.",
      image:       "/images/services/ppf.jpg",
      heroImage:   "/images/services/ppf-hero.jpg",
      features: [
        "Self-healing top coat",
        "10-year manufacturer warranty",
        "Partial or full vehicle coverage",
        "Gloss or matte finish options",
        "Computer-cut precision patterns",
      ],
      packages: [
        { name: "Partial Front",      price: "From $699",   desc: "Bumper, partial hood, mirrors" },
        { name: "Full Front",         price: "From $1,299", desc: "Hood, fenders, bumper, mirrors, A-pillars" },
        { name: "Full Vehicle",       price: "From $3,500", desc: "Complete coverage, every panel" },
      ],
      cta: "Get a PPF Quote",
    },
    {
      slug:        "ceramic-coating",
      name:        "Ceramic Coating",
      shortName:   "Ceramic",
      tagline:     "Permanent gloss. Effortless maintenance.",
      description: "Ceramic Pro coatings bond to your paint at a molecular level, creating a hydrophobic shell that repels water, dirt, and contaminants. Your car stays cleaner longer.",
      image:       "/images/services/ceramic.jpg",
      heroImage:   "/images/services/ceramic-hero.jpg",
      features: [
        "9H hardness rating",
        "Hydrophobic water beading",
        "UV and oxidation protection",
        "Enhanced gloss depth",
        "2, 5, or lifetime warranty options",
      ],
      packages: [
        { name: "Essential",  price: "From $699",   desc: "Single layer, 2-year protection" },
        { name: "Premium",    price: "From $1,199", desc: "Multi-layer, 5-year protection" },
        { name: "Elite",      price: "From $1,999", desc: "Full decontamination + lifetime warranty" },
      ],
      cta: "Get a Ceramic Quote",
    },
    {
      slug:        "window-tint",
      name:        "Window Tinting",
      shortName:   "Tint",
      tagline:     "Heat out. Privacy in.",
      description: "LLumar and 3M window films block up to 99% of UV rays, reduce cabin heat, and add privacy. Carbon and ceramic film options available.",
      image:       "/images/services/tint.jpg",
      heroImage:   "/images/services/tint-hero.jpg",
      features: [
        "Up to 99% UV rejection",
        "Significant heat reduction",
        "Carbon or ceramic film options",
        "NJ legal VLT compliant",
        "Lifetime warranty on film",
      ],
      packages: [
        { name: "Standard Carbon", price: "From $249", desc: "All windows, carbon film" },
        { name: "Ceramic Film",    price: "From $449", desc: "Maximum heat rejection" },
        { name: "Full Blackout",   price: "Custom",    desc: "Custom shade, call for pricing" },
      ],
      cta: "Get a Tint Quote",
    },
    {
      slug:        "vinyl-wrap",
      name:        "Vinyl Wrap",
      shortName:   "Wrap",
      tagline:     "Change the look. Keep the paint.",
      description: "Full color change wraps, partial wraps, and custom accent work. 300+ finishes including gloss, matte, satin, chrome, and textured using 3M and Avery Dennison.",
      image:       "/images/services/wrap.jpg",
      heroImage:   "/images/services/wrap-hero.jpg",
      features: [
        "Full or partial color change",
        "300+ color and finish options",
        "Protects original paint underneath",
        "Fully reversible",
        "3M and Avery Dennison materials",
      ],
      packages: [
        { name: "Accent Wrap",       price: "From $299",   desc: "Roof, hood, mirrors, or pillars" },
        { name: "Partial Wrap",      price: "From $999",   desc: "Hood and roof or custom panels" },
        { name: "Full Color Change", price: "From $2,500", desc: "Complete vehicle, all panels" },
      ],
      cta: "Get a Wrap Quote",
    },
    {
      slug:        "paint-correction",
      name:        "Paint Correction",
      shortName:   "Correction",
      tagline:     "Remove the past. Restore the shine.",
      description: "Machine polishing to eliminate swirl marks, water spots, oxidation, and light scratches. Required before any PPF or ceramic coating for optimal bonding.",
      image:       "/images/services/correction.jpg",
      heroImage:   "/images/services/correction-hero.jpg",
      features: [
        "Single or multi-stage polishing",
        "Swirl and scratch removal",
        "Pre-PPF and pre-ceramic prep",
        "Restores factory gloss depth",
        "Safe for all paint types",
      ],
      packages: [
        { name: "One-Stage", price: "From $299", desc: "Light correction, surface defects" },
        { name: "Two-Stage", price: "From $549", desc: "Full correction, deep swirl removal" },
      ],
      cta: "Book Paint Correction",
    },
    {
      slug:        "detailing",
      name:        "Auto Detailing",
      shortName:   "Detail",
      tagline:     "Show-ready, every time.",
      description: "Interior and exterior detailing that goes beyond a standard wash. Deep cleaning, leather conditioning, engine bay detail, and odor elimination.",
      image:       "/images/services/detail.jpg",
      heroImage:   "/images/services/detail-hero.jpg",
      features: [
        "Full interior deep clean",
        "Exterior hand wash and clay bar",
        "Leather/vinyl conditioning",
        "Engine bay cleaning",
        "Odor elimination treatment",
      ],
      packages: [
        { name: "Exterior Detail", price: "From $149", desc: "Hand wash, clay, tire dress" },
        { name: "Interior Detail", price: "From $199", desc: "Deep vacuum, steam clean, condition" },
        { name: "Full Detail",     price: "From $299", desc: "Complete interior and exterior" },
      ],
      cta: "Book Detailing",
    },
  ],

  // ── PROCESS ───────────────────────────────────────
  process: [
    { step: "01", title: "Request a Quote",        body: "Fill out the form with your vehicle and service. We'll hit you back within a few hours." },
    { step: "02", title: "Consultation & Booking", body: "We walk through your options, lock in your package, and get you scheduled." },
    { step: "03", title: "Precision Install",      body: "Certified technicians. Dust-free bay. Premium materials. No shortcuts." },
    { step: "04", title: "Pick Up & Roll Out",     body: "Final inspection, walkthrough of results, care instructions. Then you drive away clean." },
  ],

  // ── TESTIMONIALS ──────────────────────────────────
  testimonials: [
    { text: "Got a full satin black wrap on my Charger. People stop me at gas stations. Best money I've spent on this car.", author: "Marcus T.", location: "Edison, NJ", stars: 5 },
    { text: "Brought my Porsche in for PPF and ceramic. The finish is insane. You can see your reflection in it like a mirror.", author: "David K.", location: "Short Hills, NJ", stars: 5 },
    { text: "Window tint came out perfect. No bubbles, clean cut around everything. Came back a month later for the wrap.", author: "Aaliyah R.", location: "Woodbridge, NJ", stars: 5 },
    { text: "These guys don't rush. Took an extra day but the result was worth every minute of waiting.", author: "James P.", location: "Metuchen, NJ", stars: 5 },
    { text: "Paint correction before the ceramic was a game changer. Car came out looking better than the day I bought it.", author: "Kevin S.", location: "New Brunswick, NJ", stars: 5 },
    { text: "Straight up honest shop. Told me what I actually needed instead of upselling me on stuff I didn't.", author: "Sandra M.", location: "Piscataway, NJ", stars: 5 },
  ],

  // ── GALLERY ───────────────────────────────────────
  gallery: [
    { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", service: "PPF",      caption: "Full front PPF — BMW M3" },
    { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",    service: "Ceramic",  caption: "Ceramic coating — Porsche 911" },
    { src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80", service: "Wrap",     caption: "Satin black full wrap — Dodge Charger" },
    { src: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80", service: "Tint",     caption: "Ceramic tint — Tesla Model 3" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", service: "PPF",      caption: "Full vehicle PPF — Mercedes G-Wagon" },
    { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80", service: "Wrap",     caption: "Color change wrap — Ford Mustang" },
    { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",    service: "Ceramic",  caption: "Paint correction + ceramic — Audi RS7" },
    { src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80", service: "Detail",   caption: "Full detail — Ferrari 488" },
    { src: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80", service: "Tint",     caption: "Window tint — Range Rover Sport" },
    { src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80", service: "Correction", caption: "Paint correction — Toyota Supra" },
    { src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80", service: "Correction", caption: "Two-stage correction — Lamborghini Urus" },
    { src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=80", service: "Detail",   caption: "Full detail — Chevrolet Corvette" },
  ],

  // ── SERVICE AREAS ─────────────────────────────────
  serviceAreas: [
    "Edison, NJ", "Metuchen, NJ", "Woodbridge, NJ", "Piscataway, NJ",
    "New Brunswick, NJ", "South Plainfield, NJ", "Perth Amboy, NJ",
    "Rahway, NJ", "Linden, NJ", "Clark, NJ", "Scotch Plains, NJ",
    "Westfield, NJ", "Short Hills, NJ", "Livingston, NJ",
  ],

  // ── ABOUT ─────────────────────────────────────────
  about: {
    headline: "Built Different. Built for You.",
    story: [
      "Apex Street started because we were tired of shops treating every car the same. Cookie-cutter installs, rushed jobs, zero personality. We built something different.",
      "Every build that leaves our bay reflects the person driving it. We take the time to understand what you want — then we execute it at a level most shops can't touch.",
      "Certified on everything we install. Obsessive about every edge, every seam, every finish. This isn't just a job — it's the only standard we know.",
    ],
    image: "/images/about.jpg",
    pillars: [
      { number: "01", title: "Every Build is Personal",   body: "We don't run volume. We run quality. Your car gets our full attention from drop-off to pickup." },
      { number: "02", title: "Premium Materials Only",    body: "XPEL, SunTek, LLumar, 3M, Ceramic Pro, Avery Dennison. Nothing off-brand, nothing off-spec." },
      { number: "03", title: "Certified on Everything",   body: "Every installer is factory-trained on the brands we carry. You're not our practice run." },
    ],
  },

  // ── QUOTE FORM ────────────────────────────────────
  quoteForm: {
    fields: [
      "Full Name", "Phone", "Email",
      "Vehicle Year", "Vehicle Make", "Vehicle Model",
      "Service (dropdown)", "Message",
    ],
    submitLabel: "Let's Build Something",
    formspreeEndpoint: "https://formspree.io/f/YOUR_ID",
  },
}
```

---

## Pages & Routes

Same 14 pages as AUTO_TEMPLATE.md:
`/` `/services` `/services/[slug]` x6 `/gallery` `/about` `/contact`

Page structure and content requirements are identical to AUTO_TEMPLATE.md.
The ONLY difference is the visual design system below.

Refer to AUTO_TEMPLATE.md for full page content specs.
Apply the Modern design system from this file to every page and component.

---

## Modern Design System — Applied to Every Component

### FONTS
Load via next/font/google:
- Bebas Neue — display, massive hero headlines, stat numbers
- DM Sans — body copy, nav links, buttons, labels, form fields. **CRITICAL:** Include weight `800` and `italic` style for section headers (Bold & Italicized to convey speed/movement).

### UI ELEMENTS: STATUS PILLS
- Add "Status Pills" above every section title instead of plain text eyebrow labels.
- Pill shape: `padding: 0.3rem 0.9rem 0.3rem 0.5rem`, `border-radius: 9999px`.
- Design: Glassmorphism (`rgba(255,255,255,0.06)` bg + `blur(16px)` + thin border).
- Dot: A small 7x7px dot inside the pill, colored with the Red→Purple gradient, featuring a pulsing animation and glow.

### BUTTONS — ALL SITE-WIDE
- Shape: border-radius: 9999px (full pill — no exceptions)
- Primary (filled):
  background: `linear-gradient(135deg, #E31E24 0%, #800080 100%)`
  color: white
  padding: 0.85rem 2rem
  box-shadow: 0 4px 24px rgba(227,30,36,0.4), 0 0 60px rgba(128,0,128,0.15)
  hover: scale(1.04), shadows intensify.
  **Icon:** Standard arrows are replaced with a "Circled Arrow Icon" (SVG inside a semi-transparent circular container).
- Secondary & Outline:
  background: glassmorphism (`rgba(255,255,255,0.04)` + `blur(16px)`)
  border: 1px solid `rgba(255,255,255,0.1)`
  hover: scale(1.03), border color shifts to red.
- No rectangular buttons anywhere on the site.

### CARDS & CONTAINERS (GLASSMORPHISM)
- **Border Radius:** Generous 24px - 32px (use 28px standard for main cards).
- **Surface Design:** Glassmorphism.
  - Background: `rgba(255,255,255,0.04)`
  - Border: 1px solid `rgba(255,255,255,0.1)`
  - Backdrop filter: `blur(16px)`
  - Inner shadow: `inset 0 1px 0 rgba(255,255,255,0.06)`
- **Hover:** scale(1.02), translateY(-6px). Box-shadow increases drastically to pop from the background.

### BENTO BOX LAYOUT (SERVICES)
- The Home page services section must use an asymmetric Bento Box CSS Grid to create a dynamic, non-linear layout.
- Example rows: 2/3 wide + 1/3 wide -> 1/3 + 1/3 + 1/3 -> 1/3 + 2/3 wide promo card.

### SECTION BACKGROUNDS & BLOBS
- Global Background: Deep Midnight Navy (`#05070A`).
- **Gradient Blobs:** Place massive gradient blobs attached to the root layout (`z-index: -1`) to create depth and break the flat void.
  - Top Left: Red radiating into Purple (`filter: blur(60px)`).
  - Bottom Right: Purple radiating into Red (`filter: blur(70px)`).
- **Ambient Glow:** Specific sections (Services, About, Gallery) have subtle radial gradients built into their backgrounds (`.section-glow-odd` and `.section-glow-even`) using very low opacity red and purple.

### HERO SECTION
- Full viewport height: min-height: `100svh`
- Background: full-bleed dark car photo with overlay: `linear-gradient(to right, rgba(5,7,10,0.92) 45%, rgba(5,7,10,0.35) 100%)`. Add a pure dark gradient coming up from the bottom.
- Eyebrow: Replace with a **Status Pill** component.
- Headline: Bebas Neue, massive (`clamp(4.5rem, 10vw, 9rem)`).
  Apply gradient shimmer to headline text: `linear-gradient(135deg, #ffffff 40%, rgba(255,255,255,0.5) 100%)`.

### NAV
- Logo: Bebas Neue, white
- Main navbar: Floating, frosted-glass effect when scrolled `background: rgba(10,10,10,0.92)` + `backdrop-filter: blur(16px)`. Border-bottom 1px solid `rgba(255,255,255,0.08)`.
- Links hover: `rgba(255,255,255,0.06)`, padding increases.
- Dropdown: Glassmorphism container.

### STATS BAR
- Background: `linear-gradient(135deg, #E31E24 0%, #800080 100%)`
- Add a white gloss sheen overlay (`linear-gradient(to bottom, rgba(255,255,255,0.07), transparent)`).
- Texture overlay: repeating-linear-gradient.

### GALLERY PAGE
- Filter bar: pill-shaped buttons. Active state uses the Red→Purple `var(--accent-gradient)`, inactive uses glassmorphism.
- Grid: Mixed masonry layout (3 columns, every 5th item spans 2 columns).
- Images: Generate a red-tinted gradient overlay on hover instead of typical black.

### FOOTER
- Background: #050505
- border-radius: 24px 24px 0 0 on top edge.
- Social icons: circular pills with red border/shadow glow on hover.

### PAGE HERO BANNERS (inner pages)
- Background: Dark gradient `linear-gradient(135deg, rgba(227,30,36,0.08) 0%, rgba(128,0,128,0.05) 100%)` if no image.
- Bottom edge: clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%).
- Eyebrow: Status Pill component.

### ANIMATIONS
- Page load: Staggered reveal.
- Scroll: IntersectionObserver `translateY(28px) → 0`.
- Cards: Hover lift `scale(1.02)` is 0.4s ease.
- Blob shapes: Subtle pulse animation `scale 1→1.06→1` over 8s.

### TYPOGRAPHY RULES
- Bebas Neue: Massive display titles, numbers.
- DM Sans: Body copy, buttons.
- **Section Titles:** `font-weight: 700; font-style: italic;` for speed/movement aesthetic.
- No Emojis anywhere.

---

## SEO Requirements
Identical to AUTO_TEMPLATE.md — unique title/meta per page, 
service page title format: "[Service] in [City, State] | [Business Name]",
service areas as plain crawlable text in footer.

---

## Seed Data
Config above is fully populated. Use the Unsplash URLs from the gallery array
for all image references throughout the site. The site must look complete and
credible as a live demo with zero additional work.

---

## Deployment
- Vercel-ready
- README.md with client swap instructions
- All config in /config/client.ts only
- Run full production build before considering complete — zero errors required
