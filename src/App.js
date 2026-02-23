import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#DB0A40] rounded-full animate-pulse"></div>
            <span className="text-2xl font-bold text-white">RED BULL</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#FFE600] transition">HOME</a>
            <a href="#about" className="hover:text-[#FFE600] transition">ABOUT</a>
            <a href="#products" className="hover:text-[#FFE600] transition">PRODUCTS</a>
          </div>
          
          <button className="bg-[#DB0A40] text-white px-6 py-2 rounded-full hover:bg-[#FFE600] hover:text-black transition">
            BUY NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-4 animate-bounce">
            <span className="text-[#DB0A40]">RED</span>{' '}
            <span className="text-[#FFE600]">BULL</span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-gray-300 mb-8 animate-pulse">
            ⚡ GIVES YOU WINGS ⚡
          </p>
          
          <button className="bg-[#DB0A40] text-white px-12 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-[#DB0A40]/50">
            EXPERIENCE NOW
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 text-white">OUR PRODUCTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4 animate-bounce">🥫</div>
                <h3 className="text-2xl font-bold mb-2 text-white">RED BULL</h3>
                <p className="text-gray-400 mb-4">Original Edition</p>
                <button className="bg-[#DB0A40] text-white px-6 py-2 rounded-full hover:bg-[#FFE600] hover:text-black transition">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <p>© 2024 RED BULL. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
