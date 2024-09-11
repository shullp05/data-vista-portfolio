const Hero = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Data Visualization Specialist
        </h1>
        <p className="mt-6 text-xl max-w-3xl">
          Transforming complex data into clear, actionable insights through powerful visualizations and interactive dashboards.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-5 py-3 rounded-md font-semibold text-base hover:bg-blue-50 transition duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;