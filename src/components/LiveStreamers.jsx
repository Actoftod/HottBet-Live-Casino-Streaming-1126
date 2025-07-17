import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiEye, FiStar, FiGift, FiPlay } = FiIcons;

const LiveStreamers = () => {
  const streamers = [
    {
      id: 1,
      name: "Sophia",
      title: "Blackjack Queen",
      viewers: "2.4k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3d0?w=400&h=600&fit=crop&crop=face",
      specialty: "Blackjack",
      isLive: true
    },
    {
      id: 2,
      name: "Isabella",
      title: "Roulette Goddess",
      viewers: "1.8k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
      specialty: "Roulette",
      isLive: true
    },
    {
      id: 3,
      name: "Emma",
      title: "Poker Princess",
      viewers: "3.1k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
      specialty: "Poker",
      isLive: true
    },
    {
      id: 4,
      name: "Valentina",
      title: "Lucky Charm",
      viewers: "2.7k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face",
      specialty: "Energy & Luck",
      isLive: true
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent"></div>
      <div className="absolute top-[10%] right-[10%] w-[200px] h-[200px] rounded-full bg-flame-500/5 blur-[80px]"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-flame-600/5 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-1 bg-flame-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-flame-500 to-flame-600 bg-clip-text text-transparent">
              Live Creators
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Beautiful and talented content creators who bring glamour and interaction to your gaming sessions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {streamers.map((streamer, index) => (
            <motion.div
              key={streamer.id}
              className="bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-flame-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(255,59,48,0.2)" }}
            >
              <div className="relative">
                <img
                  src={streamer.image}
                  alt={streamer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                
                {streamer.isLive && (
                  <motion.div
                    className="absolute top-4 left-4 bg-flame-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1"
                    animate={{
                      boxShadow: [
                        "0 0 5px rgba(255,59,48,0.5)",
                        "0 0 10px rgba(255,59,48,0.8)",
                        "0 0 5px rgba(255,59,48,0.5)"
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </motion.div>
                )}

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1 border border-white/10">
                  <SafeIcon icon={FiEye} className="text-xs" />
                  <span>{streamer.viewers}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-white">{streamer.name}</h3>
                    <div className="flex items-center space-x-1 text-flame-500">
                      <SafeIcon icon={FiStar} />
                      <span className="text-white text-sm">{streamer.rating}</span>
                    </div>
                  </div>
                  <p className="text-flame-400 font-semibold text-sm">{streamer.title}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-white/60 text-sm mb-4">Specialty: {streamer.specialty}</p>
                <div className="flex space-x-2">
                  <motion.button
                    className="flex-1 bg-flame-500 text-white py-2 px-4 rounded-lg hover:bg-flame-600 transition-all flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 10px rgba(255,59,48,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <SafeIcon icon={FiPlay} />
                    <span>Join</span>
                  </motion.button>
                  <motion.button
                    className="bg-dark-700 border border-white/5 text-white py-2 px-3 rounded-lg hover:border-flame-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiGift} />
                  </motion.button>
                  <motion.button
                    className="bg-dark-700 border border-white/5 text-white py-2 px-3 rounded-lg hover:border-flame-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiHeart} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStreamers;