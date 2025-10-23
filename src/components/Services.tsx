import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Smartphone, Globe, Palette, Code2, Cloud, Shield, ArrowUpRight } from 'lucide-react';
import { Card } from './subcomponents/card';

export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: 'from-blue-500 to-cyan-500',
      features: ['iOS & Android', 'React Native', 'Flutter'],
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      color: 'from-purple-500 to-pink-500',
      features: ['React', 'Next.js', 'Vue.js'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and enhance brand identity.',
      color: 'from-orange-500 to-red-500',
      features: ['Figma', 'User Research', 'Prototyping'],
    },
    {
      icon: Code2,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your unique business requirements.',
      color: 'from-green-500 to-emerald-500',
      features: ['Scalable', 'Secure', 'Maintainable'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for your applications.',
      color: 'from-indigo-500 to-blue-500',
      features: ['AWS', 'Azure', 'Google Cloud'],
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Ongoing support, security updates, and maintenance to keep your apps running smoothly.',
      color: 'from-yellow-500 to-orange-500',
      features: ['24/7 Support', 'Updates', 'Monitoring'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl mt-6 mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Need something specific? We offer custom solutions tailored to your needs.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 hover:text-blue-700 underline underline-offset-4 transition-colors inline-flex items-center gap-2 group"
          >
            Discuss Your Project 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <Card className="p-8 h-full border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
        {/* Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          initial={false}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
        />

        {/* Animated Border */}
        <motion.div
          className={`absolute inset-0 rounded-lg`}
          initial={false}
          animate={{
            background: isHovered
              ? `linear-gradient(135deg, transparent 0%, transparent 40%, ${service.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : service.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : service.color.includes('orange') ? 'rgba(249, 115, 22, 0.3)' : service.color.includes('green') ? 'rgba(34, 197, 94, 0.3)' : service.color.includes('indigo') ? 'rgba(99, 102, 241, 0.3)' : 'rgba(234, 179, 8, 0.3)'} 100%)`
              : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div
            animate={{
              rotateY: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ 
              rotateY: { duration: 0.6, ease: "easeOut" },
              scale: { duration: 0.3 }
            }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg relative`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Icon className="w-8 h-8 text-white relative z-10" />
            
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
            />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-xl mb-3 transition-colors duration-300"
            animate={{
              color: isHovered ? '#2563eb' : '#000000',
            }}
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.map((feature: string, i: number) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.1 + 0.3 }}
                className={`text-xs px-3 py-1.5 bg-gradient-to-r ${service.color} text-white rounded-full shadow-sm`}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
              className={`h-full bg-gradient-to-r ${service.color} rounded-full relative`}
            >
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </motion.div>
          </div>

          {/* Learn More Link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex items-center text-blue-600 gap-2"
          >
            <span className="text-sm">Learn More</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Floating Particles */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                initial={{ 
                  x: Math.random() * 100 + '%',
                  y: '100%',
                  opacity: 0 
                }}
                animate={{
                  y: '-100%',
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </>
        )}
      </Card>
    </motion.div>
  );
}
