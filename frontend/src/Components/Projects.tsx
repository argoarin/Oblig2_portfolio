import React from "react";
import Project from "./Project"; // Importer Project komponenten

type ProjectsProps = {
  projects: { 
    title: string; 
    description: string; // Beskrivelse legges til her
    category: string; 
    createdAt: string; 
    public: boolean; 
    tags: string[];
  }[];
  removeProject: (index: number) => void;
};

export default function Projects({ projects, removeProject }: ProjectsProps) {
  const countByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = 0;
    }
    acc[project.category]++;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description} // Passerer beskrivelse
            category={project.category}
            createdAt={project.createdAt} 
            public={project.public}
            tags={project.tags}
            removeProject={() => removeProject(index)}
          />
        ))
      ) : (
        <p>Ingen prosjekter tilgjengelig.</p>
      )}
    </div>
  );
}
