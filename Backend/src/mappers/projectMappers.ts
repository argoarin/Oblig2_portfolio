// mappers.ts
export const mapProjectToDatabase = (project: { title: any; description: any; category: any; public: any; tags: any[]; }) => ({
    title: project.title,
    description: project.description,
    category: project.category,
    public: project.public,
    tags: project.tags.map((tag: any) => ({ name: tag })),
  });
  
  export const mapDatabaseToProject = (dbProject: { id: any; title: any; description: any; category: any; public: any; tags: any[]; }) => ({
    id: dbProject.id,
    title: dbProject.title,
    description: dbProject.description,
    category: dbProject.category,
    public: dbProject.public,
    tags: dbProject.tags.map(tag => tag.name),
  });
  