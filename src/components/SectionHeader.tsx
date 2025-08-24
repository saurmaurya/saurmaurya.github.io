export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
            {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        </div>
    )
}
