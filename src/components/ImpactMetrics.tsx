const metrics = [
    { label: 'P95 Latency', value: '↓ 38%', hint: 'Optimized REST APIs & caching' },
    { label: 'Throughput', value: '2.3x', hint: 'Kafka + batching + idempotency' },
    { label: 'Incidents', value: '↓ 45%', hint: 'Better logging & SLOs' },
    { label: 'Deploy Frequency', value: '↑ 3x', hint: 'CI/CD improvements' },
]

export default function ImpactMetrics() {
    return (
        <section className="section py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map(m => (
                    <div key={m.label} className="glass rounded-xl p-4 text-center hover:shadow-glow transition motion-safe:hover:scale-[1.02]">
                        <div className="text-2xl font-semibold gradient-text">{m.value}</div>
                        <div className="text-sm mt-1">{m.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{m.hint}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
