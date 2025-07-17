import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCrown, FiCheck, FiStar, FiDiamond, FiAward, FiGift } = FiIcons;

const VIPMembership = () => {
  const tiers = [
    {
      id: 'bronze',
      name: 'Bronze Elite',
      icon: FiAward,
      color: 'from-amber-600 to-amber-700',
      price: '$99',
      period: 'month',
      benefits: [
        'Priority customer support',
        '5% cashback on losses',
        'Weekly bonus spins',
        'Exclusive chat room access',
        'Monthly tournament entry'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Premium',
      icon: FiStar,
      color: 'from-gray-400 to-gray-500',
      price: '$299',
      period: 'month',
      benefits: [
        'All Bronze benefits',
        '10% cashback on losses',
        'Daily bonus spins',
        'Personal account manager',
        'VIP-only tournaments',
        'Monthly reload bonus'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Prestige',
      icon: FiCrown,
      color: 'from-yellow-400 to-yellow-500',
      price: '$999',
      period: 'month',
      benefits: [
        'All Silver benefits',
        '15% cashback on losses',
        'Unlimited bonus spins',
        'Dedicated VIP host',
        'Private gaming sessions',
        'Custom game limits',
        'Exclusive events access',
        'Luxury gifts & rewards'
      ]
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-flame-500/5 blur-[100px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-flame-600/5 blur-[80px]" />

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
            Exclusive{' '}
            <span className="bg-gradient-to-r from-flame-500 to-flame-600 bg-clip-text text-transparent">
              VIP Benefits
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Join our elite VIP program and experience premium gaming with exclusive perks and personalized service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className="bg-dark-800 rounded-2xl overflow-hidden border border-white/10 hover:border-flame-500/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(255,59,48,0.2)" }}
            >
              <div className={`bg-gradient-to-r ${tier.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[50px]" />
                <SafeIcon icon={tier.icon} className="text-4xl text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-white/70 ml-2">/{tier.period}</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="text-flame-500 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className="w-full mt-8 bg-flame-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,59,48,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <SafeIcon icon={FiDiamond} />
                  <span>Upgrade Now</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-dark-800 rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SafeIcon icon={FiGift} className="text-4xl text-flame-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-white mb-4">Special VIP Rewards</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our VIP members receive exclusive rewards, personalized bonuses, and invitations to special events. 
            The higher your tier, the more luxurious the perks become.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VIPMembership;