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
    title: "Protocolo Ungueal (Unha)",
    subtitle: "Ultrassonografia Dermatológica com Doppler",
    items: [
      "• **Análise Estrutural Completa:** Avaliação detalhada da matriz, leito e placa ungueal.",
      "• **Diagnóstico de Lesões:** Investigação de tumores (como o tumor glômico), processos inflamatórios e infecciosos.",
      "• **Avaliação Osteoarticular:** Estudo da cortical óssea da falange distal e da articulação adjacente.",
      "• **Mapeamento Vascular:** Uso do Doppler para identificar vascularização anômala e quantificar a atividade inflamatória.",
    ],
  },
  {
    title: "Melanoma e Tumores Cutâneos",
    subtitle: "Ultrassonografia Dermatológica com Doppler",
    items: [
      "• **Mapeamento Pré-Operatório:** Delimitação da lesão, com avaliação de profundidade (espessura), margens e planos anatômicos acometidos.",
      "• **Caracterização Ecográfica:** Análise detalhada da composição, ecogenicidade e padrão de vascularização da lesão através do Doppler de alta frequência.",
      "• **Relação Anatômica:** Estudo da proximidade com estruturas adjacentes críticas, como vasos e articulações.",
      "• **Pesquisa de Metástases:** Investigação direcionada de metástases satélites, em trânsito e avaliação da morfologia linfonodal (linfonodo regional).",
    ],
  },
  {
    title: "Tumores de Partes Moles",
    subtitle: "Ultrassonografia Dermatológica com Doppler",
    items: [
      "• **Caracterização de Lesões:** Avaliação de lesões cutâneas e subcutâneas, diferenciando componentes sólidos, císticos ou mistos.",
      "• **Mensuração:** Medição detalhada das dimensões e da profundidade da lesão em relação aos planos anatômicos.",
      "• **Mapeamento Topográfico:** Análise da relação de proximidade com estruturas adjacentes, essencial para o planejamento cirúrgico.",
      "• **Análise Vascular:** Estudo pelo Doppler para avaliar o padrão de vascularização, auxiliando na distinção diagnóstica e na graduação da atividade da lesão.",
    ],
  },
  {
    title: "Nervos Periféricos (Hanseníase)",
    subtitle: "Ultrassonografia de Alta Resolução com Doppler",
    items: [
      "• **Investigação de Neuropatias:** Protocolo fundamental para o estudo de neuropatias periféricas.",
      "• **Mapeamento Neural Estrutural:** Avaliação da morfologia e espessura dos nervos ulnar, mediano, fibular comum e tibial.",
      "• **Análise de Atividade Inflamatória:** Uso do Power Doppler para identificar hipervascularização intraneural, auxiliando no diagnóstico de neurites e estados reacionais.",
    ],
  },
  {
    title: "Artrite Reumatoide (Protocolo US-10)",
    subtitle: "Ultrassonografia Reumatológica com Doppler",
    items: [
      "• **Monitoramento Precoce:** Protocolo especializado para a avaliação diagnóstica e o acompanhamento da atividade inflamatória em fases iniciais da doença.",
      "• **Avaliação Sistematizada:** Exame padronizado de punhos, articulações metacarpofalângicas e interfalângicas proximais.",
      "• **Quantificação Inflamatória:** Análise detalhada com Power Doppler para graduação da sinovite, fornecendo dados objetivos para o ajuste da terapêutica.",
    ],
  },
  {
    title: "Protocolo MASEI (Ultrassonografia de Ênteses)",
    subtitle: "Ultrassonografia Reumatológica com Doppler",
    items: [
      "• **Diagnóstico de Espondiloartrites:** Protocolo para o diagnóstico precoce e o rastreio de entesites clínicas e subclínicas.",
      "• **Avaliação Sistematizada:** Estudo bilateral de 12 sítios entesares (cotovelos, joelhos e calcanhares), fornecendo uma análise ampla e comparativa.",
      "• **Escore de Risco e Atividade:** Laudo técnico com o cálculo do escore MASEI e análise de atividade inflamatória pelo Power Doppler.",
    ],
  },
  {
    title: "Protocolo Articular Dirigido",
    subtitle: "Ultrassonografia Reumatológica com Doppler",
    items: [
      "• **Avaliação Focada:** Análise detalhada e dirigida à queixa clínica específica do paciente, possibilitando um diagnóstico mais assertivo.",
      "• **Detecção Precoce:** Identificação de sinovite, tenossinovite, erosões ósseas e derrames articulares em estágios iniciais.",
      "• **Mapeamento Inflamatório:** Uso do Power Doppler para quantificar a atividade inflamatória aguda, essencial para guiar a conduta terapêutica imediata.",
      "• **Laudo Individualizado:** Relatório técnico e orientado para o suporte à decisão clínica do médico assistente.",
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
