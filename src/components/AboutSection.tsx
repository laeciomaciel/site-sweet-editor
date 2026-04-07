import aboutImage from "@/assets/doctor-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Dra. Sara Joca - Médica Radiologista"
              className="w-full max-w-md mx-auto object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-8">
              Currículo
            </h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6 text-justify">
              Atuo em Fortaleza–CE com foco em ultrassonografia dermatológica de alta resolução, aplicando tecnologia de ponta para avaliação detalhada da pele, anexos cutâneos e partes moles. Meu objetivo é fornecer diagnósticos precisos, seguros e não invasivos, contribuindo para uma abordagem clínica mais assertiva.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6 text-justify">
              Possuo expertise no diagnóstico diferencial de lesões cutâneas, estadiamento de neoplasias, acompanhamento de doenças inflamatórias e avaliação de procedimentos estéticos e suas complicações.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6 text-justify">
              Trabalho de forma integrada com dermatologistas, cirurgiões plásticos e reumatologistas, oferecendo suporte diagnóstico especializado e individualizado, sempre centrado nas necessidades de cada paciente.
            </p>
            <p className="text-sm text-muted-foreground/70 font-body">
              CRM 16136 • RQE 11838
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
