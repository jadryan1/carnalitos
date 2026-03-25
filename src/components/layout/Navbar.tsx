"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { config } from "@/config/client";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 80) {
        setIsVisible(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "160px",
        margin: 0,
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        background: "rgba(10, 10, 10, 1)",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "1px solid rgba(227, 30, 36, 0.25)",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        className="flex items-center w-full"
        style={{ height: "160px", maxWidth: "1280px", margin: "0 auto" }}
      >

        {/* ── Logo ── */}
        <Link href="/" className="relative z-50 shrink-0 flex items-center" style={{ marginRight: "48px" }}>
          <Image
            src="/carnalitoslogo.png"
            alt="Carnalitos Mobile Detailing"
            width={112}
            height={112}
            className="object-contain block"
            style={{ height: "112px", maxHeight: "112px", width: "auto", flexShrink: 0 }}
            priority
          />
        </Link>

        {/* ── Desktop Nav Links ── */}
        <nav className="hidden md:flex items-center flex-1" style={{ gap: "40px", justifyContent: "center" }}>
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-bebas transition-colors duration-150 shrink-0"
                style={{
                  fontSize: "1.1rem",
                  letterSpacing: "0.15em",
                  color: isActive ? "#E31E24" : "#ffffff",
                  paddingBottom: "4px",
                  borderBottom: isActive ? "2px solid #E31E24" : "2px solid transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E31E24")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? "#E31E24" : "#ffffff")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Desktop CTA — two stacked buttons ── */}
        <div
          className="hidden md:flex flex-col shrink-0"
          style={{ gap: "6px", alignItems: "flex-end", justifyContent: "center", height: "100%", marginLeft: "48px" }}
        >
          {/* Call button */}
          <a href="tel:2012891226">
            <button
              className="flex items-center gap-2 font-sans font-medium text-white w-full transition-colors duration-200 hover:border-white/40"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "9999px",
                padding: "0.5rem 1.25rem",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                whiteSpace: "nowrap",
              }}
            >
              <Phone className="w-3 h-3 shrink-0" />
              CALL 201.289.1226
            </button>
          </a>

          {/* Book button */}
          <Link href={config.navCTA.href}>
            <button
              className="flex items-center justify-center gap-2 font-sans font-medium text-white w-full transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #E31E24 0%, #B01018 100%)",
                borderRadius: "9999px",
                padding: "0.5rem 1.25rem",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                boxShadow: "0 4px 20px rgba(227,30,36,0.45)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 8px 32px rgba(227,30,36,0.65)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 4px 20px rgba(227,30,36,0.45)")
              }
            >
              BOOK A SPA DAY
              <ArrowRight className="w-3 h-3 shrink-0" />
            </button>
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden relative z-50 ml-auto text-white active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* ── Mobile Full-Screen Overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center px-8 py-16 transition-all duration-400",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "#0a0a0a" }}
      >
        {/* Mobile Nav Links */}
        <nav className="flex flex-col items-center w-full max-w-xs mb-12" style={{ gap: "0" }}>
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-bebas w-full text-center border-b border-white/5 transition-colors duration-200"
                style={{
                  fontSize: "2.5rem",
                  letterSpacing: "0.1em",
                  color: isActive ? "#E31E24" : "rgba(255,255,255,0.9)",
                  padding: "1rem 0",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile CTA Buttons */}
        <div className="flex flex-col w-full max-w-xs" style={{ gap: "10px" }}>
          <a href="tel:2012891226" className="w-full">
            <button
              className="w-full flex items-center justify-center gap-2 font-sans font-medium text-white"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "9999px",
                padding: "0.9rem 1.5rem",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
              }}
            >
              <Phone className="w-4 h-4" />
              CALL 201.289.1226
            </button>
          </a>
          <Link href={config.navCTA.href} className="w-full">
            <button
              className="w-full flex items-center justify-center gap-2 font-sans font-medium text-white"
              style={{
                background: "linear-gradient(135deg, #E31E24 0%, #B01018 100%)",
                borderRadius: "9999px",
                padding: "0.9rem 1.5rem",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                boxShadow: "0 4px 20px rgba(227,30,36,0.45)",
              }}
            >
              BOOK A SPA DAY
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
