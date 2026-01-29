import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            ¿Listo para empezar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Transforma tu negocio <span className="gradient-text">hoy</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Contáctanos y descubre cómo la inteligencia artificial puede 
            impulsar el crecimiento de tu empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group glow-green text-lg px-8 py-6">
              Solicitar consulta gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
            <a 
              href="mailto:info@futuwebs.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@futuwebs.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <a 
              href="tel:+34600000000" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              +34 600 000 000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;