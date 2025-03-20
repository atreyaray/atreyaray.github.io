import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiPlay, FiBook, FiAward } from 'react-icons/fi';

export const metadata = {
  title: 'Courses & Certifications | Atreya Ray',
  description: 'Educational courses and certifications completed by Atreya Ray',
};

// Sample courses data - replace with actual courses
const courses = [
  {
    id: 1,
    title: 'Deep Learning Specialization',
    provider: 'Coursera - deeplearning.ai',
    description: 'Comprehensive five-course specialization covering neural networks, hyperparameter tuning, structuring ML projects, CNNs, and sequence models.',
    image: '/course-placeholder.jpg',
    category: 'Machine Learning',
    completed: 'December 2021',
    certificateUrl: 'https://coursera.org/verify/specialization/ABCD1234',
  },
  {
    id: 2,
    title: 'AWS Certified Machine Learning - Specialty',
    provider: 'Amazon Web Services',
    description: 'Professional certification validating expertise in using ML services and implementing ML solutions on the AWS platform.',
    image: '/course-placeholder.jpg',
    category: 'Cloud & DevOps',
    completed: 'March 2022',
    certificateUrl: 'https://aws.amazon.com/verification',
  },
  {
    id: 3,
    title: 'Full Stack Web Development with React',
    provider: 'Coursera - Hong Kong University',
    description: 'Three-course specialization covering front-end frameworks, React, React Native, and server-side development with Node.js, Express and MongoDB.',
    image: '/course-placeholder.jpg',
    category: 'Web Development',
    completed: 'August 2020',
    certificateUrl: 'https://coursera.org/verify/specialization/WXYZ9876',
  },
  {
    id: 4,
    title: 'Advanced Data Science with IBM',
    provider: 'Coursera - IBM',
    description: 'Four-course specialization covering scalable data science, advanced machine learning, signal processing, and applied AI with DeepLearning.',
    image: '/course-placeholder.jpg',
    category: 'Data Science',
    completed: 'May 2021',
    certificateUrl: 'https://coursera.org/verify/specialization/EFGH5678',
  },
  {
    id: 5,
    title: 'TensorFlow Developer Certificate',
    provider: 'Google',
    description: 'Professional certification demonstrating proficiency in using TensorFlow to implement machine learning models.',
    image: '/course-placeholder.jpg',
    category: 'Machine Learning',
    completed: 'January 2022',
    certificateUrl: 'https://tensorflow.org/certificate',
  },
  {
    id: 6,
    title: 'Modern React with Redux',
    provider: 'Udemy',
    description: 'Comprehensive course covering React fundamentals, hooks, state management with Redux, and building complex applications.',
    image: '/course-placeholder.jpg',
    category: 'Web Development',
    completed: 'October 2021',
    certificateUrl: 'https://udemy.com/certificate/UC-1234567/',
  },
];

// Group courses by category
const coursesByCategory = courses.reduce((acc, course) => {
  if (!acc[course.category]) {
    acc[course.category] = [];
  }
  acc[course.category].push(course);
  return acc;
}, {} as Record<string, typeof courses>);

export default function Courses() {
  return (
    <div className="bg-primary dark:bg-dark">
      {/* Header */}
      <section className="py-16 sm:py-24">
        <div className="container-custom">
          <h1 className="heading-xl text-gray-900 dark:text-white mb-6">Courses & Certifications</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            A collection of courses, certifications, and educational programs I've completed to continually enhance my skills and knowledge.
          </p>
        </div>
      </section>

      {/* Courses by Category */}
      {Object.entries(coursesByCategory).map(([category, categoryCourses]) => (
        <section key={category} className="pb-20">
          <div className="container-custom">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-10 pb-4 border-b border-gray-200 dark:border-gray-700">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categoryCourses.map((course) => (
                <div key={course.id} className="card flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={course.image} 
                      alt={course.title}
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-sm font-medium">Completed: {course.completed}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h3 className="heading-md text-gray-900 dark:text-white mb-2">{course.title}</h3>
                      <p className="text-accent dark:text-blue-400 mb-4">{course.provider}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{course.description}</p>
                    </div>
                    <div className="mt-auto">
                      {course.certificateUrl && (
                        <Link 
                          href={course.certificateUrl} 
                          target="_blank"
                          className="inline-flex items-center text-accent dark:text-blue-400 hover:underline"
                        >
                          <FiAward className="mr-2" />
                          View Certificate
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 bg-secondary dark:bg-dark-secondary border-t border-gray-200 dark:border-gray-800 text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">Always Learning</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I believe in continuous learning and staying updated with the latest technologies and trends.
            Check back regularly to see new additions to my educational journey.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/resume" className="btn">
              View My Resume
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 