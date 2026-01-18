import { useTheme } from '../../core/ThemeProvider';
import { projects } from '../../data/projects';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = () => {
    const { mode } = useTheme();
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        setFilteredProjects(projects.filter(project => project.type === mode));
    }, [mode]);

    return (
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </div>
    );
};

export default ProjectGrid;
