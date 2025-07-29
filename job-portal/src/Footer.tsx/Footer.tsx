import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDeviceTabletSearch,
} from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";

const Footer = () => {
  return (
    <footer className="bg-mine-shaft-950 text-white px-10 py-14 font-poppins relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-16 border-b border-mine-shaft-700 pb-12">
        {/* Left - Logo & About */}
        <div className="md:w-1/3 flex flex-col gap-5">
          <div className="flex items-center gap-2 text-bright-sun-400 animate-pulse">
            <IconDeviceTabletSearch className="h-7 w-7" stroke={2.5} />
            <h2 className="text-3xl font-bold tracking-wide">HireNest</h2>
          </div>
          <p className="text-sm text-mine-shaft-300 leading-relaxed">
            One-stop job portal to build your profile, update skills, verify certifications,
            gain experience, and apply to top companies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-all hover:shadow-[0_0_10px_#facc15]">
              <IconBrandFacebook className="h-6 w-6 text-bright-sun-400" />
            </a>
            <a href="#" className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-all hover:shadow-[0_0_10px_#facc15]">
              <IconBrandInstagram className="h-6 w-6 text-bright-sun-400" />
            </a>
            <a href="#" className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-all hover:shadow-[0_0_10px_#facc15]">
              <IconBrandGithub className="h-6 w-6 text-bright-sun-400" />
            </a>
            <a href="#" className="bg-mine-shaft-900 p-2 rounded-full hover:scale-110 transition-all hover:shadow-[0_0_10px_#facc15]">
              <IconBrandLinkedin className="h-6 w-6 text-bright-sun-400" />
            </a>
          </div>
        </div>

        {/* Right - Dynamic Links Section */}
        <div className="flex flex-wrap justify-between md:w-2/3 gap-10">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-bright-sun-400 underline-offset-4">
                {section.title}
              </h3>
              {section.links.map((link, i) => (
                <a
                  href="#"
                  key={i}
                  className="text-sm text-mine-shaft-300 hover:text-white hover:pl-1 transition-all"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Classy Bottom Note */}
      <div className="mt-10 text-center pt-6 border-t border-mine-shaft-800">
        <p className="text-sm text-mine-shaft-500 tracking-wide mb-1">
          © {new Date().getFullYear()}{" "}
          <span className="text-bright-sun-400 font-semibold">HireNest</span>. All rights reserved.
        </p>
        <p className="text-sm">
          <span className="text-mine-shaft-400">Crafted with</span>{" "}
          <span className="text-red-600 animate-pulse">❤</span>{" "}
          <span className="text-mine-shaft-400">by</span>{" "}
          <span className="font-[cursive] text-lg text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text tracking-wider hover:brightness-110 transition-all duration-300">
            RAJAN
          </span>
        </p>
      </div>

      {/* 🇮🇳 Made in India Badge */}
      <div className="absolute bottom-4 right-6 text-xs text-mine-shaft-200 bg-mine-shaft-950 px-3 py-1 rounded-full border border-mine-shaft-700 shadow-sm hover:shadow-md hover:border-bright-sun-400 transition-all duration-300">
        Made in <span className="text-white font-semibold">India 🇮🇳</span>
      </div>
    </footer>
  );
};

export default Footer;
