import { Dumbbell } from "lucide-react";

const steps = [
  { num: "01", title: "Conocernos", desc: "Agendamos una clase de prueba gratuita para conocerte." },
  { num: "02", title: "Plan de Entrenamiento", desc: "Diseñamos un plan personalizado para tus objetivos." },
  { num: "03", title: "Entrenadores Expertos", desc: "Nuestros personal trainers experimentados te acompañan." },
  { num: "04", title: "Estudios Privados", desc: "Entrenás tranquilo en nuestros estudios privados en el centro." },
  { num: "05", title: "Fit y Saludable", desc: "Cada día un poco mejor, avanzando hacia tu meta." },
];

const Experience = () => (
  <section className="py-20 md:py-28 bg-section-dark">
    <div className="container">
      <div className="text-center mb-16">
        <Dumbbell className="w-10 h-10 text-gold mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-2">
          La experiencia FitClub
        </h2>
        <p className="text-primary-foreground/60 italic">
          ¿Querés saber cómo funciona? Echá un vistazo detrás de escena.
        </p>
      </div>
      <div className="grid md:grid-cols-5 gap-8">
        {steps.map((step) => (
          <div key={step.num} className="text-center">
            <span className="text-gold text-sm font-bold italic">{step.num}</span>
            <h3 className="text-section-dark-foreground font-bold mt-2 mb-2">{step.title}</h3>
            <p className="text-primary-foreground/60 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
