import { NavLink } from "react-router-dom";
import Logo from "../../assets/LogoSuitMedia.png";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const listMenu = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Ideas", path: "/ideas" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-opacity duration-300 ${
        isVisible
          ? window.scrollY === 0
            ? "bg-primary opacity-100"
            : "bg-primary opacity-80"
          : "opacity-0"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-11 h-16">
        {/* Logo */}
        <div className="h-12 w-12">
          <img
            className="h-full aspect-3/2 object-cover"
            src={Logo}
            alt="LogoSuitMedia"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-poppins">
          {listMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-white relative px-2 py-1 transition-all duration-300 ${
                  isActive
                    ? "after:h-[2px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0"
                    : "after:h-0"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary text-white font-poppins px-6 pb-4 pt-2 space-y-2">
          {listMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block transition-all duration-200 ${
                  isActive ? "font-semibold underline" : "opacity-90"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
