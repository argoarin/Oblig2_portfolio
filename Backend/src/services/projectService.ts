// services/projectService.ts
import { z } from 'zod';
import * as projectRepository from '../repositories/projectRepository';

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  public: z.boolean(),
  tags: z.array(z.object({ name: z.string().min(1) })),
});

export const getAllProjects = async () => {
  return await projectRepository.getAllProjects();
};

export const getProjectById = async (id: number) => {
  return await projectRepository.getProjectById(id);
};

export const createProject = async (data: {
  title: string;
  description: string;
  category: string;
  public: boolean;
  tags: { name: string }[];
}) => {
  projectSchema.parse(data);  // Validering
  return await projectRepository.createProject(data);
};

export const updateProject = async (id: number, data: Partial<{
  title: string;
  description: string;
  category: string;
  public: boolean;
  tags: { name: string }[];
}>) => {
  return await projectRepository.updateProject(id, data);
};

export const deleteProject = async (id: number) => {
  return await projectRepository.deleteProject(id);
};
