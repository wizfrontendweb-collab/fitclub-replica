import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "PERSONAL TRAINING", href: "#servicios" },
    { label: "GRUPO REDUCIDO", href: "#servicios" },
    { label: "FITNESS CORPORATIVO", href: "#servicios" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 md:top-[44px]">
      <div className="container flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-2 text-primary-foreground">
          <Dumbbell className="w-8 h-8 text-gold" />
          <span className="text-2xl font-bold tracking-wider">FITCLUB</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-primary-foreground text-sm font-semibold tracking-widest hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#planes"
            className="bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold tracking-widest hover:bg-gold-dark transition-colors"
          >
            PRUEBA GRATIS
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground"
          aria-label="Menú"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-section-dark/95 backdrop-blur-sm">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground text-sm font-semibold tracking-widest py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#planes"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold tracking-widest text-center mt-2"
            >
              PRUEBA GRATIS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
