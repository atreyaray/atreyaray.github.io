import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const metadata = {
  title: 'Projects | Atreya Ray',
  description: 'Explore projects by Atreya Ray - From machine learning to web development',
};

// Sample projects data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Machine Learning for Healthcare',
    description: 'Developed predictive models to identify patients at risk for certain conditions, improving early intervention rates by 35%.',
    image: '/project-placeholder.jpg',
    tags: ['Python', 'TensorFlow', 'Scikit-Learn', 'Healthcare'],
    links: {
      github: 'https://github.com/atreyaray/healthcare-ml',
      live: 'https://healthcare-ml.example.com',
    },
  },
  {
    id: 2,
    title: 'Financial Analysis Dashboard',
    description: 'Built an interactive dashboard for financial data visualization, enabling real-time monitoring of market trends and portfolio performance.',
    image: '/project-placeholder.jpg',
    tags: ['React', 'D3.js', 'Python', 'Flask', 'Finance'],
    links: {
      github: 'https://github.com/atreyaray/finance-dashboard',
      live: 'https://finance-dashboard.example.com',
    },
  },
  {
    id: 3,
    title: 'Natural Language Processing Toolkit',
    description: 'Created a comprehensive NLP toolkit for sentiment analysis, text classification, and named entity recognition with state-of-the-art accuracy.',
    image: '/project-placeholder.jpg',
    tags: ['Python', 'NLP', 'BERT', 'Transformers'],
    links: {
      github: 'https://github.com/atreyaray/nlp-toolkit',
      live: 'https://nlp-toolkit.example.com',
    },
  },
  {
    id: 4,
    title: 'E-commerce Recommendation Engine',
    description: 'Developed a recommendation engine for an e-commerce platform, increasing click-through rates by 28% and conversion by 15%.',
    image: '/project-placeholder.jpg',
    tags: ['Python', 'Recommendation Systems', 'AWS', 'Redis'],
    links: {
      github: 'https://github.com/atreyaray/recommender',
      live: 'https://recommender.example.com',
    },
  },
  {
    id: 5,
    title: 'Smart City Data Platform',
    description: 'Built a data platform for smart city initiatives, integrating IoT data streams for traffic management, energy usage, and public safety.',
    image: '/project-placeholder.jpg',
    tags: ['IoT', 'Big Data', 'Kafka', 'Python', 'React'],
    links: {
      github: 'https://github.com/atreyaray/smart-city',
      live: 'https://smart-city.example.com',
    },
  },
  {
    id: 6,
    title: 'Personal Finance Manager',
    description: 'Created a web application for personal finance management with budget tracking, expense categorization, and financial goal setting.',
    image: '/project-placeholder.jpg',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Authentication'],
    links: {
      github: 'https://github.com/atreyaray/finance-manager',
      live: 'https://finance-manager.example.com',
    },
  },
];

export default function Projects() {
  return (
    <div className="bg-primary dark:bg-dark">
      {/* Header */}
      <section className="py-16 sm:py-24">
        <div className="container-custom">
          <h1 className="heading-xl text-gray-900 dark:text-white mb-6">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            A showcase of my technical projects spanning machine learning, data science, and web development.
            Each project represents a unique challenge and solution.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-md text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-block bg-accent/10 dark:bg-blue-500/10 text-accent dark:text-blue-400 rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.links.github && (
                      <Link 
                        href={project.links.github}
                        target="_blank"
                        className="flex items-center text-accent dark:text-blue-400 hover:underline"
                      >
                        <FiGithub className="mr-1.5" />
                        <span>GitHub</span>
                      </Link>
                    )}
                    {project.links.live && (
                      <Link 
                        href={project.links.live}
                        target="_blank"
                        className="flex items-center text-accent dark:text-blue-400 hover:underline"
                      >
                        <FiExternalLink className="mr-1.5" />
                        <span>Live Demo</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary dark:bg-dark-secondary border-t border-b border-gray-200 dark:border-gray-800 text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">Interested in Collaborating?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always looking for new projects and collaborations. If you have an idea or a project
            that you'd like to discuss, feel free to reach out!
          </p>
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 