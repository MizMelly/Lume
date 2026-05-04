import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-black/90 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-2xl bg-[#7C5CFF] shadow-[0_0_25px_rgba(124,92,255,0.45)]" />
              <span className="text-white text-xl sm:text-2xl font-bold">
                Lumen
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-14">
              <a href="#" className="text-sm text-[#A1A1AA] hover:text-white">
                Features
              </a>
              <a href="#pricing" className="text-sm text-[#A1A1AA] hover:text-white">
                Pricing
              </a>
              <a href="#dashboardsection" className="text-sm text-[#A1A1AA] hover:text-white">
                Product
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button className="text-sm text-[#A1A1AA] hover:text-white">
                Sign in
              </button>

              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7C5CFF] to-[#9A7CFF]">
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </button>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(true)}
            >
              <Menu size={26} />
            </button>

          </div>
        </div>
      </header>

      {/* ✅ MOBILE MENU (SEPARATE LAYER — FIXED STRUCTURE) */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl">

          {/* close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          {/* menu */}
          <div className="h-full flex flex-col items-center justify-center gap-8">

            <a onClick={() => setOpen(false)} href="#" className="text-lg text-[#A1A1AA] hover:text-white">
              Features
            </a>

            <a onClick={() => setOpen(false)} href="#pricing" className="text-lg text-[#A1A1AA] hover:text-white">
              Pricing
            </a>

            <a onClick={() => setOpen(false)} href="#dashboardsection" className="text-lg text-[#A1A1AA] hover:text-white">
              Product
            </a>

            <button className="text-lg text-[#A1A1AA] hover:text-white">
              Sign in
            </button>

            <button className="mt-4 inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7C5CFF] to-[#9A7CFF]">
              Get Started <ArrowRight size={16} />
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;