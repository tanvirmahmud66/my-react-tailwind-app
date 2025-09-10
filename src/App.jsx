
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

  useEffect(() => {
    // Simulate loading for 2 seconds (you can adjust)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      <div className="flex flex-col min-h-screen bg-[#0B192C]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
