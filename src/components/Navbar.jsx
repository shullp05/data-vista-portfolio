import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const animateToDark = () => {
    anime({
      targets: '.light',
      opacity: 0,
      duration: 500,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.dark',
      opacity: 1,
      duration: 500,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.translate',
      translateX: 0,
      duration: 500,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.rotate',
      rotate: 0,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  };

  const animateToLight = () => {
    anime({
      targets: '.light',
      opacity: 1,
      duration: 500,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.dark',
      opacity: 0,
      duration: 500,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.translate',
      translateX: -55,
      duration: 500,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.rotate',
      rotate: -100,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  };

  const handleThemeToggle = () => {
    toggleTheme();
    isDarkMode ? animateToLight() : animateToDark();
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Your Name
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <label htmlFor="theme-toggle" className="cursor-pointer">
              <input
                type="checkbox"
                id="theme-toggle"
                className="hidden"
                checked={isDarkMode}
                onChange={handleThemeToggle}
              />
              <ThemeToggleIcon />
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
  >
    {children}
  </Link>
);

const ThemeToggleIcon = () => (
  <svg viewBox="0 0 100 45" width="60" height="30" className="inline-block">
    {/* SVG content here (omitted for brevity) */}
  </svg>
);

export default Navbar;