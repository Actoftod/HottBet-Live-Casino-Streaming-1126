import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../context/AuthContext';
import { ROLES, PERMISSIONS, ROLE_PERMISSIONS } from '../common/roles';  // Added ROLE_PERMISSIONS import
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiUsers, FiStar, FiUserCheck } = FiIcons;

const RoleManager = () => {
  const { user, hasPermission, updateUserRole } = useAuth();

  const roleIcons = {
    [ROLES.ADMIN]: FiShield,
    [ROLES.MODERATOR]: FiStar,
    [ROLES.USER]: FiUserCheck
  };

  const roleColors = {
    [ROLES.ADMIN]: 'from-purple-500 to-purple-600',
    [ROLES.MODERATOR]: 'from-blue-500 to-blue-600',
    [ROLES.USER]: 'from-green-500 to-green-600'
  };

  if (!hasPermission(PERMISSIONS.MANAGE_USERS)) {
    return (
      <div className="text-center p-8 text-white/60">
        You don't have permission to access this area.
      </div>
    );
  }

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <SafeIcon icon={FiUsers} className="text-flame-500 text-2xl" />
            <h2 className="text-3xl font-bold text-white">Role Management</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(ROLES).map((role) => (
              <motion.div
                key={role}
                className={`bg-dark-800 rounded-xl p-6 border border-white/10 ${
                  user.role === role ? 'ring-2 ring-flame-500' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${roleColors[role]} flex items-center justify-center mb-4`}>
                  <SafeIcon icon={roleIcons[role]} className="text-white text-xl" />
                </div>
                
                <h3 className="text-xl font-semibold text-white capitalize mb-2">
                  {role}
                </h3>
                
                <ul className="space-y-2 mb-4">
                  {ROLE_PERMISSIONS[role].map((permission) => (
                    <li key={permission} className="flex items-center space-x-2 text-white/60">
                      <SafeIcon icon={FiUserCheck} className="text-flame-500 text-sm" />
                      <span className="text-sm capitalize">
                        {permission.replace('_', ' ')}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-2 px-4 rounded-lg font-medium ${
                    user.role === role
                      ? 'bg-flame-500 text-white'
                      : 'bg-dark-700 text-white/60 hover:bg-flame-500/20'
                  } transition-all flex items-center justify-center space-x-2`}
                  onClick={() => updateUserRole(role)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={user.role === role}
                >
                  {user.role === role ? 'Current Role' : 'Switch Role'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoleManager;