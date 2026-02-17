import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { dashboards } from '../data/portfolioData';
import { BarChart3, ExternalLink } from 'lucide-react';

const Dashboards = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { threshold: 0.1 });
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section
            id="dashboards"
            ref={sectionRef}
            className="py-20 bg-gradient-to-b from-[#0a0a16] to-[#11112b] relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 text-center">
                    <div className={`inline-flex items-center justify-center p-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-blue-400 text-sm font-medium">Business Intelligence</span>
                    </div>

                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Analytics <span className="text-blue-500">Dashboards</span>
                    </h2>

                    <div className={`w-20 h-1 bg-blue-600 mx-auto rounded transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>

                    <p className={`mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Interactive data visualizations designed to transform complex datasets into actionable business insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dashboards.map((dashboard, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-700 delay-${index * 150} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                            onMouseEnter={() => setActiveId(index)}
                            onMouseLeave={() => setActiveId(null)}
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={dashboard.image}
                                    alt={dashboard.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay on hover */}
                                <div className={`absolute inset-0 bg-[#0a0a16]/80 flex flex-col justify-center items-center p-6 text-center transition-opacity duration-300 ${activeId === index ? 'opacity-100' : 'opacity-0'}`}>
                                    <h3 className="text-xl font-bold text-white mb-2">{dashboard.title}</h3>
                                    <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                                        {dashboard.description}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                                        {dashboard.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Since demo links are often private/internal for dashboards, just showing visual indicator or generic link if provided */}
                                    {dashboard.demoLink !== '#' && (
                                        <a
                                            href={dashboard.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors font-medium "
                                        >
                                            <ExternalLink size={16} />
                                            View Live
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-4 border-t border-white/10 bg-[#0f0f20]">
                                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    {dashboard.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dashboards;
