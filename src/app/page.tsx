import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiUser, FiFolder, FiFileText, FiBook, FiMail } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="bg-primary dark:bg-dark">
      {/* Hero Section */}
      <section className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
                Hi, I'm <span className="text-accent dark:text-blue-400">Atreya Ray</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                A passionate engineer and data scientist with a focus on creating impactful solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn">
                  View Projects <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-full overflow-hidden border-4 border-accent/20 dark:border-blue-500/20 shadow-xl">
                {/* Replace with your profile image */}
                <Image 
                  src="/profile-placeholder.jpg" 
                  alt="Atreya Ray" 
                  fill 
                  style={{objectFit: 'cover'}}
                  priority
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-secondary dark:bg-dark-secondary border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-gray-900 dark:text-white mb-16">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/about" className="card p-8 text-center hover:border-accent dark:hover:border-blue-500 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 dark:bg-blue-500/10 rounded-full mb-6">
                <FiUser className="w-8 h-8 text-accent dark:text-blue-400" />
              </div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-3">About Me</h3>
              <p className="text-gray-600 dark:text-gray-300">Learn about my background, skills, and experience.</p>
            </Link>
            
            <Link href="/projects" className="card p-8 text-center hover:border-accent dark:hover:border-blue-500 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 dark:bg-blue-500/10 rounded-full mb-6">
                <FiFolder className="w-8 h-8 text-accent dark:text-blue-400" />
              </div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-3">Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">Browse through my recent projects and case studies.</p>
            </Link>
            
            <Link href="/resume" className="card p-8 text-center hover:border-accent dark:hover:border-blue-500 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 dark:bg-blue-500/10 rounded-full mb-6">
                <FiFileText className="w-8 h-8 text-accent dark:text-blue-400" />
              </div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-3">Resume</h3>
              <p className="text-gray-600 dark:text-gray-300">View my professional experience and education.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary dark:bg-dark text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            I'm always interested in new challenges and opportunities.
          </p>
          <Link href="/contact" className="btn">
            Get in Touch <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
} 