const Visualizations = () => {
  return (
    <section id="visualizations" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Data Visualizations
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
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
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            These are just a few examples of my data visualization work. For more detailed or interactive visualizations, please contact me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visualizations;