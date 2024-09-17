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
