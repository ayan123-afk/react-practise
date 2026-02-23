import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bull-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-red-bull"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-bull-black/90 backdrop-blur-md z-40 py-4">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-red-bull rounded-full animate-pulse-energy" />
              <span className="text-2xl font-bold text-white">RED BULL</span>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['HOME', 'ABOUT', 'PRODUCTS', 'CONTACT'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-white hover:text-bull-yellow transition-colors font-bold"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-bull text-white px-6 py-2 rounded-full font-bold hover:bg-bull-yellow hover:text-bull-black transition-all"
            >
              BUY NOW
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl md:text-9xl font-black text-white mb-4"
            >
              <span className="inline-block animate-shake">R</span>
              <span className="inline-block animate-bounce-energy">E</span>
              <span className="inline-block animate-shake">D</span>
              <span className="text-bull-yellow mx-2">⚡</span>
              <span className="inline-block animate-bounce-energy">B</span>
              <span className="inline-block animate-shake">U</span>
              <span className="inline-block animate-bounce-energy">L</span>
              <span className="inline-block animate-shake">L</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-4xl text-gray-300 mb-8"
            >
              <span className="animate-pulse-energy inline-block">⚡</span> GIVES YOU WINGS <span className="animate-pulse-energy inline-block">⚡</span>
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-bull text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg animate-glow"
            >
              EXPERIENCE THE ENERGY
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-16">
            WHY RED BULL?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'ENERGY BOOST', icon: '⚡', color: 'bg-red-bull' },
              { title: 'MENTAL FOCUS', icon: '🧠', color: 'bg-bull-yellow' },
              { title: 'PHYSICAL POWER', icon: '💪', color: 'bg-red-bull' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${item.color} flex items-center justify-center text-4xl animate-float`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">Experience the ultimate power boost</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-16">
            OUR PRODUCTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'ORIGINAL', color: 'from-red-600 to-red-400', icon: '🥫' },
              { name: 'SUGARFREE', color: 'from-gray-600 to-gray-400', icon: '🥤' },
              { name: 'TROPICAL', color: 'from-yellow-600 to-orange-400', icon: '🧃' },
              { name: 'COCONUT', color: 'from-green-600 to-blue-400', icon: '🥥' },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br ${product.color} p-6 rounded-2xl text-center"
              >
                <div className="text-6xl mb-4 animate-float">{product.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <button className="bg-white text-bull-black px-4 py-2 rounded-full text-sm font-bold hover:bg-bull-yellow transition-colors">
                  TASTE NOW
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bull-black border-t border-white/10 py-12">
        <div className="container-custom">
          <div className="text-center text-gray-400">
            <p>© 2024 RED BULL. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ opacity: 0.1 }}
          >
            ⚡
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
