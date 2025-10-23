import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { ImageWithFallback } from './img/ImageWithFallback';
import { Badge } from './subcomponents/badge';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern shopping experience with real-time inventory and seamless checkout.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjExMTk5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'Web Development',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Track workouts, nutrition, and progress with AI-powered insights.',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMTIzODE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Firebase', 'ML'],
      category: 'Mobile App',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Comprehensive analytics and management platform for businesses.',
      image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NjExMDkwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'Python', 'PostgreSQL'],
      category: 'Web Development',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Social Media Platform',
      description: 'Connect, share, and engage with a vibrant community.',
      image: 'https://images.unsplash.com/photo-1658552963426-1083cf9c495e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MTE4OTc3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'GraphQL', 'AWS'],
      category: 'Full Stack',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Healthcare Portal',
      description: 'Secure patient management and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Angular', 'Java', 'MySQL'],
      category: 'Enterprise',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Real Estate App',
      description: 'Find your dream home with advanced search and virtual tours.',
      image: 'https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG9mZmljZXxlbnwxfHx8fDE3NjExODY0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Express', 'Redis'],
      category: 'Mobile App',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full mb-6"
          >
            <Layers className="w-4 h-4" />
            <span>Portfolio</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl mb-6">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600">
            Discover the innovative solutions we've created for our clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-lg bg-white"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}
                  />

                  {/* Animated Border */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 border-4 border-white/30 rounded-2xl"
                      />
                    )}
                  </AnimatePresence>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-lg`}>
                      {project.category}
                    </Badge>
                  </motion.div>

                  {/* View Project Button */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.3, type: "spring" }}
                        className="absolute inset-0 flex items-center justify-center z-20"
                      >
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-gray-900 px-8 py-4 rounded-full flex items-center space-x-2 shadow-2xl"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Floating Particles on Hover */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <>
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ 
                              x: '50%',
                              y: '50%',
                              scale: 0,
                              opacity: 0 
                            }}
                            animate={{
                              x: `${50 + (Math.cos((i * Math.PI * 2) / 8) * 100)}%`,
                              y: `${50 + (Math.sin((i * Math.PI * 2) / 8) * 100)}%`,
                              scale: 1,
                              opacity: [0, 1, 0],
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                            className={`absolute w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Title with animation */}
                  <motion.h3
                    className="text-xl mb-2 group-hover:text-blue-600 transition-colors"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-4"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom Accent Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} origin-left`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
