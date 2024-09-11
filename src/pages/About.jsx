import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About Me</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Professional History</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              {/* Add your professional history items here */}
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Current Position</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Senior Data Visualization Specialist at XYZ Corp</dd>
              </div>
              {/* Add more items as needed */}
            </dl>
          </div>
        </div>
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Notable Achievements</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <ul className="list-disc list-inside">
              {/* Add your achievements here */}
              <li className="py-2">Led a team that increased data-driven decision making by 40% through innovative dashboard designs</li>
              <li className="py-2">Developed a real-time analytics platform that saved the company $500,000 annually</li>
              {/* Add more achievements as needed */}
            </ul>
          </div>
        </div>
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {/* Add your skills here */}
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Power BI</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Tableau</span>
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">D3.js</span>
              </li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;