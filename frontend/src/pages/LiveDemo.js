import React, { useState } from 'react';

export default function LiveDemo({ onNavigate }) {
  // Navigation active tab controller matching image_591647.png options
  const [activeTab, setActiveTab] = useState('Dashboard');

  // --- 1. STATE MANAGEMENT FOR THE DEMO WORKSPACE ---
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Configure Supabase Schema', type: 'Database', status: 'Todo' },
    { id: 2, title: 'Fix duplicate container rendering', type: 'DevOps', status: 'In Progress' },
    { id: 3, title: 'Align Linear integration hooks', type: 'Project Management', status: 'Completed' }
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskType, setNewTaskType] = useState('DevOps');

  const [messages, setMessages] = useState([
    { id: 1, sender: 'Nishant', text: 'Hey team, did we clear the duplicate header issue?', time: '17:24' },
    { id: 2, sender: 'Shreeya', text: 'Yes, Pallvi removed the duplicate from Home.js!', time: '17:26' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const [invoices, setInvoices] = useState([
    { id: 'INV-2026-01', client: 'Stripe API Sandbox', amount: 2400, status: 'Paid' },
    { id: 'INV-2026-02', client: 'Hugging Face Compute', amount: 1850, status: 'Pending' }
  ]);
  const [newClient, setNewClient] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const [logs, setLogs] = useState([
    { id: 1, text: 'System diagnostics reporting nominal operational states.', scope: 'System' },
    { id: 2, text: 'Successfully established external routing connections grid.', scope: 'Integrations' }
  ]);

  // Helper utility to write automated audit tracking records instantly
  const appendAuditLog = (text, scope = 'User') => {
    setLogs(prev => [{ id: Date.now(), text, scope }, ...prev]);
  };

  // --- 2. ACTION HANDLERS ---
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTaskTitle, type: newTaskType, status: 'Todo' }]);
    appendAuditLog(`Created task entry: "${newTaskTitle}"`, 'Tasks');
    setNewTaskTitle('');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'You', text: inputMessage, time: 'Just Now' }]);
    appendAuditLog(`Dispatched chat transmission string into workspace lines`, 'Messages');
    setInputMessage('');
  };

  const handleAddInvoice = (e) => {
    e.preventDefault();
    if (!newClient.trim() || !newAmount) return;
    setInvoices([...invoices, { id: `INV-${Math.floor(1000 + Math.random() * 9000)}`, client: newClient, amount: parseFloat(newAmount), status: 'Pending' }]);
    appendAuditLog(`Generated billing statement ledger entry for ${newClient}`, 'Invoices');
    setNewClient('');
    setNewAmount('');
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#FFFFFF', minHeight: '100vh', padding: '30px 40px', fontFamily: 'sans-serif' }}>
      
      {/* SCREEN TOP NAVIGATION HEADER BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#8F9CAE', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          INTERACTIVE DEMO
        </div>
        
        {/* Fixed click handler routing target securely back to main view */}
        <button 
          onClick={() => {
            if (typeof onNavigate === 'function') {
              onNavigate('home');
            } else {
              console.error("onNavigate routing prop is missing structural connection definition.");
            }
          }}
          style={{ 
            backgroundColor: '#000000', 
            color: '#FFFFFF', 
            border: '1px solid #222', 
            padding: '8px 16px', 
            borderRadius: '20px', 
            fontSize: '13px', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}
        >
          ← Back to Home
        </button>
      </div>

      {/* CORE WORKSPACE FRAMEWORK HOUSING COMPONENT BLOCK */}
      <div style={{ display: 'flex', minHeight: '550px', backgroundColor: '#090D16', border: '1px solid #161F30', borderRadius: '12px', overflow: 'hidden' }}>
        
        {/* SIDEBAR NAVIGATION CONTROL COMPONENT */}
        <nav style={{ width: '220px', backgroundColor: '#05070F', borderRight: '1px solid #161F30', paddingTop: '30px' }}>
          {['Dashboard', 'Tasks', 'Audit Trail', 'Messages', 'Invoices'].map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  appendAuditLog(`Mapsd view context to ${tab} overview block`, 'System');
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px 24px',
                  backgroundColor: 'transparent',
                  color: isSelected ? '#FFFFFF' : '#8F9CAE',
                  textAlign: 'left',
                  border: 'none',
                  borderLeft: isSelected ? '3px solid #0066FF' : '3px solid transparent',
                  paddingLeft: isSelected ? '21px' : '24px',
                  fontSize: '14px',
                  fontWeight: isSelected ? '700' : '500',
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s'
                }}
              >
                {tab}
              </button>
            );
          })}
        </nav>

        {/* WORKSPACE VIEWPORT SUB-MODULE CONTENT CONTAINER */}
        <div style={{ flex: 1, padding: '40px' }}>
          
          {/* TAB 1: DASHBOARD VIEW */}
          {activeTab === 'Dashboard' && (
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0' }}>Dashboard Overview</h2>
              <p style={{ color: '#8F9CAE', fontSize: '14px', margin: '0 0 30px 0' }}>Live metrics, team performance, and real-time activity tracking.</p>
              
              {/* Dynamic Workspace Metric Indicator Counters Grid */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '180px', backgroundColor: '#05070F', border: '1px solid #161F30', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '12px', color: '#8F9CAE', fontWeight: '600' }}>Active Backlog Tasks</div>
                  <div style={{ fontSize: '32px', fontWeight: '800', marginTop: '8px', color: '#0066FF' }}>
                    {tasks.filter(t => t.status !== 'Completed').length} Tiers
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: '180px', backgroundColor: '#05070F', border: '1px solid #161F30', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '12px', color: '#8F9CAE', fontWeight: '600' }}>Inbound Chat Feed Streams</div>
                  <div style={{ fontSize: '32px', fontWeight: '800', marginTop: '8px', color: '#FFF' }}>
                    {messages.length} Channels
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: '180px', backgroundColor: '#05070F', border: '1px solid #161F30', padding: '20px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '12px', color: '#8F9CAE', fontWeight: '600' }}>Settled Ledger Liquidity</div>
                  <div style={{ fontSize: '32px', fontWeight: '800', marginTop: '8px', color: '#10B981' }}>
                    ${invoices.reduce((sum, inv) => inv.status === 'Paid' ? sum + inv.amount : sum, 0)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EDITABLE TASKS KANBAN MANAGEMENT */}
          {activeTab === 'Tasks' && (
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0' }}>Tasks Board</h2>
              
              {/* Interactive Submission Controller Block */}
              <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '10px', margin: '20px 0 30px 0' }}>
                <input 
                  type="text" 
                  placeholder="Draft clear work goal entry description..." 
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  style={{ flex: 2, backgroundColor: '#000000', border: '1px solid #161F30', padding: '10px 14px', borderRadius: '6px', color: '#FFF' }}
                />
                <select 
                  value={newTaskType}
                  onChange={(e) => setNewTaskType(e.target.value)}
                  style={{ backgroundColor: '#000000', border: '1px solid #161F30', padding: '10px', borderRadius: '6px', color: '#FFF', cursor: 'pointer' }}
                >
                  <option value="DevOps">DevOps</option>
                  <option value="Database">Database</option>
                  <option value="Communication">Communication</option>
                  <option value="Project Management">Management</option>
                </select>
                <button type="submit" style={{ backgroundColor: '#0066FF', color: '#FFF', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                  Commit Task
                </button>
              </form>

              {/* Functional Row Layout Vector */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {tasks.map(task => (
                  <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#05070F', border: '1px solid #161F30', padding: '14px 20px', borderRadius: '8px' }}>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '15px' }}>{task.title}</div>
                      <span style={{ fontSize: '11px', color: '#0066FF', fontWeight: '600' }}>{task.type}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', color: task.status === 'Completed' ? '#10B981' : '#F59E0B', backgroundColor: '#111827', padding: '4px 10px', borderRadius: '12px', border: '1px solid #222' }}>
                        {task.status}
                      </span>
                      {task.status !== 'Completed' && (
                        <button 
                          onClick={() => {
                            setTasks(tasks.map(t => t.id === task.id ? { ...t, status: t.status === 'Todo' ? 'In Progress' : 'Completed' } : t));
                            appendAuditLog(`Advanced structural state for task ID token ${task.id}`);
                          }}
                          style={{ backgroundColor: 'transparent', border: '1px solid #333', color: '#FFF', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }}
                        >
                          Advance →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: IMMUTABLE AUDIT TRAIL DATA STREAM */}
          {activeTab === 'Audit Trail' && (
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0' }}>Security Audit Trail</h2>
              <p style={{ color: '#8F9CAE', fontSize: '14px', margin: '0 0 24px 0' }}>Immutable configuration sequences tracking user state behavior.</p>
              
              <div style={{ backgroundColor: '#05070F', border: '1px solid #161F30', borderRadius: '8px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', maxHeight: '320px', overflowY: 'auto' }}>
                {logs.map(log => (
                  <div key={log.id} style={{ padding: '8px 0', borderBottom: '1px solid #111827', display: 'flex', gap: '14px' }}>
                    <span style={{ color: '#0066FF', fontWeight: '700' }}>[{log.scope.toUpperCase()}]</span>
                    <span style={{ color: '#E5E7EB' }}>{log.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ACTIVE COMMUNICATION CHAT MODULE */}
          {activeTab === 'Messages' && (
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 20px 0' }}>Workspace Chat Simulator</h2>
              
              {/* Message History Frame */}
              <div style={{ height: '240px', backgroundColor: '#05070F', border: '1px solid #161F30', borderRadius: '8px', padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '16px' }}>
                {messages.map(msg => (
                  <div key={msg.id} style={{ alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
                    <div style={{ fontSize: '11px', color: '#8F9CAE', marginBottom: '2px', textAlign: msg.sender === 'You' ? 'right' : 'left' }}>
                      {msg.sender} • {msg.time}
                    </div>
                    <div style={{ backgroundColor: msg.sender === 'You' ? '#0066FF' : '#111827', padding: '10px 14px', borderRadius: '8px', fontSize: '13.5px', border: '1px solid #222' }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Element Bar */}
              <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  placeholder="Type a team broadcast message here..." 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  style={{ flex: 1, backgroundColor: '#000000', border: '1px solid #161F30', padding: '12px 16px', borderRadius: '6px', color: '#FFF' }}
                />
                <button type="submit" style={{ backgroundColor: '#0066FF', border: 'none', color: '#FFF', padding: '0 24px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                  Send
                </button>
              </form>
            </div>
          )}

          {/* TAB 5: ADDABLE/EDITABLE INVOICES ACCOUNTING LEDGER */}
          {activeTab === 'Invoices' && (
            <div>
              <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0' }}>Invoices Ledger</h2>
              
              {/* Add Invoice Form */}
              <form onSubmit={handleAddInvoice} style={{ display: 'flex', gap: '12px', margin: '20px 0 24px 0' }}>
                <input 
                  type="text" 
                  placeholder="Client Identity..." 
                  value={newClient}
                  onChange={(e) => setNewClient(e.target.value)}
                  style={{ flex: 2, backgroundColor: '#000000', border: '1px solid #161F30', padding: '10px', borderRadius: '6px', color: '#FFF' }}
                />
                <input 
                  type="number" 
                  placeholder="Sum Amount ($)..." 
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  style={{ flex: 1, backgroundColor: '#000000', border: '1px solid #161F30', padding: '10px', borderRadius: '6px', color: '#FFF' }}
                />
                <button type="submit" style={{ backgroundColor: '#10B981', color: '#FFF', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                  Generate Invoice
                </button>
              </form>

              {/* Accounting Data Table Elements */}
              <div style={{ backgroundColor: '#05070F', border: '1px solid #161F30', borderRadius: '8px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#111827', color: '#8F9CAE', borderBottom: '1px solid #161F30' }}>
                      <th style={{ padding: '12px 16px' }}>Invoice Code ID</th>
                      <th style={{ padding: '12px 16px' }}>Client Entity</th>
                      <th style={{ padding: '12px 16px' }}>Statement Sum</th>
                      <th style={{ padding: '12px 16px' }}>Status Parameters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map(inv => (
                      <tr key={inv.id} style={{ borderBottom: '1px solid #161F30' }}>
                        <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#0066FF' }}>{inv.id}</td>
                        <td style={{ padding: '12px 16px', fontWeight: '600' }}>{inv.client}</td>
                        <td style={{ padding: '12px 16px' }}>${inv.amount.toLocaleString()}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span 
                            onClick={() => {
                              setInvoices(invoices.map(i => i.id === inv.id ? { ...i, status: i.status === 'Pending' ? 'Paid' : 'Pending' } : i));
                              appendAuditLog(`Toggled transaction parameter properties for statement profile token ${inv.id}`, 'Invoices');
                            }}
                            style={{ 
                              cursor: 'pointer', 
                              backgroundColor: inv.status === 'Paid' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)', 
                              color: inv.status === 'Paid' ? '#10B981' : '#F59E0B',
                              border: `1px solid ${inv.status === 'Paid' ? '#10B981' : '#F59E0B'}`,
                              padding: '2px 8px', 
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: '700'
                            }}
                          >
                            {inv.status} 🔄
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}