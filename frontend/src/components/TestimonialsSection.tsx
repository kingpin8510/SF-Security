import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Solutions Inc.',
    content: 'SafeMax Security has been instrumental in fortifying our digital infrastructure. Their expertise in VAPT is unparalleled.',
    date: '2 days ago',
    stars: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Jane Smith',
    company: 'Global Finance Corp',
    content: 'We have seen a significant reduction in security incidents since partnering with SafeMax. Their proactive approach sets them apart.',
    date: '1 week ago',
    stars: 5,
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Mike Johnson',
    company: 'E-commerce Giants',
    content: 'The team at SafeMax Security goes above and beyond. Their continuous monitoring has given us peace of mind in our online operations.',
    date: '2 weeks ago',
    stars: 5,
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    name: 'Dr. Lisa Chen',
    company: 'MedTech Innovations',
    content: 'SafeMax Security\'s expertise in healthcare compliance and data protection is exceptional.They helped us achieve HIPAA compliance while strengthening our overall security posture.Their dedicated team understands the unique challenges of medical data security.',
    date: '2 months ago',
    stars: 5,
    image: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    name: 'Marcus Thompson',
    company: 'Quantum Banking Solutions',
    content: 'After experiencing a security breach with our previous provider, switching to SafeMax was transformative. Their incident response team is available 24/7, and their proactive threat hunting capabilities have prevented numerous potential attacks. Truly enterprise-grade security.',
    date: '2 months ago',
    stars: 5,
    image: 'https://randomuser.me/api/portraits/men/9.jpg'
  },
  {
    name: 'Sofia Rodriguez',
    company: 'Global Data Systems',
    content: 'The depth of SafeMax\'s penetration testing revealed critical vulnerabilities that other security firms missed.Their detailed reporting and remediation roadmap helped us strengthen our infrastructure significantly.Their team\'s technical expertise is unmatched.',
    date: '3 months ago',
    stars: 5,
    image: 'https://randomuser.me/api/portraits/women/10.jpg'
  }
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-indigo-400"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialsSection: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < totalPages) {
      setPage([newPage, newDirection]);
    }
  };

  const currentTestimonials = testimonials.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <section id="testimonials" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
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
            Client <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by leading organizations to secure their digital assets
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: direction > 0 ? -100 : 100 }} // Changed these values
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? 100 : -100 }}   // Changed these values
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 
                                hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{testimonial.date}</span>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/20"
                      />
                      <div>
                        <div className="text-white font-medium group-hover:text-indigo-400 
                                    transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex flex-col items-center mt-12 gap-6">
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className={`p-3 rounded-full bg-gray-800 text-white hover:bg-indigo-500 
                         transition-colors duration-300 ${page === 0 ? 'opacity-50 cursor-not-allowed hover:bg-gray-800' : ''}`}
                disabled={page === 0}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className={`p-3 rounded-full bg-gray-800 text-white hover:bg-indigo-500 
                         transition-colors duration-300 ${page === totalPages - 1 ? 'opacity-50 cursor-not-allowed hover:bg-gray-800' : ''}`}
                disabled={page === totalPages - 1}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 
                           ${i === page ? 'bg-indigo-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;