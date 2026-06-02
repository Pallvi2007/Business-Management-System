import React from 'react';

export default function Navbar({ onNavigate }) {
  const navStyle = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '20px 50px', 
    backgroundColor: '#000000', 
    borderBottom: '1px solid #1a1a1a'
  };

  return (
    <nav style={navStyle}>
      <div 
        style={{ fontWeight: 'bold', fontSize: '20px', color: '#fff', cursor: 'pointer' }} 
        onClick={() => onNavigate('home')}
      >
        BuildVerse
      </div>
      
      <div style={{ display: 'flex', gap: '20px', color: '#8F9CAE', fontSize: '14px' }}>
        {['Features', 'Pricing', 'Integrations', 'Analytics', 'Live Demo'].map((item) => (
          <span 
            key={item} 
            style={{ cursor: 'pointer' }} 
            onClick={() => {
              // Correctly map "Live Demo" to 'demo' and others to lowercase
              const path = item === 'Live Demo' ? 'demo' : item.toLowerCase();
              onNavigate(path);
            }}
          >
            {item}
          </span>
        ))}
      </div>
      
      <button 
        onClick={() => onNavigate('signin')} 
        style={{ 
          padding: '8px 16px', 
          borderRadius: '6px', 
          border: 'none', 
          background: '#0066FF', 
          color: '#fff', 
          cursor: 'pointer' 
        }}
      >
        Sign In
      </button>
    </nav>
  );
}