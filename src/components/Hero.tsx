export default function Hero() {
    return (
        <section className="relative pt-28 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-radial" />
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
                style={{ background: 'radial-gradient(circle, #9333ea 0%, transparent 60%)' }} />
            <div className="section relative">
                <div className="max-w-3xl">
                    <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4">
                        Java Developer • Spring Boot • Microservices
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                        Building <span className="gradient-text">scalable</span> microservices and delightful UIs
                    </h1>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        Full Stack Java Developer with experience in Spring Boot, Kafka, Redis, Oracle DB, and React.
                        Focused on performance, reliability, and clean architecture.
                    </p>
                    <div className="flex items-center gap-3">
                        <a href="#projects" className="px-5 py-3 rounded-md bg-brand-600 hover:bg-brand-500 transition shadow-glow">
                            View Projects
                        </a>
                        <a href="#contact" className="px-5 py-3 rounded-md border border-white/10 hover:border-white/25 transition">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl animate-float"
                style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 60%)' }} />
        </section>
    )
}
