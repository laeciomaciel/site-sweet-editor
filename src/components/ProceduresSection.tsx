const procedures = [
  {
    title: "Mapeamento Facial",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• **Identificação de injetáveis prévios:** Localização e identificação de preenchedores, bioestimuladores e fios faciais.",
      "• **Segurança pré-procedimento:** Planejamento estratégico para minimizar riscos e elevar a previsibilidade cirúrgica e estética.",
      "• **Gestão de complicações:** Diagnóstico diferencial assertivo de intercorrências e complicações estéticas.",
      "• **Laudos Iconográficos:** Guia visual com ilustrações didáticas da face, facilitando a correlação clínica imediata.",
    ],
  },
  {
    title: "Hialuronidase Guiada",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• **Gestão de Intercorrências:** Dissolução de nódulos, correção de migrações e tratamento de Edema Tardio Intermitente e Persistente (ETIP) por ácido hialurônico.",
      "• **Preparo Pré-Cirúrgico:** Degradação estratégica de ácido hialurônico para otimizar resultados em cirurgias de face, como o Lifting e Deep Plane.",
      "• **Segurança Intervencionista:** Visualização da agulha ou cânula em tempo real, possibilitando que a enzima seja injetada sobre o depósito do produto.",
    ],
  },
  {
    title: "Mapeamento Cervical",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• **Planejamento Cirúrgico:** Suporte para procedimentos como lipo de papada, lifting e Deep Plane.",
      "• **Avaliação Anatômica:** Estudo da musculatura cervical, glândulas submandibulares e compartimentos de gordura (pré e pós-platismal).",
      "• **Laudos Iconográficos:** Guia visual personalizado com a anatomia da região cervical, facilitando a correlação cirúrgica e a comunicação com o paciente.",
    ],
  },
  {
    title: "Mapeamento Abdominal",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• **Suporte em Lipoaspiração e Abdominoplastia:** Avaliação pré e pós-operatória detalhada para maior segurança e previsibilidade ao cirurgião.",
      "• **Mensuração da gordura subcutânea:** Registro da espessura por regiões abdominais, otimizando o planejamento cirúrgico e o refinamento de resultados.",
      "• **Avaliação da Parede Abdominal:** Pesquisa de hérnias e medição da distância dos músculos (diástase), auxiliando na decisão da técnica cirúrgica.",
      "• **Laudos Iconográficos:** Registro ilustrativo das camadas e regiões abdominais, facilitando a correlação anatômica no pré e pós-operatório.",
    ],
  },
  {
    title: "Protocolo Glúteo",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• **Mapeamento por Quadrantes:** Avaliação detalhada das regiões glúteas, flancos e coxas proximais, com mensuração precisa da espessura do tecido adiposo.",
      "• **Identificação de Injetáveis:** Detecção e localização de preenchedores (incluindo substâncias permanentes) e bioestimuladores de colágeno.",
      "• **Gestão de Complicações:** Diagnóstico assertivo de processos inflamatórios, nódulos ou outras intercorrências pós-procedimento.",
      "• **Laudos Iconográficos:** Guia visual personalizado com a distribuição dos materiais e camadas teciduais, facilitando a correlação clínica.",
    ],
  },
  {
    title: "Protocolo Lipedema",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• **Mensuração Padronizada:** Avaliação da espessura do tecido adiposo em pontos específicos baseada em evidências científicas, permitindo a classificação do estágio da doença.",
      "• **Análise Evolutiva:** Monitoramento detalhado da resposta ao tratamento ao longo do tempo, auxiliando na tomada de decisão clínica e na individualização da terapêutica.",
    ],
  },
  {
    title: "Protocolo Hidradenite Supurativa",
    subtitle: "Ultrassonografia Dermatológica com Doppler",
    items: [
      "• **Estadiamento:** Classificação detalhada utilizando o escore mSOS-HS, fundamental para a definição da conduta clínica ou cirúrgica.",
      "• **Mapeamento Anatômico:** Identificação minuciosa de fístulas, coleções e pseudocistos, com avaliação da atividade inflamatória pelo Power Doppler.",
      "• **Laudos Iconográficos:** Desenhos esquemáticos personalizados que facilitam a correlação clínica imediata.",
    ],
  },
  {
    title: "Protocolo Unha",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• Avaliação detalhada de placas, matriz, leito e dobras ungueais;",
      "• Investigação de tumores, inflamações e infecções;",
      "• Estudo da cortical óssea e articulação distal;",
      "• Doppler para análise inflamatória e vascularização anômala.",
    ],
  },
  {
    title: "Protocolo Melanoma e Tumores Cutâneos",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
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
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• Avaliação de lesões cutâneas e subcutâneas de características sólidas ou císticas;",
      "• Medição precisa das dimensões e profundidade em relação à epiderme;",
      "• Análise da relação com estruturas adjacentes;",
      "• Estudo Doppler para estudo da vascularização.",
    ],
  },
  {
    title: "Protocolo Nervos Periféricos – Hanseníase",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• Protocolo fundamental na investigação de neuropatia periférica;",
      "• Avaliação dos nervos ulnar, mediano, fibular comum e tibial;",
      "• Estudo com Power Doppler para avaliar atividade inflamatória.",
    ],
  },
  {
    title: "Protocolo US-10 (Artrite Reumatóide)",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
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
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• Auxílio no diagnóstico precoce de espondiloartrites.",
      "• Avaliação bilateral de 12 sítios entesares (cotovelos, joelhos e calcanhares).",
      "• Detecção de danos estruturais crônicos e erosões.",
      "• Análise de atividade inflamatória with Power Doppler.",
      "• Laudo detalhado com o cálculo do escore de risco.",
    ],
  },
  {
    title: "Protocolo Articular Dirigido",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• Avaliação focada e detalhada da queixa clínica do paciente.",
      "• Detecção precoce de sinovite, tenossinovite e derrame articular.",
      "• Análise de danos estruturais (erosões ósseas e lesões de cartilagem).",
      "• Mapeamento da atividade inflamatória aguda com Power Doppler.",
      "• Laudo minucioso para guiar a conduta terapêutica individualizada.",
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
              className="bg-background p-8 border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                {proc.title}
              </h3>
              <p className="text-xs text-muted-foreground/80 font-body font-bold leading-relaxed mb-3">
                {proc.subtitle}
              </p>
              <ul className="space-y-1">
                {proc.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-body font-light leading-relaxed text-justify">
                    {item.split('**').map((part, index) => 
                      index % 2 === 1 ? <strong key={index} className="font-semibold">{part}</strong> : part
                    )}
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
