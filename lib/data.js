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
    shortDescription: 'Gen AI platform converting PDF documents into podcast-style conversational audio.',
    bullets: [
      'Engineered a GenAI pipeline using Gemini APIs to extract, summarize, and transform PDFs into structured conversational scripts.',
      'Designed a multi-speaker dialogue generation system with contextual prompts, improving content coherence and engagement.',
      'Built an end-to-end automated workflow integrating TTS for podcast-style audio output, reducing manual effort by 80%.'
    ],
    technologies: ['Python', 'Google Gemini API', 'TTS', 'Streamlit'],
    github: 'https://github.com/tanishq-ch/DocuCast-AI',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop'
  },
  {
    title: 'FarmSpectra',
    shortDescription: 'AI-powered crop disease & weed detection system for wheat crop management.',
    bullets: [
      'Developed a computer vision system using YOLOv8 for real-time crop disease and weed detection with high precision.',
      'Integrated Gemini AI for bilingual (Hindi/English) advisory system, enhancing accessibility for rural users.',
      'Generated ExG-based vegetation heatmaps and automated PDF reports to assist farmers in data-driven decision-making.'
    ],
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit', 'Gemini AI'],
    github: 'https://github.com/tanishq-ch/FarmSpectra',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
  },
  {
    title: 'BhashaBlend',
    shortDescription: 'Multilingual video dubbing platform enabling translation of videos with 12.4 WER.',
    bullets: [
      'Built an end-to-end multilingual dubbing pipeline using Whisper ASR for transcription and gTTS for speech synthesis.',
      'Implemented NLP-based translation and alignment to maintain semantic accuracy across multiple languages.',
      'Optimized audio-video synchronization, achieving 12.4 WER and improving accessibility for non-native audiences.'
    ],
    technologies: ['Python', 'Whisper ASR', 'gTTS', 'Streamlit', 'NLP'],
    github: 'https://github.com/tanishq-ch/BhashaBlend',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=600&h=400&fit=crop'
  },
  {
    title: 'SignVerse',
    shortDescription: 'High-performance multilingual sign language interpreter using CNNs with 96%+ accuracy.',
    bullets: [
      'Developed a CNN-based sign language recognition model achieving 96%+ accuracy across multiple gesture classes.',
      'Curated and preprocessed a dataset of 25,000+ images, improving model generalization across lighting and backgrounds.',
      'Designed a real-time inference pipeline using OpenCV and Flask for seamless gesture-to-text translation.'
    ],
    technologies: ['Python', 'CNN', 'OpenCV', 'Flask', 'Deep Learning'],
    github: 'https://github.com/tanishq-ch/SignVerse',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=400&fit=crop'
  },
  {
    title: 'HashReaper',
    shortDescription: 'Data integrity validation tool using SHA-based hashing for secure, tamper-proof data.',
    bullets: [
      'Implemented SHA-based hashing mechanisms to ensure data integrity and detect tampering in digital records.',
      'Deployed smart contracts on Ethereum Sepolia for immutable and transparent on-chain data storage.',
      'Designed validation workflows and reporting systems for structured metadata tracking and auditability.'
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