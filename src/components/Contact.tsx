
const Contact = () => {
  return (
    <section id="contact">
      <div className="container-tight">
        <span className="inline-block glass-dark px-3 py-1 rounded-full text-sm mb-6 fade-up">
          Get in Touch
        </span>
        <h2 className="section-title fade-up delay-100">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 fade-up delay-200">
          Interested in collaborating? I'm open to projects, consulting opportunities, and creative partnerships.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-right delay-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:ring-2 focus:ring-primary/20 focus:border-primary/20 outline-none transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="button-hover w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="fade-left delay-400">
            <div className="h-full flex flex-col justify-center">
              <div className="glass-dark p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">hello@example.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Social Media</p>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-foreground hover:text-primary transition-colors">LinkedIn</a>
                      <a href="#" className="text-foreground hover:text-primary transition-colors">Twitter</a>
                      <a href="#" className="text-foreground hover:text-primary transition-colors">Dribbble</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
