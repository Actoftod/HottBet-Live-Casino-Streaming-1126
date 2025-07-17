import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiTrendingUp, FiUsers, FiGift } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-[70%] bg-gradient-to-b from-flame-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Red flame accent */}
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-flame-500/10 blur-[100px]"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-flame-600/10 blur-[80px]"></div>
      
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block px-3 py-1 rounded-full bg-dark-800 border border-flame-500 mb-4 text-flame-500 text-xs font-semibold tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              PREMIUM LIVE CASINO
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-flame-500 to-flame-600 bg-clip-text text-transparent">
                HottBet
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Experience the thrill of live streaming casino with our charming dealers. 
              Where gambling meets entertainment, and every bet comes with a touch of glamour.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                className="bg-flame-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-flame-600 transition-all flex items-center justify-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 59, 48, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiPlay} />
                <span>Start Playing</span>
              </motion.button>
              <motion.button 
                className="bg-dark-800 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/10 hover:border-flame-500 transition-all flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 59, 48, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiUsers} />
                <span>Watch Live</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-dark-800 border border-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 59, 48, 0.3)" }}
              >
                <SafeIcon icon={FiTrendingUp} className="text-flame-500 text-3xl mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">Live Dealers</h3>
                <p className="text-white/60">Professional & Charming</p>
              </motion.div>
              
              <motion.div 
                className="bg-dark-800 border border-white/5 backdrop-blur-sm rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 59, 48, 0.3)" }}
              >
                <SafeIcon icon={FiGift} className="text-flame-500 text-3xl mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">Exclusive Perks</h3>
                <p className="text-white/60">Tips & Subscriptions</p>
              </motion.div>
              
              <motion.div 
                className="bg-dark-800 border border-white/5 backdrop-blur-sm rounded-2xl p-6 text-center col-span-2"
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 59, 48, 0.3)" }}
              >
                <SafeIcon icon={FiUsers} className="text-flame-500 text-3xl mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">Community Experience</h3>
                <p className="text-white/60">Join thousands of players in our interactive casino</p>
              </motion.div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-10 -right-10 w-20 h-20 bg-flame-500/10 rounded-full blur-[20px]"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <motion.div 
              className="absolute -bottom-5 -left-5 w-16 h-16 bg-flame-600/20 rounded-full blur-[15px]"
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.3, 0.7, 0.3] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;