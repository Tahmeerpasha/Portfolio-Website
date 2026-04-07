const config = {
    name: 'Tahmeer Pasha',
    title: 'Backend Software Engineer',
    email: 'tahmeer.work@gmail.com',
    phone: '+91 6363317219',
    location: 'Bengaluru, India',
    summary:
        'Backend Software Engineer with 1+ year of experience building production-grade Java + Spring Boot microservices and AWS event-driven pipelines. Delivered systems handling 10k+ events/day and ingestion workflows processing 1M+ records.',
    social: {
        linkedin: 'https://linkedin.com/in/tahmeer-pasha',
        github: 'https://github.com/Tahmeerpasha',
        leetcode: 'https://leetcode.com/u/Tahmeer_Pasha',
        twitter: 'https://twitter.com/IamTahmeer'
    },
    resume:
        process.env.NEXT_PUBLIC_RESUME_LINK ||
        'https://drive.google.com/file/d/1nbz4_RO7C4mpVf9FD5B7YlFP2haLOnzU/view',
    contactFormAction:
        'https://getform.io/f/1a7e5fe7-02a8-47fc-887d-168b72799f58',
};

export default config;
