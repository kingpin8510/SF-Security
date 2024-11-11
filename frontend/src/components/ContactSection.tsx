import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitAppointment } from "../services/api";
import { Shield, Clock, Mail, User, MessageSquare } from 'lucide-react';


const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    comments: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setSubmitMessage(null);

    try {
      await submitAppointment(formData);
      setSubmitStatus("success");
      setSubmitMessage(
        "Appointment scheduled successfully! We'll contact you soon to confirm."
      );
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        comments: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Failed to schedule appointment. Please try again later."
      );
    }
  };

return (
  <section id="contact" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
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
          Schedule a <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Security Assessment</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Take the first step towards fortifying your digital infrastructure
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          className="backdrop-blur-sm bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative group">
              <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 
                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                           transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 
                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                           transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="relative group">
              <label htmlFor="date" className="block text-gray-400 text-sm mb-2">
                Preferred Date
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 
                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                           transition-all duration-300"
                />
              </div>
            </div>

            {/* Time Input */}
            <div className="relative group">
              <label htmlFor="time" className="block text-gray-400 text-sm mb-2">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400" />
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 
                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                           transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Comments Textarea */}
          <div className="mt-6 relative group">
            <label htmlFor="comments" className="block text-gray-400 text-sm mb-2">
              Additional Information
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400" />
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-800/50 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 
                         focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                         transition-all duration-300"
                placeholder="Tell us about your security needs..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={submitStatus === "submitting"}
            className="mt-8 w-full bg-indigo-500 text-white font-bold py-4 px-6 rounded-lg
                     hover:bg-indigo-600 transition-all duration-300 disabled:opacity-50
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {submitStatus === "submitting" ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                Submitting...
              </div>
            ) : (
              "Schedule Security Assessment"
            )}
          </motion.button>
        </motion.form>

        {/* Status Message */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-lg text-center ${
              submitStatus === "success"
                ? "bg-green-900/50 text-green-400 border border-green-800"
                : "bg-red-900/50 text-red-400 border border-red-800"
            }`}
          >
            <p className="flex items-center justify-center">
              <Shield className={`w-5 h-5 mr-2 ${
                submitStatus === "success" ? "text-green-400" : "text-red-400"
              }`} />
              {submitMessage}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  </section>
);
};

export default ContactSection;