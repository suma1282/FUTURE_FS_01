import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "resume",
    "contact",
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Bombothu Suma
        </h1>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {nav && (
        <div className="md:hidden bg-slate-900 p-6">
          <ul className="space-y-5">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  onClick={() => setNav(false)}
                  className="block cursor-pointer hover:text-cyan-400"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;