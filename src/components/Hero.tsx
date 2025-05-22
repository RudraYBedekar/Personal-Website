import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Animate text opacity on load
    const timer = setTimeout(() => {
      setTextOpacity(1);
    }, 500);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const calculateTransform = (factor: number) => {
    const xOffset = (mousePosition.x - 0.5) * factor;
    const yOffset = (mousePosition.y - 0.5) * factor;
    return `translate(${xOffset}px, ${yOffset}px)`;
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-purple-500/20 to-teal-500/10 rounded-full blur-3xl transform-gpu animate-blob" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-teal-500/10 to-blue-500/20 rounded-full blur-3xl transform-gpu animate-blob animation-delay-2000" />
        <div className="absolute left-[30%] top-[20%] w-[40%] h-[40%] bg-gradient-to-br from-pink-500/10 to-yellow-500/10 rounded-full blur-3xl transform-gpu animate-blob animation-delay-4000" />
      </div>
      
      {/* Content wrapper */}
      <div className="container mx-auto px-4 z-10">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{ 
            opacity: textOpacity,
            transition: 'opacity 1s ease-out, transform 0.5s ease-out',
            transform: calculateTransform(10) 
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            <span className="block transform text-gray-900 dark:text-white">Hello, I'm</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
              Rudra Bedekar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate <span className="font-medium text-teal-600 dark:text-teal-400">Data Analyst & Developer</span> with 
            expertise in Python, SQL, and data visualization, creating impactful solutions through data-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ opacity: textOpacity }}
        >
          <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;