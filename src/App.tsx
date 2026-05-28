import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Background from './components/Background';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-zinc-900 dark:text-zinc-100">
        <Background />
        <Header />
        <main className="relative">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
