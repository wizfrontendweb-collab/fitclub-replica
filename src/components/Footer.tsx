import { Dumbbell, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer id="contacto" className="bg-section-dark py-16">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Dumbbell className="w-6 h-6 text-gold" />
            <span className="text-xl font-bold text-section-dark-foreground tracking-wider">FITCLUB</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            El gimnasio más personal de Santa Fe. Entrenamiento personalizado en estudios privados.
          </p>
        </div>

        <div>
          <h4 className="text-section-dark-foreground font-bold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><a href="#servicios" className="hover:text-gold transition-colors">Personal Training</a></li>
            <li><a href="#servicios" className="hover:text-gold transition-colors">Grupo Reducido</a></li>
            <li><a href="#servicios" className="hover:text-gold transition-colors">Fitness Corporativo</a></li>
            <li><a href="#planes" className="hover:text-gold transition-colors">Planes y Precios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-section-dark-foreground font-bold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
              Bv. Gálvez 1500, Santa Fe
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              +54 342 555 1234
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              info@fitclub.com.ar
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-section-dark-foreground font-bold mb-4">Seguinos</h4>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/fitclub.sf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/fitclub.sf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@fitclub.com.ar"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} FitClub Santa Fe. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
