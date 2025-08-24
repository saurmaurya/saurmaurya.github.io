const items = [
    { year: '2021', text: 'Axis Bank: REST APIs, React components' },
    { year: '2022', text: 'Kafka integration • real-time pipelines' },
    { year: '2023', text: 'AWS CCP • CI/CD fundamentals' },
    { year: '2024', text: 'Infosys: Java upgrade, legacy optimization' },
    { year: '2025', text: 'Microservices scale & reliability focus' },
]

export default function Timeline() {
    return (
        <section className="section py-12">
            <div className="relative pl-6">
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/10" />
                <div className="space-y-5">
                    {items.map(i => (
                        <div key={i.year} className="relative">
                            <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-brand-500 shadow-glow" />
                            <div className="glass rounded-xl p-4 animate-fadeUp">
                                <div className="text-sm text-gray-400">{i.year}</div>
                                <div className="mt-1">{i.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
