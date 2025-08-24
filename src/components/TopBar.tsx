export default function TopBar() {
    return (
        <div className="w-full bg-black/30 backdrop-blur-xs border-b border-white/10 text-xs">
            <div className="section py-2 flex items-center justify-between">
                <span className="text-gray-300">Open to SDE 2 roles • Jaipur / Remote</span>
                <div className="flex gap-3">
                    <a href="mailto:saurmaurya@hotmail.com" className="hover:text-white">Email</a>
                    <a href="/saurabh-resume.pdf" target="_blank" rel="noreferrer" className="hover:text-white">Resume</a>
                    <a href="#" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}
