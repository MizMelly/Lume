import dashboardImg from "../assets/dashboard-preview.jpg";

const DashboardSection = () => {
  return (
    <section
      id="dashboardsection"
      className="relative py-20 md:py-28 px-4 bg-[#050505] text-white overflow-hidden"
    >

      {/* BIG AMBIENT BACKGROUND GLOW (FIXED) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[900px] h-[900px] bg-[#7C5CFF]/10 blur-[200px] rounded-full"
        />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          A dashboard your team will actually open
        </h4>

        {/* Subtitle */}
        <p className="text-white/60 max-w-xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
          Beautifully designed views with the data density power users demand.
        </p>

        {/* DASHBOARD WRAPPER */}
        <div className="relative max-w-5xl mx-auto">

          {/* OUTER GLOW LAYER (MATCH IMAGE DEPTH) */}
          <div className="absolute inset-0 scale-110 bg-[#7C5CFF]/20 blur-[120px] rounded-[40px]" />

          {/* MID GLOW LAYER */}
          <div className="absolute inset-0 scale-105 bg-[#7C5CFF]/10 blur-[80px] rounded-[36px]" />

          {/* MAIN CARD */}
          <div className="
            relative rounded-[28px] overflow-hidden
            border border-white/10
            bg-[#0A0A0A]
            shadow-[0_40px_120px_rgba(124,92,255,0.18)]
          ">

            {/* INNER SOFT LIGHT (IMPORTANT FOR PREMIUM LOOK) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

            <img
              src={dashboardImg}
              alt="Dashboard preview"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardSection;