import aboutGym from "@/assets/about-gym.jpg";

const About = () => (
  <section id="sobre-nosotros" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="overflow-hidden">
          <img
            src={trainer1}
            alt="FitClub entrenador"
            loading="lazy"
            width={640}
            height={800}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-2">FitClub</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Fit y disfrutar de la vida
          </h2>
          <h3 className="text-xl text-gold font-semibold mb-6">
            Estar en forma y disfrutar del día a día
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            ¿Estás pensando en empezar Personal Training en Santa Fe? ¡Bienvenido al gimnasio más
            personal de la ciudad! Acá se trata de algo más que solo fitness: se trata del equilibrio
            justo entre disfrutar de la vida y estar en forma. Nos enfocamos en la atención personalizada
            para que puedas crecer no solo física, sino también mentalmente.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#planes"
              className="bg-gold text-primary-foreground px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold-dark transition-colors"
            >
              PRUEBA GRATIS
            </a>
            <a
              href="#entrenadores"
              className="border border-foreground text-foreground px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              SOBRE FITCLUB
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
