import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProceduresSection from "@/components/ProceduresSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dra. Sara Joca — Médica Radiologista | Ultrassom Dermatológico e para Cirurgias Plásticas em Fortaleza</title>
        <meta name="description" content="Dra. Sara Joca, médica radiologista titular do Colégio Brasileiro de Radiologia. Ultrassom dermatológico e para cirurgias plásticas em Fortaleza-CE. CRM 16136 • RQE 11838." />
        <link rel="canonical" href="https://site-sweet-editor.lovable.app/" />
      </Helmet>
      <main>
        <HeroSection />
        <AboutSection />
        <ProceduresSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;