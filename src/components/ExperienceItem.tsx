import type { Experience } from '../data/experience'

export default function ExperienceItem({ item }: { item: Experience }) {
    return (
        <div className="glass rounded-xl p-5 animate-fadeUp">
            <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                    <h3 className="font-semibold">{item.role} • {item.company}</h3>
                    <p className="text-sm text-gray-400">{item.location}</p>
                </div>
                <span className="text-sm text-gray-400">{item.period}</span>
            </div>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300">
                {item.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
        </div>
    )
}
