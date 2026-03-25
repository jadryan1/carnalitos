"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { config } from "@/config/client";
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center bg-[#0a0a0a] border-b border-[#E31E24]/25 px-6 md:px-12 h-24 md:h-[160px]"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        className="relative flex items-center w-full h-full max-w-7xl mx-auto"
      >

        {/* ── Logo ── */}
        <Link href="/" className="z-50 shrink-0 flex items-center absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 md:mr-12">
          <Image
            src="/carnalitoslogo.png"
            alt="Carnalitos Mobile Detailing"
            width={112}
            height={112}
            className="object-contain block h-[105px] md:h-[112px] w-auto shrink-0"
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
          onClick={() => {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
          }}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {/* Dark overlay */}
      <div
        className="md:hidden fixed inset-0 z-[9998]"
        style={{
          background: "rgba(0,0,0,0.6)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={() => {
          setIsOpen(false);
          document.body.style.overflow = "";
        }}
      />

      {/* Drawer panel */}
      <div
        className="md:hidden fixed top-0 right-0 z-[9999] flex flex-col overflow-y-auto"
        style={{
          width: "75vw",
          height: "100vh",
          background: "#0a0a0a",
          borderLeft: "1px solid rgba(227,30,36,0.3)",
          padding: "32px 28px",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Top row: Logo + X */}
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => { setIsOpen(false); document.body.style.overflow = ""; }}>
            <Image
              src="/carnalitoslogo.png"
              alt="Carnalitos Mobile Detailing"
              width={112}
              height={44}
              className="object-contain"
              style={{ height: "44px", width: "auto" }}
              priority
            />
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "";
            }}
            aria-label="Close menu"
            style={{ background: "none", border: "none", color: "#ffffff", fontSize: "24px", lineHeight: 1, cursor: "pointer" }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "24px 0" }} />

        {/* Nav links */}
        <nav className="flex flex-col">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  document.body.style.overflow = "";
                }}
                className="font-bebas block"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "0.15em",
                  color: isActive ? "#E31E24" : "#ffffff",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom CTAs */}
        <div className="flex flex-col" style={{ gap: "10px" }}>
          <a
            href="tel:2012891226"
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "";
            }}
            style={{
              display: "block",
              width: "100%",
              padding: "0.85rem",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#ffffff",
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textDecoration: "none",
            }}
          >
            CALL 201.289.1226
          </a>
          <Link
            href={config.navCTA.href}
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "";
            }}
            style={{
              display: "block",
              width: "100%",
              padding: "0.85rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #E31E24, #B01018)",
              color: "#ffffff",
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              boxShadow: "0 4px 20px rgba(227,30,36,0.35)",
              textDecoration: "none",
            }}
          >
            BOOK A SPA DAY →
          </Link>
        </div>
      </div>
    </header>
  );
}
