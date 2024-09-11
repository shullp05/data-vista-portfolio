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
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Projects
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
};

export default Projects;