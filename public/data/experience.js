const experience = [
  {
    company: 'Webknot Technologies',
    location: 'Bangalore, India',
    role: 'Software Developer',
    type: 'Full-time',
    duration: 'Nov 2024 – Present',
    bullets: [
      'Owned Spring Boot microservices handling 10k+ events/day; implemented retry + idempotency patterns to maintain <0.1% failure rate.',
      'Integrated Elasticsearch fuzzy search, improving relevance and cutting search response time by 30%.',
      'Designed fault-tolerant AWS Lambda + Step Functions ingestion pipelines processing 1M+ records with zero execution failures in production.',
      'Optimized PostgreSQL queries using composite indexing, reducing median latency by 30% (240ms → 168ms).',
      'Reduced AWS infrastructure cost by 15% through S3 lifecycle policies and database usage audits.',
    ],
    tech: ['Java', 'Spring Boot', 'AWS Lambda', 'Step Functions', 'PostgreSQL', 'Elasticsearch', 'DynamoDB'],
  },
  {
    company: 'Webknot Technologies',
    location: 'Bangalore, India',
    role: 'Full Stack Developer',
    type: 'Internship',
    duration: 'Jun 2024 – Oct 2024',
    bullets: [
      'Built real-time healthcare analytics backend using NestJS, MQTT, and WebSockets for live production dashboards serving concurrent users.',
      'Delivered reporting and alerting workflows, cutting dashboard data refresh time by 40%.',
    ],
    tech: ['NestJS', 'MQTT', 'WebSockets', 'Node.js'],
  },
];

export default experience;
