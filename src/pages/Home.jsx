import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;