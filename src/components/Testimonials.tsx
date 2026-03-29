import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const testimonials = [
  {
    quote: "La atención personalizada de FitClub hace que realmente notes que estás avanzando hacia tus objetivos.",
    name: "Martín",
    goal: "Mejor condición física y más masa muscular",
    image: testimonial1,
  },
  {
    quote: "Voy cada semana con muchas ganas al gym. Los entrenadores son increíbles y el ambiente es genial.",
    name: "Carolina",
    goal: "Mejorar técnica y mantenerse en forma",
    image: testimonial2,
  },
];

const Testimonials = () => (
  <section id="testimonios" className="py-20 md:py-28 bg-section-dark">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground text-center mb-16">
        Lo que dicen nuestros alumnos
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="flex gap-5 items-start">
            <img
              src={t.image}
              alt={t.name}
              loading="lazy"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-primary-foreground/90 italic text-sm leading-relaxed mb-3">
                "{t.quote}"
              </p>
              <p className="text-gold font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs mt-1">{t.goal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
