import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Visualizations from '../components/Visualizations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Visualizations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;