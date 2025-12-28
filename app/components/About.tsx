'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-brown text-sm font-medium mb-4">• Best Interior Design Company Hyderabad</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-brand-brown leading-tight mb-8">
              Hyderabad's Premier Interior Design Experts
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                OliveOak Design is Hyderabad's leading interior design company, specializing in transforming spaces into functional works of art.
              </p>
              <p>
                Our team combines aesthetic vision with practical solutions, delivering modular kitchen designs, elegant bedroom interiors, and complete turnkey solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="/residential"
                className="bg-brand-brown hover:bg-brand-brown-dark text-white px-8 py-4 rounded-xl transition-colors text-center"
                whileHover={{ y: -5 }}
              >
                Residential Interiors
              </motion.a>
              <motion.a
                href="/commercial"
                className="border-2 border-brand-brown text-brand-brown px-8 py-4 rounded-xl font-medium hover:bg-brand-brown hover:text-white transition-colors text-center"
                whileHover={{ y: -5 }}
              >
                Commercial Interiors
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img 
              src="https://framerusercontent.com/images/vJzsJOlbUK8qkA5xxZA18jSC6SI.jpeg?scale-down-to=1024"
              alt="Modern interior design Hyderabad"
              className="w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}