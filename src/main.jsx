import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * Main entry point for the React application.
 * 
 * This file is responsible for rendering the root component (App) into the DOM.
 * It also imports the main CSS file for global styles.
 * 
 * How to modify:
 * - To add global providers or wrappers, you can wrap the <App /> component here.
 * - If you need to add global error boundaries or analytics, this is a good place to do it.
 * 
 * Example of adding a provider:
 * 
 * import { SomeProvider } from 'some-library';
 * 
 * ReactDOM.createRoot(document.getElementById("root")).render(
 *   <SomeProvider>
 *     <App />
 *   </SomeProvider>
 * );
 * 
 * Caution:
 * - Be careful when modifying this file, as it affects the entire application.
 * - Ensure any added providers or wrappers are necessary at the global level.
 * - Always test thoroughly after making changes to this file.
 */

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
