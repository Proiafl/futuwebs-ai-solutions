import { CheckCircle } from "lucide-react";

const benefits = [
  "Equipo especializado en IA y desarrollo web",
  "Soluciones personalizadas para cada negocio",
  "Metodología ágil y entregas rápidas",
  "Soporte continuo y actualizaciones",
];

const About = () => {
  return (
    <section id="nosotros" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                <span className="text-primary">&lt;</span>Hola_Mundo!<span className="text-primary">&gt;</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Futuwebs es una agencia emergente dedicada al diseño web y la 
                automatización de procesos, utilizando inteligencia artificial 
                para ofrecer soluciones innovadoras a pequeñas y medianas empresas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Nuestro objetivo es hacer que la tecnología más avanzada sea 
                accesible para todos los negocios, sin importar su tamaño.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-card to-card border border-border/50 overflow-hidden">
              {/* Code-like decoration */}
              <div className="absolute inset-0 p-8 font-mono text-sm text-muted-foreground/50 overflow-hidden">
                <pre className="animate-fade-in">
{`const futuwebs = {
  mission: "Transformar PYMEs",
  tech: ["IA", "Web", "Automation"],
  values: {
    innovation: true,
    quality: true,
    commitment: true
  },
  
  transform: async (business) => {
    const ai = await loadAI();
    const solution = ai.analyze(business);
    return solution.implement();
  }
};

futuwebs.transform(yourBusiness);`}
                </pre>
              </div>
              
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border/50 rounded-xl px-6 py-4 shadow-xl glow-green-sm">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;