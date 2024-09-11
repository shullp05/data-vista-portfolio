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
    <nav className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Your Name
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" isDarkMode={isDarkMode}>Home</NavLink>
            <NavLink to="/about" isDarkMode={isDarkMode}>About</NavLink>
            <NavLink to="/projects" isDarkMode={isDarkMode}>Projects</NavLink>
            <NavLink to="/contact" isDarkMode={isDarkMode}>Contact</NavLink>
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

const ThemeToggleIcon = () => (
  <svg viewBox="0 0 100 45" width="60" height="30" className="inline-block">
    <defs>
      <rect id="background" x="0" y="0" width="90" height="40" rx="20"></rect>
      <clipPath id="clip">
        <use href="#background"></use>
      </clipPath>
      <linearGradient id="gradient-light" x1="0" x2="0" y1="0" y2="1">
        <stop stopColor="#8bc8f2" offset="0"></stop>
        <stop stopColor="#fff" offset="1"></stop>
      </linearGradient>
      <filter id="blur-light">
        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
      </filter>
      <pattern id="pattern-light" width="0.1" height="1" viewBox="0 0 10 45">
        <path fill="#40b5f8" d="M 0 0 a 6 6 0 0 0 10 0 v 45 h -10 z"></path>
      </pattern>
      <linearGradient id="gradient-dark" x1="0" x2="0" y1="0" y2="1">
        <stop stopColor="#1F2241" offset="0"></stop>
        <stop stopColor="#7D59DF" offset="1"></stop>
      </linearGradient>
      <linearGradient id="gradient-mask" x1="0" x2="0" y1="0" y2="1">
        <stop stopColor="#000" offset="0"></stop>
        <stop stopColor="#fff" offset="1"></stop>
      </linearGradient>
      <mask id="mask-dark">
        <use fill="url(#gradient-mask)" href="#background"></use>
      </mask>
      <radialGradient id="gradient-moon">
        <stop stopColor="#fdfdfd" offset="0.7"></stop>
        <stop stopColor="#e2e2e2" offset="1"></stop>
      </radialGradient>
      <radialGradient id="gradient-crater">
        <stop stopColor="#e0e0e0" offset="0"></stop>
        <stop stopColor="#d9d9d9" offset="1"></stop>
      </radialGradient>
      <pattern id="pattern-dark" width="0.2" height="1" viewBox="0 0 20 45">
        <path fill="#fff" d="M 2 5 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
        <path fill="#fff" d="M 10 16 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
        <path fill="#fff" d="M 16 27 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
        <path fill="#fff" d="M 10 38 l 1 1 l -1 1 l -1 -1 l 1 -1"></path>
      </pattern>
    </defs>
    <g transform="translate(5 2.5)">
      <g clipPath="url(#clip)">
        <g className="dark">
          <use fill="url(#gradient-dark)" href="#background"></use>
          <g className="background" transform="translate(0 -40) scale(1 0.4)">
            <rect transform="translate(-40 0) rotate(4)" fill="url(#pattern-dark)" x="0" y="0" width="100" height="45"></rect>
          </g>
          <use mask="url(#mask-dark)" fill="url(#gradient-dark)" href="#background"></use>
        </g>
        <g className="light">
          <use fill="url(#gradient-light)" href="#background"></use>
          <g className="background" transform="translate(-30 -20)">
            <g transform="translate(30 20)">
              <rect fill="url(#pattern-light)" x="-5" y="27.5" width="100" height="45"></rect>
            </g>
          </g>
        </g>
      </g>
    </g>
    <g transform="translate(77.5 22.5)">
      <g className="translate" transform="translate(-55)">
        <g className="rotate" transform="rotate(-100)">
          <g className="dark">
            <circle fill="url(#gradient-moon)" cx="0" cy="0" r="20.5"></circle>
            <g transform="translate(-8 -7.5)">
              <ellipse transform="rotate(-30)" fill="url(#gradient-crater)" stroke="#d5d5d5" strokeWidth="0.2" cx="0" cy="0" rx="4" ry="3"></ellipse>
            </g>
            <g transform="translate(11 5)">
              <ellipse fill="url(#gradient-crater)" stroke="#d5d5d5" strokeWidth="0.2" cx="0" cy="0" rx="3.85" ry="4"></ellipse>
            </g>
            <g transform="translate(-6 12)">
              <ellipse transform="rotate(-10)" fill="url(#gradient-crater)" stroke="#d5d5d5" strokeWidth="0.2" cx="0" cy="0" rx="2" ry="1.75"></ellipse>
            </g>
          </g>
        </g>
        <g className="light">
          <circle fill="#FFD21F" cx="0" cy="0" r="21" filter="url(#blur-light)"></circle>
          <circle fill="#FFD21F" cx="0" cy="0" r="20.5"></circle>
        </g>
      </g>
    </g>
  </svg>
);

export default Navbar;