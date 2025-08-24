export default function About() {
    return (
        <section id="about" className="section py-16">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="glass rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-3">About</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Results-driven Full Stack Java Developer with 4 years of experience across microservices, Spring Boot, Kafka, Redis, Oracle DB, and React.
                        Passionate about performance, reliability, and secure API design. AWS CCP certified.
                    </p>
                </div>
                <div className="glass rounded-2xl p-6">
                    <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                    <p className="text-gray-300">
                        Design and build high-throughput services, optimize legacy systems, and craft clean, accessible UIs with modern tooling.
                    </p>
                </div>
            </div>
        </section>
    )
}
