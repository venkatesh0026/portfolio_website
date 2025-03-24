
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Minimalist Portfolio",
      category: "Web Design",
      description: "A clean, modern portfolio website with smooth animations and intuitive navigation.",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "UX/UI Design",
      description: "Comprehensive e-commerce solution focused on streamlined user experience and conversion optimization.",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "App Design",
      description: "Secure and user-friendly banking application with elegant UI and seamless transaction flow.",
    }
  ];

  return (
    <section id="projects">
      <div className="container-tight">
        <span className="inline-block glass-dark px-3 py-1 rounded-full text-sm mb-6 fade-up">
          My Work
        </span>
        <h2 className="section-title fade-up delay-100">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 fade-up delay-200">
          A selection of my recent work across web design, application development, and digital experiences.
          Each project represents a unique challenge and solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card fade-up delay-${(index + 3) * 100}`}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Project image</p>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                </div>
                <span className="inline-block glass-dark px-2 py-0.5 rounded-full text-xs mb-3">
                  {project.category}
                </span>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex text-sm font-medium text-primary hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-up delay-600">
          <a 
            href="#" 
            className="button-hover inline-block glass-dark px-6 py-3 rounded-lg font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
