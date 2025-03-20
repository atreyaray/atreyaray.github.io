import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link 
            href="https://github.com/atreyaray" 
            target="_blank" 
            className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-blue-400"
          >
            <span className="sr-only">GitHub</span>
            <FiGithub className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link 
            href="https://linkedin.com/in/atreya-ray" 
            target="_blank" 
            className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-blue-400"
          >
            <span className="sr-only">LinkedIn</span>
            <FiLinkedin className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link 
            href="mailto:atreyahray@gmail.com" 
            className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-blue-400"
          >
            <span className="sr-only">Email</span>
            <FiMail className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Atreya Ray. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 