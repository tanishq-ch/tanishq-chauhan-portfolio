export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export const skillsData = {
  'Programming Languages': [
    { name: 'Python', level: 95 },
    { name: 'Java', level: 85 },
    { name: 'C++', level: 80 }
  ],
  'Data Science': [
    { name: 'Pandas', level: 92 },
    { name: 'NumPy', level: 90 },
    { name: 'Matplotlib', level: 88 },
    { name: 'Seaborn', level: 85 }
  ],
  'Machine Learning': [
    { name: 'Scikit-learn', level: 90 },
    { name: 'TensorFlow', level: 85 },
    { name: 'PyTorch', level: 82 }
  ],
  'Deep Learning': [
    { name: 'CNN', level: 88 },
    { name: 'LSTM', level: 85 },
    { name: 'Transformers', level: 80 }
  ],
  'Web Development': [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 }
  ],
  'Tools & Technologies': [
    { name: 'Git', level: 90 },
    { name: 'GitHub', level: 92 },
    { name: 'Docker', level: 75 },
    { name: 'Jupyter', level: 95 },
    { name: 'VS Code', level: 95 }
  ]
};

export const projects = [
  {
    title: 'AI Powered Smart Property Investment Advisor',
    description: 'Machine learning based system that analyzes property trends and investment opportunities in NCR region.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask', 'React'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
  },
  {
    title: 'Continuous Indian Sign Language Recognition using Transformer',
    description: 'Deep learning model that recognizes continuous Indian sign language gestures from video sequences.',
    technologies: ['PyTorch', 'OpenCV', 'Transformers', 'CNN', 'LSTM'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=400&fit=crop'
  },
  {
    title: 'Heart Disease Prediction System',
    description: 'Machine learning model to predict heart disease risk using patient health parameters.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Streamlit'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop'
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description: 'Real-time sentiment analysis platform for social media data with interactive visualizations.',
    technologies: ['Python', 'NLTK', 'React', 'D3.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  }
];

export const research = [
  {
    title: 'Continuous Sign Language Recognition using Transformer Based Deep Neural Network',
    abstract: 'Focus on real-time sign language interpretation using sequence-to-sequence deep learning models.',
    technologies: ['PyTorch', 'Transformers', 'Computer Vision'],
    status: 'Published',
    venue: 'IEEE Conference on Computer Vision 2024'
  },
  {
    title: 'Comparative Analysis of Deep Learning Models for Medical Image Segmentation',
    abstract: 'Comprehensive study comparing U-Net, DeepLab, and attention-based architectures for medical imaging.',
    technologies: ['TensorFlow', 'Medical Imaging', 'CNN'],
    status: 'Under Review',
    venue: 'Nature Scientific Reports'
  }
];

export const experience = [
  {
    role: 'AI Intern',
    company: 'Anantam Advisors Pvt Ltd',
    duration: 'May 2024 - July 2024',
    description: 'Worked on developing an AI-powered property investment advisory system for the NCR region.',
    achievements: ['Reduced prediction error by 15%', 'Processed 100K+ property records', 'Built real-time analytics dashboard']
  },
  {
    role: 'Research Assistant',
    company: 'University Research Lab',
    duration: 'Jan 2024 - Present',
    description: 'Conducting research on sign language recognition using deep learning.',
    achievements: ['Published 1 paper', 'Achieved SOTA results', 'Dataset curation of 5000+ samples']
  },
  {
    role: 'Data Science Intern',
    company: 'TechStart India',
    duration: 'June 2023 - August 2023',
    description: 'Developed predictive models for customer churn analysis and built automated reporting pipelines.',
    achievements: ['Improved model accuracy by 20%', 'Automated weekly reports', 'Data pipeline optimization']
  }
];

export const achievements = [
  { title: 'Accenture Innovation Challenge Participant', description: 'Top 50 teams selected nationally' },
  { title: 'Research Paper Publication', description: 'Published paper in IEEE Conference' },
  { title: 'SIH 2023 Finalist', description: 'Smart India Hackathon national finalist' },
  { title: 'Best Project Award', description: 'Department award for best final year project' },
  { title: 'Academic Excellence', description: 'Dean\'s List for 4 consecutive semesters' },
  { title: 'Open Source Contributor', description: 'Active contributor to major ML libraries' }
];

export const certifications = [
  { name: 'Machine Learning Specialization', issuer: 'Stanford University (Coursera)', year: '2024' },
  { name: 'Deep Learning Professional Certificate', issuer: 'IBM', year: '2023' },
  { name: 'Data Science Professional Certificate', issuer: 'DataCamp', year: '2023' },
  { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2024' }
];