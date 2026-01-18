import { motion } from 'framer-motion';

const SkillIcon = ({ iconPath, name, mode }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center group cursor-help"
    >
      <div className={`relative w-16 h-16 flex items-center justify-center transition-all duration-500 ${
        mode === 'game' 
          ? 'bg-slate-700 border-2 border-cyan-500/30 rotate-45 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_#22d3ee]' 
          : 'bg-slate-50 rounded-full group-hover:bg-white group-hover:shadow-md'
      }`}>
        {/* Undo the rotation for the icon itself in Game Mode */}
        <div className={mode === 'game' ? '-rotate-45' : ''}>
          <img src={iconPath} alt={name} className="w-8 h-8" />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillIcon;