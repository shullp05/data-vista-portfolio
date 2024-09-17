import { Button } from "@/components/ui/button";
import { useTheme } from './ThemeProvider';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Data Visualization Specialist
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Transforming complex data into clear, actionable insights through powerful visualizations and interactive dashboards.
          </p>
          <div className="mt-10">
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
