import { useTheme } from "../../core/ThemeProvider";
import { useTranslation } from "@core/lang/LanguageContext";

const Hero = () => {
    const { mode } = useTheme();
    const { t } = useTranslation();

    return (
        <header className="flex flex-col items-center justify-center h-[60vh] md:h-screen px-6 text-center mt-30 md:my-0 mx-5 md:mx-20">
            { mode === 'game' ? <GameHero t={t} /> : <SoftwareHero t={t} /> }
        </header>
    );
};

const SoftwareHero = ({ t }) => (
    <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-sans text-slate-900 mb-4">{t('hero.software.title')}</h1>
        <p className="text-1xl md:text-3xl text-slate-700">{t('hero.software.subtitle')}</p>
    </div>
);

const GameHero = ({ t }) => (
    <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-display italic text-cyan-400 mb-4">{t('hero.game.title')}</h1>
        <p className="text-1xl md:text-3xl text-cyan-200">{t('hero.game.subtitle')}</p>
    </div>
);

export default Hero;