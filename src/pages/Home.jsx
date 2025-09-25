import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import StarBackground from '../components/StarBackground';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  // console.log(Math.floor((window.innerHeight * window.innerWidth) / 1000));
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* {The Toggle} */}
      {/* <ThemeToggle /> */}

      {/* {Background Effects} */}
      <StarBackground />

      {/* Navbar  */}
      <NavBar />

      {/* Main Content  */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
      {/* Footer  */}
    </div>
  );
}
