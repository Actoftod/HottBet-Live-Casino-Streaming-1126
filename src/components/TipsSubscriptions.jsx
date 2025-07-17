import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiGift, FiStar, FiCrown, FiZap, FiDollarSign } = FiIcons;

const TipsSubscriptions = () => {
  const [selectedTip, setSelectedTip] = useState(null);

  const tipAmounts = [5, 10, 25, 50, 100, 250];

  const subscriptionTiers = [
    {
      id: 1,
      name: "Bronze VIP",
      price: "$9.99",
      period: "month",
      color: "from-amber-600 to-amber-800",
      features: [
        "Exclusive chat access",
        "Monthly private stream",
        "Personalized greeting",
        "Priority support"
      ]
    },
    {
      id: 2,
      name: "Silver VIP",
      price: "$19.99",
      period: "month",
      color: "from-gray-400 to-gray-600",
      features: [
        "All Bronze benefits",
        "Weekly private streams",
        "Custom emotes",
        "Betting tips & strategies",
        "Special giveaway entries"
      ]
    },
    {
      id: 3,
      name: "Gold VIP",
      price: "$39.99",
      period: "month",
      color: "from-yellow-400 to-yellow-600",
      features: [
        "All Silver benefits",
        "Daily private access",
        "Personal creator requests",
        "Exclusive tournaments",
        "VIP customer service",
        "Monthly bonus credits"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent"></div>
      <div className="absolute top-[20%] right-[15%] w-[250px] h-[250px] rounded-full bg-flame-500/5 blur-[80px]"></div>
      <div className="absolute bottom-[30%] left-[10%] w-[200px] h-[200px] rounded-full bg-flame-600/5 blur-[100px]"></div>

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
            Support Your{' '}
            <span className="bg-gradient-to-r from-flame-500 to-flame-600 bg-clip-text text-transparent">
              Favorites
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Show your appreciation with tips and unlock exclusive perks with VIP subscriptions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Tips Section */}
          <motion.div
            className="bg-dark-800 rounded-2xl p-8 border border-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "rgba(255,59,48,0.2)" }}
          >
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-full bg-flame-500/10 flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiHeart} className="text-flame-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Send Tips</h3>
              <p className="text-white/60">Show your appreciation to your favorite creators</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {tipAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  className={`p-4 rounded-xl text-center transition-all ${
                    selectedTip === amount
                      ? 'bg-flame-500 text-white border-transparent'
                      : 'bg-dark-700 text-white border border-white/5 hover:border-flame-500/30'
                  }`}
                  onClick={() => setSelectedTip(amount)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: selectedTip === amount
                      ? "0 0 15px rgba(255,59,48,0.4)"
                      : "0 0 10px rgba(255,59,48,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiDollarSign} className="mx-auto mb-2" />
                  <span className="font-semibold">${amount}</span>
                </motion.button>
              ))}
            </div>

            <motion.button
              className="w-full bg-flame-500 text-white py-4 rounded-lg hover:bg-flame-600 transition-all flex items-center justify-center space-x-2 font-medium"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,59,48,0.3)" }}
              whileTap={{ scale: 0.97 }}
              disabled={!selectedTip}
            >
              <SafeIcon icon={FiGift} />
              <span>Send Tip</span>
            </motion.button>
          </motion.div>

          {/* Subscriptions Section */}
          <motion.div
            className="bg-dark-800 rounded-2xl p-8 border border-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "rgba(255,59,48,0.2)" }}
          >
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-full bg-flame-500/10 flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiCrown} className="text-flame-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">VIP Subscriptions</h3>
              <p className="text-white/60">Unlock exclusive perks and premium content</p>
            </div>

            <div className="space-y-6">
              {subscriptionTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  className={`bg-gradient-to-r ${tier.id === 3 ? 'from-flame-500 to-flame-600' : tier.color} p-6 rounded-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: tier.id === 3
                      ? "0 0 30px rgba(255,59,48,0.3)"
                      : "0 0 20px rgba(0,0,0,0.3)"
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{tier.name}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{tier.price}</div>
                      <div className="text-white/70 text-sm">/{tier.period}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-white/90">
                        <SafeIcon
                          icon={FiStar}
                          className={`${tier.id === 3 ? 'text-white' : 'text-yellow-300'} text-sm`}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className={`w-full ${
                      tier.id === 3 ? 'bg-white text-flame-600' : 'bg-white/20 text-white'
                    } py-3 rounded-lg transition-all flex items-center justify-center space-x-2 font-medium`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiZap} />
                    <span>Subscribe</span>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-dark-800 border border-white/5 rounded-2xl p-8 relative overflow-hidden">
            {/* Red glow accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-flame-500/20 rounded-full blur-[30px]"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Beautiful Content Creators</h3>
            <p className="text-white/60 text-lg max-w-2xl mx-auto relative z-10">
              Our creators don't just entertain - they bring luck and positive energy to your gaming experience! 
              With their captivating presence and engaging personalities, every session feels like a winning moment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TipsSubscriptions;