import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features'; 
import Pricing from './pages/Pricing';   
import Integrations from './pages/Integrations';
import Analytics from './pages/Analytics';
import LiveDemo from './pages/LiveDemo';
import SignIn from './pages/SignIn'; 
import Register from './pages/Register';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderViewPort = () => {
    switch (currentPage) {
      case 'home':         
        return <Home onNavigate={setCurrentPage} />;
      case 'features':     
        return <Features onNavigate={setCurrentPage} />;
      case 'pricing': 
        return <Pricing onNavigate={setCurrentPage} />;
      case 'integrations': 
        return <Integrations onNavigate={setCurrentPage} />;
      case 'analytics': 
        return <Analytics onNavigate={setCurrentPage} />;    
      case 'demo':
        return <LiveDemo onNavigate={setCurrentPage} />;     
      case 'signin': 
        return <SignIn onNavigate={setCurrentPage} />;
      case 'register': 
        return <Register onNavigate={setCurrentPage} />;
      default:             
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  // Determines which pages should display the standard header navigation menu links
  const showNavbar = ['home', 'features', 'pricing', 'integrations', 'analytics'].includes(currentPage);

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Renders Navbar EXACTLY once globally */}
      {showNavbar && <Navbar onNavigate={setCurrentPage} />}
      
      {/* Dynamic Main Dashboard Viewport Context */}
      <main style={{ flex: 1 }}>
        {renderViewPort()}
      </main>

      {/* Global Brand Navigation Footer links layout */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}