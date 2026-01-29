const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container-custom section-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Futu<span className="text-primary">webs</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              Transformamos pequeñas y medianas empresas con soluciones de 
              inteligencia artificial y diseño web innovador.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Inteligencia Artificial</li>
              <li className="text-muted-foreground">Diseño Web</li>
              <li className="text-muted-foreground">Automatización</li>
              <li className="text-muted-foreground">Marketing Digital</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Futuwebs. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Política de privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;