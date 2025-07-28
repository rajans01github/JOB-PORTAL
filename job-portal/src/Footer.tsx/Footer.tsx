// src/components/Footer.tsx
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDeviceTabletSearch,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-mine-shaft-950 text-white px-10 py-14 font-poppins">
      <div className="flex flex-col md:flex-row justify-between gap-16 border-b border-mine-shaft-700 pb-12">

        {/* Left - Logo & About */}
        <div className="md:w-1/3 flex flex-col gap-5">
          <div className="flex items-center gap-2 text-bright-sun-400 animate-pulse">
            <IconDeviceTabletSearch className="h-7 w-7" stroke={2.5} />
            <h2 className="text-3xl font-bold tracking-wide">HireNest</h2>
          </div>
          <p className="text-sm text-mine-shaft-300 leading-relaxed">
            One-stop job portal to build your profile, update skills, verify certifications, gain experience, and apply to top companies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" target="_blank" className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-all hover:shadow-[0_0_10px_#facc15]">
              <IconBrandFacebook className="h-6 w-6 text-bright-sun-400" />
            </a>
            <a href="#" target="_blank" className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-all hover:shadow-[0_0_10px_#facc15]">
              <IconBrandInstagram className="h-6 w-6 text-bright-sun-400" />
            </a>
            <a href="#" target="_blank" className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-all hover:shadow-[0_0_10px_#facc15]">
              <IconBrandGithub className="h-6 w-6 text-bright-sun-400" />
            </a>
            <a href="#" target="_blank" className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-all hover:shadow-[0_0_10px_#facc15]">
              <IconBrandLinkedin className="h-6 w-6 text-bright-sun-400" />
            </a>
          </div>
        </div>

        {/* Right - Links Section */}
        <div className="flex justify-between md:w-2/3 gap-10">
          {/* Product */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-bright-sun-400  underline-offset-4">Product</h3>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">Features</a>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">Pricing</a>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">Integrations</a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-bright-sun-400  underline-offset-4">Company</h3>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">About</a>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">Careers</a>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">Blog</a>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-bright-sun-400  underline-offset-4">Support</h3>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">Help Center</a>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">Terms</a>
            <a href="#" className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all">Privacy</a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 text-center text-sm text-mine-shaft-500 tracking-wide">
        © {new Date().getFullYear()} <span className="text-bright-sun-400 font-semibold">HireNest</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
