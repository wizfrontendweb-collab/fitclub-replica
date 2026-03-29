import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    frequency: "2 días por semana",
    price: "$25.000",
    features: [
      "2 sesiones semanales",
      "Plan de entrenamiento personalizado",
      "Seguimiento mensual",
      "Acceso al estudio privado",
    ],
    highlighted: false,
  },
  {
    name: "Intermedio",
    frequency: "3-4 días por semana",
    price: "$38.000",
    features: [
      "3-4 sesiones semanales",
      "Plan de entrenamiento + nutrición",
      "Seguimiento quincenal",
      "Acceso al estudio privado",
      "App de seguimiento",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    frequency: "Acceso ilimitado",
    price: "$55.000",
    features: [
      "Sesiones ilimitadas",
      "Plan integral (entrenamiento + nutrición + recuperación)",
      "Seguimiento semanal",
      "Acceso a todas las sedes",
      "App de seguimiento premium",
      "Evaluación corporal mensual",
    ],
    highlighted: false,
  },
];

const Plans = () => (
  <section id="planes" className="py-20 md:py-28 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
        Nuestros Planes
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
        Elegí el plan que mejor se adapte a tus objetivos y disponibilidad.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border p-8 flex flex-col transition-shadow hover:shadow-xl ${
              plan.highlighted
                ? "border-gold shadow-lg relative"
                : "border-border"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground px-4 py-1 text-xs font-bold tracking-widest uppercase">
                Más popular
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{plan.frequency}</p>
            <p className="text-4xl font-black text-foreground mt-6 mb-1">
              {plan.price}
              <span className="text-sm font-normal text-muted-foreground">/mes</span>
            </p>
            <ul className="mt-8 space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5493425551234"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 block text-center py-3 text-sm font-bold tracking-widest uppercase transition-colors ${
                plan.highlighted
                  ? "bg-gold text-primary-foreground hover:bg-gold-dark"
                  : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              ELEGIR PLAN
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Plans;
