import React, { useState } from 'react';

export default function SignIn({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Authenticating operational token for:", email);
  };

  return (
    <div style={styles.splitWrapper}>
      
      {/* LEFT PANEL: PREMIUM GEOMETRIC BRANDING CANVAS */}
      <div style={styles.brandPanel}>
        {/* Subtle background matrix grid simulation lines */}
        <div style={styles.gridOverlay}></div>
        <div style={styles.glowRadial}></div>

        <div style={styles.brandContent}>
          <div style={styles.backAnchor} onClick={() => onNavigate('landing')} className="interactive-element">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </div>

          <div style={styles.brandMainGroup}>
            <div style={styles.logoBadgeBig}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h2 style={styles.brandTitle}>
              Architecting the <br />
              <span style={styles.gradientText}>Source of Truth</span>
            </h2>
            <p style={styles.brandSubtitle}>
              Log into your centralized enterprise dashboard ledger to synchronize tasks, team performance metrics, and automated financials.
            </p>
          </div>

          <div style={styles.brandFooter}>
            <span style={{ color: '#0066FF', fontWeight: '800' }}>●</span> BMS Engine v2.4.0 // Secure Authorization Layer
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: RAZOR-SHARP AUTHENTICATION TERMINAL */}
      <div style={styles.formPanel}>
        <div style={styles.formContentWrapper}>
          
          {/* Mobile Back Button (Only shows when screen is narrow) */}
          <div style={styles.mobileBack} onClick={() => onNavigate('landing')}>
            &larr; Exit
          </div>

          <div style={styles.headerBlock}>
            <h1 style={styles.formTitle}>Sign In</h1>
            <p style={styles.formSubtitle}>Enter your workspace credentials to access your secure profile node.</p>
          </div>

          {/* SINGLE-CLICK SSO PROVIDERS */}
          <div style={styles.ssoGroup}>
            <button type="button" style={styles.ssoBtn} className="interactive-element">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '10px' }}>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub Account
            </button>
            <button type="button" style={styles.ssoBtn} className="interactive-element">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '10px', color: '#FFFFFF' }}>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              Google Workspace
            </button>
          </div>

          <div style={styles.separatorRow}>
            <hr style={styles.sepLine} />
            <span style={styles.sepText}>OR CONTINUE WITH EMAIL</span>
            <hr style={styles.sepLine} />
          </div>

          {/* CREDENTIALS FORM */}
          <form onSubmit={handleSubmit} style={styles.formContainer}>
            
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel}>Work Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                placeholder="name@company.com"
                style={{
                  ...styles.formInput,
                  borderColor: focusedInput === 'email' ? '#0066FF' : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: focusedInput === 'email' ? '0 0 0 3px rgba(0, 102, 255, 0.15)' : 'none'
                }}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <div style={styles.labelFlexRow}>
                <label style={styles.inputLabel}>Security Password</label>
                <span style={styles.forgotAnchor} className="interactive-element">Forgot password?</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
                placeholder="••••••••••••"
                style={{
                  ...styles.formInput,
                  borderColor: focusedInput === 'password' ? '#0066FF' : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: focusedInput === 'password' ? '0 0 0 3px rgba(0, 102, 255, 0.15)' : 'none'
                }}
                required
              />
            </div>

            {/* REMEMBER CONTAINER */}
            <div style={styles.rememberRow}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={styles.nativeCheckbox}
                />
                <span style={{...styles.customCheckbox, borderColor: rememberMe ? '#0066FF' : 'rgba(255,255,255,0.2)', backgroundColor: rememberMe ? '#0066FF' : 'transparent'}}>
                  {rememberMe && "✓"}
                </span>
                Keep session authenticated
              </label>
            </div>

            <button type="submit" style={styles.primaryAuthBtn} className="interactive-element">
              Authenticate Account &nbsp;&rarr;
            </button>
          </form>

          <p style={styles.footerPrompt}>
            New to the engine? <span style={styles.signUpLink} onClick={() => onNavigate('landing')}>Create a workspace</span>
          </p>

        </div>
      </div>

    </div>
  );
}

