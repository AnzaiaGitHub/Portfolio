import SkillIcon from './skillIcon';
import { useTranslation } from '@core/lang/LanguageContext';

const SkillsGroup = ({ idx, category, skills, mode }) => {
  const { t } = useTranslation();

  return (
    <div
      key={idx}
      className={`p-2 md:p-6 ${
        mode === 'game'
          ? 'border border-cyan-500 shadow-[0_0_15px_rgba(0,242,255,0.3)]'
          : 'border border-slate-300 shadow-sm'
      }`}
    >
      <h3 className={`text-md md:text-2xl font-semibold mb-6 md:mb-8 ${
        mode === 'game' ? 'text-cyan-400 uppercase' : 'text-slate-900'
      }`}>
        {t(`skills.${category}`)}
      </h3>
      <ul className={`${
        mode === 'game' ? 'space-y-6 text-cyan-300' : 'space-y-2 text-slate-600'
      }`}>
        {skills.map((skill, skillIdx) => (
          <li key={skillIdx} className={`flex items-center text-xs md:text-xl ${
            mode === 'game' ? 'gap-4' : 'gap-2'
          }`}>
            <SkillIcon iconPath={skill.iconPath} name={skill.name} mode={mode} />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsGroup;
