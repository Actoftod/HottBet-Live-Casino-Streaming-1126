import React, { createContext, useContext, useState } from 'react';
import { ROLES, ROLE_PERMISSIONS } from '../common/roles';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '1',
    username: 'JohnDoe777',
    role: ROLES.USER,
    email: 'john.doe@example.com'
  });

  const hasPermission = (permission) => {
    if (!user || !user.role) return false;
    return ROLE_PERMISSIONS[user.role]?.includes(permission) || false;
  };

  const updateUserRole = (newRole) => {
    setUser(prev => ({ ...prev, role: newRole }));
  };

  return (
    <AuthContext.Provider value={{ user, hasPermission, updateUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};