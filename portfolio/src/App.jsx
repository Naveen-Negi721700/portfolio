import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import CommitLog from "./components/CommitLog";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0d050a] text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <CommitLog />
        <Projects />
        <Skills />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
