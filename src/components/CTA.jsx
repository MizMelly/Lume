import { ArrowRight } from "lucide-react";


const CTA = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">

        <div className="
          text-center p-10 rounded-2xl
          bg-white/5 border border-white/10
          hover:shadow-[0_0_40px_rgba(124,92,255,0.25)]
          transition duration-300
        ">

          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Ready to see your product in a new light?
          </h3>

          {/* Text */}
          <p className="text-white/60 text-sm md:text-base mb-8">
            Set up Lumen in minutes. No credit card required.
          </p>

         <button
  className="
    inline-flex items-center gap-2
    px-7 py-3 rounded-xl font-semibold
    bg-[#7C5CFF] text-white
    hover:bg-[#9A7CFF]
    hover:shadow-[0_0_25px_rgba(124,92,255,0.5)]
    transition-all duration-300
  "
>
  Start free trial
  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>

        </div>

      </div>
    </section>
  );
};

export default CTA;