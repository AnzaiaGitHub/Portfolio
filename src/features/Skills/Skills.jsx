import { useTheme } from '@core/ThemeProvider';
import { techStack } from '@data/techStack';
import { useTranslation } from '@core/lang/LanguageContext';
import SkillsGroup from './SkillsGroup';

const Skills = () => {
  const { mode } = useTheme();

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
    <div id="skills" className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {skillCategories.map((skillCategory, idx) => (
        <SkillsGroup 
          idx={idx}
          category={skillCategory.category}
          skills={skillCategory.skills}
          mode={mode}
        />
      ))}
    </div>
  );
};

export default Skills;
