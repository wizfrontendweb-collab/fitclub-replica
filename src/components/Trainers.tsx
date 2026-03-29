import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  { name: "Lucas Fernández", role: "Head Coach · Fuerza y Acondicionamiento", image: trainer1 },
  { name: "Valentina López", role: "Personal Trainer · Funcional y Movilidad", image: trainer2 },
  { name: "Tomás García", role: "Personal Trainer · Hipertrofia y Nutrición", image: trainer3 },
];

const Trainers = () => (
  <section id="entrenadores" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Nuestros Personal Trainers
          </h2>
          <h3 className="text-xl text-gold font-semibold mb-6">¡Te presentamos al equipo!</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Cuando venís a entrenar a FitClub, buscamos siempre qué Personal Trainer es el que mejor
            se adapta a vos. A tus necesidades y posibilidades. Por eso tenemos entrenadores
            experimentados con diferentes especialidades. ¿Querés conocernos? Te esperamos.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-gold text-primary-foreground px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold-dark transition-colors"
          >
            CONOCÉ AL EQUIPO
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="flex items-center gap-5 group">
              <img
                src={trainer.image}
                alt={trainer.name}
                loading="lazy"
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded-full ring-2 ring-transparent group-hover:ring-gold transition-all"
              />
              <div>
                <p className="font-bold text-foreground">{trainer.name}</p>
                <p className="text-muted-foreground text-sm">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Trainers;
