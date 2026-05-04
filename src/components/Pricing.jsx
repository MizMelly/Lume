import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "For side projects and prototypes.",
      price: "$0",
      period: "/mo",
      popular: false,
      features: [
        "Up to 10k events/mo",
        "1 project",
        "7-day data retention",
      ],
    },
    {
      name: "Pro",
      subtitle: "For growing product teams.",
      price: "$29",
      period: "/mo",
      popular: true,
      features: [
        "1M events/mo",
        "Unlimited projects",
        "1-year retention",
        "AI insights",
      ],
    },
    {
      name: "Enterprise",
      subtitle: "For organizations at scale.",
      price: "Custom",
      period: "",
      popular: false,
      features: [
        "Unlimited events",
        "SSO + SCIM",
        "Dedicated support",
        "Custom SLAs",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-20 md:py-28 px-4 bg-[#050505] text-white overflow-hidden border-t border-white/5"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="absolute top-24 w-[800px] h-[800px] bg-[#7C5CFF]/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Simple, scalable pricing
        </h2>

        {/* Subtitle */}
        <p className="text-white/60 mt-3 text-sm sm:text-base md:text-lg">
          Start free. Upgrade when you're ready.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col justify-between
                rounded-2xl p-7 text-left
                border transition-all duration-300
                ${
                  plan.popular
                    ? "border-[#7C5CFF] bg-[#0B0B0F] shadow-[0_0_60px_rgba(124,92,255,0.18)] scale-[1.02]"
                    : "border-white/10 bg-[#0A0A0A] hover:border-white/20"
                }
              `}
            >

              {/* ⭐ CENTER BADGE (MATCH IMAGE) */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs rounded-full bg-[#7C5CFF] text-white shadow-md">
                    Most popular
                  </span>
                </div>
              )}

              {/* Top Content */}
              <div>

                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <p className="text-white/50 text-sm mt-2">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-bold">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-white/50 mb-1">
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white/70 text-sm"
                    >
                      <Check size={18} className="text-[#7C5CFF]" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>

              {/* Button */}
              <button
                className={`
                  mt-10 w-full py-3 rounded-xl font-semibold transition
                  ${
                    plan.popular
                      ? "bg-[#7C5CFF] hover:bg-[#8b6bff]"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }
                `}
              >
                Get started
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Pricing;