import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Recommendations from './components/Recommendations';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';


function App() {
  return (
    <ThemeProvider>
      <div className="relative overflow-hidden min-h-screen">
        <SpaceBackground />
        <Chatbot />
        <Header />
        <main className="relative">
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Recommendations />
          <Certificates />

          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
