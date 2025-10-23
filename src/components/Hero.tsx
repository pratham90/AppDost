import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from './subcomponents/button';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950">
    
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.2),transparent_50%)]" />
      </div>

      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ opacity }}
            className="text-white space-y-8"
          >
           

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl leading-tight"
              >
                Transform Your
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Digital Vision
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                transition={{ duration: 0.8, delay: 1 }}
                className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              We craft exceptional web and mobile applications that drive growth. From concept to launch, we're your trusted partner in digital innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-xl shadow-blue-500/25 px-8 py-6 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white backdrop-blur-sm px-8 py-6"
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {['Expert Team', 'Fast Delivery', 'Quality Code'].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Clean Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ y }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main Card */}
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                {/* Glass Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Projects', value: '500+', color: 'from-blue-600 to-cyan-400' },
                        { label: 'Clients', value: '250+', color: 'from-purple-600 to-pink-400' },
                        { label: 'Success', value: '98%', color: 'from-orange-500 to-red-400' },
                        { label: 'Support', value: '24/7', color: 'from-green-600 to-emerald-400' },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg`}
                        >
                          <div className="text-white text-2xl">{stat.value}</div>
                          <div className="text-white/80 text-sm mt-1">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-4">
                      {[
                        { label: 'Design', value: 95, color: 'from-blue-400 to-purple-400' },
                        { label: 'Development', value: 88, color: 'from-purple-400 to-pink-400' },
                        { label: 'Deployment', value: 92, color: 'from-pink-400 to-orange-400' },
                      ].map((skill, i) => (
                        <div key={skill.label}>
                          <div className="flex justify-between text-sm text-white/80 mb-2">
                            <span>{skill.label}</span>
                            <span>{skill.value}%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.value}%` }}
                              transition={{ duration: 1.5, delay: 1.5 + i * 0.2 }}
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Accent Cards */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <div className="text-white text-3xl">🚀</div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [3, -3, 3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <div className="text-white text-3xl">⚡</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
