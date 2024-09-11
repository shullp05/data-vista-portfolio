import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

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
    title: "COVID-19 Data Tracker",
    description: "Real-time D3.js visualization of global COVID-19 statistics.",
    image: "/images/covid-tracker.jpg",
    link: "#"
  }
];

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8">Projects & Visualizations</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <a href={project.link} className={`mt-4 inline-block ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Add Interactive Visualizations section */}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;