import React from "react";

const companies = [
  "Acme",
  "Globex",
  "Initech",
  "Umbrella",
  "Soylent",
  "Hooli",
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
        <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 text-lg sm:text-2xl md:text-3xl font-semibold text-white/50">

          {companies.map((company, index) => (
            <div
              key={index}
              className="cursor-default hover:text-white/80 transition-colors duration-300"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TrustedCompanies;