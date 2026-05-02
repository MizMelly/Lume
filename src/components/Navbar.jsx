import React from "react";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-10 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-2xl bg-[#7C5CFF] shadow-[0_0_25px_rgba(124,92,255,0.45)]"></div>
            <span className="text-white text-[28px] font-bold tracking-tight">
              Lumen
            </span>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
            <a
              href="#"
              className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-300 font-medium"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-300 font-medium"
            >
              Pricing
            </a>

            <a
              href="#dashboardsection"
              className="text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-300 font-medium"
            >
              Product
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden md:block text-[15px] text-[#A1A1AA] hover:text-white transition-colors duration-300 font-medium">
              Sign in
            </button>

            <button className="group inline-flex items-center gap-2 px-7 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#7C5CFF] to-[#9A7CFF] shadow-[0_10px_30px_rgba(124,92,255,0.35)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(124,92,255,0.45)] transition-all duration-300">
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;