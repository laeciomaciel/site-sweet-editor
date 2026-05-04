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
              Perfil Profissional e Atuação
            </h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6 text-justify">
              Com atuação em ultrassonografia de alta resolução em Fortaleza, ofereço suporte diagnóstico avançado para as áreas de Dermatologia, Reumatologia e Cirurgia Plástica. Através da tecnologia de alta frequência, realizo o mapeamento não invasivo de pele, partes moles e articulações, fornecendo a base necessária para condutas seguras e planejamentos estéticos.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6 text-justify">
              Minha metodologia de trabalho redefine o exame de imagem tradicional: cada procedimento é uma consulta radiológica completa. Com um tempo de atendimento diferenciado, priorizo a escuta ativa e a precisão técnica em cada etapa. Os resultados são apresentados por meio de laudos iconográficos, que utilizam ilustrações didáticas para traduzir achados complexos em informações visuais claras, facilitando o entendimento imediato do médico solicitante.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6 text-justify">
              Mais do que entregar laudos, minha missão é promover a integração com a equipe médica. Mantenho um canal de comunicação aberto e ágil para a discussão de casos, de modo que o suporte radiológico atue como um aliado estratégico na busca pelo melhor desfecho clínico para cada paciente.
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
