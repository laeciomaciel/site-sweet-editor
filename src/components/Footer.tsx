const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-muted-foreground font-body tracking-wider">
          © {new Date().getFullYear()} Dra. Sara Joca — Médica Radiologista | CRM 16136 • RQE 11838
        </p>
      </div>
    </footer>
  );
};

export default Footer;
