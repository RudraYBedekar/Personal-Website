import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="w-24 h-24 relative mb-8">
        <div className="loader-circle"></div>
        <div className="loader-circle loader-circle-2"></div>
        <div className="loader-circle loader-circle-3"></div>
      </div>
      <div className="w-full max-w-md mx-auto px-6">
        <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-teal-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-400 mt-4 text-center font-medium">
          Loading experiences... {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default Loader;