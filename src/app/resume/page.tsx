import { FiDownload, FiFile } from 'react-icons/fi';
import Link from 'next/link';

export const metadata = {
  title: 'Resume | Atreya Ray',
  description: 'Professional resume of Atreya Ray - Experience, skills, and education',
};

export default function Resume() {
  return (
    <div className="bg-primary dark:bg-dark">
      {/* Header */}
      <section className="py-16">
        <div className="container-custom">
          <h1 className="heading-xl text-gray-900 dark:text-white mb-6">Resume</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
            Below is a summary of my professional experience, education, and skills. You can also download a PDF version of my resume.
          </p>
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="btn inline-flex items-center"
          >
            <FiDownload className="mr-2" /> Download Resume
          </Link>
        </div>
      </section>

      {/* Resume Content */}
      <section className="pb-24">
        <div className="container-custom max-w-5xl">
          <div className="bg-white dark:bg-dark-secondary shadow-md rounded-xl border border-gray-200 dark:border-gray-800 p-8 sm:p-10">
            {/* Contact Information */}
            <div className="mb-10 pb-10 border-b border-gray-200 dark:border-gray-700">
              <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Atreya Ray</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Data Scientist & Software Engineer</p>
                  <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                </div>
                <div className="md:text-right">
                  <p className="text-gray-600 dark:text-gray-300">atreyahray@gmail.com</p>
                  <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/atreya-ray</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Professional Experience</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Senior Data Scientist</h4>
                    <span className="text-accent dark:text-blue-400">2022 - Present</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">Google, San Francisco</p>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Lead a team of 5 data scientists working on recommendation systems that improved user engagement by 28%</li>
                    <li>Developed machine learning models for content personalization using TensorFlow and PyTorch</li>
                    <li>Collaborated with product and engineering teams to implement data-driven features</li>
                    <li>Mentored junior data scientists and oversaw the development of ML infrastructure</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineer</h4>
                    <span className="text-accent dark:text-blue-400">2020 - 2022</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">Microsoft, Seattle</p>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Designed and implemented cloud-based services using Azure and .NET Core</li>
                    <li>Improved system performance by 40% through code optimization and architectural changes</li>
                    <li>Built data pipelines for large-scale data processing and analytics</li>
                    <li>Contributed to open-source projects and internal frameworks</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Data Science Intern</h4>
                    <span className="text-accent dark:text-blue-400">Summer 2019</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">Amazon, Seattle</p>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Developed algorithms for inventory optimization and demand forecasting</li>
                    <li>Created visualization dashboards to monitor supply chain metrics</li>
                    <li>Presented findings to senior management and technical teams</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Education</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Master of Science in Computer Science</h4>
                    <span className="text-accent dark:text-blue-400">2020 - 2022</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">Stanford University</p>
                  <p className="text-gray-600 dark:text-gray-300">Specialization in Machine Learning and Data Science</p>
                  <p className="text-gray-600 dark:text-gray-300">GPA: 3.9/4.0</p>
                </div>
                
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Engineering in Computer Science</h4>
                    <span className="text-accent dark:text-blue-400">2016 - 2020</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">Massachusetts Institute of Technology (MIT)</p>
                  <p className="text-gray-600 dark:text-gray-300">Minor in Mathematics</p>
                  <p className="text-gray-600 dark:text-gray-300">GPA: 3.8/4.0</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Programming Languages</h4>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Python (Expert)</li>
                    <li>JavaScript/TypeScript (Advanced)</li>
                    <li>Java (Intermediate)</li>
                    <li>R (Advanced)</li>
                    <li>SQL (Advanced)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies & Frameworks</h4>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>TensorFlow, PyTorch, Scikit-learn</li>
                    <li>React, Next.js, Node.js</li>
                    <li>Docker, Kubernetes</li>
                    <li>AWS, Azure, GCP</li>
                    <li>MongoDB, PostgreSQL</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Soft Skills</h4>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Technical Leadership</li>
                    <li>Project Management</li>
                    <li>Data Communication & Visualization</li>
                    <li>Cross-functional Collaboration</li>
                    <li>Problem Solving & Critical Thinking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Publications & Certifications */}
            <div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Publications & Certifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Publications</h4>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>"Machine Learning Applications in Healthcare: A Comprehensive Review" - Journal of AI in Medicine, 2022</li>
                    <li>"Optimizing Recommendation Systems for E-commerce Platforms" - International Conference on Data Science, 2021</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Certifications</h4>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>AWS Certified Machine Learning Specialty</li>
                    <li>Google Professional Data Engineer</li>
                    <li>TensorFlow Developer Certificate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 