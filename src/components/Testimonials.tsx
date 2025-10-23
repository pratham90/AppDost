import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from './subcomponents/card';
import { Avatar, AvatarFallback } from './subcomponents/avatar';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Working with this team was an absolute pleasure. They delivered our mobile app ahead of schedule and it exceeded all our expectations. The attention to detail and commitment to quality is unmatched.',
      rating: 5,
      initials: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, EcomHub',
      content: 'Our e-commerce platform has seen a 200% increase in conversions since the redesign. The team understood our vision perfectly and brought it to life with incredible expertise.',
      rating: 5,
      initials: 'MC',
    },
    {
      name: 'Emma Williams',
      role: 'CTO, HealthCare Plus',
      content: 'The level of professionalism and technical knowledge is outstanding. They guided us through every step and delivered a secure, scalable solution that our users love.',
      rating: 5,
      initials: 'EW',
    },
    {
      name: 'David Martinez',
      role: 'Product Manager, FitLife',
      content: 'From concept to launch, the entire process was smooth and efficient. The team was responsive, creative, and truly invested in our success. Highly recommended!',
      rating: 5,
      initials: 'DM',
    },
    {
      name: 'Lisa Anderson',
      role: 'Director, RealEstate Pro',
      content: 'Our real estate platform is now the best in the market thanks to their innovative approach. They provided solutions we didn\'t even know we needed.',
      rating: 5,
      initials: 'LA',
    },
    {
      name: 'James Wilson',
      role: 'VP Operations, SocialConnect',
      content: 'The team delivered a robust social platform that handles millions of users seamlessly. Their expertise in scalability is second to none.',
      rating: 5,
      initials: 'JW',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden border-0 bg-gray-50">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="absolute top-4 right-4 opacity-10"
                >
                  <Quote className="w-16 h-16 text-blue-600" />
                </motion.div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 relative z-10">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl text-gray-400"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
