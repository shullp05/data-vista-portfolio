import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8">About Me</h1>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold">Professional History</h2>
          </div>
          <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} px-4 py-5 sm:p-0`}>
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Current Position</dt>
                <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">Senior Data Visualization Specialist at XYZ Corp</dd>
              </div>
            </dl>
          </div>
        </div>
        {/* Add more sections for Notable Achievements and Skills */}
      </main>
      <Footer />
    </div>
  );
};

export default About;