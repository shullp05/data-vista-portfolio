import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';
import { Button } from "@/components/ui/button";
import ProjectCard from '../components/ProjectCard';
import FinancialDashboard from '../components/FinancialDashboard';
import anime from 'animejs/lib/anime.es.js';

const projects = [
  {
    title: "Sales Dashboard",
    description: "Interactive Power BI dashboard showcasing sales trends and KPIs.",
    image: "/images/sales-dashboard.jpg",
    link: "#"
  },
  {
    title: "Customer Segmentation",
    description: "Tableau visualization of customer segments based on purchasing behavior.",
    image: "/images/customer-segmentation.jpg",
    link: "#"
  },
  {
    title: "Advanced D3.js Financial Dashboard",
    description: "Interactive D3.js visualization showcasing financial data trends with advanced animations and responsive design.",
    image: "/images/d3-financial-dashboard.jpg",
    link: "#financial-dashboard",
    category: "D3.js"
  }
];

const categories = ["All", "Power BI", "Tableau", "D3.js"];

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showDashboard, setShowDashboard] = useState(false);
  const [modalDimensions, setModalDimensions] = useState({ width: 0, height: 0 });

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

  useEffect(() => {
    const updateModalDimensions = () => {
      setModalDimensions({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };

    updateModalDimensions();
    window.addEventListener('resize', updateModalDimensions);

    return () => window.removeEventListener('resize', updateModalDimensions);
  }, []);

  const handleViewProject = (project) => {
    if (project.title === "Advanced D3.js Financial Dashboard") {
      setShowDashboard(true);
    }
  };

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
            <ProjectCard 
              key={index} 
              project={project} 
              isDarkMode={isDarkMode} 
              onViewProject={() => handleViewProject(project)}
            />
          ))}
        </div>

        {showDashboard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div 
              className={`w-full h-full max-w-[80vw] max-h-[80vh] overflow-auto rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              style={{ width: modalDimensions.width, height: modalDimensions.height }}
            >
              <div className="sticky top-0 flex justify-end p-4">
                <Button onClick={() => setShowDashboard(false)}>Close</Button>
              </div>
              <FinancialDashboard />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;