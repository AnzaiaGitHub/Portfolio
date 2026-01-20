import { useTheme } from '@core/ThemeProvider';
import { techStack } from '@data/techStack';
import { useTranslation } from '@core/lang/LanguageContext';
import SkillIcon from './skillIcon';

const Skills = () => {
  const { mode } = useTheme();
  const { t } = useTranslation();

  const skillCategories = [
    {
        category: 'frontend',
        skills: [techStack.react, techStack.javascript, techStack.typescript, techStack.tailwind, techStack.css]
    },
    {
        category: 'backend',
        skills: [techStack.node, techStack.postgresql, techStack.mysql, techStack.restApi, techStack.nestjs]
    },
    {
        category: 'gameDevelopment',
        skills: [techStack.unity, techStack.cSharp]
    },
    {
        category: 'toolsAndOthers',
        skills: [techStack.github, techStack.vite, techStack.postman, techStack.swiftUI, techStack.redis]
    }
  ];

  return (
    <div id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillCategories.map((skillCategory, idx) => (
        <div
          key={idx}
          className={`p-6 ${
            mode === 'game'
              ? 'border border-cyan-500 shadow-[0_0_15px_rgba(0,242,255,0.3)] skew-x-1'
              : 'border border-slate-200 shadow-sm'
          }`}
        >
          <h3 className={`text-xl font-semibold mb-4 ${
            mode === 'game' ? 'text-cyan-400 uppercase' : 'text-slate-900'
          }`}>
            {t(`skills.${skillCategory.category}`)}
          </h3>
          <ul className={`space-y-2 ${
            mode === 'game' ? 'text-cyan-300' : 'text-slate-600'
          }`}>
            {skillCategory.skills.map((skill, skillIdx) => (
              <li key={skillIdx} className="flex items-center gap-2">
                    <SkillIcon iconPath={skill.iconPath} name={skill.name} mode={mode} />
                    {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
