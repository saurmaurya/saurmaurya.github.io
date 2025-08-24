import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

    return (
        <section id="contact" className="section py-16">
            <SectionHeader title="Contact" subtitle="Let’s collaborate or discuss an opportunity" />
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    setStatus('loading')
                    setTimeout(() => setStatus('done'), 800)
                }}
                className="glass rounded-xl p-6 grid sm:grid-cols-2 gap-4"
            >
                <div className="sm:col-span-1">
                    <label className="block text-sm mb-1">Name</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600" required />
                </div>
                <div className="sm:col-span-1">
                    <label className="block text-sm mb-1">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600" required />
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-sm mb-1">Message</label>
                    <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600" required />
                </div>
                <div className="sm:col-span-2 flex justify-end">
                    <button disabled={status === 'loading'} className="px-5 py-2 rounded-md bg-brand-600 hover:bg-brand-500 transition">
                        {status === 'loading' ? 'Sending…' : status === 'done' ? 'Sent!' : 'Send Message'}
                    </button>
                </div>
            </form>
        </section>
    )
}
