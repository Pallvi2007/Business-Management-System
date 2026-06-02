import React from 'react';
import Kanban from '../Kanban'; 

function Dashboard({ onNavigate }) { // Added onNavigate prop
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Operations Control Workspace</h2>
          <p style={styles.subtitle}>Direct system activity streams and process execution parameters across deployment stages.</p>
        </div>
        {/* Example: Navigation trigger if needed on dashboard */}
        <button onClick={() => onNavigate('features')} style={styles.navButton}>
          View Features
        </button>
      </div>
      
      <div style={styles.boardWrapper}>
        <Kanban />
      </div>
    </div>
  );
}

const styles = {
  wrapper: { padding: '3rem 4rem', maxWidth: '1600px', margin: '0 auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' },
  title: { fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.5px' },
  subtitle: { color: '#64748b', fontSize: '0.95rem', marginTop: '0.25rem' },
  boardWrapper: { marginTop: '1rem' },
  navButton: {
    backgroundColor: '#6366f1',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600'
  }
};

export default Dashboard;