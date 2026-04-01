import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";

const ContactSection = () => {
  const mapUrl = "https://www.google.com/maps/place/Av.+Santos+Dumont,+5753+-+Papicu,+Fortaleza+-+CE";
  const embedUrl = "https://www.google.com/maps?q=Av.+Santos+Dumont,+5753,+Fortaleza,+CE&output=embed";

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
            Agende seu Atendimento
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="grid gap-8">
            <div className="flex items-start gap-5">
              <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                <p className="text-muted-foreground font-body font-light text-sm">
                  Segunda a sexta: 8h às 17h
                </p>
                <p className="text-muted-foreground font-body font-light text-sm">
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Clínica</h4>
                <p className="text-muted-foreground font-body font-light text-sm">
                  Clínica Guilherme Holanda - Complexo São Mateus, Torre Office
                </p>
                <p className="text-muted-foreground font-body font-light text-sm">
                  Av. Santos Dumont, 5753, 12º andar, Salas 1208 e 1209.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Telefone</h4>
                <p className="text-muted-foreground font-body font-light text-sm">
                  Ligações: (85) 9 9152-8353
                </p>
                <p className="text-muted-foreground font-body font-light text-sm">
                  WhatsApp: (85) 99226-0983
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">E-mail</h4>
                <p className="text-muted-foreground font-body font-light text-sm">
                  drasarajoca@gmail.com
                </p>
              </div>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-[350px] md:h-full min-h-[300px]"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            />
          </a>
        </div>

        {/* Avalie meu atendimento */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-4">
            Avalie meu atendimento
          </h3>
          <p className="text-muted-foreground font-body font-light text-sm mb-6">
            Sua opinião é muito importante para mim. Deixe sua avaliação no Google.
          </p>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJK7kN9h0xeGoRhDeu_5hf1O8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-foreground/60 text-foreground font-body text-sm tracking-widest uppercase hover:bg-foreground/5 transition-all duration-300"
          >
            <Star className="w-4 h-4" />
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
