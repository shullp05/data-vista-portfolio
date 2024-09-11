const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Me
        </h2>
        <div className="mt-6 text-xl text-gray-500">
          <p>
            Hello! I'm [Your Name], a passionate data visualization specialist with [X] years of experience in creating impactful dashboards and interactive visualizations. My expertise lies in transforming complex datasets into clear, actionable insights that drive decision-making.
          </p>
          <p className="mt-4">
            With a background in [Your Background/Education], I've honed my skills in tools like Power BI, Tableau, and D3.js to create visually stunning and informative data representations. My goal is to bridge the gap between raw data and meaningful insights, helping organizations make data-driven decisions with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;