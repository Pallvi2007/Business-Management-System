import React, { useState } from 'react';

function Register({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Employee',
    corporateId: `BV-2026-${Math.floor(100 + Math.random() * 900)}`,
    systemKey: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Authorization logic
    if (formData.systemKey !== 'BV-CORE-2026') {
      setError('Invalid System Authorization Key. Security isolation protocols active.');
      return;
    }

    // Logic: In a real app, call your register API/context here
    setSuccess(true);
    setTimeout(() => onNavigate('signin'), 2000);
  };

  return (
    <div style={styles.splitWrapper}>
      {/* LEFT SIDE: Branding Panel */}
      <div style={styles.leftPanel}>
        <div style={styles.brandingContent}>
          <div style={styles.badge}>Security Access Token Registry</div>
          <h1 style={styles.heroText}>Establish dynamic configuration profiles.</h1>
          <p style={styles.heroSub}>
            Register an operative account matrix instantly. Role-based infrastructure profiles automatically provision individual sandbox spaces.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Registration Form */}
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <div style={styles.headerBlock}>
            <h2 style={styles.title}>Create profile</h2>
            <p style={styles.subtitle}>Initialize your custom operator credentials below.</p>
          </div>

          {error && <div style={styles.errorBanner}>⚠️ {error}</div>}
          {success && <div style={styles.successBanner}>✅ Matrix provision approved. Accessing login gate...</div>}

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputStack}>
              <label style={styles.fieldLabel}>Full Operative Name</label>
              <input 
                type="text" 
                style={styles.input}
                placeholder="John Doe" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                required 
              />
            </div>

            <div style={styles.inputStack}>
              <label style={styles.fieldLabel}>Corporate Email</label>
              <input 
                type="email" 
                style={styles.input}
                placeholder="name@buildverse.com" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                required 
              />
            </div>

            <div style={styles.inputStack}>
              <label style={styles.fieldLabel}>Infrastructure Tier</label>
              <select 
                style={styles.input} 
                value={formData.role} 
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="Employee">Employee (Read Infrastructure)</option>
                <option value="Manager">Manager (Read/Write Track)</option>
                <option value="Admin">Admin (Full Root Control)</option>
              </select>
            </div>

            <div style={styles.inputStack}>
              <label style={styles.fieldLabel}>Set Security Passkey</label>
              <input 
                type="password" 
                style={styles.input}
                placeholder="••••••••" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
                required 
              />
            </div>

            <div style={styles.inputStack}>
              <label style={styles.fieldLabel}>System Authorization Key</label>
              <input 
                type="password" 
                style={styles.input}
                placeholder="Master Authorization Key" 
                value={formData.systemKey} 
                onChange={(e) => setFormData({...formData, systemKey: e.target.value})} 
                required 
              />
            </div>

            <button type="submit" style={styles.submitBtn}>Provision Identity Node</button>
          </form>

          <p style={styles.switchPageText}>
            Already registered? <span onClick={() => onNavigate('signin')} style={styles.purpleLink}>Sign in to session</span>
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
  form: { display: 'flex', flexDirection: 'column', gap: '18px' },
  inputStack: { display: 'flex', flexDirection: 'column', gap: '6px' },
  fieldLabel: { fontSize: '12px', fontWeight: '600', color: '#334155' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%' },
  submitBtn: { backgroundColor: '#7d2ae8', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '14px', cursor: 'pointer', fontWeight: '600' },
  errorBanner: { backgroundColor: '#fff1f2', color: '#9f1239', padding: '12px', borderRadius: '8px', fontSize: '13px', marginBottom: '16px' },
  successBanner: { backgroundColor: '#ecfdf5', color: '#065f46', padding: '12px', borderRadius: '8px', fontSize: '13px', marginBottom: '16px' },
  switchPageText: { marginTop: '28px', textAlign: 'center', fontSize: '14px', color: '#475569' },
  purpleLink: { color: '#7d2ae8', cursor: 'pointer', fontWeight: '600' }
};

export default Register;