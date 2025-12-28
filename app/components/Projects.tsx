'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'The Emerald in Narsingi',
    type: 'Residential Project',
    description: 'Luxury residential interior design redefined with modern amenities.',
    bgImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
  },
  {
    title: 'The Onyx, Financial District',
    type: 'Commercial Project',
    description: 'Premium commercial interior design in Hyderabad\'s financial hub.',
    bgImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
  },
  {
    title: 'The Aurelia, Banjara Hills',
    type: 'Luxury Residential',
    description: 'Exclusive residential interior design experience.',
    bgImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
  },
];

export default function Projects() {
  return (
    <section className="relative w-full">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="h-screen sticky top-0 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
          <div className="relative h-full flex items-center justify-center text-center text-white px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium mb-4 opacity-80">{project.type}</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-tight">
                {project.title}
              </h2>
              <p className="text-base md:text-lg mb-8 opacity-90">
                {project.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Start Your Project
                </motion.a>
                <motion.a
                  href="/projects"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}