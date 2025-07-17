import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiStar, FiShoppingCart, FiTrendingUp, FiGift } = FiIcons;

const ProductRecommendations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'lucky', name: 'Lucky Charms' },
    { id: 'premium', name: 'Premium Gear' },
    { id: 'merch', name: 'Merchandise' }
  ];

  const products = [
    {
      id: 1,
      name: "Lucky Dragon Pendant",
      category: "lucky",
      price: 129.99,
      rating: 4.8,
      sales: 342,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop",
      description: "Authentic jade dragon pendant for maximum fortune"
    },
    {
      id: 2,
      name: "Premium Card Holder",
      category: "premium",
      price: 89.99,
      rating: 4.9,
      sales: 156,
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=300&h=300&fit=crop",
      description: "Luxurious leather card holder with gold accents"
    },
    {
      id: 3,
      name: "HottBet Hoodie",
      category: "merch",
      price: 59.99,
      rating: 4.7,
      sales: 523,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
      description: "Premium quality hoodie with embroidered logo"
    },
    {
      id: 4,
      name: "Fortune Crystal Set",
      category: "lucky",
      price: 199.99,
      rating: 4.9,
      sales: 128,
      image: "https://images.unsplash.com/photo-1515772914214-c86f17b01cc6?w=300&h=300&fit=crop",
      description: "Set of 5 energized crystals for luck enhancement"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-20 bg-black relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-flame-500/30 to-transparent" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-flame-500/5 blur-[100px]" />
      
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
            Featured{' '}
            <span className="bg-gradient-to-r from-flame-500 to-flame-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Enhance your gaming experience with our premium selection of lucky charms and merchandise
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category.id 
                  ? 'bg-flame-500 text-white' 
                  : 'bg-dark-800 text-white/60 hover:bg-dark-700'}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-dark-800 rounded-2xl overflow-hidden border border-white/10 hover:border-flame-500/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(255,59,48,0.2)" }}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                  <SafeIcon icon={FiTrendingUp} className="text-flame-500" />
                  <span>{product.sales} sold</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/60 text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-flame-500">
                    <SafeIcon icon={FiStar} />
                    <span className="text-white text-sm">{product.rating}</span>
                  </div>
                  <span className="text-flame-500 font-semibold">
                    ${product.price}
                  </span>
                </div>

                <motion.button
                  className="w-full bg-flame-500 text-white py-3 rounded-lg hover:bg-flame-600 transition-all flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(255,59,48,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <SafeIcon icon={FiShoppingCart} />
                  <span>Add to Cart</span>
                </motion.button>
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
          <SafeIcon icon={FiGift} className="text-4xl text-flame-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-white mb-4">VIP Members Save More</h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            Unlock exclusive discounts and early access to new products with your VIP membership
          </p>
          <motion.button
            className="bg-flame-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-flame-600 transition-all flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,59,48,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiDollarSign} />
            <span>Become VIP</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductRecommendations;