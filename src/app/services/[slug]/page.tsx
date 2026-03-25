import { config } from "@/config/client";
import { StatusPill } from "@/components/ui/StatusPill";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return config.services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = config.services.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="flex flex-col w-full pb-24">
      {/* HERO */}
      <section className="relative min-h-[70svh] -mt-[88px] pt-[88px] flex flex-col justify-end px-6 pb-24 bg-[#F8F9FA]">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage || service.image}
            alt={service.name}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center gap-6">
          <StatusPill label={service.shortName} />
          <h1 className="font-bebas text-6xl md:text-8xl text-[#1A1A1A] uppercase tracking-wider font-bold italic max-w-4xl">
            {service.name}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-[#1A1A1A]/70 max-w-2xl font-medium">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-[#FFFFFF] py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2 flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="font-bebas text-4xl text-[#1A1A1A] uppercase tracking-wide font-bold italic">Overview</h2>
              <p className="font-sans text-lg text-[#1A1A1A]/70 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-bebas text-4xl text-[#1A1A1A] uppercase tracking-wide font-bold italic">What's Included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-black/5 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-[--color-accent-green] shrink-0" />
                    <span className="text-[#1A1A1A]/80 font-sans text-[15px] font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="sticky top-[120px]">
              <GlassCard className="p-8 flex flex-col gap-6 relative overflow-hidden bg-white/90 border-black/5 rounded-[32px] h-auto min-h-auto shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[--color-accent-green] via-white to-[--color-accent-red]" />
                
                <h3 className="font-bebas text-3xl text-[#1A1A1A] font-bold italic mt-2">Packages</h3>
                <div className="flex flex-col gap-4 relative z-10">
                  {service.packages.map((pkg, i) => (
                    <div key={i} className="flex flex-col gap-1 p-4 rounded-2xl bg-[#F8F9FA] border border-black/5">
                      <div className="flex justify-between items-center gap-4">
                        <span className="font-bold text-[#1A1A1A] font-sans">{pkg.name}</span>
                        <span className="font-bebas text-xl text-[--color-accent-red] font-bold italic">{pkg.price}</span>
                      </div>
                      <span className="text-sm text-[#1A1A1A]/60 font-sans font-medium">{pkg.desc}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" className="w-full mt-2 relative z-10 justify-center">
                  {service.cta}
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
