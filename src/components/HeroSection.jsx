import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-4 opacity-0 animate-fade-in-delay-1">
              Davut
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">
              Simsek
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I craft engaging web experiences using modern technologies. I'm
            passionate about building interfaces that are not only visually
            appealing but also functional and user-friendly. I'm eager to
            contribute, learn, and grow.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
