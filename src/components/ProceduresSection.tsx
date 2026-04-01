const procedures = [
  {
    title: "Protocolo Lipedema",
    description:
      "Ultrassom dermatológico com doppler de alta frequência.\nProtocolo baseado em evidências;\nAvaliação personalizada e mapeamento da gordura subcutânea em pontos estratégicos.",
  },
  {
    title: "Protocolo Hidradenite",
    description:
      "Ultrassom dermatológico com doppler de alta frequência.\n\nAvaliação pré e pós-operatória;\nEstadiamento com escore mSOS-HS;\nMapeamento detalhado de fístulas, coleções e pseudocistos;\nAnálise inflamatória com Power Doppler;\nLaudo completo com desenhos esquemáticos personalizados.",
  },
  {
    title: "Mapeamento Facial",
    description:
      "Ultrassonografia dermatológica com doppler.\n\nIdentificação e localização de preenchedores, bioestimuladores e fios;\nPlanejamento pré-operatório e controle pós-operatório;\nDiagnóstico de complicações.",
  },
  {
    title: "Mapeamento Cervical",
    description:
      "Ultrassonografia dermatológica com doppler.\n\nPlanejamento pré e pós procedimentos como lipo de papada, lifting e Deep Plane;\nAvaliação anatômica completa da região submentoniana e cervical;\nEstudo da musculatura cervical;\nMedição do volume e posicionamento das glândulas submandibulares;\nQuantificação da gordura pré e pós-platismal;\nDiagnóstico de complicações.",
  },
  {
    title: "Mapeamento Abdominal",
    description:
      "Ultrassonografia dermatológica com doppler.\n\nAvaliação pré e pós-procedimentos (lipoaspiração/abdominoplastia);\nMensuração da gordura subcutânea e registro ilustrativo por regiões abdominais, fornecendo mais precisão cirúrgica;\nMedição das distâncias dos músculos abdominais;\nPesquisa de hérnias de parede abdominal.",
  },
  {
    title: "Protocolo Glúteo",
    description:
      "Ultrassonografia dermatológica com doppler.\n\nMapeamento dos quadrantes glúteos, dos flancos e das regiões proximais das coxas;\nAvaliação da espessura do tecido adiposo subcutâneo;\nDetecção de preenchedores, bioestimuladores e possíveis complicações.",
  },
  {
    title: "Protocolo Unha",
    description:
      "Ultrassonografia dermatológica com doppler.\n\nAvaliação detalhada de placas, matriz, leito e dobras ungueais;\nInvestigação de tumores, inflamações e infecções;\nEstudo da cortical óssea e articulação distal;\nDoppler para análise inflamatória e vascularização anômala.",
  },
  {
    title: "Protocolo Melanoma e Tumores Cutâneos",
    description:
      "Ultrassonografia dermatológica com doppler de alta frequência.\n\nDelimitação precisa da lesão;\nAvaliação de profundidade, margens e planos acometidos;\nCaracterização ecográfica: composição, ecogenicidade, vascularização;\nEstudo de estruturas adjacentes (vasos, nervos, articulações);\nPesquisa de metástases: satélite, em trânsito e linfonodal.",
  },
  {
    title: "Protocolo Tumores de Partes Moles",
    description:
      "Ultrassonografia dermatológica com doppler.\n\nAvaliação de lesões cutâneas e subcutâneas de características sólidas ou císticas;\nMedição precisa das dimensões e profundidade em relação à epiderme;\nAnálise da relação com estruturas adjacentes;\nEstudo Doppler para estudo da vascularização.",
  },
  {
    title: "Protocolo Nervos Periféricos – Hanseníase",
    description:
      "Ultrassonografia de nervos periféricos com doppler.\n\nProtocolo fundamental na investigação de neuropatia periférica;\nAvaliação dos nervos ulnar, mediano, fibular comum e tibial;\nEstudo com Power Doppler para avaliar atividade inflamatória.",
  },
];

const ProceduresSection = () => {
  return (
    <section id="procedimentos" className="py-24 section-warm">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
            Procedimentos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc, index) => (
            <div
              key={index}
              className="bg-background p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                {proc.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed text-justify whitespace-pre-line">
                {proc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
