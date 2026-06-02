import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jul', cash: 4000, spend: 2400 },
  { name: 'Aug', cash: 3000, spend: 1398 },
  { name: 'Sep', cash: 2000, spend: 9800 },
  { name: 'Oct', cash: 2780, spend: 3908 },
  { name: 'Nov', cash: 1890, spend: 4800 },
  { name: 'Dec', cash: 2390, spend: 3800 },
  { name: 'Jan', cash: 3490, spend: 4300 },
];

export default function Analytics({ onNavigate }) {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', padding: '40px 60px' }}>
      
      {/* Top Navigation Bar with Back Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ color: '#0066FF', fontWeight: '600' }}>GOD MODE</div>
        <button 
          onClick={() => onNavigate('home')} 
          style={{ 
            background: 'transparent', 
            border: '1px solid #333', 
            color: '#FFF', 
            padding: '8px 16px', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ← Back to Home
        </button>
      </div>

      {/* Main Title Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '800' }}>Burn Rate Predictor</h1>
        <p style={{ color: '#8F9CAE', maxWidth: '500px', marginTop: '10px' }}>
          Visualize exactly when your company will run out of cash based on current spending patterns. 
          Powered by a pre-built ML model — no black-box LLMs.
        </p>
      </div>

      {/* Features List */}
      <ul style={{ listStyle: 'none', padding: '0', marginBottom: '30px' }}>
        {['Real-time expense tracking across all departments', 'Predictive runway calculation using Hugging Face models', 
          'Automated alerts when spending exceeds thresholds', 'Optimization recommendations to extend runway'].map((feat, i) => (
          <li key={i} style={{ marginBottom: '10px' }}>✓ <span style={{ color: '#8F9CAE' }}>{feat}</span></li>
        ))}
      </ul>

      {/* Metric Cards */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={{ border: '1px solid #333', padding: '15px', borderRadius: '8px' }}>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#EF4444' }}>8.2 mo</div>
          <div style={{ fontSize: '12px', color: '#8F9CAE' }}>estimated runway</div>
        </div>
        <div style={{ border: '1px solid #333', padding: '15px', borderRadius: '8px' }}>
          <div style={{ fontSize: '24px', fontWeight: '700' }}>$42K</div>
          <div style={{ fontSize: '12px', color: '#8F9CAE' }}>monthly burn</div>
        </div>
      </div>

      {/* The Chart Implementation */}
      <div style={{ 
        width: '100%', height: '300px', backgroundColor: '#0A0C14', 
        border: '1px solid #1a1a1a', borderRadius: '16px', padding: '20px'
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#8F9CAE" fontSize={12} />
            <YAxis stroke="#8F9CAE" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
            <Line type="monotone" dataKey="cash" stroke="#FFD700" strokeWidth={2} />
            <Line type="monotone" dataKey="spend" stroke="#EF4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}