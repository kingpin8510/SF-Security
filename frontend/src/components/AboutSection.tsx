import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Shield, Target, Trophy, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);  // Reduced from 10 to 2
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);
  const springConfig = { damping: 30, stiffness: 100 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  return (
    <section id="about" className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            About SafeMax Security
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pioneering the future of cybersecurity since 2020
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseMove={handleMouseMove}
          style={{
            perspective: 1000
          }}
        >
          <motion.div
            style={{
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Our Mission",
                description: "To provide comprehensive and tailored VAPT services that secure digital assets worldwide.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Target,
                title: "Our Vision",
                description: "Leading the cybersecurity landscape with innovation and excellence.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: Trophy,
                title: "Our Growth",
                description: "$75M valuation in 2023, aiming for $200M+ in 2024.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Users,
                title: "Our Impact",
                description: "Trusted by 50+ clients, including 22 international organizations.",
                color: "from-pink-500 to-red-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}  // Reduced scale and removed rotation
                className="bg-[#242424] p-8 rounded-xl border border-gray-800 
    shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
    hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)]
    backdrop-blur-sm
    transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg w-fit mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;