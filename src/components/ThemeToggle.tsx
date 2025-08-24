import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => (localStorage.getItem('theme') as 'dark' | 'light') || 'dark')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle('dark', theme === 'dark')
    }, [theme])
    return (
        <button
            aria-label="Toggle theme"
            className="px-3 py-1 rounded-md border border-white/10 text-sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
    )
}
