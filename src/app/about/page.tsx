import Image from 'next/image';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export const metadata = {
  title: 'About Me | Atreya Ray',
  description: 'Learn more about Atreya Ray - background, skills, and experience',
};

export default function About() {
  // Replace with your actual skills
  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'R'] },
    { category: 'Data Science', items: ['Machine Learning', 'Data Analysis', 'Statistical Modeling', 'NLP'] },
    { category: 'Web Development', items: ['React', 'Next.js', 'Node.js', 'HTML/CSS'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB'] },
  ];

  return (
    <div className="bg-primary dark:bg-dark">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h1 className="heading-xl text-gray-900 dark:text-white mb-8">About Me</h1>
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Hello! I'm Atreya Ray, a passionate data scientist and engineer with expertise in machine learning, 
                  data analysis, and software development.
                </p>
                <p>
                  With a background in Computer Science and Statistics, I combine technical skills with 
                  analytical thinking to solve complex problems and extract meaningful insights from data.
                </p>
                <p>
                  Throughout my career, I've worked on a variety of projects ranging from predictive modeling 
                  to full-stack web applications, always focusing on creating elegant and efficient solutions.
                </p>
                <p>
                  When I'm not coding or exploring datasets, you can find me hiking, reading about the latest 
                  technology trends, or experimenting with new recipes in the kitchen.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/resume" className="btn">
                  View Resume <FiDownload className="ml-2" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="mb-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <Image 
                    src="/profile-placeholder.jpg" 
                    alt="Atreya Ray" 
                    width={400}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <Link 
                    href="https://github.com/atreyaray" 
                    target="_blank" 
                    className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <FiGithub className="h-6 w-6" aria-hidden="true" />
                  </Link>
                  <Link 
                    href="https://linkedin.com/in/atreya-ray" 
                    target="_blank" 
                    className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <FiLinkedin className="h-6 w-6" aria-hidden="true" />
                  </Link>
                  <Link 
                    href="mailto:atreyahray@gmail.com" 
                    className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <FiMail className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-secondary dark:bg-dark-secondary border-t border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-gray-900 dark:text-white mb-16">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="card p-6">
                <h3 className="heading-md text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-accent dark:bg-blue-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 sm:py-24">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-gray-900 dark:text-white mb-16">Education & Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Education</h3>
              <div className="space-y-8">
                <div className="card p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Master of Science in Computer Science
                  </h4>
                  <p className="text-accent dark:text-blue-400 mb-2">Stanford University, 2020-2022</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Specialized in Machine Learning and Data Science. Thesis on predictive modeling for 
                    healthcare applications.
                  </p>
                </div>
                <div className="card p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Bachelor of Engineering in Computer Science
                  </h4>
                  <p className="text-accent dark:text-blue-400 mb-2">MIT, 2016-2020</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Graduated with honors. Focused on algorithms, software engineering, and mathematical foundations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Experience</h3>
              <div className="space-y-8">
                <div className="card p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Senior Data Scientist
                  </h4>
                  <p className="text-accent dark:text-blue-400 mb-2">Google, 2022-Present</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developing machine learning models for recommendation systems and leading a team of data analysts.
                  </p>
                </div>
                <div className="card p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Software Engineer
                  </h4>
                  <p className="text-accent dark:text-blue-400 mb-2">Microsoft, 2020-2022</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Worked on cloud infrastructure and backend services, improving efficiency and scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 