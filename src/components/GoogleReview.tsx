import { Star } from "lucide-react";

const GoogleReview = () => (
  <section className="py-12 bg-secondary">
    <div className="container flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
      <div className="text-center md:text-left">
        <span className="text-3xl font-bold text-foreground">4.9</span>
        <p className="text-muted-foreground text-sm mt-1">
          Nuestra puntuación promedio en <span className="font-semibold text-foreground">38 reseñas de Google</span>.
        </p>
      </div>
    </div>
  </section>
);

export default GoogleReview;
