const procedures = [
  {
    title: "Protocolo Lipedema",
    subtitle: "Ultrassom dermatológico com doppler de alta frequência.",
    items: [
      "• Protocolo baseado em evidências;",
      "• Avaliação personalizada e mapeamento da gordura subcutânea em pontos estratégicos.",
    ],
  },
  {
    title: "Protocolo Hidradenite",
    subtitle: "Ultrassom dermatológico com doppler de alta frequência.",
    items: [
      "• Avaliação pré e pós-operatória;",
      "• Estadiamento com escore mSOS-HS;",
      "• Mapeamento detalhado de fístulas, coleções e pseudocistos;",
      "• Análise inflamatória com Power Doppler;",
      "• Laudo completo com desenhos esquemáticos personalizados.",
    ],
  },
  {
    title: "Mapeamento Facial",
    subtitle: "Ultrassonografia dermatológica com doppler.",
    items: [
      "• Identificação e localização de preenchedores, bioestimuladores e fios;",
      "• Planejamento pré-operatório e controle pós-operatório;",
      "• Diagnóstico de complicações.",
    ],
  },
  {
    title: "Mapeamento Cervical",
    subtitle: "Ultrassonografia dermatológica com doppler.",
    items: [
      "• Planejamento pré e pós procedimentos como lipo de papada, lifting e Deep Plane;",
      "• Avaliação anatômica completa da região submentoniana e cervical;",
      "• Estudo da musculatura cervical;",
      "• Medição do volume e posicionamento das glândulas submandibulares;",
      "• Quantificação da gordura pré e pós-platismal;",
      "• Diagnóstico de complicações.",
    ],
  },
  {
    title: "Mapeamento Abdominal",
    subtitle: "Ultrassonografia dermatológica com doppler.",
    items: [
      "• Avaliação pré e pós-procedimentos (lipoaspiração/abdominoplastia);",
      "• Mensuração da gordura subcutânea e registro ilustrativo por regiões abdominais, fornecendo mais precisão cirúrgica;",
      "• Medição das distâncias dos músculos abdominais;",
      "• Pesquisa de hérnias de parede abdominal.",
    ],
  },
  {
    title: "Protocolo Glúteo",
    subtitle: "Ultrassonografia dermatológica com doppler.",
    items: [
      "• Mapeamento dos quadrantes glúteos, dos flancos e das regiões proximais das coxas;",
      "• Avaliação da espessura do tecido adiposo subcutâneo;",
      "• Detecção de preenchedores, bioestimuladores e possíveis complicações.",
    ],
  },
  {
    title: "Protocolo Unha",
    subtitle: "Ultrassonografia dermatológica com doppler.",
    items: [
      "• Avaliação detalhada de placas, matriz, leito e dobras ungueais;",
      "• Investigação de tumores, inflamações e infecções;",
      "• Estudo da cortical óssea e articulação distal;",
      "• Doppler para análise inflamatória e vascularização anômala.",
    ],
  },
  {
    title: "Protocolo Melanoma e Tumores Cutâneos",
    subtitle: "Ultrassonografia dermatológica com doppler de alta frequência.",
    items: [
      "• Delimitação precisa da lesão;",
      "• Avaliação de profundidade, margens e planos acometidos;",
      "• Caracterização ecográfica: composição, ecogenicidade, vascularização;",
      "• Estudo de estruturas adjacentes (vasos, nervos, articulações);",
      "• Pesquisa de metástases: satélite, em trânsito e linfonodal.",
    ],
  },
  {
    title: "Protocolo Tumores de Partes Moles",
    subtitle: "Ultrassonografia dermatológica com doppler.",
    items: [
      "• Avaliação de lesões cutâneas e subcutâneas de características sólidas ou císticas;",
      "• Medição precisa das dimensões e profundidade em relação à epiderme;",
      "• Análise da relação com estruturas adjacentes;",
      "• Estudo Doppler para estudo da vascularização.",
    ],
  },
  {
    title: "Protocolo Nervos Periféricos – Hanseníase",
    subtitle: "Ultrassonografia de nervos periféricos com doppler.",
    items: [
      "• Protocolo fundamental na investigação de neuropatia periférica;",
      "• Avaliação dos nervos ulnar, mediano, fibular comum e tibial;",
      "• Estudo com Power Doppler para avaliar atividade inflamatória.",
    ],
  },
  {
    title: "Protocolo US-10 (Artrite Reumatóide)",
    subtitle: "Ultrassom Reumatológico com Doppler de Alta Frequência.",
    items: [
      "• Avaliação e monitoramento da artrite reumatoide em fase inicial.",
      "• Avaliação padronizada de punhos, articulações metacarpofalângicas e interfalângicas proximais.",
      "• Detecção de parâmetros de danos articulares, como erosão óssea e danos na cartilagem.",
      "• Análise de parâmetros inflamatórios com Power Doppler.",
      "• Laudo completo com graduação dos achados.",
    ],
  },
  {
    title: "Protocolo MASEI (Ultrassom de ênteses)",
    subtitle: "Ultrassom Reumatológico com Doppler de Alta Frequência.",
    items: [
      "• Auxílio no diagnóstico precoce de espondiloartrites.",
      "• Avaliação bilateral de 12 sítios entesares (cotovelos, joelhos e calcanhares).",
      "• Detecção de danos estruturais crônicos e erosões.",
      "• Análise de atividade inflamatória com Power Doppler.",
      "• Laudo detalhado com o cálculo do escore de risco.",
    ],
  },
  {
    title: "Protocolo Articular Dirigido",
    subtitle: "Ultrassom Reumatológico com Doppler de Alta Frequência.",
    items: [
      "• Avaliação focada e detalhada da queixa clínica do paciente.",
      "• Detecção precoce de sinovite, tenossinovite e derrame articular.",
      "• Análise de danos estruturais (erosões ósseas e lesões de cartilagem).",
      "• Mapeamento da atividade inflamatória aguda com Power Doppler.",
      "• Laudo minucioso para guiar a conduta terapêutica individualizada.",
    ],
    },
{                               
    title: "Hialuronidase Guiada",
    subtitle: "Ultrassom Dermatológico com Doppler de Alta Frequência.",
    items: [
      "• Tratamento de intercorrências: Dissolução de nódulos, migrações e Edema Tardio (ETIP) por ácido hialurônico.",
      "• Preparo pré-cirúrgico: Dissolução estratégica de ácido hialurônico para cirurgias (ex: Lifting Facial).",
      "• Segurança: Visualização da agulha ou cânula em tempo real durante a injeção da enzima.",
      "• Análise detalhada: Identificação da profundidade e do volume do produto a ser degradado.",
    ],
  },                              
];

const ProceduresSection = () => {
  return (
    <section id="procedimentos" className="py-24 section-warm">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
            Aplicações e Protocolos de Imagem
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
              <p className="text-sm text-muted-foreground/80 font-body font-medium leading-relaxed text-justify mb-3">
                {proc.subtitle}
              </p>
              <ul className="space-y-1">
                {proc.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-body font-light leading-relaxed text-justify">
                    {item}
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
