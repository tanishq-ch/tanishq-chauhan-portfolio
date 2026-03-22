export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript'],
    icon: 'Code'
  },
  {
    category: 'Machine Learning & AI',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'Gemini'],
    icon: 'Brain'
  },
  {
    category: 'Data Analytics',
    skills: ['Pandas', 'NumPy', 'Power BI', 'Matplotlib', 'Seaborn'],
    icon: 'BarChart'
  },
  {
    category: 'Web Development',
    skills: ['FastAPI', 'Flask', 'Streamlit', 'React', 'HTML/CSS'],
    icon: 'Globe'
  },
  {
    category: 'Cloud & Databases',
    skills: ['AWS', 'MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
    icon: 'Cloud'
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Jupyter', 'VS Code'],
    icon: 'Settings'
  }
];

export const specializations = [
  {
    title: 'GenAI & LLMOps',
    description: 'Specialized in building LLM-powered applications using Gemini, OpenAI APIs, and RAG pipelines for intelligent automation.',
    icon: 'GenAI'
  },
  {
    title: 'Computer Vision',
    description: 'Expertise in image processing, object detection (YOLO), and segmentation using OpenCV and Deep Learning models.',
    icon: 'Vision'
  },
  {
    title: 'NLP Research',
    description: 'Experience in sentiment analysis, translation models, and speech recognition systems like Whisper and gTTS.',
    icon: 'NLP'
  }
];

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
    demo: 'https://github.com/tanishq-ch/DocuCast-AI',
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
    demo: 'https://github.com/tanishq-ch/FarmSpectra',
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
    demo: 'https://github.com/tanishq-ch/BhashaBlend',
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
    demo: 'https://github.com/tanishq-ch/SignVerse',
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
    demo: 'https://github.com/tanishq-ch/HashReaper',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop'
  }
];

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    school: 'Sharda University',
    duration: '2022 - 2026',
    location: 'Greater Noida, India',
    description: 'Specializing in Data Science and Machine Learning with a focus on practical applications of GenAI in real-world scenarios.',
    tags: ['AI & ML Specialization', 'Data Science and Analytics', 'Software Engineering', 'Data Structures & Algorithms', 'Database Systems']
  },
  {
    degree: 'Senior Secondary Education',
    school: 'Aadharshila Vidyapeeth',
    duration: '2020 - 2022',
    location: 'Delhi, India',
    description: 'Science stream with a strong foundation in Mathematics, Physics, and Computer Science fundamentals.',
    tags: ['Mathematics', 'Physics', 'Computer Science', 'Chemistry']
  }
];

export const experience = [
    {
    role: 'AI Intern',
    company: 'Infosys Springboard',
    duration: 'Dec 2025 - Feb 2026',
    description: 'Worked on developing an AI-powered property investment advisory system for the NCR region.',
    achievements: ['Reduced prediction error by 15%', 'Processed 100K+ property records', 'Built real-time analytics dashboard']
  },
  {
    role: 'Data Analyst Intern',
    company: 'Anantam Advisors Pvt Ltd',
    duration: 'May 2025 - July 2025',
    description: 'Worked on developing an AI-powered property investment advisory system for the NCR region.',
    achievements: ['Reduced prediction error by 15%', 'Processed 100K+ property records', 'Built real-time analytics dashboard']
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
  { name: 'Machine Learning Specialization', issuer: 'Stanford University', year: '2025' },
  { name: 'epLearning.AI Issued: Oct 2025', issuer: 'Oracle', year: '2025' },
  { name: 'Harnessing the Power of Data with Power BI', issuer: 'Microsoft', year: '2025' },
  { name: 'Python for Data Science', issuer: 'IBM', year: '2024' }
];