
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Motion from './pages/Motion';
import Illustration from './pages/Illustration';
import Photography from './pages/Photography';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/motion" element={<Motion theme={theme} />} />
          <Route path="/illustration" element={<Illustration theme={theme} />} />
          <Route path="/photography" element={<Photography theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/work/:id" element={<ProjectDetail theme={theme} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
