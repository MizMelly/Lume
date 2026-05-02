import dashboardImg from "../assets/dashboard-preview.jpg";

const DashboardSection = () => {
  return (
    <section id="dashboardsection" className="relative py-20 px-6 bg-[#050505] text-white overflow-hidden">
      
      {/* Purple Glow Background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#7C5CFF]/15 blur-[160px] rounded-full translate-y-16"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* Heading (reduced) */}
        <h4 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4">
          A dashboard your team will actually open
        </h4>

        {/* Description (reduced) */}
        <p className="text-white/60 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
          Beautifully designed views with the data density power users demand.
        </p>

        {/* Dashboard Image Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-[#7C5CFF]/10 blur-3xl rounded-[32px] scale-105"></div>

          {/* Main Card */}
          <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_70px_rgba(124,92,255,0.12)]">
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