import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Visualizations from '../components/Visualizations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Your Name - Data Visualization Specialist</title>
        <meta name="description" content="Personal portfolio of a data visualization and dashboard specialist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
}