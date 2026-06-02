import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '80vh', padding: '100px 20px 80px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      {/* Hero Header Section */}
      <h1 style={{ fontSize: '64px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-2px', lineHeight: '1.1' }}>
        The <span style={{ color: '#0066FF' }}>Centralized Source</span> <br /> of Truth for Your Business
      </h1>
      
      <p style={{ color: '#8F9CAE', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
        Replace messy spreadsheets and scattered chat messages with one professional platform.
      </p>

      {/* Primary Call to Action Button */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button 
          onClick={() => onNavigate('register')} 
          style={{ 
            backgroundColor: '#0066FF', 
            color: '#FFF', 
            padding: '14px 28px', 
            borderRadius: '8px', 
            border: 'none', 
            fontSize: '16px', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}
        >
          Start for Free →
        </button>
      </div>

      {/* Metrics Row Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '120px', borderTop: '1px solid #111', paddingTop: '40px' }}>
        <div>
          <div style={{ fontSize: '28px', fontWeight: '800' }}>150+</div>
          <div style={{ color: '#8F9CAE', fontSize: '12px', marginTop: '4px' }}>Developers</div>
        </div>
        <div>
          <div style={{ fontSize: '28px', fontWeight: '800' }}>10K+</div>
          <div style={{ color: '#8F9CAE', fontSize: '12px', marginTop: '4px' }}>Tasks</div>
        </div>
        <div>
          <div style={{ fontSize: '28px', fontWeight: '800' }}>99.9%</div>
          <div style={{ color: '#8F9CAE', fontSize: '12px', marginTop: '4px' }}>Uptime</div>
        </div>
        <div>
          <div style={{ fontSize: '28px', fontWeight: '800' }}>50+</div>
          <div style={{ color: '#8F9CAE', fontSize: '12px', marginTop: '4px' }}>Teams</div>
        </div>
      </div>

    </div>
  );
}