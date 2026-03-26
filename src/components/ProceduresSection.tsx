const procedures = [
  {
    title: "Protocolo Lipedema",
    description:
      "Avaliação ultrassonográfica detalhada do tecido subcutâneo para diagnóstico e estadiamento do lipedema, diferenciando-o de outras condições como linfedema e obesidade, auxiliando no planejamento terapêutico adequado.",
  },
  {
    title: "Protocolo Hidradenite",
    description:
      "Mapeamento por ultrassom das lesões da hidradenite supurativa, identificando trajetos fistulosos, abscessos e coleções profundas, essencial para classificação da doença e planejamento cirúrgico.",
  },
  {
    title: "Mapeamento Facial",
    description:
      "Avaliação ultrassonográfica de alta resolução das estruturas faciais, incluindo localização de preenchedores, análise de camadas cutâneas e identificação de alterações, auxiliando em procedimentos estéticos e dermatológicos.",
  },
  {
    title: "Mapeamento Cervical",
    description:
      "Estudo detalhado por imagem da região cervical, avaliando pele, subcutâneo e estruturas superficiais para diagnóstico de lesões, planejamento de procedimentos e acompanhamento de tratamentos.",
  },
  {
    title: "Mapeamento Abdominal",
    description:
      "Avaliação ultrassonográfica da parede abdominal e tecido subcutâneo, útil para identificação de hérnias, diástases, localização de materiais estéticos e planejamento de procedimentos corporais.",
  },
  {
    title: "Protocolo Glúteo",
    description:
      "Avaliação por imagem da região glútea para localização de implantes e preenchedores, identificação de complicações e acompanhamento pós-procedimentos estéticos com segurança e precisão.",
  },
  {
    title: "Protocolo Unha",
    description:
      "Estudo ultrassonográfico do aparelho ungueal, avaliando leito, matriz e estruturas periungueais para diagnóstico de tumores, doenças inflamatórias, alterações de crescimento e lesões traumáticas.",
  },
  {
    title: "Protocolo Melanoma e Tumores Cutâneos",
    description:
      "Avaliação por ultrassom de alta frequência para estadiamento locorregional de melanomas e tumores cutâneos, determinando profundidade, margens e comprometimento de estruturas adjacentes para planejamento cirúrgico.",
  },
  {
    title: "Protocolo Tumores de Partes Moles",
    description:
      "Diagnóstico e caracterização de tumores subcutâneos e de partes moles por ultrassonografia, diferenciando lesões benignas de suspeitas, com avaliação de vascularização e relação com estruturas vizinhas.",
  },
  {
    title: "Protocolo Nervos Periféricos – Hanseníase",
    description:
      "Avaliação ultrassonográfica dos nervos periféricos para detecção de espessamento neural, alterações inflamatórias e comprometimento causado pela hanseníase, auxiliando no diagnóstico precoce e monitoramento do tratamento.",
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
              <p className="text-sm text-muted-foreground font-body font-light leading-relaxed text-justify">
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
