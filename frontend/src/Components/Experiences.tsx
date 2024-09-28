import Experience from './Experience';

export default function Experiences() {
  const experiences: any[] = [
    {
      experience: "Prosjektleder i studentbedrift",
      description: "Var prosjektleder i en gruppe av 4. Lagde en prototype."
    },
    {
      experience: "Gruppemedlem i et prosjekt",
      description: "Vi laget en nettside med feiltesting."
    },
    {
      experience: "Sarpsborg kommune",
      description: "Jobb i avlastning for barn og unge."
    }
  ];

  return (
    <div>
      {experiences.length > 0 ? (
        experiences.map((exp, index) => (
          <Experience 
            key={index}
            experience={exp.experience}
            description={exp.description}
          />
        ))
      ) : (
        <h3>Ingen erfaring</h3> 
      )}
    </div>
  );
}
