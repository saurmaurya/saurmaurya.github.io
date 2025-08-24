import { useState } from 'react'

export default function ResumeCard() {
    const [count, setCount] = useState(() => Number(localStorage.getItem('dl') || 0))
    const onDownload = () => {
        setCount(c => { const v = c + 1; localStorage.setItem('dl', String(v)); return v })
        window.open('/saurabh-resume.pdf', '_blank')
    }
    return (
        <section className="section py-12">
            <div className="glass rounded-2xl p-6 flex items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold">Resume</h3>
                    <p className="text-gray-400 text-sm">AWS CCP • Java • Spring Boot • Kafka • Microservices • React</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">{count} downloads</span>
                    <button onClick={onDownload} className="px-4 py-2 rounded-md bg-brand-600 hover:bg-brand-500 shadow-glow">
                        Download
                    </button>
                </div>
            </div>
        </section>
    )
}
