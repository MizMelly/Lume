import { Zap, Activity, Shield } from "lucide-react";

const Features = () => {
  const cards = [
    {
      icon: <Zap size={22} className="text-[#7C5CFF]" />,
      title: "Fast performance",
      desc: "Sub-second queries on billions of events.",
    },
    {
      icon: <Activity size={22} className="text-[#7C5CFF]" />,
      title: "Real-time analytics",
      desc: "Live dashboards that update instantly.",
    },
    {
      icon: <Shield size={22} className="text-[#7C5CFF]" />,
      title: "Secure data",
      desc: "End-to-end encryption and role-based access.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#050505] text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h5 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-center mb-3 sm:mb-4 leading-tight">
          Everything you need, nothing you don’t
        </h5>

        {/* Subtitle */}
        <p className="text-center text-white/50 max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16 text-sm sm:text-base md:text-lg leading-relaxed">
          A focused toolkit so your team can ship faster and learn faster.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

          {cards.map((card, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden
                p-6 sm:p-7 md:p-8
                rounded-2xl sm:rounded-3xl
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-sm
                transition-all duration-500
                hover:scale-[1.03]
                hover:border-[#7C5CFF]/40
                hover:shadow-[0_20px_60px_rgba(124,92,255,0.15)]
              "
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#7C5CFF]/25 blur-3xl rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div className="mb-5 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#7C5CFF]/10 flex items-center justify-center border border-[#7C5CFF]/20">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;