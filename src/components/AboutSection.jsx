import { Code, User } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="#about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-foreground">
              As a junior full-stack developer, I enjoy building responsive and
              user-friendly web applications while continuously improving my
              skills in modern technologies.
            </p>
            <p className="text-foreground">
              I'm eager to tackle challenges, learn from real-world projects,
              and grow into a well-rounded developer. My focus is on writing
              clean, maintainable code and contributing to meaningful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-10 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-10 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UX DESIGN</h4>
                  <p className="text-foreground">
                    Designing intuitive user interfaced and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
