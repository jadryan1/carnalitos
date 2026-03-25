import { config } from "@/config/client";
import { StatusPill } from "@/components/ui/StatusPill";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full pb-24">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] -mt-[80px] pt-[80px] flex flex-col justify-center px-6 overflow-hidden bg-gray-950">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Car_Images/Supra_Hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay — gradient from left */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 100%)' }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center gap-8 lg:gap-10 mt-12 md:mt-24">
          <StatusPill label="Bergen County's Premier Detailers" />
          <h1 className="font-bebas text-7xl md:text-9xl lg:text-[180px] text-white uppercase tracking-wider leading-[0.8] drop-shadow-sm font-bold italic">
            YOUR CAR&apos;S <br />
            <span className="text-[#E31E24] drop-shadow-md">SPA DAY.</span>
          </h1>
          <p className="font-sans text-xl md:text-3xl text-white/80 max-w-3xl font-medium tracking-wide">
            {config.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href={config.navCTA.href}>
              <Button variant="primary" className="text-lg px-10 py-4 font-bold w-full sm:w-auto">
                {config.navCTA.label}
              </Button>
            </Link>
            <Link href="/services">
              <button className="relative inline-flex items-center justify-center px-10 py-4 text-lg rounded-full font-sans font-bold transition-all duration-300 border-2 border-white text-white bg-transparent hover:bg-white/10 w-full sm:w-auto">
                Explore Packages
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────── */}
      <section className="w-full py-14 px-6" style={{ background: 'var(--accent-grad)' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center gap-2">
                <span className="font-bebas text-4xl md:text-6xl text-white font-bold italic">{stat.value}</span>
                <span
                  className="font-sans font-bold text-xs tracking-wide uppercase"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE SERVICE CALLOUT ──────────────────────────── */}
      <section
        className="w-full py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #E31E24 0%, #B01018 100%)' }}
      >
        <div className="container mx-auto max-w-7xl flex flex-col items-center text-center gap-4">
          <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-wider font-bold italic">
            WE COME TO YOU
          </h2>
          <p className="font-sans text-lg md:text-xl font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Shop-quality results · Professional setup · At your home or workplace
          </p>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section className="bg-white py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-20">
            <StatusPill label="OUR PACKAGES" />
            <h2 className="font-bebas text-5xl md:text-7xl section-title max-w-2xl text-[#111111] uppercase font-bold italic">
              Mobile Detailing <span className="text-[#E31E24]">Packages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {config.services.slice(0, 4).map((service, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-8 bg-white relative overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-[#e0e0e0] hover:border-[#E31E24] rounded-[20px] min-h-[480px]"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
              >
                {/* Mexican Flag Top Border */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#4B8B2C] via-white to-[#E31E24]" />

                <h3 className="font-bebas text-4xl text-[#111111] mt-4 mb-2 group-hover:text-[#4B8B2C] transition-colors font-bold italic">
                  {service.name}
                </h3>
                <p className="text-[#555555] font-sans font-medium text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="font-bebas text-3xl font-bold italic mb-6 text-[#E31E24]">
                  {service.packages[0].price}
                </div>
                <ul className="flex flex-col gap-3 mb-8">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-sans font-bold text-[#111111]/80">
                      <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: 'var(--accent-green)' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="mt-auto w-full">
                  <Button variant="secondary" className="w-full justify-center">
                    View Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ───────────────────────────────────── */}
      <section className="bg-[#f8f8f8] py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-20">
            <StatusPill label="The Carnalitos Story" />
            <h2 className="font-bebas text-5xl md:text-7xl section-title max-w-2xl text-[#111111] uppercase font-bold italic">
              {config.about.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="relative aspect-square md:aspect-[4/3] overflow-hidden group"
              style={{ borderRadius: '24px', boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
            >
              <Image
                src={config.about.image}
                alt="About Carnalitos"
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
              <div className="space-y-6 text-[#555555] font-sans text-lg font-medium">
                {config.about.story.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="bg-white py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-20">
            <StatusPill label="Client Reviews" />
            <h2 className="font-bebas text-5xl md:text-7xl section-title max-w-2xl text-[#111111] uppercase font-bold italic">
              Don&apos;t Just Take <span className="text-[#E31E24]">Our Word For It</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((test, idx) => (
              <div
                key={idx}
                className="p-8 md:p-10 flex flex-col gap-6 bg-[#f8f8f8] rounded-[32px]"
                style={{ border: '1px solid var(--border)' }}
              >
                <div className="flex gap-1 justify-center md:justify-start">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: '#E31E24', color: '#E31E24' }} />
                  ))}
                </div>
                <p className="font-sans text-lg text-[#111111]/80 italic font-medium">&ldquo;{test.text}&rdquo;</p>
                <div className="mt-auto pt-6 border-t border-black/5">
                  <p className="font-bold text-[#111111] font-sans">{test.author}</p>
                  <p className="text-sm text-[#555555] font-sans font-bold tracking-wider">{test.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
