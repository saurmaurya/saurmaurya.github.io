import SectionHeader from '../components/SectionHeader'
import { experience } from '../data/experience'
import ExperienceItem from '../components/ExperienceItem'

export default function Experience() {
    return (
        <section id="experience" className="section py-16">
            <SectionHeader title="Experience" subtitle="Impact through enterprise-grade solutions" />
            <div className="space-y-6">
                {experience.map(e => <ExperienceItem key={e.company} item={e} />)}
            </div>
        </section>
    )
}
