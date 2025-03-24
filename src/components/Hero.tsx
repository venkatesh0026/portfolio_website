
const Hero = () => {
  return (
    <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="container-tight">
        <div className="text-center mb-12">
          <span className="inline-block glass-dark px-3 py-1 rounded-full text-sm mb-6 fade-down delay-100">
            Hello, I'm a Creative Professional
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 fade-up delay-200">
            Crafting Digital Experiences <br className="hidden md:block" />
            With Precision &amp; Purpose
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 fade-up delay-300">
            I design and build beautiful digital products that help businesses and individuals succeed in the modern world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 fade-up delay-400">
            <a 
              href="#projects" 
              className="button-hover bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="button-hover glass-dark px-6 py-3 rounded-lg font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden fade-up delay-500">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-center text-lg text-muted-foreground">
              Hero image or showcase content
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
