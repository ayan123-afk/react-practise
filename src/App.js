import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bull-black overflow-x-hidden">
      <DynamicBackground mousePosition={mousePosition} />
      <ProgressBar progress={scrollProgress} />
      <SpeedLines />
      <NavBar />
      
      <HeroSection />
      <EnergySection />
      <AthletesSection />
      <EventsSection />
      <ProductsSection />
      <FooterSection />
      
      <FloatingCans />
    </div>
  );
};

const DynamicBackground = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 z-0">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-red-bull via-bull-black to-bull-black"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-bull-yellow rounded-full animate-pulse-energy"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }) => (
  <div className="fixed top-0 left-0 w-full h-1 z-50">
    <div 
      className="h-full bg-gradient-to-r from-bull-yellow via-red-bull to-bull-yellow"
      style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
    />
  </div>
);

const SpeedLines = () => (
  <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-bull-yellow to-transparent animate-speed-line"
        style={{
          top: `${i * 10}%`,
          left: '-20%',
          animationDelay: `${i * 0.1}s`,
          opacity: 0.3,
        }}
      />
    ))}
  </div>
);

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-bull-black/95 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 bg-red-bull rounded-full animate-pulse-energy flex items-center justify-center">
              <span className="text-2xl font-black text-bull-yellow">RB</span>
            </div>
            <span className="text-2xl font-black text-white">RED BULL</span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['HOME', 'ENERGY', 'ATHLETES', 'EVENTS', 'PRODUCTS'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#FFE600' }}
                className="text-white font-bold tracking-wider hover:text-bull-yellow transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#FFE600' }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-bull text-white px-6 py-2 rounded-full font-bold tracking-wider hover:bg-bull-yellow hover:text-bull-black transition-all duration-300"
          >
            GET ENERGY
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-bull-energy opacity-20 animate-tilt" />
      
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1, staggerChildren: 0.3 } }
        }}
        initial="hidden"
        animate={controls}
        className="relative z-20 text-center px-4"
      >
        <motion.h1 
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
          }}
          className="text-7xl md:text-9xl font-black text-white mb-4"
        >
          <span className="inline-block animate-shake">R</span>
          <span className="inline-block animate-bounce-energy" style={{ animationDelay: '0.1s' }}>E</span>
          <span className="inline-block animate-shake" style={{ animationDelay: '0.2s' }}>D</span>
          <span className="inline-block text-bull-yellow animate-float"> </span>
          <span className="inline-block animate-bounce-energy" style={{ animationDelay: '0.3s' }}>B</span>
          <span className="inline-block animate-shake" style={{ animationDelay: '0.4s' }}>U</span>
          <span className="inline-block animate-bounce-energy" style={{ animationDelay: '0.5s' }}>L</span>
          <span className="inline-block animate-shake" style={{ animationDelay: '0.6s' }}>L</span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8 } }
          }}
          className="text-2xl md:text-4xl text-white mb-8 max-w-4xl mx-auto"
        >
          <span className="animate-pulse-energy inline-block">⚡</span> GIVES YOU WINGS{' '}
          <span className="animate-pulse-energy inline-block">⚡</span>
        </motion.p>

        <motion.div
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1, transition: { type: 'spring', stiffness: 200, delay: 1 } }
          }}
          className="flex justify-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-bull text-white px-12 py-4 rounded-full text-xl font-bold tracking-wider shadow-2xl animate-glow"
          >
            TASTE THE ENERGY
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="border-2 border-bull-yellow text-bull-yellow px-12 py-4 rounded-full text-xl font-bold tracking-wider hover:bg-bull-yellow hover:text-bull-black transition-all duration-300"
          >
            WATCH NOW
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

