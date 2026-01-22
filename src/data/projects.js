import { techStack } from "./techStack";
import VolleyMarkPreview from "@assets/projects/VolleyMarkScreenshot.PNG";
import FriendDebtsPreview from "@assets/projects/AppDeudasScreenshot.PNG";
import BalloonSkywayPreview from "@assets/projects/BalloonSkywayScreenshot.PNG";
import HeadlessAngelsPreview from "@assets/projects/HeadlessAngelsScreenshot.PNG";

const projectType = {
  software: "software",
  game: "game",
};

export const projects = [
    {
        id: 1,
        title: {
            en: "Volleyball Score Mark",
            es: "Marcador de Voleibol",
        },
        type: projectType.software,
        tech: [techStack.react, techStack.css],
        description: {
            en: "A web app for tracking scores and player rotations during volleyball matches.",
            es: "Una aplicación web para llevar un registro de los marcadores y rotaciones de jugadores durante partidos de voleibol.",
        },
        previewImg: VolleyMarkPreview,
        links: [
            { name: "GitHub Repo", url: "https://github.com/AnzaiaGitHub/VolleyMark" },
            { name: "Live Demo", url: "https://AnzaiaGitHub.github.io/VolleyMark/" }
        ],
    },
    {
        id: 2,
        title: {
            en: "Headless Angels Survival - Demo",
            es: "Supervivencia de Ángeles Decapitados - Demo",
        },
        type: projectType.game,
        tech: [techStack.unity, techStack.cSharp],
        description: {
            en: "A university game project where Osas has to survive waves of enemies in an old house where headless angels damage her.",
            es: "Un proyecto de juego universitario donde Osas debe sobrevivir oleadas de enemigos en una casa antigua donde los ángeles decapitados le hacen daño.",
        },
        previewImg: HeadlessAngelsPreview,
        links: [
            { name: "Trailer", url: "https://www.youtube.com/watch?v=mHddrNNp9sM" },
            { name: "Download", url: "https://drive.google.com/file/d/1cD4xa-c4Affva7T9E17YmtAs2uo2LB9j/view?usp=sharing" }
        ]
    },
    {
        id: 3,
        title: {
            en: "Friend Debts Tracker",
            es: "Seguimiento de Deudas de Amigos",
        },
        type: projectType.software,
        tech: [techStack.react, techStack.node, techStack.postgresql, techStack.redis],
        description: {
            en: "A web application to manage debts among friends, making it easy to settle up payments.",
            es: "Una aplicación web para gestionar deudas entre amigos, facilitando el control y pago de las mismas.",
        },
        previewImg: FriendDebtsPreview,
        links: [
            { name: "GitHub Repo", url: "https://github.com/JulianPGVeevart/AppDeudas/" },
            { name: "Demo Video", url: "https://youtu.be/pB9pd8qPpuM" }
        ]
    },
    {
        id: 4,
        title: {
            en: "Balloon Skyway - Game Jam",
            es: "Cielo de Globos - Game Jam",
        },
        type: projectType.game,
        tech: [techStack.unity, techStack.cSharp],
        description: {
            en: "A game jam project where players navigate a hot air balloon through a challenging island filled with obstacles and collectibles, when hitting the obstacles reduces the balloon aerodynamics.",
            es: "Un proyecto de Game Jam de juego donde los jugadores navegan un globo aerostático a través de una desafiante isla llena de obstáculos y coleccionables, cuando golpean los obstáculos reduce la aerodinámica del globo.",
        },
        previewImg: BalloonSkywayPreview,
        links: [
            { name: "GameJam Video", url: "https://www.youtube.com/shorts/kVxQFTJEjGc" },
            { name: "Gameplay Video", url: "https://www.youtube.com/watch?v=DM7GSyqenjI"},
        ],
    },
];