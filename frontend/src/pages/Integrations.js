import React from 'react';

export default function Integrations() {
  const tools = [
    {
      name: "Supabase",
      category: "Database & Auth",
      desc: "Real-time sync, secure row-level security, and immediate database presence indicators.",
      siteUrl: "https://supabase.com",
      icon: "⚡",
      iconColor: "#3ECF8E"
    },
    {
      name: "GitHub",
      category: "DevOps",
      desc: "Sync workflows, track code updates, pull requests, and deployment logs instantly.",
      siteUrl: "https://github.com",
      icon: "🐙",
      iconColor: "#F05032"
    },
    {
      name: "Slack",
      category: "Communication",
      desc: "Broadcast company notifications, task updates, and server alert logs directly.",
      siteUrl: "https://slack.com",
      icon: "💬",
      iconColor: "#4A154B"
    },
    {
      name: "Linear",
      category: "Project Management",
      desc: "Import internal issue structures cleanly onto your interactive Kanban layout.",
      siteUrl: "https://linear.app",
      icon: "📐",
      iconColor: "#5E6AD2"
    },
    {
      name: "Stripe",
      category: "Payments & Accounting",
      desc: "Automate accounting metrics, client invoicing status, and monthly salary processing.",
      siteUrl: "https://stripe.com",
      icon: "💳",
      iconColor: "#635BFF"
    },
    {
      name: "Hugging Face",
      category: "AI Frameworks",
      desc: "Native infrastructure pipelines to run operational models for predictive analytics.",
      siteUrl: "https://huggingface.co",
      icon: "🤗",
      iconColor: "#FFD21E"
    }
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', padding: '60px 40px 120px 40px', fontFamily: 'sans-serif' }}>
      
      {/* Header Matching Your Design */}
      <div style={{ textAlign: 'center', marginBottom: '60px', marginTop: '20px' }}>
        <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '20px', letterSpacing: '-1.5px' }}>
          Connect your engineering stack
        </h1>
        <p style={{ color: '#8F9CAE', fontSize: '15px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
          BuildVerse interfaces seamlessly with the production environments and infrastructure your management firm already runs on.
        </p>
      </div>

      {/* 3x2 Grid Matrix */}
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {tools.map((tool, index) => (
          <div 
            key={index} 
            style={{ 
              backgroundColor: '#090D16', 
              border: '1px solid #161F30', 
              borderRadius: '12px', 
              padding: '32px', 
              width: '100%', 
              maxWidth: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px'
            }}
          >
            <div>
              {/* Header inside Card: Icon, Name and Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {/* Styled Badge Icon element */}
                  <div style={{ fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {tool.icon}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0' }}>{tool.name}</h3>
                </div>
                
                {/* Category Pill Tag */}
                <span style={{ backgroundColor: '#111827', border: '1px solid #374151', color: '#9CA3AF', fontSize: '11px', padding: '4px 10px', borderRadius: '6px', fontWeight: '500' }}>
                  {tool.category}
                </span>
              </div>

              {/* Exact Description paragraph context */}
              <p style={{ color: '#8F9CAE', fontSize: '14px', lineHeight: '1.5', margin: '0 0 24px 0' }}>
                {tool.desc}
              </p>
            </div>

            {/* Live Hyperlink connection handler */}
            <div>
              <a 
                href={tool.siteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#0066FF', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                Configure Connection →
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}