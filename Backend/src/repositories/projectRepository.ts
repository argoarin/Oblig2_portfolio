// repositories/projectRepository.ts
import prisma from '../../prisma/prismaClient';

export const getAllProjects = async () => {
  return await prisma.project.findMany();
};

export const getProjectById = async (id: number) => {
  return await prisma.project.findUnique({
    where: { id: id },
  });
};

export const createProject = async (data: {
  title: string;
  description: string;
  category: string;
  public: boolean;
  tags: { name: string }[];
}) => {
  return await prisma.project.create({
    data: {
      ...data,
      tags: {
        create: data.tags,
      },
    },
  });
};

export const updateProject = async (id: number, data: Partial<{
  title: string;
  description: string;
  category: string;
  public: boolean;
  tags: { name: string }[];
}>) => {
  return await prisma.project.update({
    where: { id: id },
    data: {
      ...data,
      tags: {
        create: data.tags,
      },
    },
  });
};

export const deleteProject = async (id: number) => {
  return await prisma.project.delete({
    where: { id: id },
  });
};
