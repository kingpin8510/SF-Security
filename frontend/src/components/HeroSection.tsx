import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, AlertTriangle, Skull, UserCircle2, Shield, ArrowRight } from 'lucide-react'
import hero from '../assets/hero-img.png';

const NetworkBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Static Grid Lines */}
    <div className="absolute inset-0 grid grid-cols-12 gap-x-4">
      {[...Array(12)].map((_, i) => (
        <div
          key={`grid-${i}`}
          className="h-full w-[1px] bg-gradient-to-b from-gray-600/10 via-gray-600/5 to-transparent"
        />
      ))}
    </div>

    {/* Horizontal Lines */}
    <div className="absolute inset-0 grid grid-rows-12 gap-y-8">
      {[...Array(12)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/10 to-transparent"
        />
      ))}
    </div>

    {/* Diagonal Lines */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full border-[1px] border-gray-600/5 rotate-45" />
      <div className="absolute top-0 left-0 w-full h-full border-[1px] border-gray-600/5 -rotate-45" />
    </div>

    {/* Static Dots at Intersections */}
    <div className="absolute inset-0 grid grid-cols-6 gap-8">
      {[...Array(24)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="w-1 h-1 bg-gray-500/20 rounded-full self-center justify-self-center"
        />
      ))}
    </div>
  </div>
);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function HeroSection() {
  const floatingElements = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="relative bg-[#1A1A1A] text-white min-h-screen overflow-hidden">
      <NetworkBackground />
      <div className="container mx-auto px-4 pt-20 pb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Secure Your <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Digital Infrastructure
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              At SafeMax Security, we redefine digital protection with precision-driven, proactive cybersecurity solutions. Trusted by over 50 global clients worldwide. Expert penetration testing and vulnerability assessment services to protect
              your assets from emerging cyber threats.
            </p>
            <div className="flex flex-wrap gap-8 pt-8">
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(99,102,241,0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="relative overflow-hidden group bg-gradient-to-r from-indigo-600 to-purple-600 
      text-white px-8 py-4 rounded-lg font-medium
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600
      before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
      transition-all duration-300"
              >
                <span className="relative z-10">Start Security Audit</span>
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>


              <motion.div
                onClick={() => scrollToSection('services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(99,102,241,0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="relative overflow-hidden group border-2 border-indigo-500 text-indigo-400 
      px-8 py-4 rounded-lg font-medium
      hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-indigo-300 transition-colors">
                    View Services
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    whileHover={{
                      background: [
                        "radial-gradient(circle at center, rgba(99,102,241,0.1) 0%, transparent 100%)",
                        "radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 100%)"
                      ]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10">
              <img
                src={hero}
                alt="Security Analysis Illustration"
                className="w-full max-w-[700px] h-auto"
              />
            </div>

            {/* Subtle glow effect behind the illustration */}
            <div className="absolute inset-0 -z-10 blur-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <div className="text-center">
            <ShieldCheck className="w-12 h-12 mb-2 mx-auto text-[#6366F1]" />
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-gray-400">Clients Worldwide</p>
          </div>
          <div className="text-center">
            <Lock className="w-12 h-12 mb-2 mx-auto text-[#6366F1]" />
            <h3 className="text-2xl font-bold">$75M</h3>
            <p className="text-gray-400">Valuation by 2023</p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 mb-2 mx-auto text-[#6366F1]" />
            <h3 className="text-2xl font-bold">22</h3>
            <p className="text-gray-400">International Partnerships</p>
          </div>
        </motion.div>
      </div>
    </section>

  );
}