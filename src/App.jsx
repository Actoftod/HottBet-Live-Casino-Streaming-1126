import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AnimatePresence } from 'framer-motion';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import questConfig from './config/questConfig';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import LiveStreamers from './components/LiveStreamers';
import Games from './components/Games';
import FeaturedDealers from './components/FeaturedDealers';
import TipsSubscriptions from './components/TipsSubscriptions';
import VIPMembership from './components/VIPMembership';
import ProductRecommendations from './components/ProductRecommendations';
import Footer from './components/Footer';
import CreatorSignup from './components/CreatorSignup';
import DealerSignup from './components/DealerSignup';
import GameStream from './components/GameStream';
import UserProfile from './components/UserProfile';
import PaymentProcessor from './components/PaymentProcessor';
import RoleManager from './components/RoleManager';
import Analytics from './components/Analytics';
import ProtectedRoute from './components/ProtectedRoute';
import AppHelp from './components/AppHelp';

// Styles
import './App.css';

// Roles
import { PERMISSIONS } from './common/roles';

const HomePage = ({ onWalletClick }) => {
  return (
    <>
      <Hero />
      <LiveStreamers />
      <Games />
      <FeaturedDealers />
      <ProductRecommendations />
      <TipsSubscriptions />
      <VIPMembership />
    </>
  );
};

function App() {
  const [showPayment, setShowPayment] = useState(false);

  const handleWalletClick = () => {
    setShowPayment(true);
  };

  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <AuthProvider>
        <Router>
          <div className="app-container">
            <Header onWalletClick={handleWalletClick} />
            <Routes>
              <Route path="/" element={<HomePage onWalletClick={handleWalletClick} />} />
              <Route path="/become-creator" element={<CreatorSignup />} />
              <Route path="/dealer-signup" element={<DealerSignup />} />
              <Route path="/stream" element={<GameStream />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route
                path="/admin/roles"
                element={
                  <ProtectedRoute requiredPermission={PERMISSIONS.MANAGE_USERS}>
                    <RoleManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <ProtectedRoute requiredPermission={PERMISSIONS.VIEW_DASHBOARD}>
                    <Analytics />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
            <AnimatePresence>
              {showPayment && <PaymentProcessor onClose={() => setShowPayment(false)} />}
            </AnimatePresence>
            <AppHelp />
          </div>
        </Router>
      </AuthProvider>
    </QuestProvider>
  );
}

export default App;