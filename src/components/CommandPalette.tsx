import { useEffect, useState } from 'react'

const actions = [
    { id: 'about', label: 'Go to About', action: () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'skills', label: 'Go to Skills', action: () => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'projects', label: 'Go to Projects', action: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'experience', label: 'Go to Experience', action: () => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'contact', label: 'Go to Contact', action: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'resume', label: 'Download Resume', action: () => window.open('/saurabh-resume.pdf', '_blank') },
    { id: 'email', label: 'Email', action: () => window.open('mailto:saurmaurya@hotmail.com') },
]

export default function CommandPalette() {
    const [open, setOpen] = useState(false)
    const [q, setQ] = useState('')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault(); setOpen(v => !v)
            } else if (e.key === '/') {
                e.preventDefault(); setOpen(true)
            } else if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    const filtered = actions.filter(a => a.label.toLowerCase().includes(q.toLowerCase()))

    if (!open) return null
    return (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-start justify-center pt-24">
            <div className="w-full max-w-xl glass rounded-xl p-2">
                <input
                    autoFocus
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    className="w-full bg-transparent px-3 py-2 outline-none"
                    placeholder="Type a command… (e.g., Projects, Resume)"
                />
                <div className="max-h-72 overflow-auto">
                    {filtered.map(a => (
                        <button
                            key={a.id}
                            onClick={() => { a.action(); setOpen(false) }}
                            className="w-full text-left px-3 py-2 rounded-md hover:bg-white/5"
                        >
                            {a.label}
                        </button>
                    ))}
                </div>
                <div className="px-3 py-2 text-xs text-gray-400">Esc to close • Ctrl/Cmd + K to toggle</div>
            </div>
        </div>
    )
}
