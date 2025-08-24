import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="glass rounded-xl p-5 hover:shadow-glow transition duration-300 animate-fadeUp">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">{t}</span>
                ))}
            </div>
            <div className="flex gap-3">
                {project.repo && <a className="text-sm text-brand-400 hover:text-brand-300" href={project.repo} target="_blank">Code →</a>}
                {project.demo && <a className="text-sm text-brand-400 hover:text-brand-300" href={project.demo} target="_blank">Demo →</a>}
            </div>
        </div>
    )
}
