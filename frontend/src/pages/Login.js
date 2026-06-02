import React, { useState } from 'react';

function Login({ onNavigate }) { // Use onNavigate prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simulate authentication logic
    if (email === 'admin@bms.com' && password === 'password') {
      onNavigate('dashboard'); // Navigate to dashboard upon success
    } else {
      setError('Invalid security token or credential mismatch.');
    }
  };

  return (
    <div style={styles.splitWrapper}>
      {/* LEFT SIDE: Immersive Enterprise Branding */}
      <div style={styles.leftPanel}>
        <div style={styles.brandingContent}>
          <div style={styles.badge}>BuildVerse Core v2.4.0</div>
          <h1 style={styles.heroText}>Empowering integrated corporate asset networks.</h1>
          <p style={styles.heroSub}>
            Deploying secure framework nodes, data pipelines, and real-time operational infrastructure from a unified management deck.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Authentication Input Form */}
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <div style={styles.headerBlock}>
            <h2 style={styles.title}>Welcome back</h2>
            <p style={styles.subtitle}>Enter your secure credentials to verify your terminal access token.</p>
          </div>

          {error && <div style={styles.errorBanner}>⚠️ {error}</div>}

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputStack}>
              <label style={styles.fieldLabel}>Corporate Email Address</label>
              <input 
                type="email" 
                style={styles.input}
                placeholder="name@company.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            <div style={styles.inputStack}>
              <label style={styles.fieldLabel}>Security Passkey</label>
              <input 
                type="password" 
                style={styles.input}
                placeholder="••••••••" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            <button type="submit" style={styles.submitBtn}>Authenticate Secure Node</button>
          </form>

          <p style={styles.switchPageText}>
            New operative? <span onClick={() => onNavigate('register')} style={styles.purpleLink}>Request access clearance</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  splitWrapper: { display: 'flex', minHeight: '100vh', width: '100%' },
  leftPanel: { flex: '1.2', display: 'flex', flexDirection: 'column', padding: '60px', backgroundColor: '#090514' },
  brandingContent: { margin: 'auto 0', maxWidth: '580px' },
  badge: { backgroundColor: 'rgba(125, 42, 232, 0.15)', color: '#a855f7', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', display: 'inline-block', marginBottom: '24px' },
  heroText: { color: '#ffffff', fontSize: '38px', fontWeight: '700', marginBottom: '16px' },
  heroSub: { color: '#94a3b8', fontSize: '16px', lineHeight: '1.6' },
  rightPanel: { flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', padding: '40px' },
  formContainer: { width: '100%', maxWidth: '400px' },
  headerBlock: { marginBottom: '32px' },
  title: { fontSize: '28px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' },
  subtitle: { fontSize: '14px', color: '#64748b' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  inputStack: { display: 'flex', flexDirection: 'column', gap: '6px' },
  fieldLabel: { fontSize: '12px', fontWeight: '600', color: '#334155' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%' },
  submitBtn: { backgroundColor: '#7d2ae8', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '14px', cursor: 'pointer', fontWeight: '600' },
  errorBanner: { backgroundColor: '#fff1f2', color: '#9f1239', padding: '12px', borderRadius: '8px', fontSize: '13px', marginBottom: '20px' },
  switchPageText: { marginTop: '28px', textAlign: 'center', fontSize: '14px', color: '#475569' },
  purpleLink: { color: '#7d2ae8', cursor: 'pointer', fontWeight: '600' }
};

export default Login;