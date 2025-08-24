const logos = ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Oracle DB', 'React', 'Docker', 'AWS']

export default function TechMarquee() {
    return (
        <div className="overflow-hidden py-6">
            <div className="flex gap-8 animate-[scroll_20s_linear_infinite]" style={{
                whiteSpace: 'nowrap',
                animationName: 'scroll',
                animationDuration: '20s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            }}>
                {logos.concat(logos).map((l, i) => (
                    <span key={i} className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300">
                        {l}
                    </span>
                ))}
            </div>
            <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    )
}
