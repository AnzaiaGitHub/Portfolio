import { useTheme } from '../../core/ThemeProvider';
import { useTranslation } from '@core/lang/LanguageContext';

const ProjectCard = ({ project }) => {
  const { mode } = useTheme();
  const { lang } = useTranslation();
  const hasItems = (items) => items && items.length > 0;

  return (
    <div className={`p-6 border ${
      mode === 'game' 
        ? 'border-cyan-500 shadow-[0_0_15px_rgba(0,242,255,0.3)] animate-border-style' 
        : 'border-slate-300 shadow-sm rounded-none'
    }`}>
      <h3 className={`text-xl md:text-3xl font-semibold mb-2 ${
        mode === 'game' ? 'text-cyan-400 uppercase' : 'text-slate-900'
      }`}>{project.title[lang]}</h3>
      {project.previewImg && (
        <img 
          src={project.previewImg}
          alt={project.title[lang]}
          className="w-full h-auto mb-4"
        />
      )}

      <p className={`mt-2 mb-4 text-md md:text-xl ${
        mode === 'game' ? 'text-cyan-600' : 'text-slate-600'
      }`}>{project.description[lang]}</p>

      {hasItems(project.tech) && (
        <TechStack items={project.tech} mode={mode} />
      )}

      {hasItems(project.links) && (
        <OtherLinks links={project.links} mode={mode} />
      )}
    </div>
  );
};

const TechStack = ({ items, mode }) => {
  return (
    <div className="my-6 flex gap-4 flex-wrap">
      {items.map((item, idx) => ( 
        <div key={idx} className={`flex flex-col justify-center items-center border p-1 ${mode === 'game' ? 'border-cyan-500' : 'border-slate-300'}`}>
          <img src={item.iconPath} alt={item.name} className="w-6 h-6" />
          <p className={`font-light ${mode === 'game' ? 'text-cyan-600' : 'text-slate-600'}`}>
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

const OtherLinks = ({ links, mode }) => {
  return (
    <div className="mt-4 flex gap-4 flex-wrap">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-2 py-1 text-xs underline ${
            mode === 'game'
              ? 'bg-cyan-800 text-white hover:bg-cyan-600'
              : 'bg-slate-600 text-white hover:bg-slate-900'
          }`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};
export default ProjectCard;