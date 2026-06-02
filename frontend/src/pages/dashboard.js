import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Quantum Physics Analysis', meta: 'Lab Execution Files', status: 'To-Do', priority: 'High' },
    { id: 2, title: 'Review Phase B Infrastructure Code', meta: 'Verify full stack connections', status: 'To-Do', priority: 'Medium' },
    { id: 3, title: 'Advanced Engineering Math', meta: 'Laplace & Fourier proof models', status: 'In-Progress', priority: 'High' },
    { id: 4, title: 'English Communications Portfolio', meta: 'Non-verbal system metrics structural file', status: 'Completed', priority: 'Low' }
  ]);
  const [logs, setLogs] = useState([
    ' [SEC_ENG] Root system access verified safely for corporate node.',
    ' [SYS_AUTH] Session context securely parsed successfully.'
  ]);

  const handleStatusChange = (taskId, newStatus) => {
    // Role Gate Isolation Rule: Employees cannot alter cross-lane data maps
    if (user.role === 'Employee') {
      pushLog(` [WARN] Write block violation: Execution rejected for context: ${user.name}`);
      alert("Privilege Insufficient: Employees are locked to read-only status architectures.");
      return;
    }

    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
    pushLog(` [MUTATION] Object #${taskId} re-routed smoothly to column structural state: [${newStatus}] by user ${user.name}`);
  };

  const pushLog = (msg) => {
    const timestamp = new Date().toISOString().slice(11, 19);
    setLogs(prev => [`[${timestamp}]${msg}`, ...prev]);
  };

  const handleCreateTask = () => {
    if (user.role === 'Employee') {
      alert("Access Denied: Production injection tracks restricted to management matrices.");
      return;
    }
    const title = prompt("Enter object target descriptor:");
    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      meta: 'User custom inject lane metadata details',
      status: 'To-Do',
      priority: 'Low'
    };
    setTasks([...tasks, newTask]);
    pushLog(` [CREATE] Injected structural component payload target: ${title}`);
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Operations Control Workspace</h1>
          <p style={styles.subtitle}>Direct system activity streams and process execution parameters across deployment stages.</p>
        </div>
        {user.role !== 'Employee' && (
          <button onClick={handleCreateTask} style={styles.createBtn}>＋ Establish Target Track</button>
        )}
      </header>

      <main style={styles.kanbanContainer}>
        {['To-Do', 'In-Progress', 'Completed'].map(column => {
          const matchingTasks = tasks.filter(t => t.status === column);
          return (
            <div key={column} style={styles.column}>
              <div style={styles.columnHeader}>
                <div style={styles.columnHeaderLeft}>
                  <span style={styles.columnIndicator(column)}>●</span>
                  <h3 style={styles.columnTitle}>{column}</h3>
                </div>
                <span style={styles.counter}>{matchingTasks.length}</span>
              </div>

              <div style={styles.cardTrack}>
                {matchingTasks.map(task => (
                  <div key={task.id} style={styles.card}>
                    <div style={styles.cardHeader}>
                      <span style={styles.priorityBadge(task.priority)}>{task.priority}</span>
                    </div>
                    <h4 style={styles.cardTitle}>{task.title}</h4>
                    <p style={styles.cardMeta}>{task.meta}</p>
                    
                    <div style={styles.actionRow}>
                      <span style={styles.moveLabel}>Re-Route Track:</span>
                      <select 
                        value={task.status} 
                        onChange={(e) => handleStatusChange(task.id, e.target.value)}
                        style={styles.select}
                      >
                        <option value="To-Do">To-Do Queue</option>
                        <option value="In-Progress">In-Progress Lane</option>
                        <option value="Completed">Completed Track</option>
                      </select>
                    </div>
                  </div>
                ))}
                {matchingTasks.length === 0 && <div style={styles.empty}>No operations queued inside this sector.</div>}
              </div>
            </div>
          );
        })}
      </main>

      <section style={styles.logSection}>
        <h3 style={styles.logTitle}>🛡️ Operational Event Registry ("Black-Box" Engine Logs)</h3>
        <div style={styles.terminal}>
          {logs.map((log, index) => (
            <div key={index} style={styles.terminalLine}>{log}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    flex: 1,
    padding: '40px 60px',
    backgroundColor: '#030712',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #111827',
    paddingBottom: '24px',
  },
  title: {
    color: '#f3f4f6',
    fontSize: '28px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '14px',
    marginTop: '4px',
  },
  createBtn: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
  },
  kanbanContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  column: {
    backgroundColor: '#090d16',
    borderRadius: '12px',
    border: '1px solid #111827',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    minHeight: '450px',
  },
  columnHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '12px',
    borderBottom: '1px solid #1f2937',
  },
  columnHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  columnIndicator: (col) => ({
    color: col === 'To-Do' ? '#f59e0b' : col === 'In-Progress' ? '#3b82f6' : '#10b981',
    fontSize: '12px',
  }),
  columnTitle: {
    color: '#f9fafb',
    fontSize: '14px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  counter: {
    color: '#9ca3af',
    backgroundColor: '#111827',
    fontSize: '11px',
    fontWeight: '700',
    padding: '2px 8px',
    borderRadius: '20px',
  },
  cardTrack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    overflowY: 'auto',
  },
  card: {
    backgroundColor: '#0f172a',
    border: '1px solid #1f2937',
    borderRadius: '8px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    transition: 'transform 0.2s, border-color 0.2s',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  priorityBadge: (pri) => ({
    fontSize: '9px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '2px 6px',
    borderRadius: '4px',
    backgroundColor: pri === 'High' ? 'rgba(239, 68, 68, 0.15)' : pri === 'Medium' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)',
    color: pri === 'High' ? '#f87171' : pri === 'Medium' ? '#fbbf24' : '#34d399',
  }),
  cardTitle: {
    color: '#f3f4f6',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  cardMeta: {
    color: '#9ca3af',
    fontSize: '12px',
  },
  actionRow: {
    marginTop: '6px',
    paddingTop: '12px',
    borderTop: '1px solid #1e293b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moveLabel: {
    color: '#6b7280',
    fontSize: '11px',
    fontWeight: '600',
  },
  select: {
    backgroundColor: '#090d16',
    border: '1px solid #1e293b',
    borderRadius: '4px',
    color: '#d1d5db',
    fontSize: '11px',
    padding: '4px 8px',
    outline: 'none',
    cursor: 'pointer',
  },
  empty: {
    textAlign: 'center',
    color: '#4b5563',
    fontSize: '12px',
    padding: '30px 0',
    border: '1px dashed #111827',
    borderRadius: '8px',
  },
  logSection: {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  logTitle: {
    color: '#e5e7eb',
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  terminal: {
    backgroundColor: '#020617',
    border: '1px solid #111827',
    borderRadius: '8px',
    padding: '16px 20px',
    fontFamily: 'Consolas, monospace',
    fontSize: '12px',
    color: '#38bdf8',
    height: '110px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.8)',
  },
  terminalLine: {
    whiteSpace: 'pre-wrap',
  }
};

export default Dashboard;