
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";

import { Infinity } from "ldrs/react";
import "ldrs/react/Infinity.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark"); // theme state

  useEffect(() => {
    // Loader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0B192C]">
        <Infinity
          size="55"
          stroke="4"
          strokeLength="0.15"
          bgOpacity="0.1"
          speed="1.3"
          color="white"
        />
      </div>
    );
  }

  return (
    <Router>
      {/* Page background follows theme */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0B192C] text-black dark:text-white transition-colors duration-300">
        {/* Pass theme + setter to Navbar */}
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer theme={theme}/>
      </div>
    </Router>
  );
}

export default App;



