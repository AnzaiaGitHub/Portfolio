import { techStack } from "./techStack";
const projectType = {
  software: "software",
  game: "game",
};

export const projects = [
    {
        id: 1,
        title: "Volleyball Score Mark",
        type: projectType.software,
        tech: [techStack.react, techStack.css],
        description: "Volleyball scorekeeping app for tracking scores and player rotations during matches.",
        previewImg: "",
        previewVideo: "",
        githubLink: "",
        demoLink: "",
    },
    {
        id: 2,
        title: "Headless Angels Survival - Demo",
        type: projectType.game,
        tech: [techStack.unity, techStack.cSharp],
        description: "A university game project where Osas has to survive waves of enemies in an old house where angels are headless damaging enemies.",
        previewImg: "",
        previewVideo: "",
        githubLink: "",
        demoLink: "",
    },
    {
        id: 3,
        title: "Friend Debts Tracker",
        type: projectType.software,
        tech: [techStack.react, techStack.node, techStack.postgresql, techStack.redis],
        description: "A web application to manage debts among friends, making it easy to settle up.",
        previewImg: "",
        previewVideo: "",
        githubLink: "",
        demoLink: "",
    },
    {
        id: 4,
        title: "Balloon Skyway - Game Jam",
        type: projectType.game,
        tech: [techStack.unity, techStack.cSharp],
        description: "A game jam project where players navigate a hot air balloon through challenging skyways filled with obstacles and collectibles, when hitting the obstacles reduces the balloon aerodynamics.",
        previewImg: "",
        previewVideo: "",
        githubLink: "",
        demoLink: "",
    },
];