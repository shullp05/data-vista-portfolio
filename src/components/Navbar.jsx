import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              DataViz Pro
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" isDarkMode={isDarkMode}>Home</NavLink>
            <NavLink to="/about" isDarkMode={isDarkMode}>About</NavLink>
            <NavLink to="/projects" isDarkMode={isDarkMode}>Projects</NavLink>
            <NavLink to="/contact" isDarkMode={isDarkMode}>Contact</NavLink>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isDarkMode }) => (
  <Link
    to={to}
    className={`hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;

// Navbar Component Guide:
// 
// 1. Responsive Design:
//    - The current navbar is hidden on mobile screens. To add mobile responsiveness:
//      a. Implement a hamburger menu for small screens.
//      b. Create a separate mobile menu component that slides in or drops down.
// 
// 2. Active Link Styling:
//    - To highlight the active link, you can use the `useLocation` hook from react-router-dom:
//      ```
//      import { useLocation } from 'react-router-dom';
//      const location = useLocation();
//      // Then add a condition to check if the current path matches the link's path
//      ```
// 
// 3. Dropdown Menus:
//    - For more complex navigation, consider adding dropdown menus:
//      a. Create a new DropdownMenu component.
//      b. Use it for grouping related links (e.g., different types of projects).
// 
// 4. Search Functionality:
//    - To add a search bar:
//      a. Create a new Search component with an input field.
//      b. Implement search logic (could be client-side filtering or API calls).
// 
// 5. Accessibility:
//    - Ensure all interactive elements are keyboard accessible.
//    - Add proper ARIA labels for better screen reader support.
// 
// 6. Animations:
//    - Consider adding subtle animations for hover effects or mobile menu transitions.
//    - You can use libraries like Framer Motion for more complex animations.
// 
// Remember to test any changes thoroughly, especially for responsiveness and accessibility.
