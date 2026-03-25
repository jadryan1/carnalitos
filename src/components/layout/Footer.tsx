import Link from "next/link";
import Image from "next/image";
import { config } from "@/config/client";
import { Camera, Globe, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] rounded-t-[24px] pt-16 pb-8 border-t border-white/5 mt-auto relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/carnalitoslogo.png"
                alt="Carnalitos Mobile Detailing"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </Link>
            <p className="text-white/60 font-sans text-sm leading-relaxed max-w-xs">
              {config.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              {config.instagram && (
                <a href={config.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:border-[--color-accent-red] hover:shadow-[0_0_15px_rgba(227,30,36,0.3)] transition-all group">
                  <Camera className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              )}
              {config.facebook && (
                <a href={config.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:border-[--color-accent-red] hover:shadow-[0_0_15px_rgba(227,30,36,0.3)] transition-all group">
                  <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bebas tracking-wide text-2xl text-white">Navigation</h4>
            <nav className="flex flex-col gap-3 font-sans text-sm">
              <Link href="/" className="text-white/60 hover:text-[--color-accent-red] transition-colors w-fit">Home</Link>
              <Link href="/services" className="text-white/60 hover:text-[--color-accent-red] transition-colors w-fit">Services</Link>
              <Link href="/gallery" className="text-white/60 hover:text-[--color-accent-red] transition-colors w-fit">Gallery</Link>
              <Link href="/about" className="text-white/60 hover:text-[--color-accent-red] transition-colors w-fit">About</Link>
              <Link href="/contact" className="text-white/60 hover:text-[--color-accent-red] transition-colors w-fit">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bebas tracking-wide text-2xl text-white">Contact</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[--color-accent-red] shrink-0" />
                <span>{config.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[--color-accent-red] shrink-0" />
                <span>{config.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[--color-accent-red] shrink-0" />
                <span>{config.address}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bebas tracking-wide text-2xl text-white">Hours</h4>
            <ul className="flex flex-col gap-2 font-sans text-sm text-white/60">
              {config.hours.map((h, i) => (
                <li key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                  <span>{h.day}</span>
                  <span className={h.closed ? "text-[--color-accent-red]" : ""}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO Service Areas */}
        <div className="border-t border-white/10 pt-8 pb-6 text-center">
          <p className="text-[10px] text-white/40 font-sans max-w-4xl mx-auto leading-relaxed uppercase tracking-wider">
            Proudly Serving: {config.serviceAreas.join(" | ")}
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/40">
          <p>&copy; {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
          <p>Powered by Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
