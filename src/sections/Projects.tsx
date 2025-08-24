import { useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const allTags = ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker', 'Oracle DB', 'React', 'TypeScript', 'Tailwind CSS', 'JUnit']

export default function Projects() {
    const [query, setQuery] = useState('')
    const [tag, setTag] = useState<string | null>(null)

    const filtered = useMemo(() => projects.filter(p =>
        (!tag || p.tech.includes(tag)) &&
        (p.title + p.description).toLowerCase().includes(query.toLowerCase())
    ), [query, tag])

    return (
        <section id="projects" className="section py-16">
            <SectionHeader title="Projects" subtitle="Selected work focused on performance, reliability, and UX" />
            <div className="glass rounded-xl p-4 mb-6 flex flex-wrap gap-2 items-center">
                <input
                    placeholder="Search projects…"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2"
                />
                <div className="flex flex-wrap gap-2">
                    <button onClick={() => setTag(null)} className={`px-2 py-1 rounded ${tag === null ? 'bg-brand-600' : 'bg-white/5 border border-white/10'}`}>All</button>
                    {allTags.map(t => (
                        <button key={t} onClick={() => setTag(t)} className={`px-2 py-1 rounded ${tag === t ? 'bg-brand-600' : 'bg-white/5 border border-white/10'}`}>{t}</button>
                    ))}
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {filtered.map(p => <ProjectCard key={p.title} project={p} />)}
            </div>
        </section>
    )
}
