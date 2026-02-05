
import { certificates } from '../data/portfolioData';

const Certificates = () => {
    // Duplicate the certificates array to ensure seamless looping
    const displayCertificates = [...certificates, ...certificates];

    return (
        <section id="certificates" className="py-20 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    Licenses & Certifications
                </h2>
                <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full mb-8"></div>
                <p className="text-gray-600 dark:text-gray-300 text-center max-w-5xl mx-auto">
                    Continuous learning and professional development.
                </p>
            </div>

            <div className="flex w-full overflow-hidden select-none relative">
                {/* Gradient Masks for fading effect at edges - Removed for space background */}



                <div className="flex animate-marquee pause-on-hover py-4">
                    {displayCertificates.map((cert, index) => (
                        <div
                            key={`${cert.title}-${index}`}
                            className="flex-shrink-0 w-80 md:w-96 mx-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl hover:bg-white/10 transition-all p-6 flex flex-col justify-between h-48 group cursor-pointer"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-white line-clamp-2 group-hover:text-teal-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1">
                                        {cert.issuer}
                                    </p>
                                </div>
                                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-lg p-2 flex items-center justify-center ml-3">
                                    <img
                                        src={cert.image}
                                        alt={cert.issuer}
                                        className="w-full h-full object-contain filter brightness-100" // Ensure logo is visible
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-sm">
                                <span className="text-gray-400">
                                    Issued {cert.date}
                                </span>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 font-medium hover:underline flex items-center"
                                >
                                    View Credential
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 00-2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
