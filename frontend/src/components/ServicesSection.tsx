import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Lock, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-12 h-12 mb-4 text-[#6366F1]" />,
    title: 'Vulnerability Assessment',
    description: 'Comprehensive scanning and analysis to identify security weaknesses in your systems.',
    expandedDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20'
  },
  {
    icon: <Search className="w-12 h-12 mb-4 text-[#6366F1]" />,
    title: 'Penetration Testing',
    description: 'Simulated cyber attacks to evaluate the security of your IT infrastructure.',
    expandedDescription: 'Our expert team conducts thorough penetration testing using real-world attack scenarios. We identify vulnerabilities, test your defense mechanisms, and provide comprehensive reports with remediation strategies.',
    gradient: 'from-purple-500/20 via-pink-500/20 to-indigo-500/20'
  },
  {
    icon: <Lock className="w-12 h-12 mb-4 text-[#6366F1]" />,
    title: 'Security Consultation',
    description: 'Expert advice on implementing robust security measures and best practices.',
    expandedDescription: 'Get personalized security consulting from industry experts. We help develop comprehensive security policies, implement best practices, and provide training to strengthen your organization\'s security posture.',
    gradient: 'from-pink-500/20 via-indigo-500/20 to-purple-500/20'
  },
  {
    icon: <RefreshCw className="w-12 h-12 mb-4 text-[#6366F1]" />,
    title: 'Continuous Monitoring',
    description: '24/7 surveillance of your systems to detect and respond to potential threats in real-time.',
    expandedDescription: 'Round-the-clock monitoring of your systems with real-time threat detection and automated response protocols. Our SOC team provides immediate incident response and continuous security assessment.',
    gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20'
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services">
      <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-gradient-to-b from-gray-500 to-transparent" />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your digital assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group z-10 hover:z-50"
              >
                <motion.div
                  whileHover={{
                    scale: 1.4,
                    y: -30,
                    transition: { duration: 0.2 }
                  }}
                  className="relative bg-gray-900 p-6 rounded-xl border border-gray-800 
                           hover:border-indigo-500 transition-all duration-300
                           group-hover:bg-gray-900"
                >
                  {/* Content Container */}
                  <div className="relative z-10">
                    <div className="group-hover:scale-90 transform transition-all duration-300">
                      {service.icon}
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 
                                 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description Container with Transition */}
                    <div className="relative overflow-hidden transition-all duration-300">
                      {/* Initial Description */}
                      <p className="text-gray-400 transform transition-all duration-300 
                                group-hover:opacity-0 group-hover:scale-95">
                        {service.description}
                      </p>

                      {/* Expanded Description */}
                      <div className="absolute top-0 left-0 w-full transform transition-all duration-300 
                                  opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.expandedDescription}
                        </p>

                        {/* Additional Details */}
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <ul className="text-xs text-gray-400 space-y-2">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                              Advanced Detection Systems
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                              Real-time Monitoring
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                              Expert Analysis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;