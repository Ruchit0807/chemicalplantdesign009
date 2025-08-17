import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Results from './pages/Results';
import Methodology from './pages/Methodology';
import About from './pages/About';
import { CalculationHistory } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [calculationHistory, setCalculationHistory] = useState<CalculationHistory[]>([]);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Add calculation to history
  const addToHistory = (calculation: CalculationHistory) => {
    setCalculationHistory(prev => [calculation, ...prev.slice(0, 9)]); // Keep last 10
  };

  // Clear calculation history
  const clearHistory = () => {
    setCalculationHistory([]);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-200 ${
        isDarkMode 
          ? 'dark bg-gray-900 text-gray-100' 
          : 'bg-gray-50 text-gray-900'
      }`}>
        <Navbar 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode}
        />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/calculator" 
              element={
                <Calculator 
                  onCalculationComplete={addToHistory}
                  calculationHistory={calculationHistory}
                />
              } 
            />
            <Route 
              path="/results" 
              element={
                <Results 
                  calculationHistory={calculationHistory}
                  onClearHistory={clearHistory}
                />
              } 
            />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
