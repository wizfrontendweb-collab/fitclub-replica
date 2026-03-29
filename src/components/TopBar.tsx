import { Check } from "lucide-react";

const TopBar = () => (
  <div className="bg-section-dark text-section-dark-foreground py-2.5 text-sm hidden md:block">
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Check className="w-4 h-4 text-gold" />
        <span>Entrenamos con vos en nuestro gimnasio privado de Santa Fe</span>
      </div>
      <nav className="flex gap-6 text-sm">
        {["Servicios", "Sobre nosotros", "Entrenadores", "Testimonios", "Planes", "Contacto"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
            className="text-muted-foreground hover:text-gold transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  </div>
);

export default TopBar;
