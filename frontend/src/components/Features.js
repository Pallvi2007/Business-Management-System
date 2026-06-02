import React from 'react';

function Features({ onNavigate }) {
  const featuresList = [
    {
      icon: '🛡️',
      title: 'Decentralized Identity Nodes',
      description: 'Dynamically allocate persistent corporate credentials. Zero hardcoded profiles ensure fluid workspace access controls across cross-device instances.'
    },
    {
      icon: '⚡',
      title: 'High-Fidelity UI Architecture',
      description: 'Experience stunning split-screen operational panels built with responsive flex geometry, interactive inputs, and smooth visual telemetry.'
    },
    {
      icon: '⚙️',
      title: 'Role-Based Authorization Gates',
      description: 'Provision standard profiles or root administrators on the fly using cryptographic validation passkeys like BV-CORE-2026.'
    },
    {
      icon: '📊',
      title: 'Real-Time Pipeline Tracking',
      description: 'Monitor structural performance data logs instantly from an integrated layout engine without browser page refresh cycle latency.'
    },
    {
      icon: '🔒',
      title: 'Persistent Session Layering',
      description: 'Utilize isolated storage sync matrices to securely lock tracking metrics and maintain user active profiles across window updates.'
    },
    {
      icon: '🌐',
      title: 'Cloud-Native Sandbox Triggers',
      description: 'Scale corporate workspaces across secure isolated network frameworks tailored specifically for scalable production environments.'
    }
  ];

  return (
    <section className="features-container" style={styles.sectionPadding}>
      {/* Navigation Button */}
      <button 
        onClick={() => onNavigate('dashboard')} 
        style={styles.backButton}
      >
        ← Back to Dashboard
      </button>

      {/* Background Tech Glow Ambient Elements */}
      <div style={styles.topGlow}></div>

      <div style={styles.headerBlock}>
        <div style={styles.pillBadge}>Core Engine Capabilities</div>
        <h2 style={styles.mainHeading}>Built for modern corporate operations.</h2>
        <p style={styles.subHeading}>
          Everything you need to orchestrate distributed framework networks, analyze node metrics, and handle system identity provisioning.
        </p>
      </div>

      {/* Feature Grid Matrix */}
      <div className="feature-grid">
        {featuresList.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon-box">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  sectionPadding: {
    padding: '100px 24px',
    position: 'relative'
  },
  backButton: {
    backgroundColor: 'transparent',
    color: '#94a3b8',
    border: '1px solid #334155',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '24px',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  },
  topGlow: {
    position: 'absolute',
    top: '-150px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(125, 42, 232, 0.08) 0%, transparent 70%)',
    filter: 'blur(50px)',
    pointerEvents: 'none'
  },
  headerBlock: {
    textAlign: 'center',
    maxWidth: '650px',
    margin: '0 auto 64px auto',
    position: 'relative',
    zIndex: 2
  },
  pillBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(125, 42, 232, 0.1)',
    color: '#c084fc',
    border: '1px solid rgba(125, 42, 232, 0.2)',
    padding: '6px 16px',
    borderRadius: '30px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '16px'
  },
  mainHeading: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '-1px',
    marginBottom: '16px',
    lineHeight: '1.2'
  },
  subHeading: {
    fontSize: '16px',
    color: '#94a3b8',
    lineHeight: '1.6'
  }
};

export default Features;