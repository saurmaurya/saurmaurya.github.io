import { skills } from '../data/skills'
import SectionHeader from '../components/SectionHeader'

export default function Skills() {
    return (
        <section id="skills" className="section py-16">
            <SectionHeader title="Skills" subtitle="Technologies and tools I use daily" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skills).map(([group, list]) => (
                    <div key={group} className="glass rounded-xl p-5">
                        <h3 className="font-semibold capitalize mb-3">{group}</h3>
                        <div className="flex flex-wrap gap-2">
                            {list.map(item => (
                                <span key={item} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
