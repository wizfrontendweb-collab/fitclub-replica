import servicesPt from "@/assets/services-pt.jpg";
import servicesGroup from "@/assets/services-group.jpg";
import servicesCorporate from "@/assets/services-corporate.jpg";
import { Dumbbell } from "lucide-react";

const services = [
  {
    title: "Personal Training",
    description:
      "Entrenamiento uno a uno: personal, con toda la tranquilidad, espacio y foco en vos y tus objetivos.",
    image: servicesPt,
    alt: "Personal Training en FitClub",
  },
  {
    title: "Grupo Reducido",
    description:
      "Con Small Group Training entrenás bajo la guía de un personal trainer en un grupo muy reducido, trabajando tus propios objetivos. Entrenamiento personalizado y efectivo en un estudio privado.",
    image: servicesGroup,
    alt: "Entrenamiento en grupo reducido",
  },
  {
    title: "Fitness Corporativo",
    description:
      "¿Entrenar, comer sano y disfrutar? Se puede. Con Fitness Corporativo de FitClub, hacé del deporte parte de tu semana laboral.",
    image: servicesCorporate,
    alt: "Fitness Corporativo",
  },
];

const Services = () => (
  <section id="servicios" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <Dumbbell className="w-12 h-12 text-gold mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Nuestros Entrenamientos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          En FitClub hay dos cosas que son centrales: vos y tu resultado. Por eso siempre recibís
          atención personalizada de un entrenador experimentado en nuestros estudios privados en el centro de Santa Fe.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="group cursor-pointer">
            <div className="overflow-hidden mb-6">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            <a href="#planes" className="inline-block mt-4 text-gold font-semibold text-sm hover:underline">
              {service.title} →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
