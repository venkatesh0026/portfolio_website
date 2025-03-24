
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-medium mb-2">Portfolio</h3>
            <p className="text-primary-foreground/70">
              Crafting digital experiences with precision & purpose
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</a></li>
                <li><a href="#projects" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Dribbble</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center md:text-left text-primary-foreground/70">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
