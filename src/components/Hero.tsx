import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative h-screen min-h-[600px] flex items-center">
    <img
      src={heroBg}
      alt="Entrenamiento en FitClub Santa Fe"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
      fetchPriority="high"
    />
    <div className="absolute inset-0 hero-overlay" />
    <div className="container relative z-10">
      <div className="max-w-2xl animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-black text-primary-foreground leading-none mb-2">
          PERSONAL TRAINING
          <span className="block text-gold">EN SANTA FE</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 italic font-medium mt-6 mb-4">
          Alcanzá tu mejor versión con entrenamiento personalizado
        </p>
        <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-xl mb-8">
          Alcanzá tus objetivos deportivos en FitClub Personal Training. Somos el gimnasio más personal de Santa Fe.
          En nuestros estudios privados en el centro de la ciudad, recibís atención personalizada de un entrenador
          experimentado con todo el espacio para vos. Ponete más fuerte, más fit y disfrutá del proceso.
        </p>
        <a
          href="#planes"
          className="inline-block bg-gold text-primary-foreground px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gold-dark transition-colors"
        >
          RESERVÁ TU CLASE GRATIS
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
