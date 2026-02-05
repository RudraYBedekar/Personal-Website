import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Recommendations = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { threshold: 0.1 });
    const [activeIndex, setActiveIndex] = useState(0);

    const recommendations = [
        {
            name: 'Mrs. Priya C Mule',
            title: 'Assistant Professor',
            department: 'Department of Electronic and Telecommunication',
            institution: 'Ramrao Adik Institute of Technology',
            text: "Rudra has been highly proficient in applying his knowledge of database management through hand on project. Overall he is an intelligent student with good analytical skills. I have observed Mr. Rudra Bedekar remarkable good with database management systems in any capacity as their academic mentor. Relational database design, SQL query optimisation, and database administration were all areas in which Rudra Bedekar demonstrated a thorough grasp through courses and projects.",
            image: 'https://ui-avatars.com/api/?name=Priya+Mule&background=0D9488&color=fff'
        },
        {
            name: 'Dr. Somdotta Roy Choudhury',
            title: 'Associate Professor',
            department: 'Electronics and Telecommunication Engineering',
            institution: 'Ramrao Adik Institute of Technology',
            text: "Rudra applies his critical thinking skills on topics to gain in-depth knowledge beyond classroom learnings. He frequently demonstrates exceptional critical thinking abilities in his academic endeavours... Rudra possesses problem-solving abilities that are reflected in his capacity to overcome obstacles with grace and tenacity. I have observed that Rudra is remarkably adaptable to new circumstances. He readily accepts change and flourishes in dynamic learning environments.",
            image: 'https://ui-avatars.com/api/?name=Somdotta+Roy&background=0D9488&color=fff'
        },
        {
            name: 'Dr. Bhushan Deore',
            title: 'Assistant Professor',
            department: 'Department of Electronic and Telecommunication',
            institution: 'Ramrao Adik Institute of Technology',
            text: "Rudra has consistently stood out as a dedicated, intellectually curious, and highly motivated student. Mr. Rudra Bedekar is a strong candidate for any academic opportunity in the field of information security because of his commitment to it and his ability to apply theoretical knowledge to practical situations... Mr. Rudra Bedekar has demonstrated exceptional database administration and programming abilities while a student.",
            image: 'https://ui-avatars.com/api/?name=Bhushan+Deore&background=0D9488&color=fff'
        }
    ];

    // Auto-rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % recommendations.length);
        }, 10000); // 10 seconds

        return () => clearInterval(interval);
    }, [recommendations.length]);

    const nextRecommendation = () => {
        setActiveIndex((current) => (current + 1) % recommendations.length);
    };

    const prevRecommendation = () => {
        setActiveIndex((current) => (current - 1 + recommendations.length) % recommendations.length);
    };

    return (
        <section
            id="recommendations"
            ref={sectionRef}
            className="py-20 overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <span className="text-teal-400">Recommendations</span>
                    </h2>
                    <div className={`w-20 h-1 bg-teal-600 mx-auto rounded transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
                    <p className={`mt-6 text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Words from my professors and mentors regarding my academic and professional performance.
                    </p>
                </div>

                <div className={`relative max-w-7xl mx-auto transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Quote Icon */}
                    <div className="absolute top-0 left-0 -mt-8 -ml-8 text-white/5 transform -scale-x-100 z-0">
                        <Quote size={120} />
                    </div>

                    <div className="relative z-10 flex items-center justify-between">
                        {/* Previous Arrow */}
                        <button
                            onClick={prevRecommendation}
                            className="hidden md:flex p-2 rounded-full bg-white/10 text-teal-400 hover:scale-110 hover:bg-white/20 transition-all z-20 -ml-4 backdrop-blur-sm"
                            aria-label="Previous recommendation"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex-grow bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8 md:p-12 mx-0 md:mx-4">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-teal-500 shadow-md">
                                        <img
                                            src={recommendations[activeIndex].image}
                                            alt={recommendations[activeIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="flex-grow text-center md:text-left">
                                    <p className="text-gray-200 italic text-lg leading-relaxed mb-6">
                                        "{recommendations[activeIndex].text}"
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">
                                            {recommendations[activeIndex].name}
                                        </h4>
                                        <p className="text-teal-400 font-medium">
                                            {recommendations[activeIndex].title}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            {recommendations[activeIndex].department}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            {recommendations[activeIndex].institution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Next Arrow */}
                        <button
                            onClick={nextRecommendation}
                            className="hidden md:flex p-2 rounded-full bg-white/10 text-teal-400 hover:scale-110 hover:bg-white/20 transition-all z-20 -mr-4 backdrop-blur-sm"
                            aria-label="Next recommendation"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Navigation Dots (and mobile arrows) */}
                    <div className="flex flex-col items-center mt-8 gap-4">
                        <div className="flex md:hidden gap-8">
                            <button onClick={prevRecommendation} className="p-2 rounded-full bg-white/10 text-white"><ChevronLeft size={20} /></button>
                            <button onClick={nextRecommendation} className="p-2 rounded-full bg-white/10 text-white"><ChevronRight size={20} /></button>
                        </div>

                        <div className="flex justify-center gap-3">
                            {recommendations.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-teal-500 w-8'
                                        : 'bg-white/20 hover:bg-teal-400'
                                        }`}
                                    aria-label={`View recommendation ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
