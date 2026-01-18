import { useTheme } from "../../core/ThemeProvider";

const Hero = () => {
    const { mode } = useTheme();

    return (
        <header className="flex flex-col items-center justify-center h-screen">
            { mode === 'game' ? <GameHero /> : <SoftwareHero /> }
        </header>
    );
};

const SoftwareHero = () => (
    <div className="text-center">
        <h1 className="text-5xl font-sans text-slate-900 mb-4">Welcome to My Software Developer Portfolio!</h1>
        <p className="text-lg text-slate-700">Explore my projects showcasing my skills in software development and engineering.</p>
    </div>
);

const GameHero = () => (
    <div className="text-center">
        <h1 className="text-5xl font-display italic text-cyan-400 uppercase mb-4">Welcome to My Game Portfolio!</h1>
        <p className="text-lg text-cyan-200">Embark on a journey through my game development projects, where creativity meets code.</p>
    </div>
);

export default Hero;