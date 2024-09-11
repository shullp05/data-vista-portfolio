import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';
import { Button } from "@/components/ui/button";
import ProjectCard from '../components/ProjectCard';
import anime from 'animejs/lib/anime.es.js';

const projects = [
  {
    title: "Sales Dashboard",
    description: "Interactive Power BI dashboard showcasing sales trends and KPIs.",
    image: "/images/sales-dashboard.jpg",
    link: "#",
    category: "Power BI"
  },
  {
    title: "Customer Segmentation",
    description: "Tableau visualization of customer segments based on purchasing behavior.",
    image: "/images/customer-segmentation.jpg",
    link: "#",
    category: "Tableau"
  },
  {
    title: "COVID-19 Data Tracker",
    description: "Real-time D3.js visualization of global COVID-19 statistics.",
    image: "/images/covid-tracker.jpg",
    link: "#",
    category: "D3.js"
  },
  {
    title: "Stock Market Analysis",
    description: "Interactive dashboard for analyzing stock market trends and predictions.",
    image: "/images/stock-market.jpg",
    link: "#",
    category: "Power BI"
  },
  {
    title: "Social Media Analytics",
    description: "Comprehensive visualization of social media engagement and sentiment analysis.",
    image: "/images/social-media-analytics.jpg",
    link: "#",
    category: "Tableau"
  },
  {
    title: "Climate Change Visualization",
    description: "Interactive globe showing climate change impacts over time.",
    image: "/images/climate-change.jpg",
    link: "#",
    category: "D3.js"
  },
  {
    title: "E-commerce Performance Dashboard",
    description: "Comprehensive Power BI dashboard tracking key e-commerce metrics and user behavior.",
    image: "/images/ecommerce-dashboard.jpg",
    link: "#",
    category: "Power BI"
  },
  {
    title: "Supply Chain Optimization",
    description: "Tableau visualization for optimizing supply chain processes and identifying bottlenecks.",
    image: "/images/supply-chain.jpg",
    link: "#",
    category: "Tableau"
  },
  {
    title: "Interactive Data Explorer",
    description: "D3.js-powered tool for exploring and visualizing complex datasets with multiple dimensions.",
    image: "/images/data-explorer.jpg",
    link: "#",
    category: "D3.js"
  }
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
    
    // Animate new projects
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;