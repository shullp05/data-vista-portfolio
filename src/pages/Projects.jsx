import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';
import { Button } from "@/components/ui/button";
import ProjectCard from '../components/ProjectCard';
import D3Visualization from '../components/D3Visualization';
import anime from 'animejs/lib/anime.es.js';

const projects = [
  // ... (previous project objects)
  {
    title: "Advanced D3.js Financial Dashboard",
    description: "Interactive D3.js visualization showcasing financial data trends with advanced animations and responsive design.",
    image: "/images/d3-financial-dashboard.jpg",
    link: "#d3-visualization",
    category: "D3.js"
  },
];

const categories = ["All", "Power BI", "Tableau", "D3.js"];

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(filter === "All" 
      ? projects 
      : projects.filter(project => project.category === filter));
    
    anime({
      targets: '.project-card',
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(100),
      easing: 'easeOutQuad',
      duration: 500
    });
  }, [filter]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Projects & Visualizations</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} isDarkMode={isDarkMode} />
          ))}
        </div>

        <div id="d3-visualization" className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Advanced D3.js Financial Dashboard</h2>
          <D3Visualization isDarkMode={isDarkMode} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;