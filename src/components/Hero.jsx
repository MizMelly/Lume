import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] border-b border-white/5">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.18),transparent_60%)] pointer-events-none" />

      {/* ✅ FIX: top padding accounts for fixed navbar */}
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-[#A1A1AA] mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#7C5CFF]"></span>
          New: AI-powered insights are live
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl mx-auto text-[34px] sm:text-[48px] md:text-[64px] font-bold tracking-tight leading-tight text-white">
          Analytics that finally{" "}
          <span className="bg-gradient-to-r from-white via-[#958bbe] to-[#7C5CFF] bg-clip-text text-transparent">
            keep up <br className="hidden sm:block" /> with you
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base text-[#A1A1AA]">
          Lumen turns raw product data into clear, real-time decisions. Built for modern SaaS teams who move fast and care about craft.
        </p>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#7C5CFF] to-[#9A7CFF] hover:scale-[1.02] transition">
            Start free trial
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </button>

          <button className="px-6 py-3 rounded-lg font-semibold text-white border border-white/10 hover:bg-white/[0.04] transition">
            See demo
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;