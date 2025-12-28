'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex flex-col items-center justify-center text-center text-white px-6 relative">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 leading-tight">
          OliveOak Design - Hyderabad's Best Interior Designers
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Professional interior design services in Hyderabad for residential & commercial spaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <motion.a
            href="/services"
            className="bg-white/90 text-brand-brown px-8 py-4 rounded-xl font-medium hover:bg-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Services
          </motion.a>
          <motion.a
            href="/contact"
            className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Free Consultation
          </motion.a>
        </div>
        <p className="text-sm text-white/70 mt-6">
          Serving all areas of Hyderabad
        </p>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}