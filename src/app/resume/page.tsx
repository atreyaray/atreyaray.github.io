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
                  <p className="text-gray-600 dark:text-gray-300">Data Scientist</p>
                  <p className="text-gray-600 dark:text-gray-300">Espoo, Finland</p>
                </div>
                <div className="md:text-right">
                  <p className="text-gray-600 dark:text-gray-300">atreyaray@gmail.com</p>
                  <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/atreyaray/</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Professional Experience</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Data Scientist - Finance Analytics</h4>
                    <span className="text-accent dark:text-blue-400">Jan 2025 - Present</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">KONE Oyj, Espoo</p>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Developing and deploying large language models for various applications</li>
                    <li>Implementing and evaluating model architectures for improved performance</li>
                    <li>Collaborating with research teams to implement novel ML techniques</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Data Scientist Trainee - Finance Analytics</h4>
                    <span className="text-accent dark:text-blue-400">May 2024 - Dec 2024</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">KONE Oyj, Espoo</p>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>💰 Financial Planning & Analysis Team</li>
                    <li>📈 Developed forecasting tools modelling financial data to predict KPIs contributing
                    to sales for the KONE services business (&gt;$4bn) .</li>
                    <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                        <li>Piloted integration of prediction models reducing error in human generated
                        financial planning forecasts by ~62%.</li>
                        <li>Performed ETL on large financial datasets (2mn+ rows) spanning 4 continents
                        requiring parallelisation and distributed workflows with Spark.</li>
                    </ul>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Data Scientist Trainee</h4>
                    <span className="text-accent dark:text-blue-400">Jan 2024 - Apr 2024</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">Nokia Technologies, Espoo</p>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>📄 Patent Analytics at Nokia Technologies</li>
                    <li>📈 Data Science:</li>
                    <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                        <li>Forecasted future patent submissions according to Technology
                        Area using time series and other deep learning models.</li>
                    </ul>
                    <li>📊 Data Analysis:</li>
                    <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                        <li>Analysed patent submission data, to create interactive data dashboards with
                        Microsoft Power BI</li>
                        <li>Produced essential KPI-driven analytics to support and improve upper-
                        management decision-making processes</li>
                    </ul>
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
                    <span className="text-accent dark:text-blue-400">2019 - 2021</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">Stanford University</p>
                  <p className="text-gray-600 dark:text-gray-300">Specialization in Artificial Intelligence</p>
                  <p className="text-gray-600 dark:text-gray-300">GPA: 4.0/4.0</p>
                </div>
                
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h4>
                    <span className="text-accent dark:text-blue-400">2015 - 2019</span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">Stanford University</p>
                  <p className="text-gray-600 dark:text-gray-300">Minor in Mathematics</p>
                  <p className="text-gray-600 dark:text-gray-300">GPA: 3.95/4.0</p>
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
                    <li>C++ (Advanced)</li>
                    <li>JavaScript/TypeScript (Advanced)</li>
                    <li>SQL (Advanced)</li>
                    <li>Java (Intermediate)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies & Frameworks</h4>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>PyTorch, TensorFlow, JAX</li>
                    <li>React, Next.js, Node.js</li>
                    <li>Docker, Kubernetes</li>
                    <li>AWS, GCP</li>
                    <li>Git, CI/CD</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Areas of Expertise</h4>
                  <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                    <li>Software Engineering</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects & Publications */}
            <div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-6">Selected Projects</h3>
              <div className="space-y-4">
                <ul className="list-disc list-outside pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Developed a real-time object detection system using deep learning for autonomous vehicles</li>
                  <li>Built a natural language processing pipeline for sentiment analysis and text classification</li>
                  <li>Created a distributed machine learning system for large-scale data processing</li>
                  <li>Implemented a recommendation system using collaborative filtering and deep learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 