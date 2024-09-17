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
