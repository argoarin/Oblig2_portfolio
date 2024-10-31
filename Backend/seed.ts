import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const projects = [
    {
      title: "Prosjekt A (endret)",
      description: "Dette er beskrivelsen for prosjekt A.",
      category: "Utvikling",
      public: true,
      tags: {
        create: [
          { name: "JavaScript" },
          { name: "Node.js" },
        ],
      },
    },
  ];

  for (const project of projects) {
    const createdProject = await prisma.project.create({
      data: project,
    });
    console.log('Prosjekt opprettet:', createdProject);
  }

  console.log("Database seeded!");
}

seed()
  .catch((e) => {
    console.error("Feil under seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
