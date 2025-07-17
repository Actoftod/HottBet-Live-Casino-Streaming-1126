import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiClock,
  FiPieChart,
  FiBarChart2,
  FiCalendar,
  FiArrowUp,
  FiArrowDown,
  FiStar
} = FiIcons;

const Analytics = () => {
  const [timeframe, setTimeframe] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const metrics = {
    revenue: {
      current: 158420,
      previous: 142350,
      change: 11.3,
      trend: 'up'
    },
    users: {
      current: 2845,
      previous: 2456,
      change: 15.8,
      trend: 'up'
    },
    bets: {
      current: 45678,
      previous: 48234,
      change: -5.3,
      trend: 'down'
    },
    avgBet: {
      current: 34.65,
      previous: 29.45,
      change: 17.7,
      trend: 'up'
    }
  };

  const popularGames = [
    { name: 'Live Blackjack', revenue: 45600, players: 856 },
    { name: 'Roulette VIP', revenue: 38400, players: 642 },
    { name: 'Baccarat', revenue: 32100, players: 534 },
    { name: 'Poker Room', revenue: 28900, players: 423 }
  ];

  const topDealers = [
    { name: 'Sophia', rating: 4.9, revenue: 28500, tips: 4200 },
    { name: 'Isabella', rating: 4.8, revenue: 24600, tips: 3800 },
    { name: 'Emma', rating: 4.9, revenue: 22400, tips: 3500 },
    { name: 'Olivia', rating: 4.7, revenue: 19800, tips: 3100 }
  ];

  return (
    <section className="py-20 bg-black relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-flame-500/5 blur-[100px]" />

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h2>
              <p className="text-white/60">Track performance and engagement metrics</p>
            </div>
            
            {/* Time Range Selector */}
            <div className="flex items-center space-x-2 bg-dark-800 rounded-lg p-1">
              {['day', 'week', 'month', 'year'].map((period) => (
                <motion.button
                  key={period}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    timeframe === period 
                      ? 'bg-flame-500 text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  onClick={() => setTimeframe(period)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { key: 'revenue', title: 'Revenue', icon: FiDollarSign },
              { key: 'users', title: 'Active Users', icon: FiUsers },
              { key: 'bets', title: 'Total Bets', icon: FiBarChart2 },
              { key: 'avgBet', title: 'Average Bet', icon: FiTrendingUp }
            ].map((metric) => (
              <motion.div
                key={metric.key}
                className={`bg-dark-800 rounded-xl p-6 border cursor-pointer ${
                  selectedMetric === metric.key 
                    ? 'border-flame-500' 
                    : 'border-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedMetric(metric.key)}
              >
                <div className="flex items-center justify-between mb-4">
                  <SafeIcon 
                    icon={metric.icon} 
                    className="text-flame-500 text-2xl" 
                  />
                  <div className={`flex items-center space-x-1 ${
                    metrics[metric.key].trend === 'up' 
                      ? 'text-green-500' 
                      : 'text-red-500'
                  }`}>
                    <SafeIcon 
                      icon={metrics[metric.key].trend === 'up' ? FiArrowUp : FiArrowDown} 
                      className="text-sm" 
                    />
                    <span className="text-sm">{Math.abs(metrics[metric.key].change)}%</span>
                  </div>
                </div>
                <h3 className="text-white/60 text-sm mb-1">{metric.title}</h3>
                <div className="text-2xl font-bold text-white">
                  {metric.key === 'revenue' || metric.key === 'avgBet' 
                    ? `$${metrics[metric.key].current.toLocaleString('en-US', { minimumFractionDigits: 2 })}` 
                    : metrics[metric.key].current.toLocaleString()}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Popular Games & Top Dealers */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Popular Games */}
            <motion.div 
              className="bg-dark-800 rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Popular Games</h3>
              <div className="space-y-4">
                {popularGames.map((game, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-white/60">{index + 1}</span>
                      <span className="text-white">{game.name}</span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-white/60">
                        <span className="text-flame-500">${game.revenue.toLocaleString()}</span>
                      </div>
                      <div className="text-white/60 w-20 text-right">
                        {game.players} players
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Dealers */}
            <motion.div 
              className="bg-dark-800 rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Top Dealers</h3>
              <div className="space-y-4">
                {topDealers.map((dealer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-white/60">{index + 1}</span>
                      <span className="text-white">{dealer.name}</span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1 text-flame-500">
                        <SafeIcon icon={FiStar} className="text-sm" />
                        <span>{dealer.rating}</span>
                      </div>
                      <div className="text-white/60">
                        ${dealer.revenue.toLocaleString()}
                      </div>
                      <div className="text-green-500 w-24 text-right">
                        +${dealer.tips.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;