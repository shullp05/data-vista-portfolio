import { useState } from 'react';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
  }
];

const categories = ["All", "Power BI", "Tableau", "D3.js"];

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Card key={index} className={`overflow-hidden ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {project.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className={isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}>
                  <a href={project.link}>View Project →</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;