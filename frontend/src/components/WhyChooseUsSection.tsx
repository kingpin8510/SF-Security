import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, BarChart, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300" />,
    title: 'Industry-Leading Expertise',
    description: 'Our team of certified security experts brings decades of combined experience in VAPT and cybersecurity.',
    stats: '15+ Years Experience'
  },
  {
    icon: <Target className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300" />,
    title: 'Customized Solutions',
    description: 'Tailored security strategies designed specifically for your organization\'s unique requirements.',
    stats: '100+ Custom Solutions'
  },
  {
    icon: <Cpu className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300" />,
    title: 'Proactive Threat Hunting',
    description: 'Advanced threat detection and elimination before they become critical security incidents.',
    stats: '1000+ Threats Detected'
  },
  {
    icon: <BarChart className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300" />,
    title: 'Continuous Assessment',
    description: 'Real-time monitoring and regular security assessments to maintain optimal protection.',
    stats: '24/7 Monitoring'
  },
  {
    icon: <Users className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300" />,
    title: 'Proven Track Record',
    description: 'Successfully protecting businesses across various industries with measurable results.',
    stats: '98% Client Satisfaction'
  },
  {
    icon: <Zap className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300" />,
    title: 'Cutting-Edge Tools',
    description: 'Leveraging the latest cybersecurity technologies and methodologies for superior protection.',
    stats: '50+ Tools Integrated'
  },
];

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
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
          <h2 className="text-5xl font-bold mb-6 text-white">
            Why Choose <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">SafeMax Security</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just secure systems; we architect digital fortresses that stand resilient against evolving cyber threats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 
                            hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {reason.icon}
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 
                                 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-indigo-400 text-sm mt-1">
                      {reason.stats}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-base">
                  {reason.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 bg-gray-800 h-1 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg
              transition-all duration-300 transform hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
          >
            Schedule a Security Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;