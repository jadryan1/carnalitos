import { config } from "@/config/client";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusPill } from "@/components/ui/StatusPill";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* HEADER */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden bg-[#FFFFFF]">
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center gap-6">
          <StatusPill label="Our Expertise" />
          <h1 className="font-bebas text-6xl md:text-8xl text-[#1A1A1A] uppercase tracking-wider font-bold italic">
            Services & Packages
          </h1>
          <p className="font-sans text-xl text-[#1A1A1A]/70 max-w-2xl font-medium tracking-wide">
            Comprehensive detailing solutions delivered directly to you. From maintenance washes to complete transformations.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-[#F8F9FA] py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {config.services.slice(0, 4).map((service, idx) => (
              <GlassCard key={idx} className="group flex flex-col p-8 bg-white/90 hover:bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(75,139,44,0.08)] relative overflow-hidden rounded-[32px] min-h-[480px]">
                {/* Mexican Flag Top Border */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[--color-accent-green] via-white to-[--color-accent-red]" />
                
                <h3 className="font-bebas text-4xl text-[#1A1A1A] mt-4 mb-2 group-hover:text-[--color-accent-green] transition-colors font-bold italic">
                  {service.name}
                </h3>
                <p className="text-[#1A1A1A]/60 font-sans font-medium text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="font-bebas text-3xl text-[--color-accent-red] mb-6 font-bold italic">
                  {service.packages[0].price}
                </div>
                <ul className="flex flex-col gap-3 mb-8">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-sans font-bold text-[#1A1A1A]/80">
                      <CheckCircle2 className="w-5 h-5 text-[--color-accent-green] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="mt-auto w-full">
                  <Button variant="secondary" className="w-full bg-[#F8F9FA] hover:bg-white group-hover:border-[--color-accent-red] justify-center">
                    View Details
                  </Button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* PROCESS */}
      <section className="bg-[#FFFFFF] py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <StatusPill label="How It Works" />
            <h2 className="font-bebas text-5xl md:text-7xl section-title max-w-2xl text-[#1A1A1A] uppercase font-bold italic">
              The <span className="text-[--color-accent-red]">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {config.process.map((step, idx) => (
              <GlassCard key={idx} className="p-8 h-full min-h-[300px] flex flex-col gap-4 relative bg-[#F8F9FA]/60 hover:bg-[#F8F9FA] rounded-[32px] border-black/5">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] font-bebas text-8xl text-[#1A1A1A] transition-transform group-hover:scale-110 duration-500 pointer-events-none">
                  {step.step}
                </div>
                <span className="font-bebas text-4xl text-[--color-accent-red] relative z-10 font-bold italic">{step.step}</span>
                <h3 className="font-bold text-2xl text-[#1A1A1A] font-sans relative z-10 tracking-wide">{step.title}</h3>
                <p className="text-[#1A1A1A]/70 font-sans font-medium relative z-10 text-sm leading-relaxed">{step.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
