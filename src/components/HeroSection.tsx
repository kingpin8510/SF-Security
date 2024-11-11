import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-[#1A1A1A] text-white min-h-screen overflow-hidden">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-[#6366F1] text-xl font-bold">
            SafeMax
          </Link>
          <ul className="flex space-x-8 text-sm font-medium">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:text-[#6366F1] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
} 