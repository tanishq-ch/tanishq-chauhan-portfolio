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
    title: 'DocuCast-AI',
    description: [
      'Developed a Gen AI platform converting PDFs into podcast-style multi-speaker audio.',
      'Used Gemini APIs for document understanding and LLM-based script generation.',
      'Built an end-to-end Python pipeline for TTS audio synthesis.'
    ],
    technologies: ['Python', 'Google Gemini API', 'TTS', 'Streamlit'],
    github: 'https://github.com/tanishq-ch/DocuCast-AI',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop'
  },
  {
    title: 'FarmSpectra',
    description: [
      'AI-powered crop disease & weed detection system using YOLOv8.',
      'Integrated Gemini AI for bilingual (Hindi/English) Q&A support.',
      'Generated ExG heatmaps and PDF reports with treatment plans.'
    ],
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit', 'Gemini AI'],
    github: 'https://github.com/tanishq-ch/FarmSpectra',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
  },
  {
    title: 'BhashaBlend',
    description: [
      'Engineered a multilingual video dubbing platform achieving 12.4 WER.',
      'Automated transcription, translation, and speech synthesis pipeline.',
      'Optimized audio-video sync using Whisper ASR and gTTS.'
    ],
    technologies: ['Python', 'Whisper ASR', 'gTTS', 'Streamlit', 'NLP'],
    github: 'https://github.com/tanishq-ch/BhashaBlend',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=600&h=400&fit=crop'
  },
  {
    title: 'SignVerse',
    description: [
      'Developed a multilingual sign language interpreter using CNNs with 96%+ accuracy.',
      'Preprocessed 25,000+ images for robust gesture recognition.',
      'Built a scalable model robust across diverse lighting conditions.'
    ],
    technologies: ['Python', 'CNN', 'OpenCV', 'Flask', 'Deep Learning'],
    github: 'https://github.com/tanishq-ch/SignVerse',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=400&fit=crop'
  },
  {
    title: 'HashReaper',
    description: [
      'Built a data integrity validation tool using SHA-based hashing.',
      'Implemented smart contracts on Ethereum Sepolia for immutable storage.',
      'Designed workflows for metadata capture and validation reporting.'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'Python', 'Ethereum'],
    github: 'https://github.com/tanishq-ch/HashReaper',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop'
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
  { title: 'AgroSpectrum Technovate 2025', description: 'Achieved 4th place at AgroSpectrum Technovate 2025, a national-level innovation platform in agriculture and allied sectors.' },
  { title: 'Top 5% in NPTEL Exams', description: 'Secured Top 5% rank nationwide in NPTEL exams'},
  { title: 'Research Paper Publication', description: 'Published paper in IEEE Conference' },
  { title: 'Competitive Programming Achievement', description: 'Solved 300+ DSA problems (170+ on LeetCode) and achieved CodeChef ⭐⭐ rating.' },
  { title: 'Academic Scholarships', description: 'Received college scholarships for 3 consecutive years in recognition of academic excellence.' },
];

export const certifications = [
  { name: 'Machine Learning Specialization', issuer: 'Stanford University (Coursera)', year: '2024' },
  { name: 'Deep Learning Professional Certificate', issuer: 'IBM', year: '2023' },
  { name: 'Data Science Professional Certificate', issuer: 'DataCamp', year: '2023' },
  { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2024' }
];