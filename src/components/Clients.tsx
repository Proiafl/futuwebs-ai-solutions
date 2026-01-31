import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const clients = [
    {
        name: "Redca Services",
        description: "General Contractor",
        url: "https://redcaservices.com",
        industry: "Construcción",
        country: "USA",
        flagUrl: "https://flagcdn.com/w40/us.png",
    },
    {
        name: "SmartBoxes",
        description: "Freight Forwarding",
        url: "https://smartboxes.cl",
        industry: "Logística",
        country: "Chile",
        flagUrl: "https://flagcdn.com/w40/cl.png",
    },
    {
        name: "Latin Professional Tax",
        description: "Tax Services",
        url: "https://latinprofessionaltax.com/",
        industry: "Finanzas",
        country: "USA",
        flagUrl: "https://flagcdn.com/w40/us.png",
    },
    {
        name: "Style Soho",
        description: "Studio Nails",
        url: "https://stylesohosantiago.shop",
        industry: "Belleza",
        country: "Chile",
        flagUrl: "https://flagcdn.com/w40/cl.png",
    },
    {
        name: "HerraVentas",
        description: "Herramientas Industriales",
        url: "https://herraventas.com.ar",
        industry: "E-commerce",
        country: "Argentina",
        flagUrl: "https://flagcdn.com/w40/ar.png",
    },
    {
        name: "ConstelaXIO",
        description: "Constelaciones Familiares",
        url: "https://constelaxio.com",
        industry: "Terapia",
        country: "Argentina",
        flagUrl: "https://flagcdn.com/w40/ar.png",
    },
];

// Generate screenshot URL using thum.io free API
const getScreenshotUrl = (url: string) => {
    const cleanUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    return `https://image.thum.io/get/width/400/crop/300/noanimate/${url}`;
};

const Clients = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section id="clientes" className="section-padding relative overflow-hidden">
            {/* Background subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Nuestros Clientes
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                        Empresas que <span className="gradient-text">confían</span> en nosotros
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Hemos ayudado a empresas de diversos sectores a potenciar su presencia digital
                        y automatizar sus procesos con inteligencia artificial.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm hidden md:flex"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm hidden md:flex"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Carousel */}
                    <div className="overflow-hidden mx-4 md:mx-8" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {clients.map((client) => (
                                <div
                                    key={client.name}
                                    className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%)]"
                                >
                                    <a
                                        href={client.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 
                               transition-all duration-300 hover:border-primary/50
                               flex flex-col items-center justify-center text-center min-h-[220px] block"
                                    >
                                        {/* Background Screenshot */}
                                        <div
                                            className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl"
                                            style={{
                                                backgroundImage: `url(${getScreenshotUrl(client.url)})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'top center',
                                            }}
                                        />

                                        {/* Country Flag */}
                                        <img
                                            src={client.flagUrl}
                                            alt={client.country}
                                            className="absolute top-3 left-3 w-6 h-auto rounded-sm shadow-sm z-10"
                                            title={client.country}
                                        />

                                        {/* Industry Badge */}
                                        <span className="absolute top-3 right-3 text-xs text-muted-foreground bg-muted/80 px-2 py-1 rounded-full z-10">
                                            {client.industry}
                                        </span>

                                        {/* Logo Placeholder - Stylized Text */}
                                        <div className="mb-4 relative">
                                            <div className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {client.name.split(" ")[0]}
                                            </div>
                                            {client.name.split(" ").length > 1 && (
                                                <div className="text-sm md:text-base font-medium text-muted-foreground">
                                                    {client.name.split(" ").slice(1).join(" ")}
                                                </div>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                                            {client.description}
                                        </p>

                                        {/* Hover indicator */}
                                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ExternalLink className="w-4 h-4 text-primary" />
                                        </div>

                                        {/* Glow effect on hover */}
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                            style={{ boxShadow: "0 0 30px hsl(22 96% 48% / 0.15)" }}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {clients.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedIndex === i
                                ? "bg-primary w-6"
                                : "bg-primary/30 hover:bg-primary/50"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
