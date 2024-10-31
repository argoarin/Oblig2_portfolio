// controllers/projectController.ts
import { Request, Response } from 'express';
import * as projectService from '../services/projectService';

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Feil ved henting av prosjekter", error });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const project = await projectService.getProjectById(id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Prosjekt ikke funnet" });
    }
  } catch (error) {
    res.status(500).json({ message: "Feil ved henting av prosjekt", error });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const projectData = req.body;
    const newProject = await projectService.createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Feil ved oppretting av prosjekt", error });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await projectService.deleteProject(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Feil ved sletting av prosjekt", error });
  }
};
