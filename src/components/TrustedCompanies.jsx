import React from "react";

const companies = [
  {
    name: "Northwind",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 20L12 4l8 16H4z" />
      </svg>
    ),
  },
  {
    name: "Helix Labs",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M6 6l12 12M6 18L18 6" />
      </svg>
    ),
  },
  {
    name: "Quantix",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v16M4 12h16" />
      </svg>
    ),
  },
  {
    name: "Lattice",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="5" y="5" width="5" height="5" />
        <rect x="14" y="5" width="5" height="5" />
        <rect x="5" y="14" width="5" height="5" />
        <rect x="14" y="14" width="5" height="5" />
      </svg>
    ),
  },
  {
    name: "Polaris",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
      </svg>
    ),
  },
  {
    name: "Voltage",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
];

const TrustedCompanies = () => {
  return (
    <section className="py-10 sm:py-14 border-b border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/50 mb-6 sm:mb-8">
          Trusted by teams at fast-growing companies
        </p>

        {/* Companies */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-4 text-white/40">

          {companies.map((company, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-2 text-sm sm:text-base cursor-default transition"
            >
              {/* Icon */}
              <span className="opacity-70 group-hover:opacity-100 transition">
                {company.icon}
              </span>

              {/* Name */}
              <span className="group-hover:text-white transition">
                {company.name}
              </span>

              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] bg-white text-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {company.name}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;