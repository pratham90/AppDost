import { motion } from 'motion/react';
import { CheckCircle2, Users, Zap, Award, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './img/ImageWithFallback';

export function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in cutting-edge technologies.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile methodology ensures rapid development without compromising quality.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks at every stage of development.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address your concerns promptly.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Build for growth with infrastructure that scales with your business.',
    },
    {
      icon: CheckCircle2,
      title: 'Proven Track Record',
      description: 'Successfully delivered 500+ projects with 98% client satisfaction.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl mt-4 mb-6">
              We're More Than Just Developers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with a team that's committed to your success. We combine technical excellence with business understanding to deliver solutions that truly make a difference.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTE0Mjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-gray-700">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-700">Happy Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-1/2 -translate-y-1/2 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="text-4xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-700">Support Available</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
