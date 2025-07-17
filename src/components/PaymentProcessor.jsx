import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiCreditCard,
  FiDollarSign,
  FiBitcoin,
  FiShield,
  FiCheckCircle,
  FiX,
  FiLock,
  FiClock,
  FiTrendingUp,
  FiGift
} = FiIcons;

const PaymentProcessor = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [amount, setAmount] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit Card',
      icon: FiCreditCard,
      description: 'Fast & Secure',
      fees: '2.9% + $0.30'
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      icon: FiBitcoin,
      description: 'BTC, ETH, USDT',
      fees: '1%'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: FiDollarSign,
      description: 'ACH/Wire',
      fees: '$0'
    }
  ];

  const predefinedAmounts = [50, 100, 200, 500, 1000];
  const bonusAmounts = {
    50: '+$5 Bonus',
    100: '+$15 Bonus',
    200: '+$40 Bonus',
    500: '+$125 Bonus',
    1000: '+$300 Bonus'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-dark-800 rounded-2xl p-8 max-w-md w-full border border-white/10 relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-flame-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-flame-600/10 rounded-full blur-[80px]" />

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiLock} className="text-flame-500 text-xl" />
            <h2 className="text-2xl font-bold text-white">Add Funds</h2>
          </div>
          <motion.button
            className="text-white/60 hover:text-white transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SafeIcon icon={FiX} className="text-2xl" />
          </motion.button>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-between mb-6">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`flex-1 h-1 rounded-full ${
                s <= step ? 'bg-flame-500' : 'bg-dark-700'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-4">
                {paymentMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    className={`p-4 rounded-xl flex items-center space-x-4 transition-all ${
                      selectedMethod === method.id
                        ? 'bg-gradient-to-r from-flame-500 to-flame-600 border-transparent'
                        : 'bg-dark-700 border border-white/10 hover:border-flame-500/30'
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SafeIcon icon={method.icon} className="text-2xl text-white" />
                    <div className="flex-1 text-left">
                      <div className="text-white font-semibold">{method.name}</div>
                      <div className="text-sm text-white/60">{method.description}</div>
                    </div>
                    <div className="text-sm text-white/60">{method.fees}</div>
                  </motion.button>
                ))}
              </div>

              <motion.button
                className="w-full bg-flame-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2"
                onClick={() => setStep(2)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Continue</span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-6">
                <label className="block text-white/70 text-sm mb-2">
                  Select Amount (USD)
                </label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {predefinedAmounts.map((preset) => (
                    <motion.button
                      key={preset}
                      type="button"
                      className={`p-3 rounded-xl text-center transition-all ${
                        amount === preset.toString()
                          ? 'bg-flame-500 text-white'
                          : 'bg-dark-700 text-white/80 hover:bg-dark-600'
                      }`}
                      onClick={() => setAmount(preset.toString())}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="font-semibold">${preset}</div>
                      <div className="text-xs text-flame-400">
                        {bonusAmounts[preset]}
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="relative">
                  <SafeIcon
                    icon={FiDollarSign}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50"
                  />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-dark-700 border border-white/10 rounded-xl py-3 px-12 text-white placeholder-white/30 focus:outline-none focus:border-flame-500 transition-all"
                    placeholder="Custom amount"
                    min="10"
                    required
                  />
                </div>
              </div>

              <div className="bg-dark-700 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60">Amount</span>
                  <span className="text-white">${amount || 0}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60">Bonus</span>
                  <span className="text-flame-500">
                    +${amount >= 50 ? Math.floor(amount * 0.2) : 0}
                  </span>
                </div>
                <div className="border-t border-white/10 mt-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-white font-semibold">
                      ${amount ? Number(amount) + Math.floor(amount * 0.2) : 0}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <motion.button
                  type="button"
                  className="flex-1 bg-dark-700 text-white py-3 rounded-xl font-semibold"
                  onClick={() => setStep(1)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back
                </motion.button>
                <motion.button
                  type="submit"
                  className="flex-1 bg-flame-500 text-white py-3 rounded-xl font-semibold relative overflow-hidden"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={processing || success || !amount}
                >
                  <AnimatePresence mode="wait">
                    {processing ? (
                      <motion.div
                        key="processing"
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </motion.div>
                    ) : success ? (
                      <motion.div
                        key="success"
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <SafeIcon icon={FiCheckCircle} className="text-2xl" />
                      </motion.div>
                    ) : (
                      <motion.span
                        key="default"
                        className="flex items-center justify-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <SafeIcon icon={FiDollarSign} />
                        <span>Add Funds</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center space-x-2 text-white/50 text-sm">
          <SafeIcon icon={FiShield} className="text-green-500" />
          <span>Secure 256-bit SSL encryption</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentProcessor;