export const config = {
  // ── IDENTITY ──────────────────────────────────────
  businessName: "Carnalitos Mobile Detailing",
  tagline: "BECAUSE YOUR CAR DESERVES A SPA DAY",
  description: "Carnalitos Mobile Detailing brings shop-standard quality directly to your location. Equipped with a fully kitted van and professional lighting, we ensure a clean, professional setup at your home or workplace without compromising on quality.",
  established: "2023",
  location: "Bergen County, NJ",

  // ── BRAND ─────────────────────────────────────────
  colors: {
    bg:           "#FFFFFF",        // Pure White Light Mode
    surface:      "rgba(255, 255, 255, 0.7)", // Frosted Glass Light
    surface2:     "rgba(248, 249, 250, 1)",   // Off-white alternating
    border:       "rgba(0, 0, 0, 0.08)",
    accent:       "#E31E24",        // Porsche Red
    accentGreen:  "#4B8B2C",        // Mascot Green
    accentGlow:   "rgba(75, 139, 44, 0.2)",   // Soft green drop shadow glow
    text:         "#1A1A1A",        // Deep Charcoal
    muted:        "rgba(26, 26, 26, 0.5)",
    white:        "#ffffff",
  },
  fonts: {
    display: "Bebas Neue",
    body:    "DM Sans",
  },

  // ── CONTACT ───────────────────────────────────────
  phone:              "201-289-1226",
  email:              "hello@carnalitos.com",
  address:            "Mobile Service, Bergen County, NJ",
  instagram:          "https://instagram.com/carnalitos_mobiledetailing",
  facebook:           "",
  googleReviewLink:   "",

  // ── HOURS ─────────────────────────────────────────
  hours: [
    { day: "Monday",    time: "8:00 AM to 6:00 PM" },
    { day: "Tuesday",   time: "8:00 AM to 6:00 PM" },
    { day: "Wednesday", "time": "8:00 AM to 6:00 PM" },
    { day: "Thursday",  "time": "8:00 AM to 6:00 PM" },
    { day: "Friday",    "time": "8:00 AM to 6:00 PM" },
    { day: "Saturday",  "time": "9:00 AM to 4:00 PM" },
    { day: "Sunday",    "time": "Closed", closed: true },
  ],

  // ── NAV CTA ───────────────────────────────────────
  navCTA: {
    label: "Book a Spa Day",
    href:  "/contact",
  },

  // ── CERTIFICATIONS ────────────────────────────────
  certifications: [
    { name: "Professional Wash", logo: "" },
    { name: "Paint Correction", logo: "" },
    { name: "Ceramic Coating", logo: "" },
  ],

  // ── STATS ─────────────────────────────────────────
  stats: [
    { value: "100%",    label: "Mobile Service" },
    { value: "5★",      label: "Average Rating" },
    { value: "50+",     label: "Details Completed" },
    { value: "NJ & PA", label: "Areas Covered" },
  ],

  // ── SERVICES ──────────────────────────────────────
  services: [
    {
      slug:        "exterior-wash",
      name:        "Exterior Wash",
      shortName:   "Wash",
      tagline:     "A clean slate.",
      description: "A thorough exterior hand wash removing surface dirt and grime, leaving your car looking fresh and pristine.",
      image:       "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
      heroImage:   "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1600&q=80",
      features: [
        "Hand wash and dry",
        "Wheels and tires cleaned",
        "Windows cleaned outside",
        "Tire dressing applied",
      ],
      packages: [
        { name: "Standard Wash", price: "$50", desc: "Basic exterior wash and dry" },
      ],
      cta: "Book Exterior Wash",
    },
    {
      slug:        "exterior-full-detail",
      name:        "Exterior Full Detail",
      shortName:   "Ext Detail",
      tagline:     "Next-level shine.",
      description: "A comprehensive exterior detail including decontamination and a protective sealant for long-lasting gloss.",
      image:       "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
      heroImage:   "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1600&q=80",
      features: [
        "In-depth exterior wash",
        "Clay bar decontamination",
        "Premium wax or sealant application",
        "Trim conditioning",
      ],
      packages: [
        { name: "Full Exterior", price: "$150", desc: "Decontamination and protection" },
      ],
      cta: "Book Exterior Detail",
    },
    {
      slug:        "interior-detail",
      name:        "Interior Detail",
      shortName:   "Int Detail",
      tagline:     "Clean where you sit.",
      description: "A complete overhaul of your car's interior. We vacuum, steam clean, and condition surfaces to make the cabin feel brand new.",
      image:       "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      heroImage:   "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80",
      features: [
        "Deep vacuuming",
        "Steam cleaning and sanitization",
        "Leather and vinyl conditioning",
        "Stain removal treatment",
      ],
      packages: [
        { name: "Full Interior", price: "$200", desc: "Complete deep cleaning of cabin" },
      ],
      cta: "Book Interior Detail",
    },
    {
      slug:        "full-transformation",
      name:        "Full Transformation",
      shortName:   "Full Detail",
      tagline:     "The ultimate spa package.",
      description: "Combines our exterior full detail and interior detail for a complete bumper-to-bumper transformation.",
      image:       "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=80",
      heroImage:   "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1600&q=80",
      features: [
        "Combined exterior & interior detail",
        "Full decontamination",
        "Leather treatment",
        "Premium protection applied",
      ],
      packages: [
        { name: "The Spa Day", price: "$350", desc: "Complete vehicle transformation" },
      ],
      cta: "Book Full Detail",
    }
  ],

  // ── PROCESS ───────────────────────────────────────
  process: [
    { step: "01", title: "Book Your Spot",       body: "DM us on Instagram or give us a call to lock in your appointment." },
    { step: "02", title: "We Come To You",       body: "Our fully kitted mobile van arrives at your home or workplace in Bergen County." },
    { step: "03", title: "The Spa Treatment",    body: "We perform high-end, shop-standard detailing using professional lighting and tools." },
    { step: "04", title: "Final Reveal",         body: "You inspect the flawless finish. Your car feels brand new again without you having to leave home." },
  ],

  // ── TESTIMONIALS ──────────────────────────────────
  testimonials: [
    { text: "Best mobile detailer in Bergen County. Made my Tesla look better than delivery day.", author: "Mike D.", location: "Bergen County, NJ", stars: 5 },
    { text: "Super convenient that they come to your house. They brought their own water and power. True professionals.", author: "Sarah L.", location: "Bergen County, NJ", stars: 5 },
    { text: "The ceramic coating work is flawless. Dirt just slides right off my truck now.", author: "Anthony P.", location: "Bergen County, NJ", stars: 5 },
  ],

  // ── GALLERY ───────────────────────────────────────
  gallery: [
    {
      title: "Full Interior & Exterior Detail",
      serviceTag: "Full Detail",
      before: "/Car_Images/Black%20Gle%201.jpg",
      after: "/Car_Images/Black%20GLE%20seat.jpg",
      src: "/Car_Images/Black%20Gle%201.jpg",
      service: "Full Detail", caption: "Full Interior & Exterior Detail",
    },
    {
      title: "Exterior & Wheel Detail",
      serviceTag: "Wheel & Rim Clean",
      before: "/Car_Images/GReyGLE.jpg",
      after: "/Car_Images/GreyGleWheel.jpg",
      src: "/Car_Images/GReyGLE.jpg",
      service: "Wheel & Rim", caption: "Exterior & Wheel Detail",
    },
    {
      title: "Interior & Exterior Clean",
      serviceTag: "Interior Detail",
      before: "/Car_Images/GOLF1.jpg",
      after: "/Car_Images/GolfSeat.jpg",
      src: "/Car_Images/GOLF1.jpg",
      service: "Interior Detail", caption: "Interior & Exterior Clean",
    },
    {
      title: "Exterior & Rim Work",
      serviceTag: "Exterior Detail",
      before: "/Car_Images/Z1.jpg",
      after: "/Car_Images/ZWheel.jpg",
      src: "/Car_Images/Z1.jpg",
      service: "Exterior Detail", caption: "Exterior & Rim Work",
    },
    {
      title: "Deep Interior & Exterior",
      serviceTag: "Full Detail",
      before: "/Car_Images/Rav4.jpg",
      after: "/Car_Images/RAV4%20seat.jpg",
      src: "/Car_Images/Rav4.jpg",
      service: "Full Detail", caption: "Deep Interior & Exterior",
    },
    {
      title: "Exterior & Rim Restoration",
      serviceTag: "Wheel & Rim Detail",
      before: "/Car_Images/340-1.jpg",
      after: "/Car_Images/340Wheel.jpg",
      src: "/Car_Images/340-1.jpg",
      service: "Wheel & Rim", caption: "Exterior & Rim Restoration",
    },
  ],

  // ── SERVICE AREAS ─────────────────────────────────
  serviceAreas: [
    "Bergen County, NJ", "Hudson County, NJ", "Essex County, NJ", "PA Mainline & Surrounding Areas"
  ],

  // ── ABOUT ─────────────────────────────────────────
  about: {
    headline: "YOUR CAR’S SPA DAY. DELIVERED.",
    story: [
      "Carnalitos Mobile Detailing brings shop-standard quality directly to your location. Equipped with a fully kitted van and professional lighting, we ensure a clean, professional setup at your home or workplace without compromising on quality.",
      "We serve luxury car owners, enthusiasts, and busy professionals in Bergen County and the PA Mainline who value convenience. This shop stands out due to its fully kitted mobile van and a unique brand personality that blends street-style mascot graphics with professional execution."
    ],
    image: "/Car_Images/Supra1.jpg",
    pillars: [
      { number: "01", title: "We Come To You",   body: "Your home, your job, your block. We bring everything needed for a professional detail directly to you — no shop visit required." },
      { number: "02", title: "Shop-Level Results",    body: "Professional equipment, premium products, zero shortcuts — whether it's a daily driver or a built car, the standard never drops." },
      { number: "03", title: "Built for Car People",   body: "From stock daily drivers to modified builds, we treat every car like it matters. Because to you, it does." },
    ],
  },

  // ── QUOTE FORM ────────────────────────────────────
  quoteForm: {
    fields: [
      "Full Name", "Phone", "Email",
      "Vehicle Year", "Vehicle Make", "Vehicle Model",
      "Service (dropdown)", "Message",
    ],
    submitLabel: "Request Spa Treatment",
    formspreeEndpoint: "https://formspree.io/f/YOUR_ID",
  },
};
