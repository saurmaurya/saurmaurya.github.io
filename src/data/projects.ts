export type Project = {
    title: string
    description: string
    tech: string[]
    repo?: string
    demo?: string
}

export const projects: Project[] = [
    {
        title: 'Real-time Transactions Stream',
        description:
            'Kafka-based microservice pipeline for streaming transaction events with Spring Boot, ensuring exactly-once processing, Redis caching, and resilient retries.',
        tech: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker', 'Oracle DB', 'JUnit'],
        repo: '',
        demo: '',
    },
    {
        title: 'Secure Banking APIs',
        description:
            'Hardened REST APIs with rate limiting, JWT-based auth, audit logs, and log analysis for operational insights. Improved P95 latency and error budgets.',
        tech: ['Java', 'Spring Boot', 'OAuth2/JWT', 'Grafana', 'CI/CD'],
    },
    {
        title: 'Portfolio SPA',
        description:
            'Typed React + Vite + Tailwind v4 portfolio with animated gradients, glassmorphism, and accessible components.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        repo: '',
        demo: '',
    },
]
