import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

type FormState = {
  name: string;
  role: string;
  company: string;
  companySize: string;
  email: string;
  phone: string;
  interest: string;
  details: string;
};

const questions = [
  {
    id: "name",
    question: "¡Hola! ¿Cuál es tu nombre?",
    type: "text",
    placeholder: "Ej: Juan Pérez",
  },
  {
    id: "role",
    question: "¿Cuál es tu cargo o rol en la empresa?",
    type: "text",
    placeholder: "Ej: CEO, Director de Marketing, Founder...",
  },
  {
    id: "company",
    question: "¿Cuál es el nombre de tu empresa o proyecto?",
    type: "text",
    placeholder: "Ej: Mi Empresa S.A.",
  },
  {
    id: "companySize",
    question: "¿De qué tamaño es tu empresa?",
    type: "options",
    options: [
      "1-10 empleados (Startup / Micro)",
      "11-50 empleados (Pequeña)",
      "51-200 empleados (Mediana)",
      "+200 empleados (Corporativa)"
    ]
  },
  {
    id: "email",
    question: `¡Un gusto conocerte! ¿A qué correo electrónico de contacto deberíamos escribirte?`,
    type: "email",
    placeholder: "tucorreo@empresa.com",
  },
  {
    id: "phone",
    question: "¿Y tu número de WhatsApp o teléfono?",
    type: "tel",
    placeholder: "+54 11 1234 5678",
  },
  {
    id: "interest",
    question: "¿En qué tipo de solución estás interesado?",
    type: "options",
    options: [
      "Diseño Web / Ecommerce",
      "Automatizaciones con IA",
      "Aplicación a Medida",
      "Consultoría Tecnológica",
      "Otro / No estoy seguro",
    ],
  },
  {
    id: "details",
    question: "Por último, ¡cuéntanos brevemente sobre tu proyecto o lo que necesitas!",
    type: "textarea",
    placeholder: "Escribe aquí los detalles de tu consulta...",
  },
];

const Cotizar = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormState>({
    name: "",
    role: "",
    company: "",
    companySize: "",
    email: "",
    phone: "",
    interest: "",
    details: "",
  });
  const [isCompleted, setIsCompleted] = useState(false);

  // Update question text dynamically based on the name if the current question is email
  const currentQuestion = { ...questions[step] };
  if (currentQuestion.id === "email" && formData.name) {
    currentQuestion.question = `¡Un gusto conocerte, ${formData.name.split(" ")[0]}! ¿A qué correo electrónico deberíamos escribirte?`;
  }

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Simulate form submission
      setIsCompleted(true);
      console.log("Form data submitted:", formData);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && questions[step].type !== "textarea") {
      e.preventDefault();
      // Simple validation before proceeding
      const currentKey = questions[step].id as keyof FormState;
      if (formData[currentKey]) {
        handleNext();
      }
    }
  };

  const isCurrentStepValid = () => {
    const currentKey = questions[step].id as keyof FormState;
    const value = String(formData[currentKey] || "").trim();
    if (value === "") return false;

    if (currentKey === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      return emailRegex.test(value);
    }
    
    return true;
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4 animate-fade-in">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold">¡Solicitud Enviada!</h2>
          <p className="text-muted-foreground text-lg">
            Gracias por contactarnos, {formData.name.split(" ")[0]}. Hemos recibido tu información y un especialista de Futuwebs se comunicará contigo a la brevedad.
          </p>
          <div className="pt-8">
            <Link to="/">
              <Button size="lg" className="glow-orange">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col pt-8 px-4 md:px-8">
      {/* Header with Exit button */}
      <header className="flex justify-between items-center max-w-4xl mx-auto w-full mb-12">
        <Link to="/" className="flex items-center gap-2">
           <img
              src="/logo.png"
              alt="Futuwebs"
              className="h-10 w-auto object-contain"
              style={{ filter: 'drop-shadow(0 0 8px hsl(22 96% 48% / 0.6))' }}
            />
        </Link>
        <Link to="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Cerrar
          </Button>
        </Link>
      </header>

      {/* Main Form Area */}
      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full justify-center pb-24 relative">
        <div key={step} className="animate-fade-in slide-in-bottom">
          <div className="text-primary font-medium mb-4 text-sm flex items-center gap-2">
            <span>{step + 1}</span>
            <ArrowRight className="w-3 h-3" />
            <span>{questions.length}</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="mt-8">
            {currentQuestion.type === "options" ? (
              <div className="flex flex-col gap-3">
                {currentQuestion.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFormData({ ...formData, [currentQuestion.id]: option });
                      // Add a small delay for better UX before moving to next step
                      setTimeout(() => {
                        handleNext();
                      }, 400);
                    }}
                    className={`w-full text-left p-4 rounded-xl border border-border/50 text-foreground transition-all duration-300
                      ${formData[currentQuestion.id as keyof FormState] === option
                        ? "bg-primary/20 border-primary"
                        : "bg-card/50 hover:bg-card hover:border-primary/50"
                      }
                    `}
                  >
                    <span className="font-medium text-lg">{option}</span>
                  </button>
                ))}
              </div>
            ) : currentQuestion.type === "textarea" ? (
              <textarea
                value={formData[currentQuestion.id as keyof FormState]}
                onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder={currentQuestion.placeholder}
                className="w-full bg-transparent border-b-2 border-primary/30 text-2xl md:text-3xl placeholder-muted-foreground focus:border-primary outline-none py-4 transition-colors resize-none h-40"
                autoFocus
              />
            ) : (
              <input
                type={currentQuestion.type}
                value={formData[currentQuestion.id as keyof FormState]}
                onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder={currentQuestion.placeholder}
                className="w-full bg-transparent border-b-2 border-primary/30 text-2xl md:text-3xl placeholder-muted-foreground focus:border-primary outline-none py-4 transition-colors"
                autoFocus
              />
            )}
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 flex items-center gap-4">
            <Button
              size="lg"
              className="glow-orange-sm text-lg px-8 py-6"
              onClick={handleNext}
              disabled={!isCurrentStepValid() && currentQuestion.type !== "options"}
            >
              {step === questions.length - 1 ? "Enviar Solicitud" : "Continuar"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {step > 0 && (
              <Button
                variant="ghost"
                size="lg"
                onClick={handleBack}
                className="opacity-60 hover:opacity-100"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver
              </Button>
            )}
            
            {(currentQuestion.type === "text" || currentQuestion.type === "email" || currentQuestion.type === "tel") && (
              <span className="text-xs text-muted-foreground ml-4 hidden sm:inline-block">
                Presiona <strong>Enter ↵</strong> para continuar
              </span>
            )}
          </div>
        </div>
      </main>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 bg-border/50">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${((step) / questions.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Cotizar;
