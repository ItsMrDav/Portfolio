import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="py-48 px-4 relative border-t border-border">
      <div className="container max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/davut-simsek/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-2 duration-300"
          >
            <Linkedin size={30} />
          </a>
          <a
            href="https://github.com/ItsMrDav"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-2 duration-300"
          >
            <Github size={30} />
          </a>
          <a
            href="mailto:davutt.simsek@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-2 duration-300"
          >
            <Mail size={30} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-md text-foreground/70">
          &copy; {new Date().getFullYear()} Davut Simsek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
