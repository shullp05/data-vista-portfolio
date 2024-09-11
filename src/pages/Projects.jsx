import Footer from '../components/Footer';

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
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Projects & Visualizations</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a href={project.link} className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Interactive Visualizations</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Power BI Dashboard</h3>
              <div className="aspect-w-16 aspect-h-9">
                {/* Replace the src with your actual Power BI embed URL */}
                <iframe
                  src="https://app.powerbi.com/view?r=your-powerbi-embed-code"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tableau Visualization</h3>
              <div className="aspect-w-16 aspect-h-9">
                {/* Replace the src with your actual Tableau embed URL */}
                <iframe
                  src="https://public.tableau.com/views/your-tableau-viz"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;