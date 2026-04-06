const procedures = [
  {
    title: "Protocolo Lipedema",
    items: [
      "Protocolo baseado em evidências;",
      "Avaliação personalizada e mapeamento da gordura subcutânea em pontos estratégicos.",
    ],
  },
  {
    title: "Protocolo Hidradenite",
    items: [
      "Avaliação pré e pós-operatória;",
      "Estadiamento com escore mSOS-HS;",
      "Mapeamento detalhado de fístulas, coleções e pseudocistos;",
      "Análise inflamatória com Power Doppler;",
      "Laudo completo com desenhos esquemáticos personalizados.",
    ],
  },
  {
    title: "Mapeamento Facial",
    items: [
      "Identificação e localização de preenchedores, bioestimuladores e fios;",
      "Planejamento pré-operatório e controle pós-operatório;",
      "Diagnóstico de complicações.",
    ],
  },
  {
    title: "Mapeamento Cervical",
    items: [
      "Planejamento pré e pós procedimentos como lipo de papada, lifting e Deep Plane;",
      "Avaliação anatômica completa da região submentoniana e cervical;",
      "Estudo da musculatura cervical;",
      "Medição do volume e posicionamento das glândulas submandibulares;",
      "Quantificação da gordura pré e pós-platismal;",
      "Diagnóstico de complicações.",
    ],
  },
  {
    title: "Mapeamento Abdominal",
    items: [
      "Avaliação pré e pós-procedimentos (lipoaspiração/abdominoplastia);",
      "Mensuração da gordura subcutânea e registro ilustrativo por regiões abdominais, fornecendo mais precisão cirúrgica;",
      "Medição das distâncias dos músculos abdominais;",
      "Pesquisa de hérnias de parede abdominal.",
    ],
  },
  {
    title: "Protocolo Glúteo",
    items: [
      "Mapeamento dos quadrantes glúteos, dos flancos e das regiões proximais das coxas;",
      "Avaliação da espessura do tecido adiposo subcutâneo;",
      "Detecção de preenchedores, bioestimuladores e possíveis complicações.",
    ],
  },
  {
    title: "Protocolo Unha",
    items: [
      "Avaliação detalhada de placas, matriz, leito e dobras ungueais;",
      "Investigação de tumores, inflamações e infecções;",
      "Estudo da cortical óssea e articulação distal;",
      "Doppler para análise inflamatória e vascularização anômala.",
    ],
  },
  {
    title: "Protocolo Melanoma e Tumores Cutâneos",
    items: [
      "Delimitação precisa da lesão;",
      "Avaliação de profundidade, margens e planos acometidos;",
      "Caracterização ecográfica: composição, ecogenicidade, vascularização;",
      "Estudo de estruturas adjacentes (vasos, nervos, articulações);",
      "Pesquisa de metástases: satélite, em trânsito e linfonodal.",
    ],
  },
  {
    title: "Protocolo Tumores de Partes Moles",
    items: [
      "Avaliação de lesões cutâneas e subcutâneas de características sólidas ou císticas;",
      "Medição precisa das dimensões e profundidade em relação à epiderme;",
      "Análise da relação com estruturas adjacentes;",
      "Estudo Doppler para estudo da vascularização.",
    ],
  },
  {
    title: "Protocolo Morfeia (Esclerodermia)",
    items: [
      "Avaliação da extensão clínica e subclínica e monitoramento evolutivo;",
      "Estadiamento de atividade com o escore mUS-MAS;",
      "Análise da atividade inflamatória com Doppler;",
      "Laudo estruturado completo com desenhos esquemáticos do mapeamento corporal.",
    ],
  },
  {
    title: "Protocolo Nervos Periféricos – Hanseníase",
    items: [
      "Protocolo fundamental na investigação de neuropatia periférica;",
      "Avaliação dos nervos ulnar, mediano, fibular comum e tibial;",
      "Estudo com Power Doppler para avaliar atividade inflamatória.",
    ],
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
              <ul className="space-y-1">
                {proc.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-body font-light leading-relaxed text-justify flex items-start gap-2">
                    <span className="shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
