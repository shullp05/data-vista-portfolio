import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;