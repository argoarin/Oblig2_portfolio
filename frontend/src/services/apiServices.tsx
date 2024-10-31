import { API_LINK_TIL_BACKEND } from "../config"; 
import { Project } from "../hooks/useprojects";

export const fetchProjectsApi = async (): Promise<Project[]> => {
  const response = await fetch(API_LINK_TIL_BACKEND);
  
  if (!response.ok) throw new Error("Network response was not ok");
  
  const projects = await response.json();

  return projects.map((project: any) => ({
    ...project,
    public: project.public ?? false,  
    tags: project.tags ?? [],         
  }));
};

export const addProjectApi = async (project: Project): Promise<Project[]> => {
  const response = await fetch(API_LINK_TIL_BACKEND, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  
  if (!response.ok) throw new Error("Network response was not ok");

  return await response.json();
};