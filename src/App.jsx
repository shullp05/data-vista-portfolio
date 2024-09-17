import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Create a new QueryClient instance for React Query
const queryClient = new QueryClient();

/**
 * Main App component
 * 
 * This component sets up the overall structure of the application, including:
 * - React Query for data fetching
 * - Theme provider for dark/light mode
 * - Tooltip provider for UI tooltips
 * - Toast notifications
 * - Routing
 * 
 * How to modify:
 * - To add new pages, import the page component and add a new <Route> element
 * - To change the layout, modify the order of components or add new wrapper components
 * - To remove features (e.g., tooltips), remove the respective provider component
 * 
 * Note: Be cautious when modifying this file as it affects the entire application structure
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

// Additional guidance:
// 1. If you need to add global state management, consider wrapping the entire app with a context provider.
// 2. For authentication, you might want to add a PrivateRoute component and use it for protected routes.
// 3. To add error boundaries, create an ErrorBoundary component and wrap the main content with it.
// 4. For internationalization, you can add a language provider from a library like react-i18next.
// 
// Example of adding a global context:
// 
// import { GlobalStateProvider } from './context/GlobalStateContext';
// 
// const App = () => (
//   <GlobalStateProvider>
//     <QueryClientProvider client={queryClient}>
//       {/* ... existing code ... */}
//     </QueryClientProvider>
//   </GlobalStateProvider>
// );

// Debugging Tips:
// 1. Check the browser console for any error messages.
// 2. Ensure all imported components and pages exist and are exported correctly.
// 3. Verify that all required dependencies are installed (check package.json).
// 4. If routes aren't working, make sure BrowserRouter is wrapping your Routes component.
// 5. For styling issues, check if Tailwind CSS is properly configured in your project.
// 6. If data fetching isn't working, ensure React Query is set up correctly and your API endpoints are correct.
// 7. For theme-related issues, check the ThemeProvider implementation and usage.
// 8. Use React Developer Tools browser extension to inspect component hierarchy and props.
// 9. If you're getting "undefined is not a function" errors, check your import statements and make sure you're not using default imports for named exports.
// 10. For performance issues, use the React Profiler to identify slow rendering components.

// Common Issues and Solutions:
// - "Element type is invalid" error: Make sure the component is imported and spelled correctly.
// - Blank page: Check for JavaScript errors in the console that might be preventing rendering.
// - Styles not applying: Ensure Tailwind CSS is properly set up and you're using the correct class names.
// - Routes not working: Verify that you're using the correct route paths and that components are properly exported.
// - Data not updating: Check that you're using React Query hooks correctly and your API calls are functioning.
// - Theme not changing: Ensure the ThemeProvider is wrapping your app and the useTheme hook is used correctly in components.
