'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Custom Furniture Design',
    description: 'Bespoke furniture solutions for Hyderabad homes and offices',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Room Decoration & Styling',
    description: 'Complete room makeovers by expert interior decorators',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Space Planning & Layout',
    description: 'Optimized layouts for apartments and commercial spaces',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Home Renovations',
    description: 'Complete home transformation services',
    image: 'https://images.pexels.com/photos/30024169/pexels-photo-30024169.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'Lighting Design',
    description: 'Ambient, task, and accent lighting solutions',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Virtual Consultations',
    description: 'Online design services for convenient solutions',
    image: 'https://images.pexels.com/photos/18069157/pexels-photo-18069157.png?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(1);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-64 md:h-96 lg:h-[600px] rounded-3xl overflow-hidden">
            {services.map((service) => (
              <img
                key={service.id}
                src={service.image}
                alt={service.title}
                className={`service-image ${activeService === service.id ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-light text-brand-brown leading-tight mb-12">
              Professional Interior Design<br />
              Services in Hyderabad
            </h2>

            <div className="space-y-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`border-b border-brand-brown pb-6 cursor-pointer transition-colors ${activeService === service.id ? 'text-brand-brown' : 'text-gray-800'}`}
                  onMouseEnter={() => setActiveService(service.id)}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-start gap-6">
                    <span className={`font-light text-sm ${activeService === service.id ? 'text-brand-brown' : 'text-gray-800'}`}>
                      {service.id.toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`text-lg md:text-xl font-normal ${activeService === service.id ? 'text-brand-brown' : 'text-gray-800'}`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <motion.a
                href="/services"
                className="bg-brand-brown hover:bg-brand-brown-dark text-white px-8 py-4 rounded-xl transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
              >
                View All Services
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}