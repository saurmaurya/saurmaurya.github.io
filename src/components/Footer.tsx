export default function Footer() {
    return (
        <footer className="py-10 mt-16 border-t border-white/10">
            <div className="section flex items-center justify-between flex-wrap gap-4 text-sm text-gray-400">
                <span>© {new Date().getFullYear()} Saurabh Ranjan Singh</span>
                <div className="flex gap-4">
                    <a className="hover:text-white" href="mailto:saurmaurya@hotmail.com">Email</a>
                    <a className="hover:text-white" href="tel:+917992297893">Phone</a>
                    <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}
