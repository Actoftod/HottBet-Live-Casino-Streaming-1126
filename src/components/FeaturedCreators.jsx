import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiEye, FiStar, FiGift, FiPlay, FiMessageCircle, FiCrown, FiAward } = FiIcons;

const FeaturedCreators = () => {
  const [selectedCreator, setSelectedCreator] = useState(null);

  const featuredCreators = [
    // Female Dealers
    {
      id: 1,
      name: "Sophia Martinez",
      title: "Blackjack Queen",
      type: "dealer",
      gender: "female",
      viewers: "3.2k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3d0?w=400&h=600&fit=crop&crop=face",
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
      type: "dealer",
      gender: "female",
      viewers: "2.8k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
      specialty: "Roulette & Baccarat",
      isLive: true,
      experience: "4 years",
      languages: ["English", "Mandarin", "Japanese"],
      earnings: "$2,200/week",
      bio: "Elegant and sophisticated dealer who brings grace to every spin of the wheel.",
      achievements: ["Rising Star 2024", "Customer Favorite", "Perfect Attendance"]
    },
    // Male Dealers
    {
      id: 3,
      name: "Marcus Johnson",
      title: "Poker Master",
      type: "dealer",
      gender: "male",
      viewers: "4.1k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
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
      name: "David Rodriguez",
      title: "Baccarat Pro",
      type: "dealer",
      gender: "male",
      viewers: "1.9k",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
      specialty: "Baccarat & Mini Baccarat",
      isLive: false,
      experience: "3 years",
      languages: ["English", "Spanish", "Portuguese"],
      earnings: "$1,800/week",
      bio: "Passionate about creating luxury gaming experiences with personalized attention to every player.",
      achievements: ["Newcomer Award", "Style Icon", "Team Player"]
    },
    // Female Lucky Charms
    {
      id: 5,
      name: "Luna Starlight",
      title: "Fortune Goddess",
      type: "charm",
      gender: "female",
      viewers: "2.5k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face",
      specialty: "Energy & Manifestation",
      isLive: true,
      experience: "4 years",
      languages: ["English", "Italian"],
      earnings: "$2,000/week",
      bio: "Mystical beauty with captivating energy that brings luck and fortune to every game session.",
      achievements: ["Mystic Award", "Social Media Star", "Fan Favorite"]
    },
    {
      id: 6,
      name: "Aria Thompson",
      title: "Lucky Angel",
      type: "charm",
      gender: "female",
      viewers: "3.5k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
      specialty: "Positivity & Good Vibes",
      isLive: true,
      experience: "7+ years",
      languages: ["English", "French", "Russian"],
      earnings: "$2,800/week",
      bio: "Stunning content creator with celestial beauty and magnetic charm that attracts winning moments.",
      achievements: ["Master Charm", "Celestial Award", "Mentor of the Year"]
    },
    // Male Lucky Charms
    {
      id: 7,
      name: "Phoenix Blake",
      title: "Fortune Hunter",
      type: "charm",
      gender: "male",
      viewers: "2.1k",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
      specialty: "Motivation & Energy",
      isLive: true,
      experience: "3 years",
      languages: ["English", "Spanish"],
      earnings: "$1,700/week",
      bio: "Charismatic content creator with magnetic personality and intuitive energy that attracts good fortune.",
      achievements: ["Rising Fortune", "Player Magnet", "Energy Master"]
    },
    {
      id: 8,
      name: "Zander Moon",
      title: "Luck Whisperer",
      type: "charm",
      gender: "male",
      viewers: "1.8k",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
      specialty: "Manifestation & Guidance",
      isLive: false,
      experience: "2 years",
      languages: ["English", "French"],
      earnings: "$1,500/week",
      bio: "Handsome content creator and spiritual guide who helps players align with their winning energy.",
      achievements: ["Spiritual Guide", "Manifestation Master", "Positive Vibes"]
    },
    // Additional Female Lucky Charms
    {
      id: 9,
      name: "Scarlett Divine",
      title: "Crimson Charm",
      type: "charm",
      gender: "female",
      viewers: "2.9k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face",
      specialty: "Passion & Fire Energy",
      isLive: true,
      experience: "5 years",
      languages: ["English", "Spanish", "Portuguese"],
      earnings: "$2,400/week",
      bio: "Fiery redhead with passionate energy and mesmerizing beauty that ignites winning streaks.",
      achievements: ["Fire Goddess", "Passion Award", "Top Performer"]
    },
    {
      id: 10,
      name: "Valentina Rose",
      title: "Diamond Diva",
      type: "charm",
      gender: "female",
      viewers: "3.1k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face",
      specialty: "Luxury & Elegance",
      isLive: true,
      experience: "6 years",
      languages: ["English", "Italian", "German"],
      earnings: "$2,600/week",
      bio: "Sophisticated beauty with diamond-like radiance and elegant charm that brings luxury to every moment.",
      achievements: ["Diamond Status", "Elegance Award", "VIP Favorite"]
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
              Star Creators
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Meet our talented creators who bring glamour, skill, and positive energy to every gaming session
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCreators.map((creator, index) => (
            <motion.div
              key={creator.id}
              className="bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-flame-500/30 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(255,59,48,0.2)" }}
              onClick={() => setSelectedCreator(creator)}
            >
              <div className="relative">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                
                {creator.isLive && (
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
                  <span>{creator.viewers}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{creator.name}</h3>
                    <div className="flex items-center space-x-1 text-flame-500">
                      <SafeIcon icon={FiStar} />
                      <span className="text-white text-sm">{creator.rating}</span>
                    </div>
                  </div>
                  <p className="text-flame-400 font-semibold text-sm mb-2">{creator.title}</p>
                  <p className="text-white/80 text-sm">{creator.specialty}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-flame-500 font-semibold">{creator.earnings}</span>
                    <span className="text-white/60 text-sm capitalize">{creator.type}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {creator.languages.slice(0, 3).map((lang, i) => (
                      <span key={i} className="bg-dark-700 text-white/70 px-2 py-1 rounded text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1">
                    {creator.achievements.slice(0, 2).map((achievement, i) => (
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
            Are you attractive, charismatic, and passionate about entertainment? Join our team of star creators and earn up to $3,000+ per week while doing what you love.
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
    </section>
  );
};

export default FeaturedCreators;