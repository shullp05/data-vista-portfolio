import { Button } from "@/components/ui/button";
import { useTheme } from './ThemeProvider';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Data Visualization Specialist
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Transforming complex data into clear, actionable insights through powerful visualizations and interactive dashboards.
          </p>
          <div className="mt-10">
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Hero Component Guide:
//
// 1. Customization:
//    - To change the background color, modify the className in the outer div.
//    - Adjust text sizes and styles by modifying the className for h1 and p elements.
//
// 2. Responsive Design:
//    - The component uses Tailwind's responsive classes (sm:, lg:) for text sizing.
//    - Consider adding more breakpoints for finer control over different screen sizes.
//
// 3. Call-to-Action Button:
//    - The Button component is imported from shadcn/ui.
//    - To change button styles, modify the Button component or pass different props.
//
// 4. Content:
//    - Update the h1 and p text to reflect your specific expertise and value proposition.
//    - Consider adding more content sections or visual elements to enhance the hero section.
//
// 5. Animation:
//    - To add entrance animations, consider using a library like Framer Motion or CSS animations.
//    Example with Framer Motion:
//    ```
//    import { motion } from 'framer-motion';
//    
//    <motion.h1
//      initial={{ opacity: 0, y: -20 }}
//      animate={{ opacity: 1, y: 0 }}
//      transition={{ duration: 0.5 }}
//      className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
//    >
//      Data Visualization Specialist
//    </motion.h1>
//    ```
//
// 6. Background:
//    - Consider adding a subtle pattern or gradient to the background for more visual interest.
//    - You could use a SVG pattern or CSS gradient in the className of the outer div.
//
// 7. Accessibility:
//    - Ensure sufficient color contrast between text and background for readability.
//    - Add aria-label to the Button if the text alone doesn't describe its function.
//
// Remember to test any changes thoroughly, especially for responsiveness and accessibility.
