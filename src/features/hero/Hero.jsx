import { useTheme } from "../../core/ThemeProvider";
import { useTranslation } from "@core/lang/LanguageContext";

const Hero = () => {
    const { mode } = useTheme();
    const { t } = useTranslation();

    return (
        <header className="flex flex-col items-center justify-center h-screen">
            { mode === 'game' ? <GameHero t={t} /> : <SoftwareHero t={t} /> }
        </header>
    );
};

const SoftwareHero = ({ t }) => (
    <div className="text-center">
        <h1 className="text-5xl font-sans text-slate-900 mb-4">{t('hero.software.title')}</h1>
        <p className="text-lg text-slate-700">{t('hero.software.subtitle')}</p>
    </div>
);

const GameHero = ({ t }) => (
    <div className="text-center">
        <h1 className="text-5xl font-display italic text-cyan-400 uppercase mb-4">{t('hero.game.title')}</h1>
        <p className="text-lg text-cyan-200">{t('hero.game.subtitle')}</p>
    </div>
);

export default Hero;