import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-16 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-[1px] bg-gradient-to-b from-gray-500 to-transparent" />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-indigo-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                SafeMax Security
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Securing your digital assets with cutting-edge VAPT services and enterprise-grade cybersecurity solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', id: 'about' },
                { name: 'Our Services', id: 'services' },
                { name: 'Why Choose Us', id: 'why-choose-us' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Contact Us', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-indigo-400 transition duration-300 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security-policy" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                  Security Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              {[
                { Icon: AiOutlineFacebook, link: '#' },
                { Icon: AiOutlineTwitter, link: '#' },
                { Icon: AiOutlineLinkedin, link: '#' },
                { Icon: AiOutlineInstagram, link: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-indigo-400 hover:bg-gray-700 
                           transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} SafeMax Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;