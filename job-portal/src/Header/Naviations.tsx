import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Upload Jobs", url: "/upload-jobs" },
    { name: "About Us", url: "/about-us" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-10 h-full text-mine-shaft-300 items-center">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === link.url
              ? "border-bright-sun-400 text-bright-sun-400"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
