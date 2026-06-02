import React from 'react';

const featureData = [
  { title: "Kanban Task Board", desc: "Visualize your entire workflow with an intuitive drag-and-drop Kanban board.", bullets: ["Drag-and-drop interface", "Priority levels: Low, Medium, High, Urgent", "Deadline tracking with overdue alerts", "Task search & filters"], icon: "📝" },
  { title: "Black Box Recorder", desc: "Complete audit trail of every action in the system. Know exactly who created, modified, or deleted anything.", bullets: ["Full audit trail", "User & timestamp tracking", "Filter by user, action, date", "Export audit data"], icon: "📋" },
  { title: "Live Scoreboard", desc: "Real-time performance dashboard that updates instantly. See task completion rates and rankings.", bullets: ["Real-time updates via WebSocket", "Employee performance rankings", "Active user indicators", "Completion rate trends"], icon: "📊" },
  { title: "Role-Based Access", desc: "Admins and Employees each see a completely different, role-appropriate interface.", bullets: ["Admin & Employee roles", "Separate dashboards per role", "Secure data isolation", "Role management tools"], icon: "👥" },
  { title: "Announcements Hub", desc: "One central place for all company announcements. Pin important messages and track read status.", bullets: ["Broadcast announcements", "Pin important messages", "Read-status tracking", "Searchable history"], icon: "📢" },
  { title: "Invoice & Salary Management", desc: "Generate professional PDF invoices and monthly salary slips automatically.", bullets: ["PDF invoice generation", "Salary slip automation", "Invoice status tracking", "Payment history"], icon: "📄" },
  { title: "Enterprise Security", desc: "Row-level security ensures every user only sees data they are authorized to access.", bullets: ["Row-level security (RLS)", "Data encryption", "Secure authentication", "Session management"], icon: "🛡️" },
  { title: "Real-Time Everything", desc: "Powered by Supabase Realtime, every change in the system propagates instantly.", bullets: ["Live task updates", "Real-time notifications", "Presence indicators", "Instant sync across devices"], icon: "⚡" }
];

export default function Features({ onNavigate }) {
  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', padding: '40px 40px 80px 40px' }}>
      
      {/* Top Header - Back Navigation Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
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

      {/* Main Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="features-badge">All Features</div>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px' }}>
          Built for modern <span className="gradient-text">engineering teams</span>
        </h1>
        <p style={{ color: '#8F9CAE' }}>Every feature in BuildVerse was designed to solve a real problem faced by software development firms.</p>
      </div>

      {/* Bento Grid Elements */}
      <div className="features-grid-2col">
        {featureData.map((f, i) => (
          <div key={i} className="feature-bento-card">
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>{f.icon}</div>
            <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{f.title}</h3>
            <p style={{ color: '#8F9CAE', fontSize: '14px', marginBottom: '20px', lineHeight: '1.6' }}>{f.desc}</p>
            <ul className="feature-bullet-list">
              {f.bullets.map((b, idx) => (
                <li key={idx} className="feature-bullet-item">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom CTA Block */}
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h2 style={{ marginBottom: '20px' }}>Ready to see it in action?</h2>
        <button onClick={() => onNavigate('register')} className="btn-primary">Get Started Free →</button>
      </div>
    </div>
  );
}