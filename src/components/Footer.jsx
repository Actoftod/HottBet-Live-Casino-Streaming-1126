import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiYoutube } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-black py-16 relative">
      {/* Red accent glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent"></div>
      <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] rounded-full bg-flame-500/5 blur-[80px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-flame-500 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiStar} className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">HottBet Casino</h3>
            </div>
            <p className="text-white/60 mb-6 max-w-md">
              Experience the ultimate live streaming casino where glamour meets gaming. 
              Join our community of players and discover the thrill of interactive gambling.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="bg-dark-800 p-3 rounded-lg hover:bg-flame-500/20 hover:border-flame-500/50 transition-all border border-white/5"
                whileHover={{ scale: 1.1 }}
              >
                <SafeIcon icon={FiInstagram} className="text-white text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-dark-800 p-3 rounded-lg hover:bg-flame-500/20 hover:border-flame-500/50 transition-all border border-white/5"
                whileHover={{ scale: 1.1 }}
              >
                <SafeIcon icon={FiTwitter} className="text-white text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-dark-800 p-3 rounded-lg hover:bg-flame-500/20 hover:border-flame-500/50 transition-all border border-white/5"
                whileHover={{ scale: 1.1 }}
              >
                <SafeIcon icon={FiYoutube} className="text-white text-xl" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-flame-500 transition-colors">Live Streams</a></li>
              <li><a href="#" className="text-white/60 hover:text-flame-500 transition-colors">Games</a></li>
              <li><a href="#" className="text-white/60 hover:text-flame-500 transition-colors">Dealers</a></li>
              <li><a href="#" className="text-white/60 hover:text-flame-500 transition-colors">VIP Club</a></li>
              <li><a href="#" className="text-white/60 hover:text-flame-500 transition-colors">Promotions</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-flame-500" />
                <span className="text-white/60">support@hottbet.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-flame-500" />
                <span className="text-white/60">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="text-flame-500" />
                <span className="text-white/60">24/7 Live Support</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 HottBet Casino. All rights reserved. | 
            <a href="#" className="text-flame-500 hover:text-flame-400 ml-1">Privacy Policy</a> | 
            <a href="#" className="text-flame-500 hover:text-flame-400 ml-1">Terms of Service</a>
          </p>
          <p className="text-white/40 text-sm mt-2">
            Please gamble responsibly. Must be 18+ to play.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;