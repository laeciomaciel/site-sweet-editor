import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl ml-auto text-right">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium tracking-wide text-primary-foreground mb-4">
            Dra. Sara <span className="font-bold">Joca</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light mb-2">
            Médica Radiologista
          </p>
          <p className="text-base md:text-lg text-primary-foreground/70 font-body font-light mb-2">
            Especialista em Ultrassom Dermatológico
          </p>
          <p className="text-sm text-primary-foreground/50 font-body tracking-widest uppercase mb-8">
            CRM 16136 • RQE 11838 — Fortaleza, CE
          </p>

          <div className="flex gap-4 justify-end">
            <a
              href="https://wa.me/5585992260983"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary-foreground/60 text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Agendar Atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