const styles = {
  splitWrapper: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  
  /* LEFT CANVAS STYLES */
  brandPanel: {
    flex: '1',
    backgroundColor: '#05070F',
    borderRight: '1px solid rgba(255, 255, 255, 0.06)',
    position: 'relative',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    '@media (maxWidth: 960px)': {
      display: 'none' // Handled via responsive logic standard CSS outside if needed
    }
  },
  gridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    pointerEvents: 'none'
  },
  glowRadial: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(0, 102, 255, 0.06) 0%, transparent 70%)',
    bottom: '-10%',
    left: '-10%',
    filter: 'blur(40px)',
    pointerEvents: 'none'
  },
  brandContent: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  backAnchor: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#8F9CAE',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    alignSelf: 'flex-start'
  },
  brandMainGroup: {
    maxWidth: '460px',
    margin: 'auto 0'
  },
  logoBadgeBig: {
    background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 100%)',
    color: '#FFFFFF',
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px',
    boxShadow: '0 8px 24px rgba(0, 102, 255, 0.25)'
  },
  brandTitle: {
    fontSize: '36px',
    fontWeight: '800',
    lineHeight: '1.2',
    letterSpacing: '-1px',
    marginBottom: '16px'
  },
  gradientText: {
    color: '#38BDF8',
    backgroundImage: 'linear-gradient(to right, #38BDF8, #FFFFFF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  brandSubtitle: {
    fontSize: '15px',
    color: '#64748B',
    lineHeight: '1.6'
  },
  brandFooter: {
    fontSize: '12px',
    color: '#475569',
    letterSpacing: '0.5px',
    fontWeight: '600'
  },

  /* RIGHT AUTH TERMINAL STYLES */
  formPanel: {
    width: '100%',
    maxWidth: '580px',
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 24px'
  },
  formContentWrapper: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column'
  },
  mobileBack: {
    display: 'none', // Toggle visibility via production global responsive style rules
    color: '#8F9CAE',
    marginBottom: '24px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  headerBlock: {
    marginBottom: '32px'
  },
  formTitle: {
    fontSize: '32px',
    fontWeight: '800',
    letterSpacing: '-0.8px',
    marginBottom: '8px'
  },
  formSubtitle: {
    fontSize: '14px',
    color: '#8F9CAE',
    lineHeight: '1.5'
  },
  ssoGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '28px'
  },
  ssoBtn: {
    backgroundColor: '#0A0C14',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    borderRadius: '10px',
    color: '#FFFFFF',
    padding: '12px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separatorRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '28px'
  },
  sepLine: {
    flexGrow: 1,
    border: 'none',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
  },
  sepText: {
    fontSize: '10px',
    fontWeight: '700',
    color: '#475569',
    letterSpacing: '1px'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  labelFlexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#FFFFFF'
  },
  forgotAnchor: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#0066FF',
    cursor: 'pointer'
  },
  formInput: {
    width: '100%',
    backgroundColor: '#0A0C14',
    border: '1px solid',
    borderRadius: '10px',
    padding: '14px 16px',
    color: '#FFFFFF',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s ease'
  },
  rememberRow: {
    display: 'flex',
    alignItems: 'center'
  },
  checkboxLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: '#8F9CAE',
    cursor: 'pointer',
    position: 'relative',
    userSelect: 'none'
  },
  nativeCheckbox: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0
  },
  customCheckbox: {
    width: '16px',
    height: '16px',
    border: '1px solid',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: '10px',
    fontWeight: 'bold',
    transition: 'all 0.15s ease'
  },
  primaryAuthBtn: {
    width: '100%',
    background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 100%)',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    padding: '14px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 4px 20px rgba(0, 102, 255, 0.2)'
  },
  footerPrompt: {
    textAlign: 'center',
    marginTop: '32px',
    fontSize: '13px',
    color: '#64748B'
  },
  signUpLink: {
    color: '#FFFFFF',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'underline'
  }
};