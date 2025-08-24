import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`inset-x-0 transition-all ${scrolled ? 'py-3 bg-black/50 glass' : 'py-5'}`}>
            <nav className="section flex items-center justify-between">
                <a href="#" className="font-semibold text-lg tracking-wide">
                    <span className="gradient-text">Saurabh</span>
                </a>
                <ul className="hidden sm:flex gap-6 text-sm text-gray-300">
                    {links.map(l => (
                        <li key={l.href}>
                            <a className="hover:text-white transition-colors" href={l.href}>{l.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden sm:flex items-center gap-3">
                    <ThemeToggle />
                    <a href="#contact" className="px-4 py-2 rounded-md bg-brand-600 hover:bg-brand-500 transition-colors shadow-glow">
                        Hire Me
                    </a>
                </div>
            </nav>
        </header>
    )
}
