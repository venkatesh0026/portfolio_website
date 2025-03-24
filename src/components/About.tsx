
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block glass-dark px-3 py-1 rounded-full text-sm mb-6 fade-left">
              About Me
            </span>
            <h2 className="section-title mb-6 fade-left delay-100">
              I bring ideas to life through design and code
            </h2>
            <div className="space-y-4 text-muted-foreground fade-left delay-200">
              <p>
                I'm a design-focused developer passionate about creating intuitive, user-centric digital experiences. 
                With a strong foundation in both design principles and technical implementation, I bridge the gap between 
                concept and execution.
              </p>
              <p>
                My approach combines clean aesthetics with functional clarity. I believe in designing with purpose, 
                where every element serves the overall user experience. This philosophy guides my work across websites, 
                applications, and digital products.
              </p>
              <p>
                When I'm not designing or coding, you might find me exploring new technologies, contributing to 
                open-source projects, or seeking inspiration in art, architecture, and nature.
              </p>
            </div>
          </div>
          
          <div className="relative fade-right delay-300">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
              <p className="text-center text-muted-foreground">Profile image</p>
            </div>
            <div className="glass absolute -bottom-6 -right-6 p-6 rounded-xl w-3/4 md:w-2/3">
              <p className="text-sm text-muted-foreground">
                "Good design is as little design as possible. Less, but better – because it concentrates 
                on the essential aspects."
              </p>
              <p className="text-sm font-medium mt-2">— Dieter Rams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
