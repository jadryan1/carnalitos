import { config } from "@/config/client";
import { StatusPill } from "@/components/ui/StatusPill";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* HEADER */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden bg-[#FFFFFF]">
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center gap-6">
          <StatusPill label="The Carnalitos Story" />
          <h1 className="font-bebas text-6xl md:text-8xl text-[#1A1A1A] uppercase tracking-wider font-bold italic">
            About Us
          </h1>
          <p className="font-sans text-xl text-[#1A1A1A]/70 max-w-2xl font-medium tracking-wide">
            We are redefining the detailing experience by bringing shop-level perfection directly to you.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#F8F9FA] py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl group">
            <Image
              src={config.about.image}
              alt="About Carnalitos"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/20 via-transparent to-transparent" />
            <div className="absolute inset-0 box-shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] rounded-[32px] pointer-events-none" />
          </div>
          
          <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
            <h2 className="font-bebas text-5xl md:text-6xl text-[#1A1A1A] section-title leading-tight uppercase font-bold italic">
              YOUR CAR'S <span className="text-[--color-accent-red]">SPA DAY</span>.
            </h2>
            <div className="space-y-6 text-[#1A1A1A]/70 font-sans text-lg font-medium">
              {config.about.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-[#FFFFFF] py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <StatusPill label="Core Values" />
            <h2 className="font-bebas text-5xl md:text-7xl section-title max-w-2xl text-[#1A1A1A] uppercase font-bold italic">
              Our <span className="text-[--color-accent-red]">Pillars</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.about.pillars.map((pillar, idx) => (
              <GlassCard key={idx} className="p-10 flex flex-col gap-6 group h-auto justify-start border-black/5 hover:border-[--color-accent-red]/40 bg-[#F8F9FA]/80 rounded-[32px]">
                <span className="font-bebas text-6xl text-[--color-accent-red] opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all origin-left font-bold italic">
                  {pillar.number}
                </span>
                <h3 className="font-bold text-2xl text-[#1A1A1A] font-sans tracking-wide">{pillar.title}</h3>
                <p className="text-[#1A1A1A]/70 font-sans font-medium leading-relaxed">
                  {pillar.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
