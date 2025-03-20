'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Simulating form submission
    try {
      // Here you would typically send the form data to your server or a form handling service
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary dark:bg-dark">
      {/* Header */}
      <section className="py-16 sm:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-gray-900 dark:text-white mb-6">Contact Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have a question or want to work together? I'd love to hear from you.
              Fill out the form below or reach out through one of my social channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-dark-secondary shadow-md rounded-xl border border-gray-200 dark:border-gray-800 p-8">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 mb-6">
                      <FiSend className="w-8 h-8" />
                    </div>
                    <h3 className="heading-md text-gray-900 dark:text-white mb-3">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-secondary text-gray-900 dark:text-white focus:border-accent dark:focus:border-blue-500 focus:ring-accent dark:focus:ring-blue-500 focus:ring-1 outline-none transition-colors"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-secondary text-gray-900 dark:text-white focus:border-accent dark:focus:border-blue-500 focus:ring-accent dark:focus:ring-blue-500 focus:ring-1 outline-none transition-colors"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-secondary text-gray-900 dark:text-white focus:border-accent dark:focus:border-blue-500 focus:ring-accent dark:focus:ring-blue-500 focus:ring-1 outline-none transition-colors"
                      >
                        <option value="">Please select a subject</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                        <option value="Speaking Engagement">Speaking Engagement</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-secondary text-gray-900 dark:text-white focus:border-accent dark:focus:border-blue-500 focus:ring-accent dark:focus:ring-blue-500 focus:ring-1 outline-none transition-colors"
                      ></textarea>
                    </div>
                    {submitError && (
                      <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md">
                        {submitError}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-full flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <FiSend className="mr-2" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-dark-secondary shadow-md rounded-xl border border-gray-200 dark:border-gray-800 p-8 h-full">
                <h3 className="heading-md text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMail className="h-6 w-6 text-accent dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                      <a 
                        href="mailto:atreyahray@gmail.com" 
                        className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-blue-400"
                      >
                        atreyahray@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiMapPin className="h-6 w-6 text-accent dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        San Francisco, California
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FiPhone className="h-6 w-6 text-accent dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="heading-md text-gray-900 dark:text-white mb-6">Connect</h3>
                <div className="flex space-x-5">
                  <Link
                    href="https://github.com/atreyaray"
                    target="_blank"
                    className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <span className="sr-only">GitHub</span>
                    <FiGithub className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/atreya-ray"
                    target="_blank"
                    className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FiLinkedin className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 