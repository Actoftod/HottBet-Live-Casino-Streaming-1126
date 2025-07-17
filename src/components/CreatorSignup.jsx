import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiPhone, FiCamera, FiStar, FiHeart, FiUpload, FiCheck, FiX, FiGift, FiCrown } = FiIcons;

const CreatorSignup = () => {
  const [creatorType, setCreatorType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    experience: '',
    languages: '',
    specialties: [],
    bio: '',
    profileImage: null,
    socialLinks: {
      instagram: '',
      tiktok: '',
      twitter: ''
    }
  });
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const dealerSpecialties = [
    'Blackjack',
    'Roulette',
    'Poker',
    'Baccarat',
    'Craps',
    'Wheel of Fortune'
  ];

  const luckCharmSpecialties = [
    'Energy & Positivity',
    'Manifestation',
    'Good Vibes',
    'Motivation',
    'Spiritual Guidance',
    'Charm & Charisma'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      setFormData(prev => ({
        ...prev,
        profileImage: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulated submission success
    setTimeout(() => {
      setSubmitted(false);
      setStep(0);
      setCreatorType('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        experience: '',
        languages: '',
        specialties: [],
        bio: '',
        profileImage: null,
        socialLinks: {
          instagram: '',
          tiktok: '',
          twitter: ''
        }
      });
    }, 3000);
  };

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
            Thank you for your interest in joining our team as a {creatorType === 'dealer' ? 'Professional Dealer' : 'Lucky Charm'}. 
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
                Content Creator
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Choose your path and join our exclusive team of creators
            </p>
          </div>

          {step === 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className={`bg-dark-800 rounded-2xl p-8 border cursor-pointer transition-all ${
                  creatorType === 'dealer' ? 'border-flame-500' : 'border-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setCreatorType('dealer');
                  setStep(1);
                }}
              >
                <SafeIcon icon={FiStar} className="text-4xl text-flame-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Professional Dealer</h3>
                <p className="text-white/60">
                  Deal cards and interact with players in live casino games
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2 text-white/70">
                    <SafeIcon icon={FiCheck} className="text-flame-500" />
                    <span>Earn up to $3,000/week</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white/70">
                    <SafeIcon icon={FiCheck} className="text-flame-500" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white/70">
                    <SafeIcon icon={FiCheck} className="text-flame-500" />
                    <span>Training provided</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className={`bg-dark-800 rounded-2xl p-8 border cursor-pointer transition-all ${
                  creatorType === 'charm' ? 'border-flame-500' : 'border-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setCreatorType('charm');
                  setStep(1);
                }}
              >
                <SafeIcon icon={FiHeart} className="text-4xl text-flame-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Lucky Charm</h3>
                <p className="text-white/60">
                  Share your energy and bring luck to our players
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2 text-white/70">
                    <SafeIcon icon={FiCheck} className="text-flame-500" />
                    <span>Earn through tips & subscriptions</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white/70">
                    <SafeIcon icon={FiCheck} className="text-flame-500" />
                    <span>Create your own content</span>
                  </li>
                  <li className="flex items-center space-x-2 text-white/70">
                    <SafeIcon icon={FiCheck} className="text-flame-500" />
                    <span>Build your following</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}

          {step > 0 && (
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
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
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
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-white/70 text-sm mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-sm mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-white/70 text-sm mb-2">Age</label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                          min="18"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-sm mb-2">Gender</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                          required
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
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
                      <label className="block text-white/70 text-sm mb-2">
                        {creatorType === 'dealer' ? 'Casino Experience' : 'Related Experience'}
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                        required
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1">0-1 years (Training provided)</option>
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
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                        placeholder="e.g., English, Spanish, French"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-white/70 text-sm mb-4">Specialties</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {(creatorType === 'dealer' ? dealerSpecialties : luckCharmSpecialties).map((specialty) => (
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
                    <h3 className="text-2xl font-bold text-white mb-6">Profile & Social</h3>
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
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white resize-none"
                        placeholder={`Tell us about yourself, your ${creatorType === 'dealer' ? 'dealing style' : 'lucky energy'}, and what makes you special...`}
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-white/70 text-sm mb-2">Social Media Links</label>
                      <div className="grid gap-4">
                        <input
                          type="text"
                          placeholder="Instagram Profile URL"
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                          value={formData.socialLinks.instagram}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            socialLinks: { ...prev.socialLinks, instagram: e.target.value }
                          }))}
                        />
                        <input
                          type="text"
                          placeholder="TikTok Profile URL"
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                          value={formData.socialLinks.tiktok}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            socialLinks: { ...prev.socialLinks, tiktok: e.target.value }
                          }))}
                        />
                        <input
                          type="text"
                          placeholder="Twitter Profile URL"
                          className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white"
                          value={formData.socialLinks.twitter}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            socialLinks: { ...prev.socialLinks, twitter: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={() => setStep(prev => prev - 1)}
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
                    onClick={() => setStep(prev => prev + 1)}
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
                    <SafeIcon icon={FiCrown} />
                    <span>Submit Application</span>
                  </motion.button>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorSignup;