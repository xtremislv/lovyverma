// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
    {
      name: 'Textify-VQA',
      description:
        'textify-VQA is a Vision-Question-Answering (VQA) project focused on answering product-related questions using both visual and textual information from product images.',
      link: { href: 'https://github.com/xtremislv/textify-VQA', label: 'Textify-VQA' },
      category: ['AI/ML software'],
      techStack: ['PyTorch', 'BLIP', 'HuggingFace'],
      tags: ['AI/ML software']
    },
    {
      name: 'Career Crafters: Interview Analysis System',
      description:
        'The Career Crafters Interview Analysis System is an AI-powered platform designed to simulate interviews, assess both verbal and non-verbal communication skills, and provide detailed feedback to improve performance.',
      link: { href: 'https://github.com/xtremislv/career-crafter-interview-service', label: 'Career Crafters' },
      category: ['AI/ML software'],
      techStack: ['Python' , 'Django' , 'HTML' , 'CSS' , 'Javascript' , 'MediaPipe' , 'Librosa' ,'Wave' ,'OpenAI' , 'OpenCV'],
      tags: ['AI/ML software']
    },
    {
      name: 'Banking Chatbot',
      description:
        'Developed a banking chatbot using Ollama to classify intents and perform tasks such as retrieving account balance and transferring funds.',
      link: { href: 'https://github.com/xtremislv/banking_chatbot', label: 'Banking Chatbot' },
      category: ['Chatbot'],
      techStack: ['Ollama', 'Vosk', 'Piper', 'Python', 'PyTorch'],
      tags: ['Chatbot','AI/ML software']
    },
    {
      name: 'UrbanGraphNet',
      description:
        'UrbanGraphNet is a custom Graph Neural Network architecture that fuses GAT and Transformer components to model and generate urban road networks.',
      link: { href: 'https://github.com/xtremislv/UrbanGraphNet', label: 'UrbanGraphNet' },
      category: ['AI/ML Model'],
      techStack: ['PyTorch', 'PyG', 'NetworkX', 'Transformers', 'Scikit-learn'],
      tags: ['AI/ML Model']
    },
    {
      name: 'CraterGraph',
      description:
        'unique graph-based cycle detection method for identifying craters.',
      link: { href: 'https://github.com/xtremislv/CraterGraph', label: 'CraterGraph' },
      category: ['CV Model'],
      techStack: ['networkx', 'scipy', 'scikit-learn', 'openCV','Python'],
      tags: ['AI/ML Model','CV project']
    },
    {
      name: 'PanScope: Intelligent PAN Card Data Extractor',
      description:
        'PanScope is a smart document parsing system that extracts structured information from Indian PAN cards.',
      link: { href: 'https://github.com/xtremislv/PanScope-Intelligent-PAN-Card-Data-Extractor', label: 'PanScope' },
      category: ['AI/ML software'],
      techStack: ['doctr (OCR engine)', 'OpenCV', 'NumPy', 'Matplotlib','PyTorch', 'TensorFlow','Scikit-learn'],
      tags: ['AI/ML software']
    },
    {
      name: 'Reinforcement Learning-Based Distributed Server Load Balancer',
      description:
        'Using the Multi-Agent Deep Deterministic Policy Gradient (MADDPG) algorithm, the system improves performance and enhances resource management.',
      link: { href: 'https://github.com/xtremislv/Reinforcement-Learning-Based-Distributed-Server-Load-Balancer', label: 'Load Balancer' },
      category: ['RL model'],
      techStack: ['TensorFlow', 'Keras', 'PyTorch', 'Pandas', 'NumPy','Matplotlib'],
      tags: ['AI/ML software', 'RL Software']
    },
    {
      name: 'chat-app',
      description:
        'A Simple chat app where you can chat and msg anyone',
      link: { href: 'https://chat-app-rnp5.onrender.com/', label: 'chat-app' },
      category: ['Web-service'],
      techStack: ['Next.js', 'React', 'Javascript','Mongodb'],
      tags: ['APP', 'Website']
    },
    {
      name: 'campus-food-delivery-web-service',
      description:
        'A web-based Campus Delivery System designed to streamline food, grocery, and medicine delivery across the IIT Bhilai campus.',
      link: { href: 'https://github.com/xtremislv/campus-food-delivery-web-service', label: 'Campus Delivery System' },
      category: ['Website'],
      techStack: ['Next.js', 'React', 'Javascript'],
      tags: ['Website']
    },
    {
      name: 'MultiTaskNLP: Unified Model for NER, Sentiment & Emotion Analysis',
      description:
        'MultiTaskNLP is a deep learning project designed to solve multiple natural language processing tasks — Named Entity Recognition (NER), Sentiment Classification, and Emotion Detection — simultaneously using a shared encoder architecture.',
      link: { href: 'https://github.com/xtremislv/MultiTaskNLP-Unified-Model-for-NER-Sentiment-Emotion-Analysis', label: 'MultiTaskNLP' },
      category: ['AI/ML Software'],
      techStack: ['Python','PyTorch','Hugging Face Transformers','Scikit-learn','Matplotlib','Pandas', 'NumPy'],
      tags: ['AI/ML Software']
    },
    {
      name: 'QuoteMind: Semantic Quote Explorer',
      description:
        'QuoteMind is a semantic quote retrieval application that lets you find meaningful quotes based on natural language queries.',
      link: { href: 'https://github.com/xtremislv/QuoteMind-Semantic-Quote-Explorer', label: 'QuoteMind' },
      category: ['AI/ML Software'],
      techStack: ['Python','Pandas', 'NumPy','FAISS','Sentence Transformers','Google Gemini (Generative AI)','Streamlit'],
      tags: ['AI/ML Software']
    },
    {
      name: 'LMM-ConceptExplainer-VQA',
      description:
        'A concept-based explainability framework applied to large multimodal models (LMMs) using the VQAv2-small dataset.',
      link: { href: 'https://github.com/xtremislv/LMM-ConceptExplainer-VQA', label: 'LMM-ConceptExplainer-VQA' },
      category: ['AI/ML Software'],
      techStack: ['Python','transformers','datasets','torch','matplotlib','sklearn','PIL','numpy'],
      tags: ['AI/ML Software']
    },
    {
      name: 'Omniglot-MetaLearn',
      description:
        'Meta-learning approaches (Black-box and MAML) evaluated on the Omniglot dataset for few-shot image classification.',
      link: { href: 'https://github.com/xtremislv/LMM-ConceptExplainer-VQA', label: 'Omniglot-MetaLearn' },
      category: ['AI/ML Software'],
      techStack: ['Python','torch','torchvision','numpy','matplotlib','tqdm'],
      tags: ['AI/ML Software']
    },
    {
      name: 'ZeroShot-NewsClassifier',
      description:
        'This project demonstrates a zero-shot text classification approach on the AG-News dataset using pretrained language models.',
      link: { href: 'https://github.com/xtremislv/ZeroShot-NewsClassifier', label: 'ZeroShot-NewsClassifier' },
      category: ['AI/ML Software'],
      techStack: ['Python','transformers', 'scikit-learn', 'pandas', 'tqdm'],
      tags: ['AI/ML Software']
    },
    {
      name: 'Label_ai_app',
      description:
        'This is the 1st version of Labeling application powered with AI for Doctors and Healthcare workers.',
      link: { href: 'https://github.com/xtremislv/label-AI', label: 'Label_ai_app' },
      category: ['AI/ML Software','APP'],
      techStack: ['Python','Ultralytics', 'Generative-ai(gemeni)', 'pandas', 'node.js','Mondodb'],
      tags: ['AI/ML Software','App']
    },
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'polyphony-interactive-transfer-learning-framework',
      description: 'Interactive dashboard for single-cell analysis using plotly and classification using transfer learning',
      link: { href: 'https://github.com/xtremislv/polyphony-interactive-transfer-learning-framework', label: 'polyphony' },
      gitStars: 2,
      gitForks: 1
    },
    {
      name: 'deep-guidance-nerve-segmentation',
      description:
        'CV project that used custom Unet architecture for nerve segmentation and analysing defects in eyes.',
      link: { href: 'https://github.com/xtremislv/deep-guidance-nerve-segmentation', label: 'deep-guidance-nerve-segmentation' },
      gitStars: 2,
      gitForks: 1
    },
    {
      name: 'Knowledge Distillation implementation on TinyBert',
      description:
        'Twitter Sentiment Analysis using Fine Tuned TinyBert by Knowledge Distillation',
      link: { href: 'https://github.com/xtremislv/knowledge-distillation', label: 'Knowledge Distillation implementation on TinyBert' },
      gitStars: 2,
      gitForks: 1
    },
    {
      name: 'smoke_detection',
      description:
        'Trained and fine-tuned an object detection model on a dedicated smoke dataset, subsequently deploying this machine learning model alongside a highperformance video processing backend on the Apache Spark platform.',
      link: { href: 'https://github.com/xtremislv/smoke_detection', label: 'smoke_detection' },
      gitStars: 2,
      gitForks: 1
    },
    {
      name: 'portfolio Website',
      description:
        'A simple portfolio website for me',
      link: { href: 'https://github.com/xtremislv/xtremislv.github.io', label: 'portfolio Website' },
      gitStars: 2,
      gitForks: 1
    },
    {
      name: 'Video-Captioning',
      description:
        'Video Captioning is a sequential learning model that employs an encoder-decoder architecture. It accepts a video as input and produces a descriptive caption that summarizes the content of the video.',
      link: { href: 'https://github.com/xtremislv/video_cap', label: 'Video-Captioning' },
      gitStars: 2,
      gitForks: 1
    },
  ]
  