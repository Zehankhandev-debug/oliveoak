'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="cta-section-bg py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-brand-brown leading-tight mb-6">
            Ready to Transform Your Hyderabad Space?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.a
              href="/contact"
              className="bg-brand-brown hover:bg-brand-brown-dark text-white px-8 py-4 rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Free Consultation
            </motion.a>
            <motion.a
              href="/projects"
              className="border-2 border-brand-brown text-brand-brown px-8 py-4 rounded-xl font-medium hover:bg-brand-brown hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}