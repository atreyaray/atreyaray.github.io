interface Social {
  platform: string;
  url: string;
  icon: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa?: string;
}

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Skill {
  category: string;
  items: string[];
}

interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  socials: Social[];
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  resumeUrl: string;
}

const profile: Profile = {
  name: 'Atreya Ray',
  title: 'Data Scientist & Software Engineer',
  email: 'atreyahray@gmail.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, California',
  about: `I'm a passionate data scientist and software engineer with expertise in machine learning, 
          data analysis, and full-stack development. With a background in Computer Science and Statistics, 
          I combine technical skills with analytical thinking to solve complex problems and extract meaningful insights from data.
          Throughout my career, I've worked on a variety of projects ranging from predictive modeling to 
          full-stack web applications, always focusing on creating elegant and efficient solutions.`,
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/atreyaray',
      icon: 'FiGithub',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/atreya-ray',
      icon: 'FiLinkedin',
    },
    {
      platform: 'Email',
      url: 'mailto:atreyahray@gmail.com',
      icon: 'FiMail',
    },
  ],
  education: [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2020 - 2022',
      description: 'Specialization in Machine Learning and Data Science',
      gpa: '3.9/4.0',
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Massachusetts Institute of Technology (MIT)',
      location: 'Cambridge, MA',
      period: '2016 - 2020',
      description: 'Minor in Mathematics',
      gpa: '3.8/4.0',
    },
  ],
  experience: [
    {
      position: 'Senior Data Scientist',
      company: 'Google',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading data science initiatives and machine learning model development.',
      achievements: [
        'Lead a team of 5 data scientists working on recommendation systems that improved user engagement by 28%',
        'Developed machine learning models for content personalization using TensorFlow and PyTorch',
        'Collaborated with product and engineering teams to implement data-driven features',
        'Mentored junior data scientists and oversaw the development of ML infrastructure',
      ],
    },
    {
      position: 'Software Engineer',
      company: 'Microsoft',
      location: 'Seattle, WA',
      period: '2020 - 2022',
      description: 'Worked on cloud infrastructure and backend services.',
      achievements: [
        'Designed and implemented cloud-based services using Azure and .NET Core',
        'Improved system performance by 40% through code optimization and architectural changes',
        'Built data pipelines for large-scale data processing and analytics',
        'Contributed to open-source projects and internal frameworks',
      ],
    },
    {
      position: 'Data Science Intern',
      company: 'Amazon',
      location: 'Seattle, WA',
      period: 'Summer 2019',
      description: 'Worked on inventory optimization and demand forecasting.',
      achievements: [
        'Developed algorithms for inventory optimization and demand forecasting',
        'Created visualization dashboards to monitor supply chain metrics',
        'Presented findings to senior management and technical teams',
      ],
    },
  ],
  skills: [
    {
      category: 'Programming',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'R'],
    },
    {
      category: 'Data Science',
      items: ['Machine Learning', 'Data Analysis', 'Statistical Modeling', 'NLP'],
    },
    {
      category: 'Web Development',
      items: ['React', 'Next.js', 'Node.js', 'HTML/CSS'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB'],
    },
  ],
  resumeUrl: '/resume.pdf',
};

export default profile;
