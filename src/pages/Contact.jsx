import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8">Get in Touch</h1>
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
          <div className="px-4 py-5 sm:p-6">
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={`mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;