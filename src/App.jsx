import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import { portfolioData } from "./data/portfolioData";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,_rgba(168,85,247,0.18),transparent_30%),linear-gradient(to_bottom,_#f8fafc,_#eef2ff_40%,_#e0f2fe)] text-slate-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.17),transparent_30%),radial-gradient(circle_at_85%_10%,_rgba(168,85,247,0.15),transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a_55%,_#082f49)] dark:text-slate-100">
      <Navbar name={portfolioData.name} profileImage={portfolioData.profileImage} />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills skills={portfolioData.skills} progress={portfolioData.skillProgress} />
        <Projects projects={portfolioData.projects} />
        <Timeline
          education={portfolioData.education}
          careerGoal={portfolioData.careerGoal}
          certifications={portfolioData.certifications}
        />
        <Contact socialLinks={portfolioData.socialLinks} contactEmail={portfolioData.contactEmail} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}

export default App;
