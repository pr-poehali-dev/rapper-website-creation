import { useState, useEffect } from "react";
import { Menu, X, Music, Disc, User, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Музыка", icon: <Music className="h-4 w-4" />, href: "#music" },
    { name: "Релизы", icon: <Disc className="h-4 w-4" />, href: "#releases" },
    { name: "Об артисте", icon: <User className="h-4 w-4" />, href: "#about" },
    { name: "Концерты", icon: <Calendar className="h-4 w-4" />, href: "#tour" },
    { name: "Контакты", icon: <Mail className="h-4 w-4" />, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold gradient-text">
            BDSM
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white hover:text-glow transition-all"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        <Button className="hidden md:flex" variant="outline">
          Слушать новый трек
        </Button>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 pt-20 pb-6 px-4 flex flex-col md:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 text-lg text-gray-300 hover:text-white p-2"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <Button className="w-full" variant="outline">
              Слушать новый трек
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;