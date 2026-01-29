import { Brain, Globe, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Automatización de procesos utilizando agentes con los más potentes modelos de IA. Chatbots, análisis predictivo y más.",
    features: ["Chatbots inteligentes", "Análisis de datos", "Automatización"],
  },
  {
    icon: Globe,
    title: "Diseño Web",
    description: "Creamos sitios web atractivos y funcionales para que tu presencia digital deje huella en tus clientes.",
    features: ["Diseño responsive", "SEO optimizado", "Alta velocidad"],
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Optimiza tu tiempo con soluciones automatizadas para publicación de contenido y gestión de procesos.",
    features: ["Workflows", "Integraciones", "Reportes automáticos"],
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Estrategias de marketing y gestión de redes sociales impulsadas por inteligencia artificial.",
    features: ["Redes sociales", "Email marketing", "Analytics"],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Soluciones que <span className="gradient-text">transforman</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos servicios integrales para llevar tu negocio al siguiente nivel 
            con tecnología de vanguardia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card border-border/50 card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;