import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiEye, FiStar, FiGift, FiPlay, FiMessageCircle, FiCrown, FiAward } = FiIcons;

const FeaturedDealers = () => {
  const [selectedDealer, setSelectedDealer] = useState(null);

  const featuredDealers = [
    {
      id: 1,
      name: "Sophia Martinez",
      title: "Blackjack Queen",
      viewers: "3.2k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
      specialty: "Blackjack & Poker",
      isLive: true,
      experience: "5+ years",
      languages: ["English", "Spanish", "French"],
      earnings: "$2,500/week",
      bio: "Charming and professional dealer with a passion for creating unforgettable gaming experiences.",
      achievements: ["Top Earner 2024", "Player's Choice Award", "5-Star Rating"]
    },
    {
      id: 2,
      name: "Isabella Chen",
      title: "Roulette Goddess",
      viewers: "2.8k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      specialty: "Roulette & Baccarat",
      isLive: true,
      experience: "4 years",
      languages: ["English", "Mandarin", "Japanese"],
      earnings: "$2,200/week",
      bio: "Elegant and sophisticated dealer who brings grace to every spin of the wheel.",
      achievements: ["Rising Star 2024", "Customer Favorite", "Perfect Attendance"]
    },
    {
      id: 3,
      name: "Emma Johnson",
      title: "Poker Princess",
      viewers: "4.1k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3d0?w=400&h=500&fit=crop&crop=face",
      specialty: "Texas Hold'em & Omaha",
      isLive: true,
      experience: "6+ years",
      languages: ["English", "German"],
      earnings: "$3,100/week",
      bio: "Expert poker dealer with incredible charm and strategic knowledge that keeps players coming back.",
      achievements: ["Poker Master", "Highest Tips 2024", "VIP Specialist"]
    },
    {
      id: 4,
      name: "Olivia Rodriguez",
      title: "Baccarat Beauty",
      viewers: "1.9k",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face",
      specialty: "Baccarat & Mini Baccarat",
      isLive: false,
      experience: "3 years",
      languages: ["English", "Spanish", "Portuguese"],
      earnings: "$1,800/week",
      bio: "Passionate about creating luxury gaming experiences with personalized attention to every player.",
      achievements: ["Newcomer Award", "Style Icon", "Team Player"]
    },
    {
      id: 5,
      name: "Madison Taylor",
      title: "Wheel Specialist",
      viewers: "2.5k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&crop=face",
      specialty: "Wheel of Fortune & Craps",
      isLive: true,
      experience: "4 years",
      languages: ["English", "Italian"],
      earnings: "$2,000/week",
      bio: "Energetic and fun-loving dealer who brings excitement and positive energy to every game.",
      achievements: ["Entertainment Award", "Social Media Star", "Fan Favorite"]
    },
    {
      id: 6,
      name: "Ava Thompson",
      title: "Multi-Game Master",
      viewers: "3.5k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face",
      specialty: "All Games",
      isLive: true,
      experience: "7+ years",
      languages: ["English", "French", "Russian"],
      earnings: "$2,800/week",
      bio: "Versatile and experienced dealer who excels at every game and creates memorable experiences.",
      achievements: ["Master Dealer", "Versatility Award", "Mentor of the Year"]
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent" />
      <div className="absolute top-[10%] right-[10%] w-[200px] h-[200px] rounded-full bg-flame-500/5 blur-[80px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-flame-600/5 blur-[100px]" />

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
            Our{' '}
            <span className="bg-gradient-to-r from-flame-500 to-flame-600 bg-clip-text text-transparent">
              Star Dealers
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Meet our beautiful and talented dealers who bring glamour, skill, and personality to every game
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDealers.map((dealer, index) => (
            <motion.div
              key={dealer.id}
              className="bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-flame-500/30 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(255,59,48,0.2)" }}
              onClick={() => setSelectedDealer(dealer)}
            >
              <div className="relative">
                <img
                  src={dealer.image}
                  alt={dealer.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                
                {dealer.isLive && (
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
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span>LIVE</span>
                  </motion.div>
                )}

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1 border border-white/10">
                  <SafeIcon icon={FiEye} className="text-xs" />
                  <span>{dealer.viewers}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{dealer.name}</h3>
                    <div className="flex items-center space-x-1 text-flame-500">
                      <SafeIcon icon={FiStar} />
                      <span className="text-white text-sm">{dealer.rating}</span>
                    </div>
                  </div>
                  <p className="text-flame-400 font-semibold text-sm mb-2">{dealer.title}</p>
                  <p className="text-white/80 text-sm">{dealer.specialty}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-flame-500 font-semibold">{dealer.earnings}</span>
                    <span className="text-white/60 text-sm">{dealer.experience}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {dealer.languages.slice(0, 3).map((lang, i) => (
                      <span key={i} className="bg-dark-700 text-white/70 px-2 py-1 rounded text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1">
                    {dealer.achievements.slice(0, 2).map((achievement, i) => (
                      <SafeIcon key={i} icon={FiAward} className="text-flame-500 text-sm" />
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <motion.button
                    className="flex-1 bg-flame-500 text-white py-2 px-4 rounded-lg hover:bg-flame-600 transition-all flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 10px rgba(255,59,48,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <SafeIcon icon={FiPlay} />
                    <span>Join Table</span>
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

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 bg-dark-800 rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SafeIcon icon={FiCrown} className="text-4xl text-flame-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Elite Team</h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            Are you beautiful, charismatic, and passionate about gaming? Join our team of star dealers 
            and earn up to $3,000+ per week while doing what you love.
          </p>
          <motion.button
            className="bg-flame-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-flame-600 transition-all flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,59,48,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiStar} />
            <span>Apply Now</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Dealer Detail Modal */}
      {selectedDealer && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedDealer(null)}
        >
          <motion.div
            className="bg-dark-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedDealer.image}
                alt={selectedDealer.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-2xl" />
              <button
                onClick={() => setSelectedDealer(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
              >
                <SafeIcon icon={FiX} />
              </button>
              <div className="absolute bottom-4 left-6">
                <h2 className="text-3xl font-bold text-white">{selectedDealer.name}</h2>
                <p className="text-flame-400 font-semibold">{selectedDealer.title}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Specialties</h4>
                  <p className="text-white/70">{selectedDealer.specialty}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Experience</h4>
                  <p className="text-white/70">{selectedDealer.experience}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Earnings</h4>
                  <p className="text-flame-500 font-semibold">{selectedDealer.earnings}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Rating</h4>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="text-flame-500" />
                    <span className="text-white">{selectedDealer.rating}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDealer.languages.map((lang, i) => (
                    <span key={i} className="bg-dark-700 text-white px-3 py-1 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Achievements</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDealer.achievements.map((achievement, i) => (
                    <span key={i} className="bg-flame-500/20 text-flame-400 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <SafeIcon icon={FiAward} className="text-xs" />
                      <span>{achievement}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">About</h4>
                <p className="text-white/70">{selectedDealer.bio}</p>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  className="flex-1 bg-flame-500 text-white py-3 px-6 rounded-lg hover:bg-flame-600 transition-all flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={FiPlay} />
                  <span>Join Her Table</span>
                </motion.button>
                <motion.button
                  className="bg-dark-700 text-white py-3 px-6 rounded-lg hover:bg-dark-600 transition-all flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={FiMessageCircle} />
                  <span>Chat</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default FeaturedDealers;