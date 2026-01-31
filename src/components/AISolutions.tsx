import { Dumbbell, Car, Building2, Sparkles, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        id: "gymiapp",
        name: "GymIApp",
        tagline: "Gestión inteligente de gimnasios",
        description: "Automatiza la administración de tu gimnasio con IA. Control de membresías, seguimiento de asistencia, planificación de clases y comunicación automatizada con tus clientes.",
        icon: Dumbbell,
        features: ["Control de membresías", "Asistencia automática", "Rutinas personalizadas con IA", "Reportes inteligentes"],
        color: "from-green-500 to-emerald-500",
        accentColor: "green",
        status: "Disponible",
    },
    {
        id: "carwashiapp",
        name: "CarwashIApp",
        tagline: "CRM para lavaderos de autos",
        description: "Sistema completo de gestión para lavaderos. Control de turnos, historial de clientes, facturación automática y análisis predictivo de demanda.",
        icon: Car,
        features: ["Gestión de turnos", "Historial de vehículos", "Facturación automática", "Predicción de demanda"],
        color: "from-blue-500 to-cyan-500",
        accentColor: "blue",
        status: "Disponible",
    },
    {
        id: "consorcioiapp",
        name: "ConsorcioIApp",
        tagline: "Administración de consorcios",
        description: "Gestiona consorcios de departamentos de forma eficiente. Pagos, recibos, reserva de espacios comunes, comunicación con propietarios y reportes financieros.",
        icon: Building2,
        features: ["Gestión de pagos", "Recibos digitales", "Reserva de amenities", "Comunicados automáticos"],
        color: "from-orange-500 to-red-500",
        accentColor: "orange",
        status: "Disponible",
    },
];

const AISolutions = () => {
    return (
        <section id="soluciones-ia" className="section-padding relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                        <Bot className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Soluciones con IA
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Potencia tu <span className="gradient-text">PYME</span> con Inteligencia Artificial
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        Aplicaciones listas para usar que transforman la gestión de tu negocio.
                        Sin complicaciones, sin desarrollos largos. Solo resultados.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={solution.id}
                            className="group relative"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Card */}
                            <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 
                            transition-all duration-500 hover:border-primary/50 hover:bg-card/80
                            flex flex-col">

                                {/* Gradient Glow on Hover */}
                                <div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />

                                {/* Status Badge */}
                                <div className="absolute top-6 right-6">
                                    <span className="inline-flex items-center gap-1.5 bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                                        <Sparkles className="w-3 h-3" />
                                        {solution.status}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 
                              group-hover:scale-110 transition-transform duration-300`}>
                                    <solution.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                        {solution.name}
                                    </h3>
                                    <p className="text-primary/80 font-medium text-sm mb-4">
                                        {solution.tagline}
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        {solution.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-8">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <Button
                                    variant="outline"
                                    className="w-full group/btn border-border/50 hover:border-primary hover:bg-primary/10"
                                >
                                    <span>Conocer más</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-muted-foreground mb-6">
                        ¿Necesitas una solución personalizada para tu industria?
                    </p>
                    <Button size="lg" className="glow-orange-sm">
                        <Bot className="w-5 h-5 mr-2" />
                        Solicitar Demo Personalizada
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AISolutions;
