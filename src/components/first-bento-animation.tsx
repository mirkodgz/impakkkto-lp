import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function FirstBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-6">
      <div
        ref={ref}
        className={cn(
          "col-span-1 md:col-span-2 rounded-3xl bg-muted p-6 relative overflow-hidden",
          "transform transition-transform duration-500",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
        <div className="relative">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Recomendación basada en patrones de calendario</h3>
            <p className="text-muted-foreground">
              Basado en el análisis de tus patrones de calendario, te recomendamos programar las reuniones importantes durante las mañanas cuando tu energía está al máximo.
            </p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "col-span-1 rounded-3xl bg-muted p-6 relative overflow-hidden",
          "transform transition-transform duration-500 delay-200",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
        <div className="relative">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Optimiza tu tiempo</h3>
            <p className="text-muted-foreground">
              Descubre cómo nuestras herramientas de IA pueden ayudarte a maximizar tu productividad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 