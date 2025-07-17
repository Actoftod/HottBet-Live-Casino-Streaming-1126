import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiPhone, FiCamera, FiStar, FiHeart, FiUpload, FiCheck, FiX } = FiIcons;

const DealerSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    languages: '',
    specialties: [],
    bio: '',
    profileImage: null
  });
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const gameSpecialties = [
    'Blackjack',
    'Roulette',
    'Poker',
    'Baccarat',
    'Craps',
    'Wheel of Fortune'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecialtyToggle = (specialty) => {
    setFormData(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, profileImage: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        experience: '',
        languages: '',
        specialties: [],
        bio: '',
        profileImage: null
      });
    }, 3000);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (submitted) {
    return (
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-dark-800 rounded-2xl p-8 max-w-md w-full border border-flame-500/30 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <SafeIcon icon={FiCheck} className="text-6xl text-flame-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-4">Application Submitted!</h2>
          <p className="text-white/70 mb-6">
            Thank you for your interest in joining our team of beautiful dealers. 
            We'll review your application and contact you within 24-48 hours.
          </p>
          <motion.div
            className="w-full bg-flame-500/20 rounded-full h-2"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
          >
            <motion.div
              className="h-full bg-flame-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-flame-500/5 blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="w-20 h-1 bg-flame-500 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Become a{' '}
              <span className="bg-gradient-to-r from-flame-500 to-flame-600 bg-clip-text text-transparent">
                Star Dealer
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Join our exclusive team of beautiful, professional dealers and earn while you entertain
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    i <= step ? 'bg-flame-500 text-white' : 'bg-dark-700 text-white/40'
                  }`}
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="w-full bg-dark-700 rounded-full h-2">
              <motion.div
                className="h-full bg-flame-500 rounded-full"
                initial={{ width: '33%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-dark-800 rounded-2xl p-8 border border-white/10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-flame-500"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-flame-500"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Email</label>
                      <div className="relative">
                        <SafeIcon icon={FiMail} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-flame-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Phone</label>
                      <div className="relative">
                        <SafeIcon icon={FiPhone} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-flame-500"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-white/70 text-sm mb-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-flame-500"
                      placeholder="Must be 21 or older"
                      min="21"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Experience & Skills</h3>
                  
                  <div className="mb-6">
                    <label className="block text-white/70 text-sm mb-2">Casino Experience (years)</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-flame-500"
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years (We'll train you!)</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/70 text-sm mb-2">Languages Spoken</label>
                    <input
                      type="text"
                      name="languages"
                      value={formData.languages}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-flame-500"
                      placeholder="e.g., English, Spanish, French"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/70 text-sm mb-4">Game Specialties</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {gameSpecialties.map((specialty) => (
                        <motion.button
                          key={specialty}
                          type="button"
                          className={`p-3 rounded-lg text-center transition-all ${
                            formData.specialties.includes(specialty)
                              ? 'bg-flame-500 text-white border-transparent'
                              : 'bg-dark-700 text-white/70 border border-white/10 hover:border-flame-500/30'
                          }`}
                          onClick={() => handleSpecialtyToggle(specialty)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {specialty}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Profile & Bio</h3>
                  
                  <div className="mb-6">
                    <label className="block text-white/70 text-sm mb-2">Profile Photo</label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-flame-500/50 transition-all">
                      <SafeIcon icon={FiCamera} className="text-4xl text-white/40 mx-auto mb-4" />
                      <p className="text-white/60 mb-4">Upload your professional photo</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="profileImage"
                      />
                      <label
                        htmlFor="profileImage"
                        className="bg-flame-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-flame-600 transition-all inline-flex items-center space-x-2"
                      >
                        <SafeIcon icon={FiUpload} />
                        <span>Choose Photo</span>
                      </label>
                      {formData.profileImage && (
                        <p className="text-flame-500 mt-2">{formData.profileImage.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/70 text-sm mb-2">About You</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-flame-500 resize-none"
                      placeholder="Tell us about yourself, your personality, and what makes you special..."
                      required
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className="bg-dark-700 text-white px-6 py-3 rounded-lg hover:bg-dark-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Previous
                </motion.button>
              )}
              
              {step < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  className="bg-flame-500 text-white px-6 py-3 rounded-lg hover:bg-flame-600 transition-all ml-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next Step
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  className="bg-flame-500 text-white px-8 py-3 rounded-lg hover:bg-flame-600 transition-all ml-auto flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiStar} />
                  <span>Submit Application</span>
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default DealerSignup;