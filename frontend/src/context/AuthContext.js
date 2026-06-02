import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Dynamically load the corporate user directory from local engine storage
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('buildverse_global_registry');
    return savedUsers ? JSON.parse(savedUsers) : []; 
  });

  // Track active session tokens across browser tabs or structural reloads
  const [user, setUser] = useState(() => {
    const activeSession = localStorage.getItem('buildverse_active_session');
    return activeSession ? JSON.parse(activeSession) : null;
  });

  // Keep the persistent user registry synced automatically
  useEffect(() => {
    localStorage.setItem('buildverse_global_registry', JSON.stringify(users));
  }, [users]);

  // Sync session states dynamically 
  useEffect(() => {
    if (user) {
      localStorage.setItem('buildverse_active_session', JSON.stringify(user));
    } else {
      localStorage.removeItem('buildverse_active_session');
    }
  }, [user]);

  // General Verification Method matching ANY registered parameters
  const login = (email, password) => {
    const targetEmail = email.trim().toLowerCase();
    const discoveredIdentity = users.find(
      (u) => u.email.toLowerCase() === targetEmail && u.password === password
    );

    if (discoveredIdentity) {
      const activeIdentityPayload = {
        name: discoveredIdentity.name,
        email: discoveredIdentity.email,
        role: discoveredIdentity.role,
        corporateId: discoveredIdentity.corporateId
      };
      setUser(activeIdentityPayload);
      return { success: true };
    }
    
    return { 
      success: false, 
      message: 'Access Denied: Node verification failed. Check credentials or request system clearance.' 
    };
  };

  // Dynamic Profile Matrix Allocation
  const register = (accountData) => {
    const targetEmail = accountData.email.trim().toLowerCase();
    const accountExists = users.some((u) => u.email.toLowerCase() === targetEmail);

    if (accountExists) {
      return { success: false, message: 'Provision Rejection: Email already assigned to an active node.' };
    }

    setUsers((prevRegistry) => [...prevRegistry, { ...accountData, email: targetEmail }]);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);