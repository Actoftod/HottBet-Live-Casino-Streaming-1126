import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiTrendingUp, FiUsers, FiDollarSign } = FiIcons;

const Games = () => {
  const games = [
    {
      id: 1,
      name: "Live Blackjack",
      description: "Classic 21 with our charming dealers",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      players: "234",
      minBet: "$5",
      maxBet: "$500"
    },
    {
      id: 2,
      name: "European Roulette",
      description: "Spin the wheel with lady luck",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=400&fit=crop",
      players: "189",
      minBet: "$1",
      maxBet: "$1000"
    },
    {
      id: 3,
      name: "Texas Hold'em",
      description: "Poker nights with professional dealers",
      image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&h=400&fit=crop",
      players: "156",
      minBet: "$10",
      maxBet: "$2000"
    },
    {
      id: 4,
      name: "Baccarat VIP",
      description: "High-stakes elegance and sophistication",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      players: "89",
      minBet: "$25",
      maxBet: "$5000"
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent"></div>
      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] rounded-full bg-flame-500/5 blur-[100px]"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] rounded-full bg-flame-600/5 blur-[80px]"></div>
      
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
            Premium{' '}
            <span className="bg-gradient-to-r from-flame-500 to-flame-600 bg-clip-text text-transparent">
              Live Games
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Experience the thrill of live casino games with our professional dealers and interactive streaming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <motion.div 
              key={game.id}
              className="bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-flame-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(255, 59, 48, 0.2)" }}
            >
              <div className="relative">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiUsers} className="text-xs" />
                      <span className="text-xs">{game.players}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiTrendingUp} className="text-flame-500 text-xs" />
                      <span className="text-xs">Live</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                <p className="text-white/60 text-sm mb-4">{game.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="text-white/60">
                    <span className="text-flame-500">Min:</span> {game.minBet}
                  </div>
                  <div className="text-white/60">
                    <span className="text-flame-500">Max:</span> {game.maxBet}
                  </div>
                </div>
                
                <motion.button 
                  className="w-full bg-flame-500 text-white py-3 rounded-lg hover:bg-flame-600 transition-all flex items-center justify-center space-x-2 font-medium"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(255, 59, 48, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <SafeIcon icon={FiPlay} />
                  <span>Play Now</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-dark-800 border border-flame-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-flame-500/10 transition-all flex items-center space-x-2 mx-auto"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 0 20px rgba(255, 59, 48, 0.3)"
            }}
            whileTap={{ scale: 0.97 }}
          >
            <SafeIcon icon={FiDollarSign} />
            <span>View All Games</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Games;