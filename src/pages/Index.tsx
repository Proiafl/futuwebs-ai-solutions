import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AISolutions from "@/components/AISolutions";
import Clients from "@/components/Clients";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="inicio">
        <Hero />
        <Services />
        <AISolutions />
        <Clients />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;