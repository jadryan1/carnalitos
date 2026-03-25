"use client";

import { config } from "@/config/client";
import { StatusPill } from "@/components/ui/StatusPill";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface TransformationCardProps {
  title: string;
  before: string;
  after: string;
  serviceTag: string;
}

function TransformationCard({ title, before, after, serviceTag }: TransformationCardProps) {
  const [showAfter, setShowAfter] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleClick() {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (showAfter) {
      setShowAfter(false);
    } else {
      setShowAfter(true);
      timerRef.current = setTimeout(() => setShowAfter(false), 5000);
    }
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="flex flex-col bg-white overflow-hidden rounded-[20px]"
      style={{ border: '1px solid var(--border)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
    >
      {/* Title */}
      <div className="px-5 pt-5 pb-3">
        <h3 className="font-bebas text-xl text-[#111111] font-bold tracking-wide">{title}</h3>
      </div>

      {/* Clickable image container — 16/10 aspect ratio */}
      <div
        className="relative w-full cursor-pointer select-none"
        style={{ aspectRatio: '16 / 10', overflow: 'hidden' }}
        onClick={handleClick}
      >
        {/* Before image */}
        <Image
          src={before}
          alt={`${title} — Before`}
          fill
          className="object-cover absolute inset-0"
          style={{ opacity: showAfter ? 0 : 1, transition: 'opacity 0.4s ease' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* After image */}
        <Image
          src={after}
          alt={`${title} — After`}
          fill
          className="object-cover absolute inset-0"
          style={{ opacity: showAfter ? 1 : 0, transition: 'opacity 0.4s ease' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* State label overlay */}
        <div className="absolute bottom-3 left-3">
          <span
            className="px-2.5 py-1 rounded-full font-bold font-sans tracking-widest uppercase text-white"
            style={{
              fontSize: '0.6rem',
              background: showAfter ? 'var(--accent)' : 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(4px)',
              transition: 'background 0.4s ease',
            }}
          >
            {showAfter ? 'AFTER' : 'BEFORE'}
          </span>
        </div>
      </div>

      {/* Footer — service tag only */}
      <div className="px-5 py-4 flex items-center justify-end">
        <span
          className="px-3 py-1 rounded-full font-bold font-sans tracking-wide uppercase text-white"
          style={{ fontSize: '0.65rem', background: 'var(--accent-green)' }}
        >
          {serviceTag}
        </span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full pb-24">

      {/* HEADER */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-[#f8f8f8]">
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center gap-6">
          <StatusPill label="OUR WORK" />
          <h1 className="font-bebas text-6xl md:text-8xl text-[#111111] uppercase tracking-wider font-bold italic">
            The Gallery
          </h1>
          <p className="font-sans text-xl text-[#555555] max-w-2xl font-medium">
            Tap any photo to reveal the transformation.
          </p>
        </div>
      </section>

      {/* TRANSFORMATION GALLERY */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.gallery.map((item, idx) => (
            <TransformationCard
              key={idx}
              title={item.title}
              before={item.before}
              after={item.after}
              serviceTag={item.serviceTag}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
