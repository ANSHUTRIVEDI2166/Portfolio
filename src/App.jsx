import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ResearchPage from './pages/ResearchPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import HonoursPage from './pages/HonoursPage';
import CertificatesPage from './pages/CertificatesPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Floating mesh gradient orbs */}
      <div className="mesh-gradient orb-1" aria-hidden="true" />
      <div className="mesh-gradient orb-2" aria-hidden="true" />
      <div className="mesh-gradient orb-3" aria-hidden="true" />

      {/* Particle canvas */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navbar />

      {/* Pages */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/honours" element={<HonoursPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
