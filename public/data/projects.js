const projects = [
  {
    title: 'Hirebright AI – Greenlight Platform',
    tagline: 'End-to-end hiring platform powering job workflows for 20k+ users',
    tech: ['Spring Boot', 'PostgreSQL', 'Kafka', 'Elasticsearch', 'Java'],
    bullets: [
      'Developed REST APIs for job and employer workflows, supporting 20k+ users across hiring pipelines.',
      'Implemented a secure Magic Link authentication system using tokenized, one-time access flows for assignment sharing.',
      'Engineered Elasticsearch fuzzy matching with optimised DB queries, achieving 30% faster search response times.',
    ],
    github: 'https://github.com/Tahmeerpasha',
    demo: null,
    highlight: 'Production · 20k+ users',
  },
  {
    title: 'RVL – Racing Data Platform',
    tagline: 'AWS-native ingestion and sync pipelines processing 1M+ records per run',
    tech: ['AWS Lambda', 'Step Functions', 'DynamoDB', 'PostgreSQL', 'JavaScript'],
    bullets: [
      'Re-architected ingestion and sync pipelines using AWS Step Functions and Lambda to reliably process 1M+ records per run.',
      'Designed batch-based workflows (2k records/batch) with conditional execution to handle large refresh jobs within Lambda limits.',
      'Managed a 25GB+ PostgreSQL database and automated reconciliation between PostgreSQL and DynamoDB, reducing data mismatches by 90%.',
    ],
    github: 'https://github.com/Tahmeerpasha',
    demo: null,
    highlight: 'Production · 1M+ records · 25GB+ DB',
  },
];

export const oldProjects = [
  {
    title: 'Social Sphere',
    tech: ['NextJS', 'ExpressJS', 'MongoDB', 'AWS'],
    overview: 'An AI-assisted content creation and management platform for organizing social media strategies.',
    demoLink: 'https://social-sphere-frontend.vercel.app/',
    codeLink: 'https://github.com/Tahmeerpasha/social-sphere',
  },
  {
    title: 'WearTruth Ecommerce',
    tech: ['NextJS', 'Spring Boot', 'Hibernate', 'AWS'],
    overview: 'A full-stack e-commerce platform dedicated to delivering diverse themed products with user-generated stories.',
    demoLink: 'https://wear-truth.vercel.app/',
    codeLink: 'https://github.com/Tahmeerpasha/WearTruth',
  },
  {
    title: 'Youtube Clone',
    tech: ['NextJS'],
    overview: 'A lightweight Youtube clone app allowing users to search and watch video content.',
    demoLink: 'https://youtube-clone-by-tahmeer.vercel.app/',
    codeLink: 'https://github.com/Tahmeerpasha/Youtube-Clone',
  },
  {
    title: 'Socialite',
    tech: ['React.js'],
    overview: 'A simple social media application letting users post daily updates and events.',
    demoLink: 'https://socialite-54f69.web.app/',
    codeLink: 'https://github.com/Tahmeerpasha/Socialite',
  },
  {
    title: 'Randomizer',
    tech: ['React.js'],
    overview: 'A utility app for generating random numbers, letters, and shuffling lists.',
    demoLink: 'https://randomizer-low3ngifp-tahmeerpasha.vercel.app/',
    codeLink: 'https://github.com/Tahmeerpasha/Randomizer',
  },
  {
    title: 'To-Do List',
    tech: ['React.js'],
    overview: 'A task management application with full CRUD capabilities.',
    demoLink: 'https://to-do-list-two-smoky.vercel.app/',
    codeLink: 'https://github.com/Tahmeerpasha/ToDoList',
  },
  {
    title: 'Snake Xenzia',
    tech: ['Javascript'],
    overview: 'A classic browser-based implementation of the retro Snake game.',
    demoLink: 'https://tahmeerpasha.github.io/Snake-Game',
    codeLink: 'https://github.com/Tahmeerpasha/Snake-Game',
  },
  {
    title: 'ASCII Code Generator',
    tech: ['Javascript'],
    overview: 'A tool that reveals the ASCII character codes for any keyboard input.',
    demoLink: 'https://tahmeerpasha.github.io/ASCII-revealer/',
    codeLink: 'https://github.com/Tahmeerpasha/ASCII-revealer',
  }
];

export default projects;