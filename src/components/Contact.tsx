import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building, CheckCircle2 } from 'lucide-react';
import { Button } from './subcomponents/button';
import { Input } from './subcomponents/input';
import { Textarea } from './subcomponents/textarea';
import { Card } from './subcomponents/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@appdostpro.com',
      link: 'mailto:hello@appdostpro.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      link: 'https://maps.google.com',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const benefits = [
    'Free consultation',
    'Quick response time',
    'Expert guidance',
    'Transparent pricing',
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-6"
          >
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 uppercase tracking-wider text-sm">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Let's Build Something
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-400">
            Ready to transform your vision into reality? Drop us a message and let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Left Sidebar - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="block group"
                >
                  <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                        <div className="text-white group-hover:text-blue-400 transition-colors">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              );
            })}

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border-white/10">
                <h3 className="text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                      />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10">
                <h3 className="text-white mb-4">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { days: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                    { days: 'Sunday', hours: 'Closed' },
                  ].map((schedule, i) => (
                    <motion.div
                      key={schedule.days}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex justify-between text-gray-400 border-b border-white/5 pb-2 last:border-0"
                    >
                      <span>{schedule.days}</span>
                      <span className="text-white">{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <Card className="p-8 md:p-10 bg-white/5 backdrop-blur-xl border-white/10 relative overflow-hidden">
              {/* Animated Background */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                }}
              />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-white mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-400" />
                      Your Name *
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10 transition-all ${
                          focusedField === 'name' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="email" className="block text-white mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-400" />
                      Email Address *
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10 transition-all ${
                          focusedField === 'email' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="phone" className="block text-white mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-400" />
                      Phone Number
                    </label>
                    <div className="relative">
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10 transition-all ${
                          focusedField === 'phone' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === 'phone' ? 1 : 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                      />
                    </div>
                  </motion.div>

                  {/* Company Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="company" className="block text-white mb-2 flex items-center gap-2">
                      <Building className="w-4 h-4 text-blue-400" />
                      Company Name
                    </label>
                    <div className="relative">
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10 transition-all ${
                          focusedField === 'company' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === 'company' ? 1 : 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-white mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    Your Message *
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us about your project, goals, and how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10 resize-none transition-all ${
                        focusedField === 'message' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''
                      }`}
                    />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl shadow-blue-500/30 py-6 text-lg group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-center text-gray-400 text-sm"
                >
                  We'll get back to you within 24 hours
                </motion.p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
