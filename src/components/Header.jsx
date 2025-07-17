import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../context/AuthContext';
import { PERMISSIONS } from '../common/roles';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiUser, FiDollarSign, FiStar, FiShield, FiUserPlus, FiBarChart2 } = FiIcons;

const Header = ({ onWalletClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { hasPermission } = useAuth();

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-red-900 to-pink-900 backdrop-blur-lg border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiStar} className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold text-white">HottBet</h1>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-pink-300 transition-colors">
              Live Streams
            </Link>
            <a href="#games" className="text-white hover:text-pink-300 transition-colors">
              Games
            </a>
            <a href="#dealers" className="text-white hover:text-pink-300 transition-colors">
              Dealers
            </a>
            <Link to="/become-creator" className="text-white hover:text-pink-300 transition-colors flex items-center space-x-1">
              <SafeIcon icon={FiUserPlus} className="text-sm" />
              <span>Become Creator</span>
            </Link>
            <a href="#tips" className="text-white hover:text-pink-300 transition-colors">
              Tips
            </a>
            {hasPermission(PERMISSIONS.VIEW_DASHBOARD) && (
              <Link to="/analytics" className="text-white hover:text-pink-300 transition-colors flex items-center space-x-1">
                <SafeIcon icon={FiBarChart2} className="text-sm" />
                <span>Analytics</span>
              </Link>
            )}
            {hasPermission(PERMISSIONS.MANAGE_USERS) && (
              <Link to="/admin/roles" className="text-white hover:text-pink-300 transition-colors flex items-center space-x-1">
                <SafeIcon icon={FiShield} className="text-sm" />
                <span>Roles</span>
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onWalletClick}
            >
              <SafeIcon icon={FiDollarSign} />
              <span>Wallet</span>
            </motion.button>
            <Link to="/profile">
              <motion.button
                className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiUser} />
                <span>Profile</span>
              </motion.button>
            </Link>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} />
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-white hover:text-pink-300 transition-colors">
                Live Streams
              </Link>
              <a href="#games" className="text-white hover:text-pink-300 transition-colors">
                Games
              </a>
              <a href="#dealers" className="text-white hover:text-pink-300 transition-colors">
                Dealers
              </a>
              <Link to="/become-creator" className="text-white hover:text-pink-300 transition-colors flex items-center space-x-1">
                <SafeIcon icon={FiUserPlus} className="text-sm" />
                <span>Become Creator</span>
              </Link>
              <a href="#tips" className="text-white hover:text-pink-300 transition-colors">
                Tips
              </a>
              {hasPermission(PERMISSIONS.VIEW_DASHBOARD) && (
                <Link to="/analytics" className="text-white hover:text-pink-300 transition-colors flex items-center space-x-1">
                  <SafeIcon icon={FiBarChart2} className="text-sm" />
                  <span>Analytics</span>
                </Link>
              )}
              {hasPermission(PERMISSIONS.MANAGE_USERS) && (
                <Link to="/admin/roles" className="text-white hover:text-pink-300 transition-colors flex items-center space-x-1">
                  <SafeIcon icon={FiShield} className="text-sm" />
                  <span>Roles</span>
                </Link>
              )}
              <Link to="/profile" className="text-white hover:text-pink-300 transition-colors">
                Profile
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;