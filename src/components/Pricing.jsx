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
    <section id="pricing" className="relative py-28 px-6 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      
      {/* Purple ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="absolute top-20 w-[900px] h-[900px] bg-[#7C5CFF]/10 blur-[220px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
    
        <h5 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
          Simple, scalable pricing
        </h5>

        <p className="text-lg md:text-xl text-white/60 mb-16 max-w-2xl mx-auto">
          Start free. Upgrade when you're ready.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative rounded-[32px] p-8 text-left
                border backdrop-blur-xl transition-all duration-500
                ${
                  plan.popular
                    ? "border-[#7C5CFF]/40 bg-white/[0.04] shadow-[0_25px_80px_rgba(124,92,255,0.18)] scale-[1.03]"
                    : "border-white/10 bg-white/[0.02] hover:border-[#7C5CFF]/25"
                }
              `}
            >
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold bg-[#7C5CFF]/15 text-[#C4B5FD] border border-[#7C5CFF]/20">
                  Most popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold mb-2">
                {plan.name}
              </h3>

              {/* Subtitle */}
              <p className="text-white/50 mb-8 leading-relaxed">
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="mb-8 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-white/50 text-lg mb-1">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/75"
                  >
                    <Check
                      size={18}
                      className="text-[#7C5CFF] flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`
                  w-full py-4 rounded-2xl font-semibold transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#7C5CFF] to-[#9A7CFF] text-white shadow-[0_12px_35px_rgba(124,92,255,0.35)] hover:scale-[1.02]"
                      : "border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.04]"
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