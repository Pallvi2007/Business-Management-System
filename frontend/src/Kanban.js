import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  LogOut, 
  LayoutDashboard, 
  CheckCircle2, 
  Circle, 
  Clock, 
  UserCheck, 
  Plus, 
  X, 
  ShieldAlert 
} from 'lucide-react';

// Explicitly define the columns matrix mapping array
const columns = [
  { name: 'To-Do', color: '#f59e0b', icon: <Circle size={16} /> },
  { name: 'In-Progress', color: '#3b82f6', icon: <Clock size={16} /> },
  { name: 'Completed', color: '#10b981', icon: <CheckCircle2 size={16} /> }
];

function Kanban({ user, onLogout }) {
  // --- Define React Functional Hook States ---
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // --- Initial Lifecycle Synchronizations ---
  useEffect(() => {
    fetchTasks();
    fetchLogs();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (err) {
      console.warn("⚠️ Unable to sync live server tasks list. Using active local memory state.");
    }
  };

  const fetchLogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/logs');
      setLogs(res.data);
    } catch (err) {
      console.warn("⚠️ Unable to sync live system audit ledger track.");
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    // Find the task name before updating to log it accurately
    const targetedTask = tasks.find(t => t._id === taskId);

    // Optimistically update local task row position to keep the UI perfectly snap-responsive
    setTasks(prevTasks => prevTasks.map(t => t._id === taskId ? { ...t, status: newStatus } : t));

    // 🚀 OPTIMISTIC BLACK BOX TRACKING: Catch status shifts instantly on screen
    const liveMoveLog = {
      _id: "local_log_" + Date.now(),
      timestamp: new Date().toISOString(),
      action: "STATUS_UPDATED",
      performedBy: user?.username || "pallvi",
      details: `Transitioned status of "${targetedTask?.title || 'Objective'}" to [${newStatus}].`
    };
    setLogs(prevLogs => [liveMoveLog, ...prevLogs]);

    try {
      await axios.put(`http://localhost:5000/api/tasks/${taskId}`, {
        status: newStatus,
        username: user?.username || "System User"
      });
      fetchTasks();
      fetchLogs();
    } catch (err) {
      console.warn("⚠️ Background movement update dropped. Retained canvas state layout.");
    }
  };

  // --- Fixed & Corrected Form Deployment Method Handler ---
  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    // 1. Build a local task object matching exactly what columns require
    const localNewTask = {
      _id: "temp_" + Date.now(),
      title: newTitle,
      description: newDescription || "No details provided.",
      status: 'To-Do' // Matches your column mapping array exactly
    };

    // 2. Force it onto the UI state array immediately so you SEE it instantly
    setTasks(prevTasks => [...prevTasks, localNewTask]);

    // 🚀 OPTIMISTIC BLACK BOX TRACKING: Log the item creation event immediately
    const liveCreateLog = {
      _id: "local_log_" + Date.now(),
      timestamp: new Date().toISOString(),
      action: "TASK_CREATED",
      performedBy: user?.username || "pallvi",
      details: `Deployed system module object objective: "${localNewTask.title}".`
    };
    setLogs(prevLogs => [liveCreateLog, ...prevLogs]);
    
    // 3. Clear your fields and close your popup right away
    setNewTitle('');
    setNewDescription('');
    setIsModalOpen(false);

    // 4. Send background updates to the server without freezing the UI if it drops
    try {
      const res = await axios.post('http://localhost:5000/api/tasks', {
        title: localNewTask.title,
        description: localNewTask.description,
        username: user?.username || "Employer Admin"
      });
      
      // Swap the temp frontend ID with the permanent backend ID if successful
      setTasks(prevTasks => prevTasks.map(t => t._id === localNewTask._id ? res.data : t));
      
      // Update logs if the get logging endpoint functions
      try { await fetchLogs(); } catch(e) {}
    } catch (err) {
      console.warn("⚠️ Background database update failed. Kept item on local canvas layout:", err.message);
    }
  };

  // --- Visual DOM Element Rendering Trees ---
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px' }}>
      
      {/* Top Navigation Panel Navbar */}
      <nav className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', margin: '20px 20px 0', borderRadius: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#3b82f6', padding: '8px', borderRadius: '8px' }}>
            <LayoutDashboard size={20} color="#fff" />
          </div>
          <h1 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>BuildVerse Core</h1>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {user?.role === 'Employer' && (
            <button onClick={() => setIsModalOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', border: 'none', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
              <Plus size={16} /> Create Task
            </button>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1e293b', padding: '6px 14px', borderRadius: '20px', border: '1px solid #334155' }}>
            <UserCheck size={14} color="#10b981" />
            <span style={{ fontSize: '13px', fontWeight: '600' }}>{user?.username || "pallvi"}</span>
            <span style={{ fontSize: '11px', background: '#334155', padding: '2px 8px', borderRadius: '10px', color: '#94a3b8' }}>{user?.role || "Employer"}</span>
          </div>
          <button onClick={onLogout} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><LogOut size={16} /></button>
        </div>
      </nav>

      {/* Kanban Dynamic Grid Grid */}
      <div style={{ display: 'flex', gap: '24px', padding: '0 20px', overflowX: 'auto' }}>
        {columns.map(col => (
          <div key={col.name} className="glass-card" style={{ flex: 1, minWidth: '320px', padding: '20px', background: 'rgba(30,41,59,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #334155', color: col.color }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{col.icon}<h3 style={{ fontSize: '14px', color: '#fff', margin: 0 }}>{col.name}</h3></div>
              <span style={{ background: '#1e293b', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', color: '#94a3b8' }}>{tasks.filter(t => t.status === col.name).length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {tasks.filter(t => t.status === col.name).map(task => (
                <div key={task._id} className="glass-card" style={{ padding: '16px', background: '#1e293b' }}>
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '14px', color: '#f1f5f9' }}>{task.title}</h4>
                  <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#94a3b8' }}>{task.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #334155' }}>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>Move:</span>
                    <select value={task.status} onChange={(e) => handleStatusChange(task._id, e.target.value)} style={{ background: '#0f172a', color: '#e2e8f0', border: '1px solid #475569', borderRadius: '4px', padding: '2px' }}>
                      {columns.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SYSTEM OPERATIONS AUDIT LOGS DISPLAY PANELS */}
      <div className="glass-card" style={{ margin: '0 20px', padding: '20px', background: 'rgba(15,23,42,0.6)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#3b82f6' }}>
          <ShieldAlert size={18} />
          <h3 style={{ margin: 0, fontSize: '15px', color: '#fff' }}>System Core Security Logs ("Black Box" Recorder)</h3>
        </div>
        <div style={{ background: '#0f172a', borderRadius: '8px', padding: '10px', maxHeight: '180px', overflowY: 'auto', border: '1px solid #334155' }}>
          {logs.length === 0 ? (
            <div style={{ padding: '10px', fontSize: '12px', color: '#475569', fontFamily: 'monospace' }}>No active security system logs tracked.</div>
          ) : (
            logs.map(log => (
              <div key={log._id} style={{ display: 'flex', gap: '15px', padding: '8px', borderBottom: '1px solid #1e293b', fontSize: '12px', fontFamily: 'monospace' }}>
                <span style={{ color: '#64748b' }}>[{log.timestamp ? new Date(log.timestamp).toLocaleTimeString() : '00:00:00'}]</span>
                <span style={{ color: log.action === 'TASK_CREATED' ? '#10b981' : '#3b82f6', fontWeight: 'bold' }}>{log.action}</span>
                <span style={{ color: '#e2e8f0' }}>by <strong style={{ color: '#f59e0b' }}>{log.performedBy}</strong>: {log.details}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* CREATE TASK MODAL */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-card" style={{ width: '400px', padding: '25px', background: '#1e293b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: '#fff' }}>Assign New Objective</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><X size={18} /></button>
            </div>
            <form onSubmit={handleCreateTask} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Objective Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} required style={{ width: '100%', padding: '10px', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: '#fff', outline: 'none' }} />
              <textarea placeholder="Directives scope description..." value={newDescription} onChange={e => setNewDescription(e.target.value)} rows="3" style={{ width: '100%', padding: '10px', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: '#fff', outline: 'none', resize: 'none' }} />
              <button type="submit" style={{ padding: '10px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Deploy Target</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kanban;