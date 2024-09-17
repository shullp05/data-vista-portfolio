import { useTheme } from './ThemeProvider';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className={`py-16 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
          About Me
        </h2>
        <div className="text-xl">
          <p className="mb-4">
            Hello! I'm John Doe, a passionate data visualization specialist with over 8 years of experience in creating impactful dashboards and interactive visualizations. My expertise lies in transforming complex datasets into clear, actionable insights that drive decision-making.
          </p>
          <p className="mb-4">
            With a background in Computer Science and Statistics, I've honed my skills in tools like Power BI, Tableau, and D3.js to create visually stunning and informative data representations. My goal is to bridge the gap between raw data and meaningful insights, helping organizations make data-driven decisions with confidence.
          </p>
          <p>
            Throughout my career, I've worked with diverse industries including finance, healthcare, and e-commerce, delivering solutions that have significantly improved business processes and strategic planning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

// About Component Guide:
//
// 1. Content Customization:
//    - Update the text content to reflect your personal background, skills, and experience.
//    - Consider adding more paragraphs or sections to provide a comprehensive overview.
//
// 2. Styling:
//    - The component uses Tailwind classes for styling. Adjust these classes to match your desired look.
//    - To change colors, modify the className in the section and text elements.
//
// 3. Responsive Design:
//    - The max-w-7xl class limits the maximum width on larger screens.
//    - Consider adding more responsive classes for better control on different screen sizes.
//
// 4. Dark Mode:
//    - The component uses the isDarkMode value from the ThemeProvider to toggle dark mode styles.
//    - Ensure all text remains readable in both light and dark modes.
//
// 5. Adding More Sections:
//    - You could expand this component to include sections like "Skills", "Experience", or "Education".
//    - Example of adding a Skills section:
//    ```
//    <div className="mt-8">
//      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
//      <ul className="list-disc list-inside">
//        <li>Data Visualization</li>
//        <li>Statistical Analysis</li>
//        <li>Dashboard Design</li>
//        {/* Add more skills */}
//      </ul>
//    </div>
//    ```
//
// 6. Animations:
//    - Consider adding subtle animations to enhance user engagement.
//    - You could use a library like Framer Motion or CSS animations.
//
// 7. Images:
//    - Adding a professional photo or relevant images can make the About section more engaging.
//    - Example of adding an image:
//    ```
//    <img 
//      src="/path-to-your-image.jpg" 
//      alt="John Doe" 
//      className="w-64 h-64 rounded-full mx-auto mb-8"
//    />
//    ```
//
// 8. Accessibility:
//    - Ensure proper heading hierarchy (h1, h2, h3) for screen readers.
//    - If adding images, always include descriptive alt text.
//
// Remember to test any changes thoroughly, especially for responsiveness and accessibility.
