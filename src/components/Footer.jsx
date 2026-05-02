import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div>
          <h4 className="font-semibold">Lumen</h4>
          <p className="text-white/50 text-sm">
            © 2026 Lumen Inc. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-white/60 text-lg">
          <a href="#" className="hover:text-[#7C5CFF] transition">
            <FaTwitter />
          </a>

          <a href="#" className="hover:text-[#7C5CFF] transition">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-[#7C5CFF] transition">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;