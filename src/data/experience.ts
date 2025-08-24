export type Experience = {
    company: string
    role: string
    location: string
    period: string
    points: string[]
}

export const experience: Experience[] = [
    {
        company: 'Infosys Limited',
        role: 'Associate Consultant',
        location: 'Jaipur',
        period: 'Dec 2024 – Present',
        points: [
            'Led Java version upgrades with minimal downtime and seamless migrations.',
            'Maintained and optimized legacy services for efficiency and reliability.',
            'Aligned technical solutions with business goals and scalability objectives.',
        ],
    },
    {
        company: 'Axis Bank Limited',
        role: 'Business System Analyst',
        location: 'Mumbai',
        period: 'Dec 2021 – Nov 2024',
        points: [
            'Developed and optimized REST APIs with robust security and scalability.',
            'Integrated Apache Kafka for real-time streaming; improved reliability.',
            'Built React components and conducted log analysis for performance tuning.',
        ],
    },
]
