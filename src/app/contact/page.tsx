import { config } from "@/config/client";
import { StatusPill } from "@/components/ui/StatusPill";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* HEADER */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#FFFFFF]">
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center gap-6">
          <StatusPill label="BOOK YOUR DETAIL" />
          <h1 className="font-bebas text-6xl md:text-8xl text-[#1A1A1A] uppercase tracking-wider font-bold italic">
            Book A Spa Day
          </h1>
          <p className="font-sans text-xl text-[#1A1A1A]/70 max-w-2xl font-medium tracking-wide">
            Ready to give your car the treatment it deserves? Contact us below to schedule your mobile detailing service.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="bg-[#F8F9FA] py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* INFO */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="font-bebas text-4xl text-[#1A1A1A] font-bold italic">Contact Information</h2>
              <ul className="flex flex-col gap-6 font-sans text-[#1A1A1A]/80 font-medium">
                <li className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-black/5 shadow-sm shrink-0">
                    <Phone className="w-5 h-5 text-[--color-accent-red]" />
                  </div>
                  <span className="text-lg">{config.phone}</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-black/5 shadow-sm shrink-0">
                    <Mail className="w-5 h-5 text-[--color-accent-red]" />
                  </div>
                  <span className="text-lg">{config.email}</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-black/5 shadow-sm shrink-0">
                    <MapPin className="w-5 h-5 text-[--color-accent-red]" />
                  </div>
                  <span className="text-lg">{config.address}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="font-bebas text-4xl text-[#1A1A1A] font-bold italic">Business Hours</h2>
              <ul className="flex flex-col gap-3 font-sans text-[#1A1A1A]/80 max-w-sm font-medium">
                {config.hours.map((h, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-black/5 pb-3 last:border-0 last:pb-0">
                    <span className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[--color-accent-red]/50" />
                      {h.day}
                    </span>
                    <span className={h.closed ? "text-[--color-accent-red]" : "text-[#1A1A1A]/70"}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <h2 className="font-bebas text-4xl text-[#1A1A1A] font-bold italic">Service Areas</h2>
              <p className="text-[#1A1A1A]/60 font-sans leading-relaxed font-medium">
                {config.serviceAreas.join(", ")}
              </p>
            </div>
          </div>
          
          {/* FORM */}
          <GlassCard className="p-8 md:p-10 flex flex-col gap-8 h-auto bg-white/90 border-black/5">
            <div className="flex flex-col gap-2">
              <h2 className="font-bebas text-4xl text-[#1A1A1A] font-bold italic">Request A Quote</h2>
              <p className="font-sans text-[#1A1A1A]/60 font-medium text-sm">Fill out the form below and we'll get back to you shortly to confirm your booking.</p>
            </div>
            
            <form action={config.quoteForm.formspreeEndpoint} method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-[#1A1A1A]/50 uppercase font-bold tracking-widest font-sans">Full Name</label>
                  <input id="name" name="name" type="text" required className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#1A1A1A] font-sans focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs text-[#1A1A1A]/50 uppercase font-bold tracking-widest font-sans">Phone</label>
                  <input id="phone" name="phone" type="tel" required className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#1A1A1A] font-sans focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition-all shadow-sm" placeholder="(555) 000-0000" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-[#1A1A1A]/50 uppercase font-bold tracking-widest font-sans">Email</label>
                <input id="email" name="email" type="email" required className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#1A1A1A] font-sans focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition-all shadow-sm" placeholder="john@example.com" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-xs text-[#1A1A1A]/50 uppercase font-bold tracking-widest font-sans">Service Needed</label>
                <select id="service" name="service" required className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#1A1A1A] font-sans focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition-all appearance-none cursor-pointer shadow-sm">
                  <option value="" className="text-[#1A1A1A]/50">Select a service...</option>
                  {config.services.map((s, i) => (
                    <option key={i} value={s.slug} className="text-[#1A1A1A]">{s.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-[#1A1A1A]/50 uppercase font-bold tracking-widest font-sans">Message / Vehicle Info</label>
                <textarea id="message" name="message" required rows={4} className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-[#1A1A1A] font-sans focus:outline-none focus:border-[--color-accent-red] focus:ring-1 focus:ring-[--color-accent-red] transition-all resize-none shadow-sm" placeholder="Tell us about your car (Year, Make, Model) and any specific issues..."></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full mt-2 justify-center">
                {config.quoteForm.submitLabel}
              </Button>
            </form>
          </GlassCard>

        </div>
      </section>
    </div>
  );
}
