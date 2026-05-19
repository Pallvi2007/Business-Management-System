import React, { useState } from 'react';
import axios from 'axios';
import Kanban from './Kanban';
import { Lock, User, ShieldAlert, Zap, Landmark, ShieldCheck } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Method A: Standard API Database Verification Loop
  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/login', { username, password });
      setUser(res.data);
    } catch (err) {
      setError(
        err.response?.data?.error || 
        'Gateway Offline: Please verify that "node server.js" is actively running on Port 5000.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Method B: Instant UI Direct-Bypass Simulation Login 
  const handleInstantBypass = (roleType) => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        message: "Simulation Profile Loaded",
        username: roleType === 'Employer' ? 'pallvi (Admin)' : 'team_member',
        role: roleType
      });
      setLoading(false);
    }, 400);
  };

  if (user) {
    return <Kanban user={user} onLogout={() => setUser(null)} />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '440px', padding: '35px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ background: '#3b82f6', width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', boxShadow: '0 0 20px rgba(59,130,246,0.4)' }}>
            <Lock size={26} color="#fff" />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>Workspace Access</h2>
          <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Select your preferred authentication technique below</p>
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: 'rgba(239,68,68,0.12)', border: '1px solid #ef4444', padding: '12px', borderRadius: '8px', color: '#fca5a5', fontSize: '13px', marginBottom: '20px', lineHeight: '1.4' }}>
            <ShieldAlert size={18} style={{ shrink: 0, marginTop: '2px' }} />
            <span>{error}</span>
          </div>
        )}

        {/* METHOD 1: QUICK ACCESS SIMULATORS */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>Method 1: One-Click Quick Login</label>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="button" onClick={() => handleInstantBypass('Employer')} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#60a5fa', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
              <Landmark size={14} />
              Employer View
            </button>
            <button type="button" onClick={() => handleInstantBypass('Employee')} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '8px', color: '#34d399', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
              <ShieldCheck size={14} />
              Employee View
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', color: '#475569', fontSize: '12px', margin: '20px 0' }}>
          <div style={{ flex: 1, height: '1px', background: '#334155' }}></div>
          <span style={{ padding: '0 10px', fontWeight: '600' }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: '#334155' }}></div>
        </div>

        {/* METHOD 2: SECURE SECURE ENDPOINT FORM */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '-8px', letterSpacing: '0.5px' }}>Method 2: Database Account Credentials</label>
          
          <div>
            <div style={{ position: 'relative' }}>
              <User size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required style={{ width: '100%', padding: '11px 12px 11px 38px', background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }} />
            </div>
          </div>

          <div>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '11px 12px 11px 38px', background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }} />
            </div>
          </div>

          <button type="submit" disabled={loading} style={{ width: '100%', padding: '11px', background: '#3b82f6', color: '#white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(59,130,246,0.15)', marginTop: '4px' }}>
            {loading ? 'Processing...' : 'Verify Secure Login'}
          </button>
        </form>

      </div>
    </div>
  );
}

export default App;