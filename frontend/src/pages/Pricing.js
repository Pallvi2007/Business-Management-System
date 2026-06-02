import React, { useState } from 'react';

export default function Pricing({ onNavigate }) {
  // Modal toggles for interactive payment & sales breakdowns
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      desc: "Perfect for core sandbox development and personal hackathon builds.",
      features: ["Up to 3 active repositories", "Basic Kanban board", "Row-level database safety", "Community support"],
      buttonText: "Get started free",
      action: () => onNavigate('register') // Routes directly to your workspace setup screen
    },
    {
      name: "Pro Scale",
      price: "$49",
      period: "per month",
      desc: "Built for expanding tech firms that require real-time operational flows.",
      features: ["Unlimited boards & tasks", "Supabase WebSocket sync", "Complete Black Box audit logging", "Priority engineering metrics"],
      buttonText: "Start trial",
      action: () => setShowPaymentModal(true), // Opens the Indian payment applications gateway overlay
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored billing",
      desc: "Institutional controls for enterprise software architectures.",
      features: ["Dedicated infrastructure hosting", "Custom API rate thresholds", "24/7/365 system architect support", "Advanced encryption keys"],
      buttonText: "Contact sales",
      action: () => setShowSalesModal(true) // Reveals detailed long-term monthly/yearly custom tiers
    }
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', padding: '60px 40px 100px 40px', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* Main Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px', marginTop: '20px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-1px' }}>
          Transparent plans, built to <span style={{ color: '#0066FF' }}>scale</span>
        </h1>
        <p style={{ color: '#8F9CAE', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
          Choose the production environment tier that fits your development cycle.
        </p>
      </div>

      {/* Pricing Matrix Grid */}
      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {plans.map((plan, i) => (
          <div 
            key={i} 
            style={{ 
              backgroundColor: '#0A0C14', 
              border: plan.popular ? '2px solid #0066FF' : '1px solid #1a1a1a', 
              borderRadius: '16px', 
              padding: '40px 30px', 
              width: '100%', 
              maxWidth: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            {plan.popular && (
              <span style={{ position: 'absolute', top: '-12px', right: '20px', backgroundColor: '#0066FF', color: '#FFF', fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px' }}>
                MOST POPULAR
              </span>
            )}
            
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{plan.name}</h3>
              <p style={{ color: '#8F9CAE', fontSize: '14px', minHeight: '60px', lineHeight: '1.5' }}>{plan.desc}</p>
              
              <div style={{ margin: '24px 0', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '44px', fontWeight: '800' }}>{plan.price}</span>
                <span style={{ color: '#8F9CAE', fontSize: '14px' }}>/ {plan.period}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: '0', margin: '30px 0 0 0', borderTop: '1px solid #1a1a1a', paddingTop: '20px' }}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#8F9CAE', marginBottom: '12px', alignItems: 'center' }}>
                    <span style={{ color: '#0066FF', fontWeight: 'bold' }}>✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={plan.action}
              style={{ 
                width: '100%', 
                padding: '14px', 
                backgroundColor: plan.popular ? '#0066FF' : 'transparent', 
                color: '#FFFFFF', 
                border: plan.popular ? 'none' : '1px solid #333', 
                borderRadius: '8px', 
                fontWeight: '600', 
                fontSize: '14px', 
                cursor: 'pointer',
                marginTop: '30px'
              }}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* MODAL 1: START TRIAL - ONLINE PAYMENT GATEWAY (PhonePe, Paytm, UPI) */}
      {showPaymentModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#0A0C14', border: '1px solid #222', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '420px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Secure Gateway Integration</h3>
            <p style={{ color: '#8F9CAE', fontSize: '14px', marginBottom: '24px' }}>Select an instant mobile routing application to process your trial token verification setup.</p>
            
            {/* Payment App Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
              {[
                { id: 'phonepe', name: 'PhonePe Checkout', color: '#5f259f', desc: 'Pay via linked cards or direct secure VPA hook' },
                { id: 'paytm', name: 'Paytm Wallet / UPI', color: '#00baf2', desc: 'Instant passkey authorization and settlement' },
                { id: 'gpay', name: 'Google Pay', color: '#4285F4', desc: 'Fast processing via device profile biometric verify' }
              ].map((app) => (
                <div 
                  key={app.id}
                  onClick={() => setSelectedPayment(app.id)}
                  style={{ 
                    border: selectedPayment === app.id ? `2px solid ${app.color}` : '1px solid #222', 
                    borderRadius: '10px', 
                    padding: '16px', 
                    cursor: 'pointer', 
                    textAlign: 'left',
                    backgroundColor: selectedPayment === app.id ? '#111424' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#FFF' }}>{app.name}</div>
                    <div style={{ fontSize: '11px', color: '#8F9CAE', marginTop: '2px' }}>{app.desc}</div>
                  </div>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #555', backgroundColor: selectedPayment === app.id ? app.color : 'transparent' }}></div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => { setShowPaymentModal(false); setSelectedPayment(''); }}
                style={{ flex: 1, padding: '12px', backgroundColor: 'transparent', border: '1px solid #333', color: '#FFF', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}
              >
                Cancel
              </button>
              <button 
                disabled={!selectedPayment}
                onClick={() => {
                  setShowPaymentModal(false);
                  alert(`Connecting secure framework with ${selectedPayment === 'phonepe' ? 'PhonePe' : selectedPayment === 'paytm' ? 'Paytm' : 'Google Pay'} context. Launching core dashboard...`);
                  onNavigate('demo'); // Redirects straight into live platform dashboard layout environment
                }}
                style={{ flex: 1, padding: '12px', backgroundColor: selectedPayment ? '#0066FF' : '#222', border: 'none', color: '#FFF', borderRadius: '8px', cursor: selectedPayment ? 'pointer' : 'not-allowed', fontSize: '14px', fontWeight: '600' }}
              >
                Proceed Setup →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: CONTACT SALES - DETAILED MONTHLY / YEARLY CONTRACT MATRIX */}
      {showSalesModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#0A0C14', border: '1px solid #222', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '600px' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '8px' }}>Enterprise Structural Tiers</h3>
              <p style={{ color: '#8F9CAE', fontSize: '14px' }}>Review standard monthly billing terms or annual institutional savings agreements.</p>
            </div>

            {/* Matrix comparison columns layout */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              {/* Monthly billing tier layout block */}
              <div style={{ flex: 1, padding: '20px', border: '1px solid #222', borderRadius: '12px', backgroundColor: '#000' }}>
                <div style={{ color: '#0066FF', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>Flex Tier</div>
                <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>Enterprise Monthly</div>
                <div style={{ fontSize: '28px', fontWeight: '800', marginBottom: '4px' }}>$199<span style={{ fontSize: '14px', color: '#8F9CAE', fontWeight: '400' }}> /mo</span></div>
                <p style={{ fontSize: '12px', color: '#8F9CAE', lineHeight: '1.4', marginTop: '12px' }}>Cancel or scale seats configuration down at any milestone intervals without termination processing fees.</p>
              </div>

              {/* Annual billing tier layout block */}
              <div style={{ flex: 1, padding: '20px', border: '1px solid #0066FF', borderRadius: '12px', backgroundColor: '#030712', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-10px', right: '14px', backgroundColor: '#10B981', color: '#FFF', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px' }}>SAVE 20%</span>
                <div style={{ color: '#10B981', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>Commitment Value</div>
                <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>Enterprise Annual</div>
                <div style={{ fontSize: '28px', fontWeight: '800', marginBottom: '4px' }}>$159<span style={{ fontSize: '14px', color: '#8F9CAE', fontWeight: '400' }}> /mo</span></div>
                <p style={{ fontSize: '12px', color: '#8F9CAE', lineHeight: '1.4', marginTop: '12px' }}>Billed yearly. Includes fully managed deployment setup vectors and customized data service architectures.</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button 
                onClick={() => setShowSalesModal(false)}
                style={{ padding: '10px 24px', backgroundColor: 'transparent', border: '1px solid #333', color: '#FFF', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
              >
                Close View
              </button>
              <button 
                onClick={() => { setShowSalesModal(false); onNavigate('register'); }}
                style={{ padding: '10px 24px', backgroundColor: '#0066FF', border: 'none', color: '#FFF', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
              >
                Initialize Custom Setup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}