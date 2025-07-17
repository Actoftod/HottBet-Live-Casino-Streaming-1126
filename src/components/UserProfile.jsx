import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiUser,
  FiEdit2,
  FiSettings,
  FiClock,
  FiTrendingUp,
  FiShield,
  FiMail,
  FiSmartphone,
  FiSave,
  FiX
} = FiIcons;

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: "JohnDoe777",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    joinDate: "March 2024",
    totalWagered: "$15,420",
    winRate: "62%",
    favoriteGame: "Live Blackjack",
    lastActive: "2 hours ago"
  });

  const [editForm, setEditForm] = useState({ ...profileData });

  const handleSave = () => {
    setProfileData(editForm);
    setIsEditing(false);
  };

  return (
    <section className="py-20 bg-black relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-flame-500/5 blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-dark-800 rounded-2xl overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-flame-500 to-flame-600 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="text-4xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{profileData.username}</h2>
                  <p className="text-white/70">Member since {profileData.joinDate}</p>
                </div>
              </div>
              <motion.button
                className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-all"
                onClick={() => setIsEditing(!isEditing)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={isEditing ? FiX : FiEdit2} className="text-white text-xl" />
              </motion.button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-white/60 text-sm block mb-2">Username</label>
                      <input
                        type="text"
                        value={editForm.username}
                        onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm block mb-2">Email</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm block mb-2">Phone</label>
                      <input
                        type="tel"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-2 text-white"
                      />
                    </div>
                    <motion.button
                      className="bg-flame-500 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2"
                      onClick={handleSave}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SafeIcon icon={FiSave} />
                      <span>Save Changes</span>
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiMail} className="text-flame-500" />
                      <span className="text-white/80">{profileData.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiSmartphone} className="text-flame-500" />
                      <span className="text-white/80">{profileData.phone}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Gaming Statistics */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Gaming Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-700 p-4 rounded-lg border border-white/5">
                    <div className="flex items-center space-x-2 mb-2">
                      <SafeIcon icon={FiTrendingUp} className="text-flame-500" />
                      <span className="text-white/60">Total Wagered</span>
                    </div>
                    <p className="text-xl font-semibold text-white">{profileData.totalWagered}</p>
                  </div>
                  <div className="bg-dark-700 p-4 rounded-lg border border-white/5">
                    <div className="flex items-center space-x-2 mb-2">
                      <SafeIcon icon={FiTrendingUp} className="text-flame-500" />
                      <span className="text-white/60">Win Rate</span>
                    </div>
                    <p className="text-xl font-semibold text-white">{profileData.winRate}</p>
                  </div>
                  <div className="bg-dark-700 p-4 rounded-lg border border-white/5">
                    <div className="flex items-center space-x-2 mb-2">
                      <SafeIcon icon={FiClock} className="text-flame-500" />
                      <span className="text-white/60">Last Active</span>
                    </div>
                    <p className="text-white">{profileData.lastActive}</p>
                  </div>
                  <div className="bg-dark-700 p-4 rounded-lg border border-white/5">
                    <div className="flex items-center space-x-2 mb-2">
                      <SafeIcon icon={FiSettings} className="text-flame-500" />
                      <span className="text-white/60">Favorite Game</span>
                    </div>
                    <p className="text-white">{profileData.favoriteGame}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiShield} className="text-flame-500 text-xl" />
                  <h3 className="text-xl font-semibold text-white">Security Settings</h3>
                </div>
                <motion.button
                  className="bg-dark-700 text-white px-4 py-2 rounded-lg border border-white/10 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiSettings} />
                  <span>Manage</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserProfile;