import { Button } from "@/components/ui/button";

export function CtaImageSection() {
  return (
    <section id="cta-image" className="py-16">
      <div className="px-5 py-14 lg:px-0">
        <div className="mx-auto grid max-w-5xl items-center justify-between rounded-xl border px-0 md:grid-cols-2">
          <div className="order-2 flex flex-col gap-y-5 p-7 md:order-1 lg:p-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl/tight">
                Founder Leo Vela
              </h2>
              <p className="max-w-[600px] text-neutral-500 dark:text-neutral-400 md:text-base/[1.5] lg:text-base/[1.5] xl:text-lg/[1.5]">
                Descubre cómo nuestra plataforma de IA puede ayudarte a automatizar tareas,
                mejorar la eficiencia y potenciar el crecimiento de tu empresa.
              </p>
            </div>

            <Button className="w-48" size="lg">
              Empieza Ahora
            </Button>
          </div>
          <div className="relative order-1 mx-auto h-full min-h-[350px] overflow-hidden rounded-t-xl border bg-neutral-100 dark:bg-neutral-900 sm:w-full md:order-2 md:rounded-r-xl md:rounded-tl-none lg:aspect-video">
            <img
              alt="Automatización con IA"
              className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 