const EnergySection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="energy" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-6xl md:text-8xl font-black text-white mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-red-bull to-bull-yellow bg-clip-text text-transparent">
            UNLEASH THE BEAST
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'ENERGY BOOST', icon: '⚡', color: 'from-yellow-400 to-red-500' },
            { title: 'MENTAL FOCUS', icon: '🧠', color: 'from-red-500 to-purple-600' },
            { title: 'PHYSICAL POWER', icon: '💪', color: 'from-purple-600 to-blue-600' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:border-bull-yellow transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl animate-glow`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300">Experience the ultimate power boost with Red Bull</p>
              <motion.div
                className="w-full h-1 bg-gradient-to-r from-transparent via-bull-yellow to-transparent mt-6"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AthletesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  const athletes = [
    { name: 'MAX VERSTAPPEN', sport: 'F1 Racing', image: '🏎️', color: 'from-blue-600 to-red-600' },
    { name: 'CONOR MCGREGOR', sport: 'MMA', image: '🥊', color: 'from-red-600 to-green-600' },
    { name: 'TRAVIS PASTRANA', sport: 'FMX', image: '🏍️', color: 'from-yellow-500 to-red-600' },
  ];

  return (
    <section id="athletes" ref={ref} className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="text-6xl md:text-8xl font-black text-white mb-16 text-center"
        >
          OUR ATHLETES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {athletes.map((athlete, index) => (
            <motion.div
              key={athlete.name}
              initial={{ opacity: 0, rotateY: 180 }}
              animate={inView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-bull to-bull-yellow rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <div className={`relative bg-gradient-to-br ${athlete.color} p-1 rounded-2xl`}>
                <div className="bg-bull-black rounded-2xl p-8 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="text-8xl mb-4"
                  >
                    {athlete.image}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{athlete.name}</h3>
                  <p className="text-bull-yellow mb-4">{athlete.sport}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-red-bull text-white px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    VIEW PROFILE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="events" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-6xl md:text-8xl font-black text-white mb-16 text-center"
        >
          UPCOMING EVENTS
        </motion.h2>

        <div className="space-y-6">
          {[
            { name: 'RED BULL RACING', date: '2024-03-15', location: 'MONACO' },
            { name: 'AIR RACE WORLD', date: '2024-04-20', location: 'ABU DHABI' },
            { name: 'CRASHED ICE', date: '2024-05-10', location: 'SWEDEN' },
          ].map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(219, 10, 64, 0.2)' }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-bull-yellow transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="w-16 h-16 bg-red-bull rounded-full flex items-center justify-center text-2xl"
                  >
                    🏆
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                    <p className="text-gray-400">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-bull-yellow font-bold">{event.date}</span>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-bull-black transition-all duration-300"
                  >
                    GET TICKETS
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="products" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, rotate: -10 }}
          animate={inView ? { opacity: 1, rotate: 0 } : {}}
          className="text-6xl md:text-8xl font-black text-white mb-16 text-center"
        >
          OUR PRODUCTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: 'ORIGINAL', color: 'from-blue-500 to-red-500', icon: '🥫' },
            { name: 'SUGARFREE', color: 'from-silver-500 to-gray-500', icon: '🥤' },
            { name: 'TROPICAL', color: 'from-yellow-500 to-orange-500', icon: '🧃' },
            { name: 'COCONUT', color: 'from-green-500 to-blue-500', icon: '🥥' },
          ].map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ 
                y: -20,
                rotateZ: [0, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
              <div className="relative bg-bull-black/90 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-bull-yellow transition-all duration-300">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-7xl text-center mb-4"
                >
                  {product.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{product.name}</h3>
                <p className="text-gray-400 text-center text-sm mb-4">Red Bull {product.name} Edition</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-full bg-red-bull text-white py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  TASTE NOW
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FloatingCans = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            filter: 'blur(2px)',
            opacity: 0.1,
          }}
        >
          🥫
        </motion.div>
      ))}
    </div>
  );
};

const FooterSection = () => {
  return (
    <footer className="relative bg-bull-black border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-red-bull rounded-full animate-pulse-energy" />
              <span className="text-2xl font-black text-white">RED BULL</span>
            </motion.div>
            <p className="text-gray-400">Gives you wings to fly higher and achieve the impossible.</p>
          </div>
          
          {['COMPANY', 'SUPPORT', 'LEGAL'].map((section, index) => (
            <div key={section}>
              <h4 className="text-white font-bold mb-4">{section}</h4>
              <ul className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: '#FFE600' }}
                  >
                    <a href="#" className="text-gray-400 hover:text-bull-yellow transition-colors">
                      Link {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© 2024 RED BULL. ALL RIGHTS RESERVED. 🚀</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default App;
