import { useState, useEffect } from "react";
import AppProvider, { useApp } from "./context/AppContext";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import ProjectModal from "./components/ProjectModal";
import ColorPicker from "./components/ColorPicker";
import Toast from "./components/Toast";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = document.getElementById("content-area");
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function AppContent() {
  const { projectModal, setProjectModal } = useApp();

  return (
    <>
      <ScrollProgress />
      <Header />

      <main id="content-area" className="content-area">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>

      <ColorPicker />
      <Toast />

      {projectModal && (
        <ProjectModal
          project={projectModal}
          onClose={() => setProjectModal(null)}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
