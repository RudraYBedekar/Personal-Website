import { useEffect, useState } from 'react';

const SpaceBackground = () => {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; opacity: number; animationDuration: string }[]>([]);

    useEffect(() => {
        // Generate random stars
        const generateStars = () => {
            const starCount = 100;
            const newStars = Array.from({ length: starCount }).map((_, i) => ({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: `${Math.random() * 2 + 1}px`, // 1-3px
                opacity: Math.random() * 0.7 + 0.3, // 0.3-1.0
                animationDuration: `${Math.random() * 3 + 2}s` // 2-5s twinkling
            }));
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#050510] pointer-events-none perspective-1000">
            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-pulse-slow"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        opacity: star.opacity,
                        animationDuration: star.animationDuration
                    }}
                />
            ))}

            {/* 3D Solar System Container */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] flex items-center justify-center transform-style-3d"
                style={{ transform: 'rotateX(60deg) scale(1.5)' }}
            >

                {/* Central Sun */}
                <div className="absolute transform-style-3d translate-z-10">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 shadow-[0_0_100px_rgba(255,165,0,0.6)] animate-pulse-slow"
                        style={{ transform: 'rotateX(-60deg)' }} // Counter-rotate to face screen
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px]" />
                </div>

                {/* Mercury Orbit */}
                <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-600/30 animate-orbit transform-style-3d">
                    <div
                        className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: 'rotateX(-90deg)' }}
                    >
                        <div className="w-3 h-3 bg-gray-400 rounded-full shadow-[0_0_10px_rgba(156,163,175,1)]" style={{ transform: 'rotateX(90deg)' }} />
                    </div>
                </div>

                {/* Venus Orbit */}
                <div className="absolute w-[280px] h-[280px] rounded-full border border-gray-600/30 animate-orbit-slow transform-style-3d" style={{ animationDuration: '30s' }}>
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="w-5 h-5 bg-yellow-600 rounded-full shadow-[0_0_12px_rgba(202,138,4,0.8)]" style={{ transform: 'rotateX(-60deg)' }} />
                    </div>
                </div>

                {/* Earth Orbit */}
                <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-600/30 animate-orbit transform-style-3d" style={{ animationDuration: '45s' }}>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" style={{ transform: 'rotateX(-60deg)' }} />
                    </div>
                </div>

                {/* Mars Orbit */}
                <div className="absolute w-[550px] h-[550px] rounded-full border border-gray-600/20 animate-orbit-reverse transform-style-3d" style={{ animationDuration: '60s' }}>
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-5 h-5 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]" style={{ transform: 'rotateX(-60deg)' }} />
                    </div>
                </div>

                {/* Jupiter Orbit */}
                <div className="absolute w-[800px] h-[800px] rounded-full border border-gray-600/20 animate-orbit transform-style-3d" style={{ animationDuration: '100s' }}>
                    <div className="absolute top-1/4 left-1/4">
                        <div className="w-12 h-12 bg-amber-700 rounded-full shadow-[0_0_20px_rgba(180,83,9,0.5)] relative overflow-hidden" style={{ transform: 'rotateX(-60deg)' }}>
                            <div className="absolute top-1/3 left-0 w-full h-1 bg-amber-900/50" />
                            <div className="absolute bottom-1/3 left-0 w-full h-1 bg-amber-900/50" />
                        </div>
                    </div>
                </div>

                {/* Saturn Orbit */}
                <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-600/10 animate-orbit-slow transform-style-3d" style={{ animationDuration: '150s' }}>
                    <div className="absolute bottom-1/4 right-1/4">
                        <div className="relative w-10 h-10 bg-yellow-200 rounded-full shadow-[0_0_15px_rgba(254,240,138,0.5)]" style={{ transform: 'rotateX(-60deg)' }}>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-gray-400/40 transform rotate-45 scale-y-50" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Background Gradient Overlays - Deep Space Effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050510]/50 to-[#050510] z-10" />
        </div>
    );
};

export default SpaceBackground;
