import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiVolume2, 
  FiVolumeX, 
  FiMaximize, 
  FiMinimize,
  FiMessageSquare,
  FiDollarSign,
  FiHeart,
  FiUsers,
  FiSend
} = FiIcons;

const GameStream = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Alice', message: 'Great game!', timestamp: '2:31 PM' },
    { id: 2, user: 'Bob', message: 'The dealer is amazing', timestamp: '2:32 PM' },
    { id: 3, user: 'Charlie', message: 'Good luck everyone!', timestamp: '2:33 PM' }
  ]);

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          user: 'You',
          message: message.trim(),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setMessage('');
    }
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Stream Window */}
          <motion.div 
            className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video bg-dark-800 relative">
              {/* Placeholder for actual stream */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                <div className="text-white/60 text-center">
                  <div className="w-16 h-16 border-4 border-flame-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p>Connecting to stream...</p>
                </div>
              </div>

              {/* Stream Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      className="text-white p-2 rounded-lg hover:bg-white/10"
                      onClick={toggleMute}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <SafeIcon icon={isMuted ? FiVolumeX : FiVolume2} className="text-xl" />
                    </motion.button>
                    <div className="flex items-center space-x-2 text-white/60">
                      <SafeIcon icon={FiUsers} className="text-flame-500" />
                      <span>1.2k watching</span>
                    </div>
                  </div>
                  <motion.button
                    className="text-white p-2 rounded-lg hover:bg-white/10"
                    onClick={toggleFullscreen}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={isFullscreen ? FiMinimize : FiMaximize} className="text-xl" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Game Information */}
            <div className="bg-dark-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Live Blackjack - Table VIP1</h2>
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="bg-flame-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiDollarSign} />
                    <span>Place Bet</span>
                  </motion.button>
                  <motion.button
                    className="bg-dark-700 text-white p-2 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiHeart} className="text-xl" />
                  </motion.button>
                </div>
              </div>
              <p className="text-white/60">
                Minimum bet: $25 | Maximum bet: $5000 | Dealer: Isabella
              </p>
            </div>
          </motion.div>

          {/* Chat Section */}
          <motion.div 
            className="bg-dark-800 rounded-2xl border border-white/10 p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiMessageSquare} className="text-flame-500" />
              <h3 className="text-xl font-semibold text-white">Live Chat</h3>
            </div>
            
            <div className="h-[400px] flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="bg-dark-700 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-flame-500">{msg.user}</span>
                      <span className="text-xs text-white/40">{msg.timestamp}</span>
                    </div>
                    <p className="text-white/80">{msg.message}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="mt-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full bg-dark-700 border border-white/10 rounded-lg pl-4 pr-12 py-3 text-white placeholder-white/30 focus:outline-none focus:border-flame-500"
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-flame-500 p-2 hover:bg-white/5 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiSend} />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GameStream;