'use client';

import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Modern Interior Design Trends 2024',
    category: 'Design Trends',
    image: 'https://framerusercontent.com/images/bZdh0mETTRfnrDNMinaVWCZqhqs.jpeg?scale-down-to=800',
    excerpt: 'Discover the latest interior design trends transforming Hyderabad homes.'
  },
  {
    title: 'Modular Kitchen Design Ideas',
    category: 'Kitchen Design',
    image: 'https://framerusercontent.com/images/HXD1LGGH4sdyu2AfKcILOBWjBM.jpeg?scale-down-to=800',
    excerpt: 'Transform your Hyderabad kitchen with innovative modular design concepts.'
  },
  {
    title: 'Affordable Interior Design Solutions',
    category: 'Budget Interiors',
    image: 'https://framerusercontent.com/images/xzFrK8RnnKFFvFnsttyDo4BcCE.jpeg?scale-down-to=800',
    excerpt: 'Create beautiful interiors on a budget with cost-effective strategies.'
  }
];

export default function Blog() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <p className="text-brand-brown text-sm font-medium mb-4">• Interior Design Blog</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-brand-brown leading-tight">
              Hyderabad Interior Design<br />
              Insights & Inspiration
            </h2>
          </div>
          <motion.a
            href="/blog"
            className="bg-brand-brown hover:bg-brand-brown-dark text-white px-6 py-3 rounded-xl transition-colors mt-6 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            View All Articles
          </motion.a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href="/blog"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="block"
            >
              <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">• {post.category}</p>
                  <h3 className="text-lg font-medium text-brand-brown mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </div>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}