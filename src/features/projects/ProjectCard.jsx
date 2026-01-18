import { useTheme } from '../../core/ThemeProvider';

const ProjectCard = ({ project }) => {
  const { mode } = useTheme();

  return (
    <div className={`p-6 border ${
      mode === 'game' 
        ? 'border-cyan-500 shadow-[0_0_15px_rgba(0,242,255,0.3)] skew-x-1' 
        : 'border-slate-200 shadow-sm rounded-none'
    }`}>
      <h3 className={`text-xl font-semibold mb-2 ${
        mode === 'game' ? 'text-cyan-400 uppercase' : 'text-slate-900'
      }`}>{project.title}</h3>
      <p className={`mt-2 mb-4 ${
        mode === 'game' ? 'text-cyan-600' : 'text-slate-600'
      }`}>{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className={`px-2 py-1 text-sm rounded ${
              mode === 'game' 
                ? 'bg-cyan-500 text-black' 
                : 'bg-slate-300 text-slate-900'
            }`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;